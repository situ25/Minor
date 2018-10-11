
window.onload = function() {
	var imageScaleFactor = 0.80;
    var outputStride = 8;
    var flipHorizontal = false;
    var imageElementBack = document.getElementById('back');
	var imageElementOverlay = document.getElementById('overlay');
	var xShoulderMid;
	var yShoulderMid;
	var xShirtMid;
	var yShirtMid;

    posenet.load().then(function(net){
      return net.estimateSinglePose(imageElementBack, imageScaleFactor, flipHorizontal, outputStride)
    }).then(function(pose){                      //scope of person body starts here
		
      console.log(pose);
	  var x1=pose.keypoints[5].position.x;
	  var y1=pose.keypoints[5].position.y;
	  var x2=pose.keypoints[6].position.x;
	  var y2=pose.keypoints[6].position.y;
	  yShoulderMid = Math.min(y1, y2) + Math.abs(y1 -y2)/2;
	  xShoulderMid = x2 + ((x1-x2)/2);
      console.log(xShoulderMid);
	  
	  //var stdDistEyes = 64;     // 64 for men and 62 for female
	  //var dist_eyes= Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
	  //var scale = stdDistEyes/ dist_eyes;          //stdDistEyes is to be chosen depending upon male or female
	 
	 
	 //Now defining the size of the tshirt image
	 //newHeight= 
	 
	 
	  //console.log(dist_eyes);

	
	posenet.load().then(function(net){
      return net.estimateSinglePose(imageElementOverlay, imageScaleFactor, flipHorizontal, outputStride)
    }).then(function(pose){                       //scope of t shirt starts here
      console.log(pose);
	  var x1=pose.keypoints[5].position.x;
	  var y1=pose.keypoints[5].position.y;
	  var x2=pose.keypoints[6].position.x;
	  var y2=pose.keypoints[6].position.y;
	  xShirtMid = x2 + (x1-x2)/2;
	  yShirtMid = Math.min(y1, y2) + Math.abs(y1 -y2)/2;
	  console.log(xShirtMid);
    
	var mainImageWidth=document.getElementById("back").width;                  //###Set this accordingly in HTML
    var mainImageHeight=document.getElementById("back").height;                   //###Set this accordingly in HTML
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("back");
    ctx.drawImage(img, 0,0,mainImageWidth,mainImageHeight);
    var overlayImg = document.getElementById("overlay");
    var overlayPositionX= xShoulderMid - xShirtMid;    //#### find using formulae
	console.log(overlayPositionX);
    var overlayPositionY= yShoulderMid - yShirtMid;    //#### find using formulae
    ctx.drawImage(overlayImg, overlayPositionX,overlayPositionY,document.getElementById("overlay").width,document.getElementById("overlay").height);           //the last two 50 to be replaced with image sizes
	                                                         
															 //end of scope of tshirt 
															 })
 															 //end of scope of persdon body
															 })
	
	
    
    
}
