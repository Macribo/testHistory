
var slide = 0;
let lastSlide = 29;
// import TypeWriting from 'typewriting'?;
let textBottom = [
  `I am the wind which breaths upon the sea
  I am the wave of the ocean
  I am the murmur of the billows`,
    
  `I am Stag of Seven Tines
  I am a Hawk on a Cliff
  I am a beam of the sun
  I am the fairest of plants`,
      
  `I am a salmon in the water
  I am a wild boar in valor
  I am a lake in the plain`,
  
  `I am a word of science
   I am the point of the lance of battle
   ...(I am) a Song on a Spear
   an Enchantment of Winds.`
  
];
let images = [
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`

]

$('#next').on('touchend', function(){
    
    slide++;
    render();
})

$('#prev').on('touchend', function(){
    
    slide--;
    render();
})

$('#done').on('touchend', function(){
    
    // redirect
    // render();
})
$(document).ready(function() {



render = () =>{


    //clear top middle and bottom sections
        // alert(slide);
        //load new content into top middle bottom sections
        $('#top').fadeOut().append(`<h2>${textTop[slide]}</h2>`).fadeIn()
        $('#middle').append(`<img src="./images/About1/${images[slide]}">`)
        $('#bottom').append(`<h2>${textBottom[slide]}</h2>`)


}

});