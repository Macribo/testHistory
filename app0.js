var slideNumber = 0;
let lastSlide = 29;
// import TypeWriting from 'typewriting';
let englishProse = [
  `I am the wind which breaths upon the sea,`,
  `I am the wave of the ocean,`,
  `I am the murmur of the billows,`,
  `I am Stag of Seven Tines,`,
  `I am a Hawk on a Cliff,`,
  `I am a beam of the sun,`,
  `I am the fairest of plants,`,
  `I am a wild boar in valor,`,
  `I am a salmon in the water,`,
  `I am a lake in the plain,`,
  `I am a word of science,`,
  `I am the point of the lance of battle`,
  `(I am) a Song on a Spear;`,
  `an Enchantment of Winds.`,
  ``
];

let blocker = document.getElementById('block-screen');
blocker.style.opacity="0";
let aboutIsRunning = false;
verse2 = () => {
    setTimeout(function() {
      $('#demo').text('');
      // clearLine();
      $('#demo').text(englishProse[6]);
      // typeWriter("#demo", "true", 40);
    }, 8000);

    setTimeout(function() {
      $('#demo').text('');

      // clearLine();
      $('#demo').text(' ');

      $('#demo').text(englishProse[5]);
      // typeWriter("#demo", "true", 40);
    }, 5000);

    setTimeout(function() {
      // clearLine();
      $('#demo').text(' ');

      $('#demo').text(englishProse[4]);
      // typeWriter("#demo", "true", 40);
    }, 2000);

    $('#demo').text(' ');

    $('#demo').text(englishProse[3]);
    // return msg;
    // typeWriter("#demo", "true", 40);
    // break;

};

// verse4 = () => {
//   setTimeout(function() {
//     $('#demo').text(' ');
//     $('#demo').text(englishProse[11]);
//     // typeWriter("#demo", "true", 40);
//   }, 4000);

//   $('#demo').text(' ');

//   $('#demo').text(englishProse[10]);
//   // return msg;
//   // typeWriter("#demo", "true", 40);
//   break;

// };
// verse5 = () => {
//  //show 3 lines of the poem together on one slide

//  setTimeout(function() {
//   $('#demo').text(' ');
//   $('#demo').text(englishProse[13]);
//   // typeWriter("#demo", "true", 40);
// }, 3000);

// $('#demo').text(englishProse[12]);
// // return msg;
// // typeWriter("#demo", "true", 40);
// break;

// };
// verse6 = () => {
//   $('#demo').text('');

//   setTimeout(function() {
//     $('#demo').css('font-family', 'aonchlo');

//     $('#demo').text('');

//     $('#demo').fadeTo('slow', 1);

//     $('#demo').text('Uaireanta, is gníomh teangach  machnamh.');
//     // return msg;

//     // typeWriter("#demo", "true", 40);
//   }, 1000);
//   // setTimeout(function() {
//   // $('#anseo').fadeTo('slow', 1);
//   // $('#btn-menu').fadeTo('slow', 1);
//   //   $('#start').fadeOut();
//   //   $('#about').fadeOut();
//   // }, 3000);

//   break;

// };

test = ()=>{
  console.log(

    "TEST"
   );
}
// animateAmergin1 = () => {
//   setTimeout(function() {
//     $('#blue-cape').animate(
//       {
//         top: '-=20',
//         opacity: 0
//       },
//       'slow'
//     );
//   }, 5000);
// };

//go fullscreen on about click TODO: Press esc to exit fullscreen and add skip btn
var about = document.getElementById('about');
var start = document.getElementById('start');

//make skip invisible to mouse while opacity 0//

// 


// start.onclick = function() {
//   window.location.replace(
//     './Untitled/index.html'
//   );
// };
skip.onclick= function(){
if(slideNumber>=lastSlide -1){
    // $('#about').css({'display':'none'});
    // $('#start').fadeTo('slow',1);
    $('#skip').fadeTo('slow',0);
    // $('#btn-menu').fadeTo('slow',1);

}

 slideNumber++;
goToSlide(slideNumber);
}

$('#done').on('click touch', function(){
  // $('#hold-frame').fadeOut();
  // $('#keyboard-container').fadeIn();
  // $('#output').fadeIn();
  // $('.dm').fadeIn();
  // $('#skip').fadeOut();
  // $('#done').fadeOut();
location.replace('https://macribo.github.io/tall-order/public/index.html')
  
});

//load images into slides.
//Include 'special effects' with slideAction 
for (let i = 1; i < lastSlide; i++) {
  let picName = '';
  i < 10 ? (picName = '0' + i) : (picName = i);
  let slideAction = '';
  switch (i) {
    
    case 4:
      //amergin animations ///
    
    slideAction = `
        <div id="blue-cape-menu" onload="test()">
        
       <img id="blue-cape" src="./images/blue-cape.gif" >
    </div>`;

      break;

    case 10:
      $('#demo').text(' ');

   
    default:
      // alert('default');
      slideAction = '';
  }
  let carouselBodyString = `<div class="carousel-item">
                              <img class="d-block w-100" src="./images/About1/${picName}.png" alt="Second slide">
                              ${slideAction}
                            </div>`; //creatae dom elements
  console.log(i + 'slideAction:' + slideAction);

  $('#carousel-inner-id').append(carouselBodyString); //append
}

function goToSlide(number) {
  $('#carousel').carousel(number);
  // sl
}

$(document).ready(function() {

    alert('ready')
    var rain = document.getElementById('rain');
    // var amergin = document.getElementById('amergin');
    slideEvent = () => {
        switch (slideNumber) {
            case 0:
            console.log('The oldest Gaelic poem');
            goToSlide(0);
            // amergin.pause();
            // $('#demo').fadeOut();
          
            break;
            
            case 1:
            console.log('an dán');
            goToSlide(1);
          


        break;
      case 2:
        console.log('Fadó Fadó in Éireann');
        wait = 7500;
        goToSlide(2);
        break;

      case 3:
        console.log('Mac Breogan mac Bile');
        goToSlide(3);

        break;
      case 4:
        console.log('Amergín');
        // wait = 1000;
        goToSlide(4);

        break;

      case 5:
        console.log('Tuatha Dé Dannan...');
        // wait = 4000;
        goToSlide(5);

        break;
      case 6:
        console.log('Na Formóraigh.');
        goToSlide(6);

        break;
      case 7:
        console.log('Fórsaí Tuaithe Dé Dannan');
        goToSlide(7);

        break;
      case 8:
        console.log('Stoirm');
        goToSlide(8);

        break;
      case 9:
        console.log('filíocht...');
        goToSlide(9);
        console.log('music playing');
        setTimeout(function() {
          wait = 6000;
        }, 3000);

        break;
      case 10:
        console.log('and then...');
        if(aboutIsRunning){
        // amergin.play();
        goToSlide(10);
        setTimeout(function() {
          $('#demo').fadeTo('slow', 1);
        }, 2000);
    }break;

      case 11:
        goToSlide(11);
        // alert("should be here");

        break;
      case 12:
        console.log('according to legends');
        goToSlide(12);

        wait = 5000;
        break;

      case 13:
        goToSlide(13);

        break;
      case 14:
        goToSlide(14);

        break;

      case 15:
        goToSlide(15);
        $('#demo').fadeOut();

        break;
      case 16:
        goToSlide(16);

        break;
      case 17:
        goToSlide(17);

        break;
      case 18:
        goToSlide(18);

        break;
      case 19:
        wait = 8000;

        goToSlide(19);

        break;
      case 20:
        console.log('and then...');
        goToSlide(20);

        break;

      case 21:
        console.log('sampla');
        // wait = 6000;
        goToSlide(21);

        break;
      case 22:
        console.log('according to legends');
        goToSlide(22);
        break;

      case 23:
        console.log('nexto');
        goToSlide(23);

        break;
      case 24:
        console.log('and then...');
        // wait = 1000;
        goToSlide(24);
        
        break;
        
        case 25:
        console.log('and then...');
        // wait = 4000;
        goToSlide(25);

        break;
      case 26:
        console.log('and then...');
        goToSlide(26);

        break;
      case 27:
        console.log('and then...');
        goToSlide(27);

        break;
      case 28:
        console.log('and then...');
        goToSlide(28);

        break;
      case 29:
      rain.play();

        console.log('and then...');
        goToSlide(29);
        $('#demo').fadeTo('slow', 1);

        break;
      case 30:
        console.log('and then...');
        goToSlide(30);


        break;
      case 31:
        console.log('and then...');
        goToSlide(31);

        break;
        case 32:
        console.log('and then...');
        goToSlide(32);
        // $('#about').css({'display':'none'});
        // $('#start').fadeTo('slow',1);
        $('#skip').fadeTo('slow',0);
        // $('#btn-menu').fadeTo('slow',1);



        break;

      default:
        break;
    }
  };

  goToSlide({
    pause: false,
    interval: 0
  });

  let playa = false;

  var wait = 4000;
  changeSlide = () => {
    setTimeout(changeSlide, wait);
    slideEvent();
    // slideNumber++;
     };
  changeSlide();

  if (playa) {
    goToSlide('cycle');
  } else {
    goToSlide('pause');
  }

  aboutGo = () => {
      aboutIsRunning = true;
      goToSlide(0);
      setTimeout(function(){
          $('#holdSlide').fadeTo('slow', 1);
          
    },1000)
// setTimeout(function(){

// $('#btn-panel').animate({});
// },2000);
// $('#btn-panel').animate({left:'35%'});

   
   
    setTimeout(function(){

        // $('#about').fadeOut();
        // $('#start').fadeOut();
        setTimeout(function(){
            $('#skip').fadeTo('slow', 0.4);
            $('#done').fadeTo('slow', 0.4);
            $('#skip').css('pointer-events', 'auto');
            $('#done').css('pointer-events', 'auto');
        },500);
    },1000)


    // $('#hold-frame').css('background-image', darkpic)
  };

  $('.about').click(function() {
    $('#on-top').animate({
      opacity: 1,
      background: 'black'
    });
    setTimeout(function() {
    //   req =
    //     about.requestFullScreen ||
    //     about.webkitRequestFullScreen ||
    //     about.mozRequestFullScreen;

      $('#dark-frame').animate({ opacity: 1 });
      $('#carousel').removeClass('hidden');
      slideNumber = 0;
      aboutGo();
    }, 400);
    setTimeout(function() {
    //   req.call(about);

      $('#on-top').animate({
        opacity: 0,
        background: 'black'
      });
    }, 800);
  });
  
});
