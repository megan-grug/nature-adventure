import os
import datetime as dt
from flask import (
    Flask, flash, render_template, redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)


@app.route("/")
@app.route("/get_home")
def get_home():
    '''function to produce the home page'''
    recent_records = mongo.db.records.find().sort("date_seen", 1).limit(6)
    month = str(dt.date.today().month)
    print(month)
    current_month_birds = list(mongo.db.creatures.find({"best_month": month}))
    print(current_month_birds)

    return render_template("index.html", recent_records=recent_records,
                           current_month_birds=current_month_birds)


@app.route("/all_uk_birds")
def all_uk_birds():
    '''function to populate the all birds page'''
    all_birds = mongo.db.creatures.find()
    return render_template("all_uk_birds.html", all_birds=all_birds)


@app.route("/search", methods=["GET","POST"])
def search():
    '''function to search through all uk birds'''
    query = request.form.get("query")
    all_birds = list(mongo.db.creatures.find({"$text": {"$search": query}}))
    return render_template("all_uk_birds.html", all_birds=all_birds)


@app.route("/register", methods=["GET", "POST"])
def register():
    '''function for registering a new user'''
    if request.method == "POST":
        # check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

        registration = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(registration)

        # put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration successful!")
        return redirect(url_for(
            "records", username=session["user"]))
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    '''function for logging in an existing user
    - including fall backs for incorrect logins'''
    if request.method == "POST":
        # check if username exists in database
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # ensure hashed password matches user input
            if check_password_hash(
                    existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(
                    request.form.get("username")))
                return redirect(url_for(
                    "records", username=session["user"]))
            else:
                # invalid password match
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))

        else:
            # username doesn't existing_user
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))

    return render_template("login.html")


@app.route("/logout")
def logout():
    '''allows the user to log out'''
    flash("You have been logged out")
    session.pop("user")
    return redirect(url_for("login"))


@app.route("/get_full_record/<record_id>")
def get_full_record(record_id):
    ''' grab the session user's username from db'''
    google_api = os.environ.get("GOOGLE_API")
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    current_record = mongo.db.records.find_one({"_id": ObjectId(record_id)})

    if session["user"]:
        return render_template(
            "get_full_record.html", username=username,
            current_record=current_record, google_api=google_api)

    return redirect(url_for("login"))


@app.route("/extend_entry/<record_id>")
def extend_entry(record_id):
    ''' grab the bird's object id from db'''
    bird = mongo.db.creatures.find_one({"_id": ObjectId(record_id)})
    print(bird)
    return render_template(
            "extend_entry.html", bird=bird)


@app.route("/records/<username>", methods=["GET", "POST"])
def records(username):
    ''' grab the session user's username from db'''
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    myrecords = list(mongo.db.records.find({"author": username}))

    if session["user"]:
        return render_template(
            "records.html", username=username, myrecords=myrecords)

    return redirect(url_for("login"))


@app.route("/add_record", methods=["GET", "POST"])
def add_record():
    '''checks if the animal exists and if so copies it to user's records'''
    google_api = os.environ.get("GOOGLE_API")
    if request.method == "POST":
        username = mongo.db.users.find_one(
            {"username": session["user"]})["username"]
        myrecords = list(mongo.db.records.find({"author": username}))
        existing_creature = mongo.db.creatures.find_one(
            {"animal_name": request.form.get("autocomplete_input")}
        )
        longitude = request.form.get("txtLng")
        latitude = request.form.get("txtLat")
        notes = request.form.get("notes")

        if existing_creature:
            user_record = {
                "name": existing_creature["animal_name"],
                "latin_name": existing_creature["latin_name"],
                "category_name": existing_creature["category_name"],
                "summary": existing_creature["summary"],
                "fact": existing_creature["summary"],
                "date_seen": request.form.get("date_seen"),
                "pic": existing_creature["pic"],
                "author": session["user"],
                "notes": notes,
                "location": {
                    "type": "Point",
                    "coordinates": [longitude, latitude]
                }
            }
            mongo.db.records.insert_one(user_record)
            flash("Record successfully added!")
            myrecords = list(mongo.db.records.find({"author": username}))
            return render_template(
                "records.html", username=username, myrecords=myrecords,
                google_api=google_api)
        else:
            return "No such bird"
    else:
        return render_template("add_record.html", google_api=google_api)


@app.route("/edit_record/<record_id>", methods=["GET", "POST"])
def edit_record(record_id):
    '''gets record and updates it'''
    google_api = os.environ.get("GOOGLE_API")
    if request.method == "POST":
        username = mongo.db.users.find_one(
            {"username": session["user"]})["username"]
        myrecords = list(mongo.db.records.find({"author": username}))
        existing_creature = mongo.db.creatures.find_one(
            {"animal_name": request.form.get("autocomplete_input")}
        )
        longitude = request.form.get("txtLng")
        latitude = request.form.get("txtLat")

        if existing_creature:
            edited_record = {
                "name": existing_creature["animal_name"],
                "latin_name": existing_creature["latin_name"],
                "category_name": existing_creature["category_name"],
                "summary": existing_creature["summary"],
                "fact": existing_creature["summary"],
                "date_seen": request.form.get("date_seen"),
                "pic": existing_creature["pic"],
                "author": session["user"],
                "location": {
                    "type": "Point",
                    "coordinates": [longitude, latitude]
                }
            }
            mongo.db.records.replace_one({"_id": ObjectId(record_id)},
                                         edited_record)
            flash("Record successfully edited")
            myrecords = list(mongo.db.records.find({"author": username}))
            return render_template(
                "records.html", username=username, myrecords=myrecords, google_api=google_api)
        else:
            return "No such bird"
    record = mongo.db.records.find_one({"_id": ObjectId(record_id)})
    return render_template("edit_record.html", record=record)


@app.route('/delete_record/<record_id>')
def delete_record(record_id):
    '''deletes record'''
    username = mongo.db.users.find_one(
            {"username": session["user"]})["username"]
    mongo.db.records.delete_one({"_id": ObjectId(record_id)})
    flash("Record successfully deleted")
    myrecords = list(mongo.db.records.find({"author": username}))
    return render_template("records.html", username=username,
                           myrecords=myrecords)


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)