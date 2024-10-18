//code for side-abr-btn

let sideBarBtn = document.querySelector("#sideBarBtn");
let sideBbrMenuBtn = document.querySelector("#sideBbrMenuBtn");
let leftCol = document.querySelector("#leftCol");

sideBarBtn.addEventListener("click", function(){
    leftCol.classList.add("side_bar-toggler")
})


sideBbrMenuBtn.addEventListener("click", function(){
    leftCol.classList.remove("side_bar-toggler")
})
document.addEventListener('DOMContentLoaded', function() {
    let playBtn = document.getElementById('playButton');

    playBtn.addEventListener('click', function(){
        var video = document.getElementById("bannerVideo");
        playBtn.classList.add("d-none"); // Hide the thumbnail (play button)
        video.play(); // Play the video

        console.log(playBtn);
        
    });
});


document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0]; 
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result; 
            imagePreview.classList.add('preview');
        };

        reader.readAsDataURL(file); 
    }
});



