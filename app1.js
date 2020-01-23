
var slide = 0;
var firstPoemSlide = 7;
var lastPoemSlide = 12;
let lastSlide = 29;
// import TypeWriting from 'typewriting'?;
            let textTop = [
               
    ``,

    `Fadó fadó...`,
    
    ``,
    ``,
    ``,
    ``,
    ``,
    `Am gaeth i m-muir
    Am tond trethan
    Am fuaim mara
    `,
    `Am dam secht ndirend
    Am séig i n-aill
    Am dér gréne
    Am cain lubai
    `,
    `Am torc ar gail
    Am he i l-lind
    Am loch i m-maig`
    ,
    `Am bri danae
    Am bri i fodb fras feochtu
    Am dé delbas do chind codnu
    `,
    `...Cáinte im gai 
    cainte gaithe.
    `,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    

    `1169 AD`

                
              ];
let textBottom = [
    
    ``,
    `
    According to legend,
    Gaelic people descend
    from an Iberian tribe
    called the Milesians. 
    `,
    `Breogán son of Brath
    son of Bile Galamh Míl Espáine
    had seven sons 
    `,
`    One of whom
     was a poet
    called 
    Amergin 
    the Milesian.
    `,
    `Amergin 
    led the Milesians
     to Ireland, 
    then ruled by 
    a tribe called 
     
    Dé Dannan.`,
    `The druids of Dé Danann 
    raised a magical storm 
    to keep Amergín’s 
    expedition from reaching land. 
    `,
    `But Amergín was a poet
    and words have power`,

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
   I am the point of the lance of battle`,
   `...(I am) a Song on a Spear
   an Enchantment of Winds.`
,  
`The storm calmed.`,
`The kings of Dé Danann 
were killed 
in single combat
 by the sons of Míl Espáine.`

,

`The Dé Danann 
retreated into the Earth,
and for thousands of years 
Gaelic civilization 
flourished in Ireland.`
,

`In 1169 AD 
Norman Mercenaries were invited to Ireland 
by the Gaelic king Diarmait Mac Murchada to help him control the province of Leinster.`
,
`So began 800 years of English rule in Ireland.`
,
`Over the centuries, Norman warlords sent to conquer became integrated into Gaelic society.`
,
`Subsequent waves of Crown forces faced the descendents of previous invaders who had become 

"More Irish than the Irish themselves"`
,
`By the start of the sixteenth century,
despite centuries of military campaigning,
English law existed only within
 ‘The Pale’, 
a small area of control surrounding Dublin Castle.`
,

`In 1580 yet another Gaelic rebellion was defeated.
The survivors were massacred on the orders of the English commander Lord Grey.`
,
`Grey’s  servant, the great poet Edmund Spencer wrote to Queen Elizebeth I, explaining why the Irish kept resisting English rule.`
,
`In his view, Ireland would never be totally 
"pacified" by the English until 
its indigenous language and customs had been destroyed.`
,
`"Soe that the speach being Irish, 
the hart must needes be Irishe; 
for out of the aboundance of the hart, 
the tonge speaketh"`
,
`Edmund Spencer
A Veue of the present state of Irelande
1596`
,
`It is the contention of this app that
Edmund Spencer was correct.
Language isn't merely communication.`
,
`Language is involved with the architecture of our synapses; with how we form thought.`







];
let images = [
    `placeHolder0.png`,
    `placeHolder0.png`,
    `a.png`,
    `blue-cape.gif`,
    `b.png`,
    `c.png`,
    ``,

    `sea.png`,
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
        if(slide=== firstPoemSlide-1){
            $('#middle').fadeOut();
            // alert();
            
        }
        if(slide >= firstPoemSlide && slide <= lastPoemSlide){
            $('#middle').addClass('sea');
            $('#middle').empty().css('background-image', `url('./images/About1/sea.png')`);
            
            $('#middle').fadeIn();

            $('#top-content').fadeOut();
            $('#bottom-content').fadeOut();
            setTimeout(function(){
                
                $('#top').empty().append(`<h3 id="top-content">${textTop[slide]}</h3>`);
                $('#top-content').fadeIn('slow')
                $('#bottom').empty().append(`<h3 id="bottom-content">${textBottom[slide]}</h3>`);
                $('#bottom-content').fadeIn('slow')
                                 
                },600);
        }
        else{
            
            
            $('#top-content').fadeOut();
            $('#middle').fadeOut();
            $('#bottom-content').fadeOut();
            
            setTimeout(function(){
                
                $('#middle').removeClass('sea');
                $('#top').empty().append(`<h3 id="top-content">${textTop[slide]}</h3>`);
                $('#top-content').fadeIn('slow')
            
                $('#middle').empty().css('background-image', `url('./images/About1/${images[slide]}')`);
                
                $('#bottom').empty().append(`<h3 id="bottom-content">${textBottom[slide]}</h3>`);
                $('#bottom-content').fadeIn('slow')
                $('#middle').fadeIn('slow')
                                 
                },600);
            }        
        
        
        
        // $('#middle-content').fadeIn()

        // $('#bottom').append(`<h2 id="bottom-content">${textBottom[slide]}</h2>`)


}

});