function i_d(id){
	return document.getElementById(id); 
}

function moveElement(elementID,final_x,final_y,interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {
	elem.style.left = "0px";
	}
	if (!elem.style.top) {
	elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		var dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x) {
		var dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}
	if (ypos < final_y) {
		var dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if (ypos > final_y) {
		var dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}
function classNormal(){
	var focusBtnList = i_d('banner_btn').getElementsByTagName('li');
	for(var i=0; i<focusBtnList.length; i++) {
		focusBtnList[i].className='';
	}
}
function focusChange() {
	var focusBtnList = i_d('banner_btn').getElementsByTagName('li');
	focusBtnList[0].onmouseover = function() {
		moveElement('banner_list',0,0,5);
		classNormal()
		focusBtnList[0].className='current'
	}
	focusBtnList[1].onmouseover = function() {
		moveElement('banner_list',-1920,0,5);
		classNormal()
		focusBtnList[1].className='current'
	}
	focusBtnList[2].onmouseover = function() {
		moveElement('banner_list',-3840,0,5);
		classNormal()
		focusBtnList[2].className='current'
	}
	focusBtnList[3].onmouseover = function() {
		moveElement('banner_list',-5760,0,5);
		classNormal()
		focusBtnList[3].className='current'
	}
}
setInterval('autoFocusChange()', 5000);
var atuokey = false;
function autoFocusChange() {
	i_d('banner').onmouseover = function(){
		atuokey = true
	}
	i_d('banner').onmouseout = function(){
		atuokey = false
	}
	if(atuokey) return;
	var focusBtnList = i_d('banner_btn').getElementsByTagName('li');
	for(var i=0; i<focusBtnList.length; i++) {
		if (focusBtnList[i].className == 'current') {
			var currentNum = i;
		}
	}
	if (currentNum==0 ){
		moveElement('banner_list',-1920,0,5);
		classNormal()
		focusBtnList[1].className='current'
	}
	if (currentNum==1 ){
		moveElement('banner_list',-3840,0,5);
		classNormal()
		focusBtnList[2].className='current'
	}
	if (currentNum==2 ){
		moveElement('banner_list',-5760,0,5);
		classNormal()
		focusBtnList[3].className='current'
	}
	if (currentNum==3 ){
		moveElement('banner_list',0,0,5);
		classNormal()
		focusBtnList[0].className='current'
	}
}
window.onload=function(){
	focusChange();
}