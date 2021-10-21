$( function() {
    $( ".draggable" ).draggable();
  } );

  function randomPosition(myclass){
  var randomW = Math.floor(100*Math.random());
  var randomH = Math.floor(100*Math.random());
  $(myclass).css({'top' : randomH + '%'});
  $(myclass).css({'left' : randomW + '%'});
  $(myclass).css({'transform' : 'rotate(' + randomW + 'deg)'});
};

randomPosition('.drag1');
randomPosition('.drag2');
randomPosition('.drag3');
randomPosition('.drag4');
randomPosition('.drag5');
randomPosition('.drag6');
randomPosition('.drag7');
randomPosition('.drag8');
randomPosition('.drag9');
randomPosition('.drag10');
randomPosition('.drag11');
