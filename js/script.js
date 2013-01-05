/*Author : Saurav*/

var color_before = 'rgb(255, 205, 0)';
var color_after  = 'rgb(255, 150, 0)';
var color_tiles = rn(3,9);					/*3 to 9 tiles to be coloured initially*/

window.onload = function(){
    $("td").css("background",color_before);
    console.log(color_tiles);
    for(i=0;i<color_tiles;i++){
    	swapcolor(rn(1,25));  /*swap color any random tile*/
    }
}
  
function rn(i,j){ return Math.round(Math.random()*(j-i-1)) + i }  /*returns a random number between i and j */
  
$("td").click(function() {
    var id = ($(this).attr('id'));
    var tno = idtonum(id);
    
    playclicksound();
    
      if(tno%5 == 0){
        Bigswap(tno,tno+5,tno-1,tno-5);
      }
      if (tno%5 == 1){
        Bigswap(tno,tno+1,tno-5,tno+5);
      }
      if(tno%5 != 0 && tno%5 != 1){
        Bigswap(tno,tno+1,tno-1,tno-5,tno+5);
      }
  
   
});

function Bigswap(n1,n2,n3,n4,n5){
    swapcolor(n1);
    swapcolor(n2);
    swapcolor(n3);
    swapcolor(n4);
    swapcolor(n5);
}

function swapcolor(num){
  var n = String(num);
  var color = $("#tile-"+n).css("background-color");
  if (color == color_before){
    $("#tile-"+n).css("background",color_after);
    $("#tile-"+n).css("-webkit-transform","rotateY(-180deg)");
    $("#tile-"+n).css("-webkit-box-shadow"," inset 0 0 10px #000000");
  }
  else{
    $("#tile-"+n).css("background",color_before);
    $("#tile-"+n).css("-webkit-transform","rotateY(-360deg)");
    $("#tile-"+n).css("-webkit-box-shadow","inset 0 0 0px #000000");
  }
}

function idtonum(str){
    var l = str.charAt(str.length - 1);
    var sl = str.charAt(str.length - 2);
    var num = parseInt(sl + l);
  if( num < 0  ){return parseInt(l);}
  else {return num ;}  

}

if($("td").css("background-color")==color_after){
  alert('Hooray !!! you won');

}


function playclicksound(){
	 var sound = $("#sound")[0];  

    sound.src = "lib/sound.wav";
    sound.play();
}
