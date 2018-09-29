$(document).ready(function () {
      $('#checkbox').change(function(){
        setInterval(function () {
           moveRight();
        }, 2000);
      });

      var slideCount = $('#slider ul li').length;       // Number of Images/Lists
      var slideWidth = $('#slider ul li').width();      // Width of Each Image/List
      var slideHeight = $('#slider ul li').height();    // Height of Each Image/List
      var sliderUlWidth = slideCount * slideWidth;      // Width of UL that contains Images/Lists
//    alert(sliderUlWidth + ' ' + slideCount + ' ' + slideWidth);

      $('#slider').css({ width: slideWidth, height: slideHeight });
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth});
//    $('#slider ul li:nth-child(7)').prependTo('#slider ul');
//      $('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
      
      $('#slider ul').animate({
          left: + slideWidth
      }, 300, function () {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
      });
  };

  function moveRight() {
      $('#slider ul').animate({
          left: - slideWidth
      }, 300, function () {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
      });
  };

  $('a.control_prev').click(function () {
      moveLeft();
  });

  $('a.control_next').click(function () {
      moveRight();
  });

});  