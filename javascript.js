window.onload = function() {
    
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