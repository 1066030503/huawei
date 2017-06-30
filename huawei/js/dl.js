// JavaScript Document
 window.onload = function(){
            var oUsername = document.getElementById("username");
            var oPassword = document.getElementById("password");
            var oUsername_span = document.getElementById("username_span");

            oUsername.onblur = function(){
                //对于用户名格式的判断在这里执行
                //1、对用户名中的空格进行剔除
                var newValue = oUsername.value.replace(/ /ig, "");
                oUsername.value = newValue;
                //2、用户名的长度进行判断
                if(newValue.length > 18 || newValue.length < 6){
                    oUsername_span.innerHTML = "用户名长度应该为6~18位";
                }else if(newValue[0] >= "0" && newValue[0] <= "9"){
                    //首字母是否为数字
                    oUsername_span.innerHTML = "用户名首字母不能为数字";
                }else if(!isABC(newValue)){
                    oUsername_span.innerHTML = "用户名必须由数字字母下划线组成";
                }else{
                    //用户名是对的
                    oUsername_span.innerHTML = "✅";
                }
            }
        }

        //str只能由数字、字母、_组成 是返回true 不是返回false
        function isABC(str){
            var isYes = true; //默认符合要求
            //将字符遍历，判断是否符合标准，如果有一个不符合标准，改成false
            for(var i = 0; i < str.length; i++){
                if(!(str[i] >= "a" && str[i] <= "z" || str[i] >= "A" && str[i] <= "Z" || str[i] >= "0" && str[i] <= "9" || str[i] == "_")){
                    isYes = false;
                }
            }
            return isYes;
        }