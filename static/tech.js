
$(document).ready(function(){
      $(".button-collapse").sideNav();
});
$(document).ready(function(){
          $('#joinID').click(function(){
            $('.button-collapse').sideNav('hide');
          });
       });
$(document).ready(function () {
    $('#sponsors').hide("fast");
    $('#aboutus').hide("fast");
    $('#tech-team').hide("fast");
    $('#title').hide("fast");
    $('#tevents').show();
    $('#workshop').hide();

    $('#homelink').click(function(){
        $('#sponsors').hide("slow");
        $('#aboutus').hide("slow");
        $('#tevents').hide("slow");
        $('#workshop').hide("slow");
        $('#tech-team').hide("slow");
        $('#why').show();
        $('.button-collapse').sideNav('hide');
        $('#title').show("slow");



        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();
        $('#ntevn1').hide();
        $('#ntevn2').hide();

    });

    $('#indexlink').click(function () {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#aboutus').hide("slow");
        $('#workshop').hide("slow");
        $('#tech-team').hide();
        $('.button-collapse').sideNav('hide');
        $('#title').show("slow");
        $('#why').show();

        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();
    });
    $('#sponsorslink').click(function () {
        $('#tevents').hide("slow");
        $('#title').hide("slow");
        $('#aboutus').hide("slow");
        $('#tech-team').hide();
        $('#workshop').hide("slow");
        $('.button-collapse').sideNav('hide');
        $('#sponsors').slideToggle("slow");
        $('#why').show();


        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();
    });
    $('#aboutlink').click(function () {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#title').hide("slow");
        $('#tech-team').hide();
        $('.button-collapse').sideNav('hide');
        $('#workshop').hide("slow");
        $('#aboutus').slideDown("slow");
        $('#why').show();


        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();
    });
    $('#teamlink').click(function() {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#title').hide("slow");
        $('#workshop').hide("slow");
        $('#aboutus').hide("slow");
        $('.button-collapse').sideNav('hide');
        $('#tech-team').slideDown("slow");
        $('#why').show();


        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();
    });
    $('#techeventslink').click(function(){
      $('#dashboard').hide("fast");
      $('#sponsors').hide("fast");
      $('#workshop').hide("slow");
      $('#title').hide("fast");
      $('#aboutus').hide("fast");
      $('.button-collapse').sideNav('hide');
      $('#tech-team').hide("slow");
      $('#why').show();
      $('#tevents').show("fast");

      $('#tevn1').hide();
      $('#tevn2').hide();
      $('#tevn3').hide();
      $('#tevn4').hide();
      $('#tevn5').hide();
      $('#tevn6').hide();

      $('#ntevn1').hide();
      $('#ntevn2').hide();
    });
    $('#workshoplink').click(function(){
      $('#title').hide("slow");
      $('#sponsors').hide("slow");
      $('#aboutus').hide("slow");
      $('#tech-team').hide("slow");
      $('#why').show();
      $('#dashboard').hide();
      $('.button-collapse').sideNav('hide');
      $('#tevents').hide("slow");
      $('#workshop').show("slow");

      $('#tevn1').hide();
      $('#tevn2').hide();
      $('#tevn3').hide();
      $('#tevn4').hide();
      $('#tevn5').hide();
      $('#tevn6').hide();
      $('#ntevn1').hide();
      $('#ntevn2').hide();
    });
    $('#homelinkmobile').click(function(){
        $('#sponsors').hide("slow");
        $('#aboutus').hide("slow");
        $('#workshop').hide("slow");
        $('#tevents').hide("slow");
        $('#tech-team').hide();
        $('.button-collapse').sideNav('hide');
        $('#title').show("slow");
        $('#why').show();

        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();

    });
    $('#techeventslinkmobile').click(function () {
        $('#title').hide("slow");
        $('#sponsors').hide("slow");
        $('#aboutus').hide("slow");
        $('#tech-team').hide("slow");
        $('#workshop').hide("slow");
        $('#why').show();
        $('.button-collapse').sideNav('hide');
        $('#tevents').show("slow");

        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();
    });
    $('#workshoplinkmobile').click(function(){
      $('#title').hide("slow");
      $('#sponsors').hide("slow");
      $('#aboutus').hide("slow");
      $('#tech-team').hide("slow");
      $('#why').show();
      $('#dashboard').hide();
      $('.button-collapse').sideNav('hide');
      $('#tevents').hide("slow");
      $('#workshop').show("slow");

      $('#tevn1').hide();
      $('#tevn2').hide();
      $('#tevn3').hide();
      $('#tevn4').hide();
      $('#tevn5').hide();
      $('#tevn6').hide();
      $('#ntevn1').hide();
      $('#ntevn2').hide();
    });
    $('#indexlinkmobile').click(function () {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#workshop').hide("slow");
        $('#aboutus').hide("slow");
        $('#tech-team').hide();
        $('.button-collapse').sideNav('hide');
        $('#title').show("slow");
        $('#why').show();

        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();
    });
    $('#sponsorslinkmobile').click(function () {
        $('#tevents').hide("slow");
        $('#title').hide("slow");
        $('#aboutus').hide("slow");
        $('#workshop').hide("slow");
        $('#tech-team').hide();
        $('.button-collapse').sideNav('hide');
        $('#sponsors').slideToggle("slow");
        $('#why').show();


        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();


    });
    $('#aboutlinkmobile').click(function () {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#workshop').hide("slow");
        $('#title').hide("slow");
        $('#tech-team').hide();
        $('.button-collapse').sideNav('hide');
        $('#aboutus').slideDown("slow");
        $('#why').show();


        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();


    });
    $('#teamlinkmobile').click(function() {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#title').hide("slow");
        $('#aboutus').hide("slow");
        $('#workshop').hide("slow");
        $('.button-collapse').sideNav('hide');
        $('#tech-team').slideDown("slow");


        $('#tevn1').hide();
        $('#tevn2').hide();
        $('#tevn3').hide();
        $('#tevn4').hide();
        $('#tevn5').hide();
        $('#tevn6').hide();

        $('#ntevn1').hide();
        $('#ntevn2').hide();
    });

    $('#tevn1').hide();
    $('#tevn2').hide();
    $('#tevn3').hide();
    $('#tevn4').hide();
    $('#tevn5').hide();
    $('#tevn6').hide();
    $('#ntevn1').hide();
    $('#ntevn2').hide();

    $('#tevnl1').click(function() {
      $('#tevn2').hide("slow");
      $('#tevn3').hide("slow");
      $('#tevn4').hide("slow");
      $('#tevn6').hide("slow");
      $('#tevn5').hide("slow");
      $('#ntevn1').hide();
      $('#ntevn2').hide();

      $('#tevn1').show("slow");
    });
    $('#tevnl2').click(function(){
      $('#tevn1').hide("slow");
      $('#tevn3').hide("slow");
      $('#tevn4').hide("slow");
      $('#tevn5').hide("slow");
      $('#tevn6').hide("slow");
      $('#ntevn1').hide();
      $('#ntevn2').hide();
      $('#tevn2').show("slow");

    });
    $('#tevnl3').click(function(){
      $('#tevn1').hide("slow");
      $('#tevn2').hide("slow");
      $('#tevn4').hide("slow");
      $('#tevn5').hide("slow");
      $('#tevn6').hide("slow");
      $('#ntevn1').hide();
      $('#ntevn2').hide();

      $('#tevn3').show("slow");
    });
    $('#tevnl4').click(function(){
      $('#tevn1').hide("slow");
      $('#tevn2').hide("slow");
      $('#tevn3').hide("slow");
      $('#tevn5').hide("slow");
      $('#tevn6').hide("slow");
      $('#ntevn1').hide();
      $('#ntevn2').hide();

      $('#tevn4').show("slow");
    });
    $('#tevnl5').click(function(){
      $('#tevn1').hide("slow");
      $('#tevn2').hide("slow");
      $('#tevn3').hide("slow");
      $('#tevn4').hide("slow");
      $('#tevn6').hide("slow");
      $('#ntevn1').hide();
      $('#ntevn2').hide();

      $('#tevn5').show("slow");
    });
    $('#tevnl6').click(function () {
      $('#tevn1').hide("slow");
      $('#tevn2').hide("slow");
      $('#tevn3').hide("slow");
      $('#tevn4').hide("slow");
      $('#tevn5').hide("slow");
      $('#ntevn1').hide();
      $('#ntevn2').hide();

      $('#tevn6').show("slow");
    });
    $('#ntevnl1').click(function(){
      $('#tevn1').hide("slow");
      $('#tevn2').hide("slow");
      $('#tevn3').hide("slow");
      $('#tevn4').hide("slow");
      $('#tevn5').hide("slow");
      $('#tevn6').hide("slow");

      $('#ntevn2').hide("slow");
      $('#ntevn1').show("slow");
    });
    $('#ntevnl2').click(function(){
      $('#tevn1').hide("slow");
      $('#tevn2').hide("slow");
      $('#tevn3').hide("slow");
      $('#tevn4').hide("slow");
      $('#tevn5').hide("slow");
      $('#tevn6').hide("slow");
      $('#ntevn1').hide("slow");

      $('#ntevn2').show("slow");
    });


});
$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal();
});

$(document).ready(function(){
   $('.carousel.carousel-slider').carousel({full_width: true});
});
$(document).ready(function(){
   $('.carousel').carousel();
});
$(document).ready(function(){
    $('fixed-action-btn').openFAB();
});
