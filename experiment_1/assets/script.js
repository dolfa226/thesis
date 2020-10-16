$( function() {

  var icons = {
    header: "iconClosed",
    activeHeader: "iconOpen"
  };

  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    icons: icons,
  });


  $( ".draggable" ).draggable({
      containment: "parent"
  });


  $('.draggable').on('mousedown', function() { 
    $('.draggable').css('z-index','10');
    $( this ).css('z-index','1000');
});


} );


