var timer = setInterval(move_image, 5000);
var images = document.getElementsByClassName("carousel-image");
console.log("images: " + String(images.length));
var image_displayed = 0;

function move_image() {
    // Makes current image invisible
    images[image_displayed].id = "invisible";

    if (image_displayed + 1 < images.length){
        image_displayed += 1; // Moves to next image.
    }
    else
    {
        image_displayed = 0; // Loops to the beginnning image.
    }
    
    // Displays next image
    images[image_displayed].id = "visible";
}

function back_image() {
    // Makes current image invisible
    images[image_displayed].id = "invisible";

    if (image_displayed > 0){
        image_displayed -= 1; // Moves to previous image.
    }
    else
    {
        image_displayed = images.length - 1; // Loops to the end of the images.
    }
    
    // Displays next image
    images[image_displayed].id = "visible";
}

function refresh_timer()
{
    // Resets the timer when clicking on an arrow.
    clearInterval(timer);
    timer = setInterval(move_image, 5000);
    console.log("timer reset");
}

// Event listeners for arrows.
var back_arrow = document.getElementById("back");
back_arrow.addEventListener("click", back_image);
back_arrow.addEventListener("click", refresh_timer);

var forward_arrow = document.getElementById("forward")
forward_arrow.addEventListener("click", move_image);
forward_arrow.addEventListener("click", refresh_timer);



