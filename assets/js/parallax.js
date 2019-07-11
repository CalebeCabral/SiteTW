$(document).ready(function() {
  
  $topDistance = .1;

  $sideToside = 0;

  $movement = 0;

  $sideMovement = 0;

  $canChange = false;

  $m =0;

  $y = 0; 

  $z= 0;

  $stop = false;

  setInterval(function(){

    animateToy(.3);

  },10)

  function animateToy(velocity) {

    if(!$stop){

      $topDistance += velocity;

    }
    
    $layers = $("[data-type='parallax']");

    $layers.each(function(item,n){

      $depth = $(this).attr('data-depth');

      $movement = -($topDistance * $depth);

      $m = -($topDistance * .5);

      if(Math.floor($m) > -80){

        $y = ($movement / 2);

        $z = (($movement / 1.5) * - 1);

        $translate3d = 'transform: translate3d(0px,' + $movement + 'px,' + '0' + ')';

        $translate = 'transform: perspective(500px) translate3d(0px, ' + $y + 'px, ' + $z + 'px)';

        if( $(this).hasClass('depth3__parallax') )
        {

          $(this).attr('style', $translate);
          return;

        }

        $(this).attr('style', $translate3d);

      }else
      {

        $stop = true;

        if(Math.floor($sideMovement) < 50 && $canChange === false)
        {

          $sideToside += velocity / 3;

          $sideMovement = -($sideToside * $depth);

          if(Math.floor($sideMovement) < -50)
          {

            $canChange = true;

          }

        }else
        {

          $sideToside -= velocity / 3;

          $sideMovement = -($sideToside * $depth);

          if(Math.floor($sideMovement) > 50)
          {

            $canChange = false;

          }

        }

        
        $translate3d = 'transform: translate3d(' + $sideMovement + 'px,' + $movement + 'px,' + '0' + ')';

        $translate = 'transform: perspective(500px) translate3d(' + ($sideMovement * -1) + 'px, ' + $y + 'px, ' + $z + 'px)';

        if( $(this).hasClass('depth3__parallax') )
        {

          $(this).attr('style', $translate);
          return;

        }

        $(this).attr('style', $translate3d);

      }

    });

  };

});