$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".datepicker").datepicker({
      format: "dd mmm, yyyy",
      yearRange: 10,
      showClearBtn: true,
      maxDate: new Date(),
      i18n: {
          done: "Confirm"
      }
  });
  $('input.autocomplete').autocomplete({
    data: {
      "Black-Throated Diver": null,
      "Red-Throated Diver": null,
      "Great Crested Grebe": null,
      "Red-Necked Grebe": null,
      "Slavonian Grebe": null,
      "Black-Necked Grebe": null,
      "Little Grebe": null,
      "Fulmar" : null,
      "Manx Shearwater": null, 
      "European Storm-Petrel": null,
      "Gannet": null,
      "Cormorant": null,
      "Shag": null,
      "Grey Heron": null,
      "Bittern": null,
      "Spoonbill": null,
      "Little Egret": null,
      "Mute Swan": null,
      "Whooper Swan": null,
      "Bewick’s Swan": null,
      "Brent Goose": null,
      "Barnacle Goose": null,
      "Canada Goose": null,
      "Greylag Goose": null,
      "Pink-Footed Goose": null,
      "Bean Goose": null,
      "White-Fronted Goose": null,
      "Shelduck": null,
      "Mallard": null,
      "Gadwall": null,
      "Wigeon": null,
      "Teal": null,
      "Shoveler": null,
      "Garganey": null,
      "Pintail": null,
      "Mandarin Duck": null,
      "Tufted Duck": null,
      "Scaup": null,
      "Pochard": null,
      "Eider": null,
      "Common Scoter": null,
      "Velvet Scoter": null,
      "Goldeneye": null,
      "Long-Tailed Duck": null,
      "Goosander": null,
      "Red-Breasted Merganser": null,
      "Smew": null,
      "Ruddy Duck": null,
      "Osprey": null,
      "Red Kite": null,
      "Sparrowhawk": null,
      "Goshawk": null,
      "Buzzard": null,
      "Honey Buzzard": null,
      "Golden Eagle": null,
      "Marsh Harrier": null,
      "Hen Harrier": null,
      "Montagu’s Harrier": null,
      "Peregrine": null,
      "Hobby": null,
      "Merlin": null,
      "Kestrel": null,
      "Red Grouse": null,
      "Ptarmigan": null,
      "Black Grouse": null,
      "Capercaillie": null,
      "Pheasant": null,
      "Red-Legged Partridge": null,
      "Grey Partridge": null,
      "Water Rail": null,
      "Corncrake": null,
      "Moorhen": null,
      "Coot": null,
      "Oystercatcher": null,
      "Avocet": null,
      "Lapwing": null,
      "Ringed Plover": null,
      "Little Ringed Plover": null,
      "Golden Plover": null,
      "Grey Plover": null,
      "Dotterel": null,
      "Dunlin": null,
      "Curlew Sandpiper": null,
      "Little Stint": null,
      "Temminck’s Stint": null,
      "Knot": null,
      "Sanderling": null,
      "Purple Sandpiper": null,
      "Redshank": null,
      "Spotted Redshank": null,
      "Greenshank": null,
      "Green Sandpiper": null,
      "Wood Sandpiper": null,
      "Common Sandpiper": null,
      "Curlew": null,
      "Whimbrel": null,
      "Black-Tailed Godwit": null,
      "Bar-Tailed Godwit": null,
      "Turnstone": null,
      "Ruff": null,
      "Grey Phalarope": null,
      "Red-Necked Phalarope": null,
      "Woodcock": null,
      "Snipe": null,
      "Jack Snipe": null,
      "Stone-Curlew": null,
      "Black-Headed Gull": null,
      "Mediterranean Gull": null,
      "Little Gull": null,
      "Common Gull": null,
      "Kittiwake": null,
      "Herring Gull": null,
      "Lesser Black-Backed Gull": null,
      "Great Black-Backed Gull": null,
      "Glaucous Gull": null,
      "Great Skua": null,
      "Arctic Skua": null,
      "Sandwich Tern": null,
      "Common Tern": null,
      "Arctic Tern": null,
      "Roseate Tern": null,
      "Little Tern": null,
      "Black Tern": null,
      "Razorbill": null,
      "Guillemot": null,
      "Puffin": null,
      "Little Auk": null,
      "Black Guillemot": null,
      "Feral Pigeon / Rock Dove": null,
      "Stock Dove": null,
      "Woodpigeon": null,
      "Collared Dove": null,
      "Turtle Dove": null,
      "Cuckoo": null,
      "Nightjar": null,
      "Barn Owl": null,
      "Long-Eared Owl": null,
      "Short-Eared Owl": null,
      "Tawny Owl": null,
      "Little Owl": null,
      "Kingfisher": null,
      "Green Woodpecker": null,
      "Greater Spotted Woodpecker": null,
      "Lesser Spotted Woodpecker": null,
      "Wryneck": null,
      "Swift": null,
      "Swallow": null,
      "Sand Martin": null,
      "House Martin": null,
      "Shore Lark": null,
      "Woodlark": null,
      "Skylark": null,
      "Tree Pipit": null,
      "Meadow Pipit": null,
      "Rock Pipit": null,
      "Pied Wagtail": null,
      "Grey Wagtail": null,
      "Yellow Wagtail": null,
      "Waxwing": null,
      "Red-Backed Shrike": null,
      "Great Grey Shrike": null,
      "Starling": null,
      "Golden Oriole": null,
      "Dunnock": null,
      "Wren": null,
      "Dipper": null,
      "Grasshopper Warbler": null,
      "Reed Warbler": null,
      "Marsh Warbler": null,
      "Sedge Warbler": null,
      "Cetti’s Warbler": null,
      "Willow Warbler": null,
      "Chiff Chaff": null,
      "Wood Warbler": null,
      "Goldcrest": null,
      "Dartford Warbler": null,
      "Whitethroat": null,
      "Lesser Whitethroat": null,
      "Garden Warbler": null,
      "Blackcap": null,
      "Spotted Flycatcher": null,
      "Pied Flycatcher": null,
      "Stonechat": null,
      "Whinchat": null,
      "Wheatear": null,
      "Redstart": null,
      "Black Redstart": null,
      "Robin": null,
      "Nightingale": null,
      "Blackbird": null,
      "Ring Ouzel": null,
      "Fieldfare": null,
      "Redwing": null,
      "Song Thrush": null,
      "Mistle Thrush": null,
      "Blue Tit": null,
      "Great Tit": null,
      "Coal Tit": null,
      "Marsh Tit": null,
      "Willow Tit": null,
      "Crested Tit": null,
      "Long-Tailed Tit": null,
      "Bearded Tit": null,
      "Nuthatch": null,
      "Treecreeper": null,
      "Corn Bunting": null,
      "Yellowhammer": null,
      "Cirl Bunting": null,
      "Reed Bunting": null,
      "Snow Bunting": null,
      "Chaffinch": null,
      "Brambling": null,
      "Goldfinch": null,
      "Siskin": null,
      "Greenfinch": null,
      "Bullfinch": null,
      "Hawfinch": null,
      "Redpoll": null,
      "Linnet": null,
      "Common Crossbill": null,
      "House Sparrow": null,
      "Tree Sparrow": null,
      "Jay": null,
      "Magpie": null,
      "Chough": null,
      "Jackdaw": null,
      "Raven": null,
      "Carrion Crow": null,
      "Hooded Crow": null,
      "Rook": null,
    },
  });
});




/*code from google maps api tutorial */
/*var myLatlng = new google.maps.LatLng(54.00366,-2.54785);
var mapOptions = {
  zoom: 4,
  center: myLatlng
};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
*/
// Place a draggable marker on the map
/*
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    draggable:true,
    title:"Drag me!"
});
*/

/* code is from: https://dotnettec.com/google-maps-draggable-marker/*/
// adds a listener to the marker
// gets the coords when drag event ends
// then updates the input with the new coords
/*google.maps.event.addListener(marker, 'dragend', function (evt) {
  $("#txtLat").val(evt.latLng.lat().toFixed(6));
  $("#txtLng").val(evt.latLng.lng().toFixed(6));

  map.panTo(evt.latLng);
});*/
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

      google.maps.event.addListener(marker, 'dragend', function (evt) 
      {
        txtLat.value = evt.latLng.lat().toFixed(6);
        txtLng.value = evt.latLng.lng().toFixed(6);

        map.panTo(evt.latLng);
      });
   }

   showLocation();



