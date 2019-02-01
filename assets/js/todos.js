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
		$("#toDoItems").append("<li> <span>x</span> " + text + "</li>");
	}
}); 
	
