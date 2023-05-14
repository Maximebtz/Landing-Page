let video = document.querySelector("#video");

video.addEventListener('mouseover', ()=>{
    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video:true})
        .then(function(stream){
            video.srcObject = stream;
        })
        .catch(function (errOr){
            console.log("Something went wrong!");
        });
    }
})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }