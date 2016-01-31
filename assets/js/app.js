$(document).foundation();

// INDEX
$(document).ready(function() {
     
      $("#slider").owlCarousel({
     	autoPlay: 2400, 
     	stopOnHover : true,
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
      });
     
    });

