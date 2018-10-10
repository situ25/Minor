
window.onload = function() {
	var imageScaleFactor = 0.25;
    var outputStride = 16;
    var flipHorizontal = false;
    var imageElement = document.getElementById('back');

    posenet.load().then(function(net){
      return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)
    }).then(function(pose){
      //console.log(pose);
	  var x1=pose.keypoints[1].position.x;
	  var y1=pose.keypoints[1].position.y;
	  var x2=pose.keypoints[2].position.x;
	  var y2=pose.keypoints[2].position.y;
	  //console.log(x1-x2);
	  //console.log(y1);
	  //console.log(y2);
	  //console.log(y1-y2);
	  //!!!get from user
	  var stdDistEyes = 64;     // 64 for men and 62 for female
	  var dist_eyes= Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
	  var scale = stdDistEyes/ dist_eyes;          //stdDistEyes is to be chosen depending upon male or female
	 
	 
	 //Now defining the size of the tshirt image
	 //newHeight= 
	 
	 
	  console.log(dist_eyes);
	  window.alert(pose);
    }) 
	
	
    
    var mainImageWidth=document.getElementById("back").width;                  //###Set this accordingly in HTML
    var mainImageHeight=document.getElementById("back").height;                   //###Set this accordingly in HTML
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("back");
    ctx.drawImage(img, 0,0,mainImageWidth,mainImageHeight);
    var overlayImg = document.getElementById("overlay");
    var overlayPositionX=87;    //#### find using formulae
    var overlayPositionY=110;    //#### find using formulae
    ctx.drawImage(overlayImg, overlayPositionX,overlayPositionY,95,95);           //the last two 50 to be replaced with image sizes
}
    