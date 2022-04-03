window.addEventListener("load", function()
   {
   var script = document.createElement('script');
   script.src = 'https://maps.googleapis.com/maps/api/js?key={{google_api}}&callback=initMap';
   script.async = true;

   window.initMap = function() 
      {
      showLocation ();
      };

    document.head.appendChild (script);

    })

    function showLocation() 
    {
      txtLat = document.getElementById("txtLat");
      txtLng = document.getElementById("txtLng");
 
      const myLatLng = { lat: 54.00366, lng: -2.54785 };
      const map      = new google.maps.Map(document.getElementById("record-map"), 
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
 
       google.maps.event.addListener(marker, 'dragend', function (evt) 
       {
         txtLat.value = evt.latLng.lat().toFixed(6);
         txtLng.value = evt.latLng.lng().toFixed(6);
 
         map.panTo(evt.latLng);
       });
    }