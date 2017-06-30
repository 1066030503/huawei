window.onload=function(){
	var oUl =document.getElementById("ul1");
	var oLi = oUl.getElementsByTagName("li");
	var timer=null;
	var sun=0;
	function show(){
		clearInterval(timer)
		timer=setInterval(function(){
			
				for (var i=0;i<oLi.length;i++) {
					oLi[i].style.opacity="0";
				}
					
				startMove(oLi[0],{opactive:100})
				if (sun=2) {
					sun=0;
				}
				sun++;
				
				console.log(sun)
		},3000)
	
	}
	
	show()
	
	
}
