$(document).ready(function(){

    // var electronicItemsFromServer = [
    //     {
    //         "image" : "img2.png",
    //         "name" : "Dummy Data",
    //         "rating" : "0",
    //         "reviews" : "0"
    //     }
    // ];

    $.ajax({
        url : "https://mocki.io/v1/6ee2dabe-7ea7-4416-99c1-ba44bdb54c11",
        type : "GET",
        //Kept for Asynchronous call where the AJAX call runs later
        //async : true,
        async : false,
        success : function(data) {
            electronicItemsFromServer = data
            console.log("Called from Inside AJAX")
        }
    });

    console.log("Called from Outside AJAX")

    $.each(electronicItemsFromServer, function(index, electronicItem) {
       var template = document.querySelector("#my-template");
       template.content.querySelector(".element-img").src = "image/" + electronicItem.image;
       template.content.querySelector(".element-title").innerHTML = electronicItem.name;
       template.content.querySelector(".element-rating").innerHTML = electronicItem.rating + ' <i class="fa fa-star" aria-hidden="true"></i>';
       template.content.querySelector(".element-reviews").innerHTML = "(" + electronicItem.reviews + ")";

       var clone = document.importNode(template.content, true); 
       $("#element-print-section").append(clone);
    })
});