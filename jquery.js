
$(document).ready(function(){
    $(".click").click(function(){
        // console.log("poop");
        alert("You clicked a button!");
    })
    $(".hide").click(function(){
        $(".hp").hide();
    })
    $(".show").click(function(){
    	$(".hp").show();
    })
    $(".toggle").click(function(){
    	$(".togP").toggle();
    })
    $(".slideDown").click(function () {
  		if ( $( ".sDown" ).is( ":hidden" ) ) {
    		$( ".sDown" ).slideDown("slow");} 	
    	else {
    		$( ".sDown" ).hide();}
	})
	$(".slideUp").click(function () {
  		if ( $( ".sUp" ).is( ":hidden" ) ) {
    		$( ".sUp" ).show();} 	
    	else {
    		$( ".sUp" ).slideUp("slow");}
	})
	$(".slideToggle").click(function(){
		$(".sTp").slideToggle();
	})
	$(".fadeIn").click(function() {
		$(".fade").fadeIn();
	})
	$(".fadeOut").click(function() {
		$(".fade").fadeOut();
	})
	$(".addClass").click(function(){
		$("p").addClass("boom");
	})
	$(".before").click(function(){ //needs some fixing and messing with 
		$("p").before("BEFORE the <p> tags");
	})
	$(".after").click(function(){ //needs some fixing and messing with
		$("p").after("AFTER the <p> tags");
	})
})

