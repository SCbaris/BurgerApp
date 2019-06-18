$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id"); // first it takes id from database
                                   // and send this jquery take database id value
      var newStatus = $(this).data("newstatus");
  
      var newState = {
        devoured: newStatus
      };
  
      // Send the PUT request. 
      // Put request is similar to update.
      // When we send, updateOne gonna take it.
      //red.params.id = id 
      //
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("changed status to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        burger_name: $("#burbur").val().trim(),
      };

  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });