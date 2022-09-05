//owl corousel javascript

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
     loop: true,
     items: 1,
     dot: true,
     margin: 10,
     nav: true,
  })
  $(".owl-prev").html('<span class="owl-icon icon-leftarrow"></span>');
  $(".owl-next").html('<span class="owl-icon  icon-rightarrow"></span>');
});

//location javascript
function showLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var latlongvalue = position.coords.latitude + "," +
     position.coords.longitude;
  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlongvalue +
     "&zoom=14&size=400x300&key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o";
  document.getElementById("mapholder").innerHTML =
     "<img src='" + img_url + "'>";
}

function errorHandler(err) {
  if (err.code == 1) {
     alert("Error: Access is denied!");
  } else if (err.code == 2) {
     alert("Error: Position is unavailable!");
  }
}

function getLocation() {
  if (navigator.geolocation) {
     // timeout at 60000 milliseconds (60 seconds)
     var options = {
        timeout: 60000
     };
     navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
  } else {
     alert("Sorry, browser does not support geolocation!");
  }
}

//searchbar js
const triger_search = document.querySelector('.triger_search');
const input = document.querySelector('.input');

triger_search.addEventListener('click', () => {
   if (!input.classList.contains('input-open')) {
      input.classList.add('input-open');
      triger_search.innerHTML = "<i class='fa-solid fa-xmark'></i>";
   } else {
      input.classList.remove('input-open');
      triger_search.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";
   }
})

//view more and view less javascript

function ReadMoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  if (dots.style.display === "none") {
     dots.style.display = "flex";
     moreText.style.display = "none";
  } else {
     dots.style.display = "flex";
     moreText.style.display = "flex";
  }
}
$('#viewall').click(function () {
  $('#popularcard').slideToggle();
  if ($('#viewall').text() == "Read more") {
     $(this).text("View More")
     $("#popularcard").css("display", "flex");
  } else {
     $(this).text("View More")
     $("#popularcard").css("display", "flex");
  }
});
$('#viewall2').click(function () {
  $('#popularcard2').slideToggle();
  if ($('#viewall2').text() == "Read less") {
     $(this).text("View More")
     $("#popularcard").css("display", "flex");
  } else {
     $(this).text("View More")
     $("#popularcard").css("display", "flex");
  }
});