# Nature Adventure 

![examples of the project site shown on different sized screens](https://res.cloudinary.com/megan-jones/image/upload/v1649051927/responsive-examples_aamv3t.jpg)

This is a website allowing nature enthusiasts to register, log-in and start to record their wildlife sightings. 

It is a mobile first, responsive design and the live website can be viewed [here](https://flask-nature-adventure.herokuapp.com).

An example of how the homepage looks on various screensizes is included above.


## USER EXPERIENCE:

### Who will use the website?
The site will be used by anyone who is looking for a place to record what wildlife they have seen, refer back to those records and learn more about wildlife. 


### Experienced Birders (User A)
**Goals:**
- Create a record of which birds they have seen;
- Review their list;
- Add notes to their bird records;
- A higher proportion of this group are likely to be older users and therefore:
    - They may be more likely to use a desktop version of the site. It is important that full functionality is available on the desktop version. 
    - They may be less experienced web users and it is therefore important that the site is user friendly and not over complicated. 
- This user group is more likely to want and appreciate more advanced features. 

### New Birders (User B)
**Goals:**
- Create a record of which birds they have seen;
- Review their list;
- Find information about birds;
- Get suggestions for what to look for when/where to see certain birds. 
- A higher proportion of this group is likely to be younger and therefore:
    - They may be more likely to use the site on mobile at the time of the sighting, so it is important that the mobile version is clear and quick to use on site. 
    - This group may include children, so it is important to make the site intuitive and not over-complicate it.


## STRATEGY PLANE:

**Project Purpose from the perspective of the site owners:**


- Provide a site which can bring together people of all ages and backgrounds with an interest in nature. 

    - **Strategy:** I will do this by bearing in mind the needs of different users, for example particularly old or young users may benefit from a simple website. In order to achieve this I will use a standard layout with a navbar to assist with navigation, buttons to assist with easy navigation and will use consistent styling and layout throughout. 


- Allow nature lovers to record and keep track of their bird sightings. 

    - **Strategy:** I will do this by creating a function which allows users to add records of the birds they have seen. As this is a prominent feature of the site, I will add a button linking to it overlaying the hero image on the home page so that it is one of the first things a user sees when they access the site. I will make the add record feature as easy to use as possible by including an autocomplete feature where the user inputs the name of the bird they have seen - this will help to avoid issues with misspelling the name of the bird. 


- Allow users to view information about birds. 

    - **Strategy:** I will include a few different ways in which users can do this in order to appeal to a broad variety of users. There will be a page of 'All UK Birds' which will include an information card for each British bird which can be expanded into a new page to view the full record. Creating these cards and pages dynamically from the Mongo DB database will provide scope to change or increase the amount of information included for each bird in the future. Users will also be able to see some of the records added by other users recently on the home page. 


- Encourage users to engage with birdwatching. 

    - **Strategy:**
    I will include a 'What to See When' page which will give users ideas of what birds to look out for monthly through the year. I will also include a snapshot of this on the home page by including some of the birds which they can see during the current month- this will dynamically update each month to keep the site fresh. 


**Viability of features:**
| Feature                                       | Importance  | Viability   |
| ----------------------------------------------|------------ |-------------|
| Ability to add records of wildlife sightings  |     5       |     5       |
| Ability to view records                       |     5       |     5       |             
| Ability edit records                          |     5       |     5       |             
| Ability to delete records                     |     5       |     5       |
| Ability to search records                     |     4       |     4       |
| What to see now section                       |     3       |     3       |
| Recently added by other users section         |     4       |     4       |
| Add location data as part of record           |     3       |     3       |
| View location data as part of record          |     3       |     1       |
| Include birdsong as part of record            |     1       |     2       |


**Changes from initial plan:**
After my initial research, I have decided not to attempt to include birdssong mp3s as part of the records in this project as I don't feel it will add enough to the project in comparison with the amount of time it would take to try to source good quality birdsong recordings for over 200 species of birds. 


## SCOPE PLANE:

The website will include the following features: 

- Ability to add records of bird sightings
- Ability to add notes to their bird sightings  
- Add location data as part of record   
- Ability to view records       
- View location data as part of record                                
- Ability edit records                                      
- Ability to delete records                     
- Ability to search records                     
- What to see now section                       
- Recently added by other users section        
     

## STRUCTURE PLANE:

The following pages will be included in the project:

**Pages visible to everyone, whether or not they are logged in or not:**
- Home Page

- What to See Now

- All UK Birds

**Pages only visible to logged in users:**

- My Records 

- Add Record

- Log Out

**Pages only visible to users who are NOT logged in:**

- Register

- Log In


## SKELETON PLANE

![wireframe of plan for home on mobile](https://res.cloudinary.com/megan-jones/image/upload/v1649049601/rsz_mobile_-_home_page_vwso7q.jpg)

![wireframe of plan for what to see when on mobile](https://res.cloudinary.com/megan-jones/image/upload/v1649049655/rsz_mobile-_what_to_see_when_srneei.jpg)

![wireframe of plan for all uk birds on mobile](https://res.cloudinary.com/megan-jones/image/upload/v1649049784/rsz_mobile_-_all_uk_birds_xerxed.jpg)

![wireframe of plan for my records on mobile](https://res.cloudinary.com/megan-jones/image/upload/v1649049868/rsz_mobile_-_my_records_s2ff5n.jpg)

![wireframe of plan for add a record on mobile](https://res.cloudinary.com/megan-jones/image/upload/v1649049939/rsz_mobile_-_add_a_record_vsixvq.jpgs)

![wireframe of plan for login on mobile](https://res.cloudinary.com/megan-jones/image/upload/v1649049994/Mobile_-_Login_oeh08c.png)

![wireframe of plan for homepage on desktop](https://res.cloudinary.com/megan-jones/image/upload/v1649046721/rsz_desktop_-_home_page_ldgzsz.jpg)

![wireframe of plan for what to see when on desktop](https://res.cloudinary.com/megan-jones/image/upload/v1649046811/rsz_desktop_-_what_to_see_when_voy1ry.jpg)

![wireframe of plan for all uk birds on desktop](https://res.cloudinary.com/megan-jones/image/upload/v1649047473/rsz_desktop_-_all_uk_birds_gqr0ud.jpg)

![wireframe of plan for my records on desktop](https://res.cloudinary.com/megan-jones/image/upload/v1649047627/rsz_desktop_-_my_records_plnfkg.jpg)

![wireframe of plan for add a record on desktop](https://res.cloudinary.com/megan-jones/image/upload/v1649047691/rsz_desktop_-_add_new_record_ymtifd.jpg)

![wireframe of plan for login on desktop](https://res.cloudinary.com/megan-jones/image/upload/v1649047749/rsz_desktop_login_dd8iet.jpg)

Before starting to code the website I prepared wireframes showing the planned page structures for mobile and laptop sizes on each page. This helped me to identify the basic page structure I wanted to achieve, and the wireframes show that I was planning to have a consistent layout with the various lists of birds looking the same throughout the website so that users quickly became familiar with the site. 

The wireframes also show the plans for the full record details to be condensed into small repeated cards - this is to avoid the site becoming cluttered by vast amounts of information.

The navigation structure I chose to pursue was based on simplicity to help the users feel comfortable on the website straight away, wherever they are accessing it from.




## SURFACE PLANE

**Colour scheme:**
- I chose a bright green colour scheme for most of the page components in keeping with the 'nature' theme in place, and I kept to this colour scheme for buttons etc to ensure that they stand out well against the plain background. I have stuck to plain backgrounds because the site involves large amounts of information (for example, the bird record cards) and I felt this stopped the site from looking too busy and cluttered. 

**Typography:**
- For this project I have chosen plain, professional fonts for the main body of the site to keep the pages visually calming and avoid distractions. I used a subtly rounded font (Dosis) for the section headings in order to add a subtly friendly feel to the site. I chose a plain font for the bird information sections so as not to distract from the information and to ensure it was clear and easy to read. 

**Themes:**
-   I chose to include illustrations of the birds rather than photographs for several reasons. 

    Firstly, I felt it was easier to get consistent images of 230+ birds this way.

    Secondly, I felt that it was easier to identify the differences between species using illustrations which have been specifically created in order to demarcate the visual differences and markers to look out for. 

    Thirdly, I liked the way that using illustrations reminded me of more traditional bird books and I thought that their inclusion was a nice way of making older birders who may be more used to using such sources feel comfortable moving towards a web based service. 


## DATABASE

The site is built on a MongoDB database. 

I used four collection:
    - Categories
        This collection includes four documents:
            - Bird
            - Mammal
            - Reptile
            - Amphibian
        I included this initially because I had hoped to include animals from all of these categories to give users the opportunity to capture records for every animal in the UK. In the end, I decided to focus on birds only due to time constraints but chose to leave these categories in the database to enable the project to be expanded in future. 

    - Creatures
        This collection includes a document for each bird in the UK. Each document includes the following fields:

            - animal_name: the name of the animal;

            - latin_name: the latin name of the animal;

            - summary: a brief summary about the animal;

            - fact: I had intended to include a brief fact about each animal, but on reflection decided that this didn't add much value to the users, accordingly not all entries include this field;

            - pic: a link to an image of the animal hosted on Cloudinary;

            - author: this is always admin in the Creatures collection and this helps to keep the pre-loaded records separate from the user records;

        I chose to create this collection essentially as a master list which the information for the user's records would be pulled from. The reasoning behind this was in order to help the user's records to be and look consistent, and to pull through some interesting information as well as a picture for each record they create.

    - Records

        The record collection includes a document for each record of a bird which has been created by a user. The documents in the record collection extend the key information about the relevant animal with the user's own personal information about their sighting. Documents in the 'records' collection have the following fields:

            - name: the animals' name;
        
            - latin_name: the animal's latin name;
        
            - category_name: Bird/Mammal/Amphibian or Reptile;

            - summary: a short summary of information about the animal;

            - date_seen: the date the user notes that they saw the animal;

            - pic: a picture of the animal hosted on Cloudinary;

            - author: the username of the user who entered the record;

            - location: (optional) latitude and longitude information recording where the animal was seen, stored in GeoJSON format. 

            - notes: (optional) notes recorded by the user about the sighting. 

    - Users

        This collection stores only two fields, username and password and it allows users to create an account where they can store and retreive their own records.

## TECHNOLOGIES USED

### Languages:
-	HTML5
-	CSS3
-   JavaScript
-   Python


### Frameworks, Libraries, Websites and Programs:
-	**Materialize CSS:**
Used for consistent styling and responsiveness. 

-   **Flask:**
Used for creating and running a Python server side project.

-   **Jinja:**
Used to inject logic inside of HTML templates. 

-   **jQuery:**
Used to provide neat interactivity.

-	**Google Fonts:**
Used to import custom fonts as referred to above. 

-   **Google Maps Javascript API:**
Used to capture and display maps and location data as part of the bird records. 

-	**Font Awesome:**
Used to import icons to create custom buttons.

-	**Git:**
Used for version control between GitPod and GitHub.

-	**GitHub:**
Used to store and deploy the project. 

-   **Heroku:**
Used to deploy project externally.

-	**Balsamiq:**
Used to create initial wireframes as part of the planning and designing stage. 

-   **Cloudinary:**
Used to host images and favicons.

-   **Google Developer Tools:**
Used to inspect each page and function of the site and to check each element and function at a granular level to ensure it is working as planned.

-   **Google Maps JavaScript API:**
Used to provide the maps and location functionality to be used as part of the bird records.

-   **Google Developer Console:**
Used to manage the use of the Google Maps JavaScript API. 

-  **Firefox Developre Tools:**
Used to inspect each page and function of the site and to check each element and function at a granular level to ensure it is working as planned.

## PROBLEMS IN ADVANCE OF TESTING:

**Google API Key:**
- I accidentally committed the Google API Key to GitHub by committing my work before hiding it in an environment variable which would not be tracked by GitHub. I fixed this by deleting that API Key on the Google Developer Console and obtaining a new API Key, which I hid in my env.py file which is ignored by GitHub and added to Heroku as a config var. 

## TESTING:

### VALIDATOR SERVICES:
- **W3C HTML Validator:**
    
    - All pages through the W3C HTML Validator without raising any errors, save for the following warning which appears on all pages:

        - Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed.
        I have reviewed this and have not taken any further action, as the page does in fact have a H4 header inherited from line 65 of base.html, however it is not visible as it is between jinja tags. The section always has a h4 heading whenever it is displayed. 


    The code passes through the W3C CSS Validator without raising any errors. 

- **W3C CSS Validator:**
    
    The code passes through the W3C CSS Validator without raising any errors. 

- **PEP8 Python Validator:**

    The code passes through the PEP8 Python Validator without raising any errors. 

- **Lighthouse:**
    The site returns passing scores on all counts when passed through Lighthouse for both desktop and mobile. 

    *Desktop:*
    ![image of desktop Lighthouse results](/assets/img/lighthouseresult_desktop.JPG)

    *Mobile:*
    ![image of mobile Lighthouse results](/assets/img/lighthouseresult_mobile.JPG)


### MANUAL TESTING

I have manually tested the site by: 

- visiting each page;
- methodically checking that it looks right at every size;
- methodically checking that every feature works as intended at various sizes. 


Manual testing was undertaken on the following browsers with no noticable differences:
- Google Chrome;
- Mozilla Firefox;
- Microsoft Edge;
- Opera;
- Safari 


**Bugs Identified in Manual Testing**


- Accessibility issue: 
    
    The contrast was not sufficiently high on the labels for the input areas, I fixed this by changing the text colour from grey to black.

- Google Chrome Dev Tools produced the following console issues:


### USER STORIES TESTING:

### Experienced Birders (User A)
**Goals:**
- Create a record of which birds they have seen;

    The fact that every page includes a navbar with a link to the 'Add New Record' page supports this user goal, as does the fact that there is a prominent button on the hero image of the home page inviting the user to add a record to their list. 

    The simplicity of the 'Add New Record' page also helps the user achieve this goal.


- Review their list;

    Clear navigation to the 'My Records' page supports the user in achieving this goal. I have purposely kept this page simple so as not to distract from the records. Using cards to represent the records makes it easier for the user to review their list as they can use a visual representation of the record without reading through the whole thing and every piece of information associated with it. The ability to expand the record to view the full details also assists the user in achieving this goal as they can view the information of the relevant record they wish to review without the clutter of all their other records. 


- Add notes to their bird records;

    Users can achieve this goal easily by using the prominent 'notes' section under 'Add A Record', and can also review or edit their notes by accessing their records. 


- A higher proportion of this group are likely to be older users and therefore:

    - They may be more likely to use a desktop version of the site. It is important that full functionality is available on the desktop version. 

        Testing has shown the site to be fully functional on desktop. 

    - They may be less experienced web users and it is therefore important that the site is user friendly and not over complicated. 

        This goal has been achieved by setting the site up with a familiar, traditional navigational system which is consistent throughout. I have also added icons to buttons, and tooltips to make the site as intuitive as possible to use. 


- This user group is more likely to want and appreciate more advanced features. 

    The ability to record and review location data as well as specific notes for each record satisfies this goal.


### New Birders (User B)
**Goals:**
- Create a record of which birds they have seen;

    See above. Furthermore, particularly in the case of new birders, the autocomplete functionality removes any stress that may be caused by misspelling the name of a bird - this may be more likely for inexperienced birders who are not yet familiar with all the bird names or for very young users. 

- Review their list;

    Clear navigation to the 'My Records' page supports the user in achieving this goal. I have purposely kept this page simple so as not to distract from the records. Using cards to represent the records makes it easier for the user to review their list as they can use a visual representation of the record without reading through the whole thing and every piece of information associated with it. The ability to expand the record to view the full details also assists the user in achieving this goal as they can view the information of the relevant record they wish to review without the clutter of all their other records. 

- Find information about birds;

    The inclusion of a straightforward section called 'All UK Birds' will help users to achieve this goal as it is clear to them that they can find out about all British birds on one page. I have also included a search function, so that users can easily either browse to see what takes their interest or search for a specific bird they would like to read about. The fact that these pages pull information directly from the MongoDB database makes it easy for the site to grow and change in future. 

- Get suggestions for what to look for when/where to see certain birds. 

    This goal is met by the inclusion of the 'What to See Now' page which clearly sets out which birds to look out for, when. Additionally, there is a sample of this function on the home page which will dynamically stay up to date and present the user with the birds to look out for in the month they are visiting the site.  

- A higher proportion of this group is likely to be younger and therefore:
    - They may be more likely to use the site on mobile at the time of the sighting, so it is important that the mobile version is clear and quick to use on site. 

        Manual testing has shown the mobile version of the site to be fully functional and easy to use with clear navigation.

    - This group may include children, so it is important to make the site intuitive and not over-complicate it.

        See similar goal above for User Group A. 



## DEPLOYMENT

**GITHUB**


*Forking the repository on GitHub*

This will allow you to make changes to the project without affecting the original by making a copy of the project and working from that. 

- Log in to GitHub;

- Navigate to the GitHub repository for this project;

- Click 'Settings' in the repository;

- Under 'Settings' select 'Fork';

- Under 'Source' select 'None' and then 'Master Branch'.

- This will create a copy of the original project repository.

- You will need to create your own env.py file including the following variables: IP, PORT, SECRET_KEY, MONGO_URI, MONGO_DBNAME, GOOGLE_API. 


*Cloning*

- Log in to GitHub;

- Navigate to the GitHub repository for this project;

- In the repository, click 'Clone or download';

- To use HTTPS, copy the link under 'Clone with HTTPS';

- Open GitBash;

- Change the working directory to the location where you want to put the cloned directory.

- Type 'git clone' and then paste the link you copied from 'Clone with HTTPS'.

- Press enter to complete the creation of the local clone. 

- - You will need to create your own env.py file including the following variables: IP, PORT, SECRET_KEY, MONGO_URI, MONGO_DBNAME, GOOGLE_API. 

**HEROKU**

The project was deployed to Heroku as it uses pages based on template inheritance which cannot be hosted on GitHub Pages. 

**How to Deploy to Heroku:**

- Ensure that the project meets the requirements for deployment to Heroku:

        - It must have a requirements.txt file:

                - This can be created using the terminal command of 'pip3 freeze--local > requirements.txt' in your coding environment

        - It must have a Procfile:

                - This can be created by using the terminal command of 'echo web: python app.py > Procfile
                - If there is a blank line at the end of the Procfile, this may cause problems and this should be deleted. 

        - Both these files must have been pushed to the GitHub repository. 

- Create / log into an account at [Heroku](https://www.heroku.com)

- Click on the 'New' button at the top right to create a new app. 

- Under 'App name' create a name for the app (the name must be unique and must use a dash or minus instead of spaces)

- Under 'Choose region' select the region which is closest to you. 

- Click 'Create App' button. 

- At the 'Deployment method' section around halfway down the page, select "GitHub".

- Under 'Connect to GitHub:
    
    - make sure your GitHub profile is shown; 
    
    - type in the exact name of your GitHub repository;

    - click 'Search';

    - when the repository is found, click 'Connect' to connect to the app. 

- Scroll back to the top and navigate to the 'Settings' tab for the app.

- Scroll down to 'Config Vars' - here you will store the hidden variables so that Heroku can access them, as it will not be able to access the env.py file. 

- Add the following variables:

    - IP
    - PORT
    - MONGODB_NAME (the name of your Mongo DB database)
    - MONGO_URI
    - SECRET_KEY
    - GOOGLE_API (this should be your own google maps api key)

- Scroll back up and return to the 'Deploy' tab. 

- Click 'Enable Automatic Deployment'. 

- Wait as the app is built. 

- When the app is built you will see the message 'Your app was successfully deployed'. 

- Click 'View' to view the deployed app.


## CREDITS

### Code Credits


Code for capturing latitude and longitude from draggable Google maps pin is from [Dotnettec](https://dotnettec.com/google-maps-draggable-marker/).

CSS for hero image styling is from [WS3 Schools](https://www.w3schools.com/howto/howto_css_hero_image.asp).

### Media Credits


**Favicon:**    
The emoji graphic 'Front Facing Baby Chick' is from the open source project Twemoji. The graphics are copyright 2020 Twitter, Inc and other contributors. The graphics are licensed under CC-BY 4.0.
The various sizes of Favicon were produced and downloaded at favicon.io.

**Images:**

Kingfisher: 
Photo by Vincent van Zalinge on [Unsplash](https://unsplash.com/photos/vUNQaTtZeOo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink).

Free to use under licence from Unsplash. 

Bird illustrations by [Mike Langman](https://mikelangman.co.uk/) obtained from [RSBP website](https://www.rspb.org.uk/) and I have asked their permission to use this as part of this coursework.  

**Icons:**

- All icons from FontAwesome and Materialize CSS. 

**Content:** 

Bird summaries written by the [Royal Society for the Protection of Birds](https://www.rspb.org.uk/) and I have asked their permission to use this as part of this coursework.



### Acknowledgements

Thank you to Adam, for keeping me fed whilst I hid away at my computer and to Richard for being a very patient listener. Also big thanks to Ger and Scott on the tutor support team who helped to point me in the right direction when I got stuck. 

## DISCLAIMER

This site is for educational purposes only and is not intended to be accessed, viewed or used by the general public.

