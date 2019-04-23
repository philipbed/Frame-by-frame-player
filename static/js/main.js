var vid1 = document.getElementById("myVideo1");
var vid2 = document.getElementById("myVideo2");
var frameRate = 25;
// var oldOnPlay = vid.onplay;
function setPlaySpeed1() { 
  console.log(frameRate);
  vid1.onplay = function() {
    // setTimeout(function() {
        vid1.pause();
        setInterval(function() {
            vid1.currentTime += (1 / frameRate);
            
        }, 1000);
  }
    // }, 1000);
  
} 

function setPlaySpeed2() { 
  console.log(frameRate);
  vid2.onplay = function() {
    // setTimeout(function() {
        vid2.pause();
        setInterval(function() {
            vid2.currentTime += (1 / frameRate);
            
        }, 1000);
  }
    // }, 1000);
  
} 



function getFrameRate(){
    fetch('/fps')
    .then( response => response.json() )
    .then(function( response ){
        console.log(response);
        frameRate = response.fps;
    });
}

function toggleVideoInput(){
    const fileRadio = document.getElementById("fileRadio");
    const fileUpload = document.getElementById("fileInput");
    const urlUpload = document.getElementById("urlInput");

    if ( fileRadio.checked ){
        fileUpload.classList.remove('hide');
        urlUpload.classList.add('hide');
    }
    else {
        fileUpload.classList.add('hide');
        urlUpload.classList.remove('hide');
    }
}

function handleSubmit( event ){
    event.preventDefault();
    const source = document.querySelector('#myVideo1 > source');
    console.log(source);
    const fileRadio = document.getElementById("fileRadio");
    const fileUpload = document.getElementById("fileInput");
    const urlUpload = document.getElementById("urlInput");
    if ( fileRadio.checked ){
        console.log(fileUpload.value);
        source.src  = "/static/"+fileUpload.files[0].name;
        vid1.load();
    }
    else {
        source.src = urlUpload.value;
    }
    
    return false;
}