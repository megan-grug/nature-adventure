let txtLat = null;
let txtLng = null;

function customMarker() 
   {
     txtLat = document.getElementById("latitude");
     txtLng = document.getElementById("longitude");

     const myLatLng = { lat:parseFloat(txtLng.value) , lng: parseFloat(txtLat.value) };
     const map      = new google.maps.Map(document.getElementById("map"), 
        {
         zoom: 4,
         center: myLatLng,
        });

     const marker = new google.maps.Marker (
       {
       position : myLatLng,  
       map,   
       title    :"Bird Seen Here"
       });
   }

customMarker();
