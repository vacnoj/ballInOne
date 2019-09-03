$(document).ready(function () {
  $('.parallax').parallax();
  console.log("parallax loaded");
  $('.carousel').carousel();
  console.log("carousel loaded");
  $('.dropdown-trigger').dropdown();
  console.log("dropdown loaded");
  $('.tooltipped').tooltip();
  console.log("tooltip loaded");


  // $(".background").slideUp();

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() + $(window).height() == $(document).height()) {
  //     $(".background").slideDown(2000)
  //     // setTimeout(scrollDown, 1000);
  //   } 
  //   if ($(window).scrollTop() + $(window).height() < $(document).height() - $(window).height()+100){
  //     $(".background").slideUp();
  //   } 

  //   function scrollDown() {
  //     $(window).scrollTop($(document).height() - $(window).height());
  //   }
  // });

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

  var date = new Date().toLocaleDateString("en-US");
  $('#date').text(date);

  var oops = false;

  $('#oops').click(function() {
  
    if (!oops) {
      $('#oops').hide();
      oopsie();
      oops = true;
      setTimeout(showLogo,8000);
    } 
    else {
      $('#oops').hide();
      fixIt();
      oops = false;
      setTimeout(showLogo,8000);
    }
  });

  function showLogo() {
    $('#oops').show();
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

});