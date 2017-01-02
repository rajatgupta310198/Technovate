$(document).ready(function(){
      $(".button-collapse").sideNav();
});
$(document).ready(function(){
   $('#joinID').click(function(){
     $('.button-collapse').sideNav('hide');
   });
});
$(document).ready(function () {
    $('#tevents').hide();
    $('#sponsors').hide();
    $('#aboutus').hide();
    $('#tech-team').hide();
    $('#title').show("slow");
    $('#dashboard').hide();
    $('#homelink').click(function(){
        $('#sponsors').hide("slow");
        $('#aboutus').hide("slow");
        $('#tevents').hide("slow");
        $('#tech-team').hide("slow");
        $('#dashboard').hide();
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
    $('#techeventslink').click(function () {
        $('#title').hide("slow");
        $('#sponsors').hide("slow");
        $('#aboutus').hide("slow");
        $('#tech-team').hide("slow");
        $('#why').hide();
        $('#dashboard').hide();
        $('.button-collapse').sideNav('hide');
        $('#tevents').fadeIn("slow");

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
        $('#tech-team').hide();
        $('#dashboard').hide();
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
        $('#dashboard').hide();
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
    $('#aboutlink').click(function () {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#title').hide("slow");
        $('#tech-team').hide();
        $('#dashboard').hide();
        $('.button-collapse').sideNav('hide');
        $('#aboutus').fadeIn("slow");
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
        $('#aboutus').hide("slow");
        $('.button-collapse').sideNav('hide');
        $('#dashboard').hide();
        $('#tech-team').show("slow");
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
    $('#dashboardlink').click(function(){
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#title').hide("slow");
        $('#aboutus').hide("slow");
        $('.button-collapse').sideNav('hide');
        $('#tech-team').hide("slow");
        $('#why').hide();
        $('#dashboard').fadeIn("fast");

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
        $('#tevents').hide("slow");
        $('#dashboard').hide("slow");
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
        $('#dashboard').hide("slow");
        $('#why').hide();
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

    $('#indexlinkmobile').click(function () {
        $('#tevents').hide("slow");
        $('#sponsors').hide("slow");
        $('#aboutus').hide("slow");
        $('#tech-team').hide();
        $('#dashboard').hide("slow");
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
        $('#tech-team').hide();
        $('#dashboard').hide("slow");
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
        $('#title').hide("slow");
        $('#dashboard').hide("slow");
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
        $('#dashboard').hide("slow");
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
    $('#dashboardlinkmobile').click(function(){
       $('#tevents').hide("slow");
       $('#sponsors').hide("slow");
       $('#title').hide("slow");
       $('#aboutus').hide("slow");
       $('.button-collapse').sideNav('hide');
       $('#tech-team').hide("slow");
       $('#dashboard').show("slow");

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
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal();
});
$(document).ready(function() {
 $('select').material_select();
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
$(document).ready(function(){
 $('.tooltipped').tooltip({delay: 50});
});
