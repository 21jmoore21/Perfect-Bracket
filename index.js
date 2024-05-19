var imageArray = new Array();

imageArray[0] = "kris_jenkins_gw.jpeg";
imageArray[1] = "arike_gw.jpeg";

function doIt() {
    var rand = Math.floor(Math.random()*2);

    var imgPath = imageArray[rand];

    document.getElementById("image").src = imgPath;
}