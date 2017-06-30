window.onload=function(){
	
	var t_r = document.getElementById("t_r");

	var oUl = t_r.getElementsByTagName("ul");
	 	for (var i=0;i<oUl.length;i++){
	      	if (oUl[i].className==""){
	         	oUl[i].onmouseover = function(){fnNav(this,"block")};
	          	oUl[i].onmouseout = function(){fnNav(this,"none")};
	        }
	    }
	function fnNav(obj,flag){
	    obj.getElementsByTagName("dl")[0].style.display = flag;
	}


	

	var nav = document.getElementById("nav-l").childNodes;
	 	for (var i=0;i<nav.length;i++){
	      	if (nav[i].className==""){
	         	nav[i].onmouseover = function(){fnNav(this,"block")};
	          	nav[i].onmouseout = function(){fnNav(this,"none")};
	        }
	    }

}	






