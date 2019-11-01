$(function() {
    // Add a new burger.
	$(".addBurgers").on("click", function(event){
		event.preventDefault();
		var id = $(this).data("id")

		var newBurger = {
			burger_name: $("#newBurgers").val().trim(),
			devoured: 0
		};
		console.log(`${id} ${newBurger.burger_name} has been added `)

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function(){
			console.log(`Added new burger`)
			//Reload the page to get updated burger list
			location.reload();
		})
	})

	$(".notDevoured").on("click", function(){
	

		var id = $(this).data("id");
		var devouredState = {
			devoured: 1
		}

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devouredState
		}).then(function(){
			console.log(`Burger has been devoured`);
			location.reload();
		})
	});
})