// JavaScript Document
window.onload = function(){
			var oBtn = document.getElementById("btn_id");
			var oDiv = document.getElementById("testCode");


			oBtn.onclick = function(){
				//生成验证码
				oDiv.innerHTML = testCode(6); 
			}
			function testCode(n){
				//n 生成几位验证码
				var arr = []; //数组存储验证码
				for(var i = 0; i < n; i++){
					//<1>随机0~100的数
					var tmp = parseInt(Math.random() * 100);
					if(tmp < 10){ //数字
						arr.push(tmp);
					}else if(tmp >= 65 && tmp <= 90){ //大写字母
						var str = String.fromCharCode(tmp);
						arr.push(str);
					}else if(tmp >= 17 && tmp <= 42){ //小写字母
						var str = String.fromCharCode(tmp + 80);
						arr.push(str);
					}else{
						//无效数字
						i--;
					}
				}
				return arr.join("");
			}
		}