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
});