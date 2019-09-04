$(document).ready(function () {
  $('.parallax').parallax();
  console.log("parallax loaded");
  $('.carousel').carousel();
  console.log("carousel loaded");
  $('.dropdown-trigger').dropdown();
  console.log("dropdown loaded");
  $('.tooltipped').tooltip();
  console.log("tooltip loaded");

var date = new Date().toLocaleDateString("en-US");
$('#date').text(date);

$('#zipcode').hide();

// alert(`Welcome to ${document.title}! Today's date is ${date}`);

  $('#submit').click(function () {
    // event.preventDefault();
    
    if ($('#contact-name').val()=="") {
      alert("Enter your name");
    };
    if ($('#phone-number').val()=="") {
      alert("Enter your phone number");
    }; 
    if ($('#email').val()=="") {
      alert("Enter your email address");
    };

    console.log($('#email').val());
    function sendMail() {
      $myform = $('#contact-form');
      $myform.prop('action', 'mailto:vacnoj@yahoo.com');
      $myform.submit();
    }
    sendMail();
    setTimeout(clearField, 5000);

    function clearField() {
      $('#comments').val('');
      $('#email').val('');
      $('#phone-number').val('');
      $('#contact-name').val('');
    }
  });

  var oops = false;

  $('#oops').click(function() {
  
    if (!oops) {
      $('#oops').hide();
      oopsie();
      oops = true;
      $('#oops').attr("data-tooltip", "Click if the coast is clear!");
      setTimeout(showLogo, 8000);
      setTimeout(showFake, 8000);
    } 
    else {
      $('#oops').hide();
      hideFake();
      oops = false;
      $('#oops').attr("data-tooltip", "Click if you are in class and your teacher is behind you...");
      setTimeout(showLogo, 8000);
      setTimeout(fixIt, 2000);
    }
  });

  function showLogo() {
    $('#oops').show();
  }

  function showFake() {
    $('.contents').append('<iframe id="fakeSite" src="https://www.coloradotech.edu/current-students">');
  }

  function hideFake() {
    $('#fakeSite').slideUp(2000);
    $('#fakeSite').remove();
  }

  function oopsie() {
    $('.section').slideUp(8000);
    $('#parallax-1').slideUp(2000);
    $('#parallax-2').slideUp(4000);
    $('#parallax-3').slideUp(6000);
    $('#parallax-4').slideUp(8000);
    $('#contactMe').slideUp(8000);
  }

  function fixIt() {
    $('.section').slideDown(2000);
    $('#parallax-1').slideDown(8000);
    $('#parallax-2').slideDown(6000);
    $('#parallax-3').slideDown(4000);
    $('#parallax-4').slideDown(2000);
    $('#contactMe').slideDown(2000);
  }

  $('#getWeather').click(function getWeather() {
    $('#zipcode').slideDown(1000);
    $('#getWeather').text("Submit");
    var zipcode = $('#zipcode').val();
    if (zipcode.match(/\d{5}/)) {
      var apiKey = "54ca468c668707139435370a3f6563d8";
      var queryURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${apiKey}`
      $.ajax({
        url: queryURL,
        method: "GET",
      }).done(function(response) {
    
        console.log(response);
        tempF = ((response.main.temp - 273.15) * 9/5 + 32);
         
        var tempF = Math.round(tempF,2);
        $('#zipcode').val('');
        $('#zipcode').hide();
        $('#getWeather').text(response.name +" " + tempF + "°");
      }).fail(function() {
        alert("Invalid zipcode");
      });
    }
     else { 
       if (zipcode) {
         alert("Invalid zipcode");
       }
     }
  });

  $.ajax({
    url:"assets/xml/allInventory.xml",
    method: "GET",
  }).done(function(response) {
    console.log(response);
    $('#allInventory').append(response);
  });

  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        getAllInventory(this);
      }
    };
    xhttp.open("GET", "assets/xml/allInventory.xml", true);
    xhttp.send();
  }
  function getAllInventory(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table=`<tr id="tableHead">
                 <th>Category</th>
                 <th>Name</th>
                 <th>Size</th>
                 <th>Brand</th>
                 <th>Color</th>
                 <th>Outdoor Ball?</th>
                 <th>Price</th>
                 <th>Discount %</th>
              </tr>`;
    var x = xmlDoc.getElementsByTagName("BALL");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("CATEGORY")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("SIZE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("BRAND")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("COLOR")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("IsOUTDOOR")[0].childNodes[0].nodeValue +
      "</td><td>" + "$" +
      x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
      "</td><td>" + 
      x[i].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    $('#allInventory').append(table);
  }
  
  loadDoc();

});