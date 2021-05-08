console.log("Your index.js file is loaded correctly!");
/*
https://www.tutorialspoint.com/jquery/effect-bounce.htm
*/
$(".button").on("click",function(){
    $(this).effect( "bounce", { times: 4, direction:"right"}, "slow" );
  });