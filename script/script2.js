// JavaScript Document
var nav=document.getElementById("nav");
	
function closeAds(){
		var ads=document.getElementById("ads");
		
		ads.style.display="none";
	
		
}

function showMenu(){
	var bigMenu=document.getElementById("bigmenu");
	bigMenu.style.visibility="visible";
	bigMenu.style.opacity="1";
	
}
function hideMenu(){
	var bigMenu=document.getElementById("bigmenu");
	bigMenu.style.visibility="hidden";
	bigMenu.style.opacity="0";
	
}
var myIndex = 0;


function slideshow() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideshow, 3000); // Change image every 2 seconds
}
var index=0;
var ss=document.getElementsByClassName("mySlides");

var n=ss.length;
function hienSlideKeTiep(){
	ss[index].style.display="none";
	index++;
	if(index==n)
		index=0;
	ss[index].style.display="block";
}
function hienSlideTruoc(){
	ss[index].style.display="none";
	index--;
	if(index<0)
		index=2;
	ss[index].style.display="block";
}





	