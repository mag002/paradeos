
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


function showMini(){
	var minimenu=document.getElementById("myDropdown");
	minimenu.style.visibility="visible";
	minimenu.style.opacity="1";
}
function hideMini(){
	var minimenu=document.getElementById("myDropdown");
	minimenu.style.visibility="hidden";
	minimenu.style.opacity="0";
}
function myFunction() {
    var element = document.getElementById("myDropdown");
    element.classList.toggle("show");
}
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
function firstLoad(){
	var nav=document.getElementById("nav");
	nav.classList.add("fixed");
	slideshow();
	

}
function selectIMG(numb){
	var big=document.getElementById("bigimg");
	var imglist=document.getElementsByClassName("imglist");
	var c = imglist[numb].src;
	big.src=c;
	
}
function quantityClick(numb){
	var input=document.getElementsByClassName("quantity-input")[0];
	var num=input.value;
	if(num<=0){
		alert("Số lượng phải lớn hơn 0")
		input.value=1;  
	}
	else{
		if(numb==0)//tang
		{
			
			num++;
			
			input.value=num;
		}else{
			num--;
			input.value=num;
		}
	}

}
function showPrice(){
	var priceslide=document.getElementById("myRange");
	var value=document.getElementById("value");
	
	value.innerHTML=priceslide.value;
	}
	
function showLeftNav() {
	var blur=document.getElementById("blurBack");
	
	var leftnav = document.getElementById("left-nav");
	nav.classList.toggle("fixed");
	blur.classList.toggle("blur");
	
	leftnav.classList.toggle("show");	
}  
var s=document.getElementById("floatdiv");
function showpostion(event,num){
	var a=document.getElementsByClassName("infoImg")[num];
	var rect = a.getBoundingClientRect();
	var floatimg=document.getElementById("floatdiv-img");
	
	x=event.screenX;
	y=event.screenY;
	// s.innerHTML="<img src='"+a.src+"'>";
	floatimg.src=a.src;
	s.style.display="block";
	
	if(num<4){
		s.style.top=y+"px";
		if(num==3){
			s.style.left=rect.right-550+"px";
		}
		else{
			s.style.left=rect.right+"px";
		}	
		
	
	}
	else{
		if(num<8){
			s.style.top=y+700+"px";
			if(num==7){
				s.style.left=rect.right-550+"px";
			}
			else{
				s.style.left=rect.right+"px";
			}	
		}else{
			if(num<12){
				if(num==11){
					s.style.left=rect.right-550+"px";
				}
				else{
					s.style.left=rect.right+"px";
				}	
				s.style.top=y+1200+"px";	
			}
		}
	}
}
function hideInfo(){
	s.style.display="none";
}
