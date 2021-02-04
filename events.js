//javascript events for html page -no linked now, because copied from the platfrom. to have it work- need to link between the files//
function str2json() {
        var str = document.getElementById('jsonData').innerHTML;
        var jsonObj = JSON.parse(str);
        console.log(jsonObj);
    }

function myFunction() {
  document.getElementById("demo").innerHTML = "I know - that YOU CLICKED IT!";
}
/*
if (typeof jQuery == "undefined") {alert("jQuery is not installed")} else {alert("jQuery is installed correctly!")}
var name=prompt ("What's your name?");
alert ("Welcome, "+name);
*/
//study and use all jquery requests etc.
//+ other js code (buttons etc)

//all jquery inside 1 $(function(){});
$(function(){
$("#title").text("This is 2 TiTlE!!");  
 var picSrc= $("#pic").attr("src");
  alert("Picture with id 'pic' is from "+picSrc);
  console.log(picSrc);//shows in console after I click "ok" on alert
  
  $("#pic").css("border-color","black");
  $("#pic").css("border-width", "5px");
  $("#title").css("color","purple");
  $("#title").css("opacity", "100%");
  
  //$9""img).each.. -iterating/looping through ALL* images in the document.
  //if need only particular in a div or section- need to put it in a class/parent:
   $(".d-block img").each(function () {
     var img= $(this).attr("src");
     console.log(img);
   });
  //changing text of title on click:
  $("#title").click(function(){
  $(this).text("TITLE CHANGED 3 TIMES!");
   $("#title").css("color","red");
  });
  $("#header2").hide();
  //$("a img").hide();
  $("#picrow div").click(function(){
  $(this).css("opacity","60%");//applies to a single img inside that div! not all at once
  });
  
  $("#hoverme").click(function(){
    ////using JSON syntax to set multiple CSS props:
  	$("#demo").css({"color":"red", "background":"black"});
   // $("#demo").css("background","black");
  });
  $("#demo").click(function(){
    //using JSON syntax to set multiple CSS props:
  	$("#demo").css({"color":"blue", "background":"green"});
    //$("#demo").css("background","green");
    $("#demo").text("Click the button again!");
  });
  
  //looks like mouseenter/mouseleave work only once (need to reload page to do again). 
  //(there's "hover" option, too- for every time)
   $(".img-fluid").eq(10).mouseleave(function(){
    $(this).css({"border":"none"});
  });
  $(".img-fluid").eq(10).mouseenter(function(){
    $(this).css({"border-color":"red", "border-width":"8px"});
  });
  
  $("#urtext").keyup(function() {
    $("#msg").html($("#urtext").val());
  });
  //with methods "on" , "off" - can add or delete several event handlers("keydown", "keyup". "mouseenter" etc):
  $("#urtext").on("keydown", function() {
    $("#msg").css({"border-color":"pink", "border-width":"7px", "max-width":"100%"});
   // alert("MFH!!!");
  });
  
  //handling events: (event)-object - has methods:
  $("a").click(function(event) {
  alert(event.pageX);
    event.preventDefault();
  });
          
        
  //***
  //d-inline-block - keeps the div element inline with the previous + flexible(when moretext- enlarges!)
 //***
  
  
  /*
  $("h1").each(function() {
  var h1= $("h1").text();
  alert(h1);
  });
 
 $("h1").click(function(){
 $(this).removeAttr("style");
 });
 */
  
  /*
  could use some of these:
  
$( "img" ).each( function( index, element ){
    console.log( $( this ).text() );
});
  $( "img" ).map( function(index, element) {
    return this.id;
}).get();
  
  $( "img" ).each( function( index, src ){
    console.log( $( this ).src() );
});
  */
});

var list =["banana", "apple"];
console.log(list);

 

var ad = {
 name: "John Deere",
 price: 100,
 time: 2
}
json.stringify(ad);

  
