function main(tshirtwidth, tshirtheight){//window.onload = function() {
	alert("ghfkj");
	var imageScaleFactor = 0.80;
    var outputStride = 8;
    var flipHorizontal = false;
    var imageElementBack = document.getElementById('back');
	var imageElementOverlay = document.getElementById('overlay');
	var xShoulderMid;
	var yShoulderMid;
	var xShirtMid;
	var yShirtMid;
	var scale;
	var tshirtwidth = 431;                         // small - 431,685   // medium - 508, 762 // large - 609.6, 800
	var tshirtheight = 685 ;
	alert("hello");

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
      //console.log(xShoulderMid);
	  
	  var x3=pose.keypoints[1].position.x;
	  var y3=pose.keypoints[1].position.y;
	  var x4=pose.keypoints[2].position.x;
	  var y4=pose.keypoints[2].position.y;
	  var stdDistEyes = 64;     // 64 for men and 62 for female
	  var dist_eyes= Math.sqrt((x3-x4)*(x3-x4) + (y3-y4)*(y3-y4));
	  console.log(dist_eyes);
	  scale = dist_eyes*.7/stdDistEyes;          //stdDistEyes is to be chosen depending upon male or female
	  console.log(scale);
	 
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
	  var x3= pose.keypoints[11].position.x;
	  var y3= pose.keypoints[11].position.y;
	  xShirtMid = (x2 + (x1-x2)/2);
	  yShirtMid = Math.min(y1, y2) + Math.abs(y1 -y2)/2;
	  //console.log(xShirtMid);
	  var presentPixelDistanceW = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
	  console.log(presentPixelDistanceW);
	  var presentPixelDistanceH = Math.sqrt((x1-x3)*(x1-x3) + (y1-y3)*(y1-y3));
	  console.log(presentPixelDistanceH);
	  //console.log(presentPixelDistanceH);
	  var pixelNeededWidth = tshirtwidth*scale;
	  var pixelNeededHeight = tshirtheight*scale;
	  console.log(pixelNeededWidth);
	  console.log(pixelNeededHeight);
	  //var presentHeight = document.getElementById("overlay").height;
	  //var presentWidth = document.getElementById("overlay").width;
	  //console.log(presentWidth);
	  var SetWidth = document.getElementById("overlay").width * pixelNeededWidth / presentPixelDistanceW;
	  //console.log(SetWidth);
	  //var SetHeight = document.getElementById("overlay").height * pixelNeededHeight / presentPixelDistance;            //need to be modified
      var SetHeight = document.getElementById("overlay").height * pixelNeededHeight*.8 / presentPixelDistanceH;
	  
	     
	var mainImageWidth=document.getElementById("back").width;                  //###Set this accordingly in HTML
    var mainImageHeight=document.getElementById("back").height;                   //###Set this accordingly in HTML
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("back");
    ctx.drawImage(img, 0,0,mainImageWidth,mainImageHeight);
    var overlayImg = document.getElementById("overlay");
	xShirtMid= xShirtMid * pixelNeededWidth / presentPixelDistanceW;
	yShirtMid = yShirtMid * pixelNeededHeight*.6 / presentPixelDistanceH;
    var overlayPositionX= xShoulderMid - xShirtMid;    //#### find using formulae
	//console.log(overlayPositionX);
    var overlayPositionY= yShoulderMid - yShirtMid;    //#### find using formulae
    ctx.drawImage(overlayImg, overlayPositionX,overlayPositionY,SetWidth,SetHeight);           //the last two 50 to be replaced with image sizes
	                                                         
															 //end of scope of tshirt 
															 })
 															 //end of scope of persdon body
															 })
	
	
    
    
}///}
