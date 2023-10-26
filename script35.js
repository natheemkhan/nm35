// Get the button and resume image elements by their IDs
var viewResumeButton = document.getElementById("viewResumeButton");
var resumeImage = document.getElementById("resumeImage");

// Add an event listener to the button to toggle the visibility of the resume image
viewResumeButton.addEventListener("click", function () {
    if (resumeImage.style.display === "none") {
        resumeImage.style.display = "block";
    }else {
        resumeImage.style.display = "none";
    }
});
