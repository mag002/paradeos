// JavaScript Document
var nav=document.getElementById("nav");
	
function closeAds(){ //tắt quảng cáo
		var ads=document.getElementById("ads");
		var fm=document.getElementById("fm");
		var ms=document.getElementById("mainslide");
		var sl1=document.getElementById("slide1");
		sl1.classList.add("fade");//thêm fade cho slide đầu nếu slide đầu fade sẵn sẽ che ads
		ms.style.overflow="hidden";//cái đống này là bug
		nav.style.position="fixed";//lúc đầu nav bar fix sẽ che ad
		ads.style.display="none";
		fm.style.paddingTop="75px";
		slideshow();//chạy slide
		
}

function showMenu(){//hiện bigmenu
	var bigMenu=document.getElementById("bigmenu");
	bigMenu.style.visibility="visible";
	bigMenu.style.opacity="1";
	
}
function hideMenu(){//tắt bigmenu
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
    setTimeout(slideshow, 4500); // đổi sau bao nhiêu giây
}
var index=0;
var ss=document.getElementsByClassName("mySlides");
ss[0].style.display="block";
var n=ss.length;
function hienSlideKeTiep(){ //next slide
	ss[index].style.display="none";
	index++;
	if(index==n)
		index=0;
	ss[index].style.display="block";
}
function hienSlideTruoc(){ //prev slide
	ss[index].style.display="none";
	index--;
	if(index<0)
		index=2;
	ss[index].style.display="block";
}

	