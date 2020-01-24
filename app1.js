
var slide = 0;
var firstPoemSlide = 7;
var lastPoemSlide = 11;
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
    `Am gaeth i m-muir <br/>
    Am tond trethan<br/>
    Am fuaim mara
    `,
    `Am dam secht ndirend <br/>
    Am séig i n-aill<br/>
    Am dér gréne<br/>
    Am cain lubai
    `,
    `Am torc ar gail<br/>
    Am he i l-lind<br/>
    Am loch i m-maig`
    ,
    `Am bri danae<br/>
    Am bri i fodb fras feochtu<br/>
    Am dé delbas do chind codnu
    `,
    `...Cáinte im gai<br/> 
    cainte gaithe.
    `,
    ``,
    ``,


    `1169 AD`,
    ``,
    `An Pháil`,
    `Éirí Amach <br/>
    1579-1583`,
    ``,
    `"Soe that the speach being Irish, 
the hart must needes be Irishe; 
for out of the aboundance of the hart, 
the tonge speaketh"`
,
    ``,
    ``,
    ``,
    ``,
    
                
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
     to an island ruled by 
    the Dé Dannan tribe.`,
    `The druids of Dé Danann 
    raised a magical storm 
    to keep Amergín’s 
    expedition from reaching land. 
    `,
    `But Amergín was a poet
    and words have power...`,

    `I am the wind which breaths upon the sea<br/>
  I am the wave of the ocean<br/>
  I am the murmur of the billows`,
    
  `I am Stag of Seven Tines<br/>
  I am a Hawk on a Cliff<br/>
  I am a beam of the sun<br/>
  I am the fairest of plants`,
      
  `I am a wild boar in valor<br/>
  I am a salmon in the water<br/>
  I am a lake in the plain`,
  
  `I am a word of science<br/>
   I am the point of the lance of battle`,
   `...(I am) a Song on a Spear<br/>
   an Enchantment of Winds.`
,  
`The kings of Dé Danann 
were killed in single combat
 by the sons of Míl Espáine.`

,

`Dé Danann 
retreated into the Earth,
and for thousands of years 
Gaelic civilization 
flourished in Ireland.`
,

`In 1169 AD, King Diarmait Mac Murchada invited Norman Mercenaries to help him control rebellion in Leinster.`
,
`King Henry II of England used this to declare the conquered cities 
crown-land. So began 800 years of English rule in Ireland.`
,

`By 1500 AD, despite centuries of military campaigning,
English law existed only around Dublin Castle.`
,

`In 1580 yet another Gaelic rebellion was defeated.
The survivors were massacred on the orders of the English commander Lord Grey.`
,
`Grey’s servant, the great poet Edmund Spencer wrote to Queen Elizebeth I, explaining why the Irish kept resisting English rule:`
,


`-Edmund Spencer
<i>A Veue of the present state of Irelande,
1596</i>`
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
    ``,
    ``,
    ``,
    ``,
    ``,//storm calmed
    `retreat.png`,
    
    `king.png`, //1169AD
    `norman.png`,
    `pale.png`,
    `ruairi.png`,
    `spencer.png`,
    `spencer.png`,
    ``,
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
                console.log( images[slide]);
                console.log( slide);

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