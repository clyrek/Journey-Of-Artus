var ctx = document.getElementById('canvas').getContext('2d');

function play(animation) {
  let img = new Image();
  var totalNumberOfFrames = 8 // amount of images in the image
  var imageFrameNumber = 0 // This is changed to make the sprite animate  
  var widthOfImage = img.width; // find the width of the image
  var heightOfImage = img.height; // find the height of the image
  var widthOfSingleImage = 64; // The width of each image in the spirite
  
  setInterval(function() {
    ctx.clearRect(0, 0, 400, 400)    
    
    imageFrameNumber++; // changes the sprite we look at
    imageFrameNumber = imageFrameNumber % totalNumberOfFrames; // Change this from 0 to 1 to 2 ... upto 9 and back to 0 again, then 1...
    
    ctx.drawImage(img, 
      imageFrameNumber * widthOfSingleImage, 0, // x and y - where in the sprite
      widthOfSingleImage, heightOfImage, // width and height
      50, 50, // x and y - where on the screen
      widthOfSingleImage, heightOfImage // width and height
    );      
  }, 100)  
  
}
