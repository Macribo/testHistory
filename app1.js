
var slide = 0;
let lastSlide = 29;
// import TypeWriting from 'typewriting'?;
            let textTop = [
                `2`,
                
              ];
let textBottom = [
    
    ``,
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
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
    `placeHolder0.png`,
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
alert('done pressed')    
    // redirect
    // render();
})
$(document).ready(function() {



render = () =>{


    //clear top middle and bottom sections
    // $('#middle').empty();
    // $('#bottom').empty();

        //load new content into top middle bottom sections
        
        
        setTimeout(function(){
            
            $('#top').empty().append(`<h3 id="top-content">${textTop[slide]}</h3>`);
            $('#top-content').fadeIn()
        
            $('#middle').empty().css('background-image', `url('./images/About1/${images[slide]}')`);
        
            
        },600);
        
        $('#top-content').fadeOut();
        $('#middle-content').fadeOut();
        
        
        
        $('#middle-content').fadeIn()

        // $('#bottom').append(`<h2 id="bottom-content">${textBottom[slide]}</h2>`)


}

});