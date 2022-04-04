
let txtLat = null;
let txtLng = null;

function showLocation() 
   {
     txtLat = document.getElementById("txtLat");
     txtLng = document.getElementById("txtLng");

     const myLatLng = { lat: 54.00366, lng: -2.54785 };
     const map      = new google.maps.Map(document.getElementById("map"), 
        {
         zoom: 4,
         center: myLatLng,
        });

     const marker = new google.maps.Marker (
       {
       position : myLatLng,  
       map,   
       draggable:true,
       title    :"Drag me!"
       });
    
     /* code is from: https://dotnettec.com/google-maps-draggable-marker/*/
     google.maps.event.addListener(marker, 'dragend', function (evt) 
      {
        txtLat.value = evt.latLng.lat().toFixed(5);
        txtLng.value = evt.latLng.lng().toFixed(5);

        map.panTo(evt.latLng);
      /*end of code from Dotnettec*/
      });
    }

