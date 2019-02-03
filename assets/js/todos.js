$("#toDoItems").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click x to remove item
$("#toDoItems").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation;
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$("#toDoItems").append("<li> <span><i class='fa fa-trash'></i> </span>" + text + "</li>");
	}
}); 
	
$("button").click(function(){
	if (this.id === "b1") {
		$("body").css({
			background: "#1D4350",
			background: "-webkit-linear-gradient(to right, #A43931, #1D4350)", 
			background: "linear-gradient(to right, #A43931, #1D4350)"
		});

		$("button").prop("disabled", false);
		$(this).prop("disabled", true);


	} else if (this.id === "b2"){
		$("body").css({
			background: "#3a6186",  // fallback for old browsers //
			background: "-webkit-linear-gradient(to right, #89253e, #3a6186)",  // Chrome 10-25, Safari 5.1-6 //
			background: "linear-gradient(to right, #89253e, #3a6186)"
		});	
		$("button").prop("disabled", false);
		$(this).prop("disabled", true);

	} else if (this.id === "b3"){
		$("body").css({
			background: "#2C3E50",  
			background: "-webkit-linear-gradient(to right, #FD746C, #2C3E50)",
			background: "linear-gradient(to right, #FD746C, #2C3E50)" 
		});
		$("button").prop("disabled", false);
		$(this).prop("disabled", true);

	}else if (this.id === "b4"){
		$("body").css({
			background: "#43C6AC",  // fallback for old browsers //
			background: "-webkit-linear-gradient(to right, #191654, #43C6AC)",  // Chrome 10-25, Safari 5.1-6 //
			background: "linear-gradient(to right, #191654, #43C6AC)", // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ //

		});
		$("button").prop("disabled", false);
		$(this).prop("disabled", true);

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();

});
