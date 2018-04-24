
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
		$(".before_element").before("STUFF");
	})
	$(".after").click(function(){ //needs some fixing and messing with
		$(".after_element").after("STUFF");
	})
	$(".append").click(function (){
		$(".stuff").append("STUFF");
	})
	// $(".html").click(function(){
	// 	$(".html").html("Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.");
	// })
	// $( "input" ).change(function(){
 //    var $input = $( this );
 //    	$( "p" ).html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
 //      	".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
 //      	".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
 	$( "input" ).keyup(function() {
    	var value = $( this ).val();
    	$( ".hidden_text" ).text( value );
  	}).keyup();
})

