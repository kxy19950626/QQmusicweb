var tab = (function () {/*为什么要将这个立即执行的函数赋给一个变量，因为函数一旦执行完便不存在，所以必须取得它的引用，什么引用，在Javascript中出那几种基本数据类型外，其他赋值过来的都是引用。*/

			var btn, 
			      btn2,
			      list,
			   
			      dots,
			      index = 2,
			      flag = false,
			      length = 0;
			     
			
			

			function tabforward(){
				// console.log(index);
				list[(index-2) % length].style.left="1200px"
				list[(index-1) % length].style.left="-600px";
				list[(index) % length].style.left="0px";
				list[(index+1) % length].style.left="300px";
				list[(index+2) % length].style.left="600px";

				list[(index) % length].classList.remove("active");
				list[(index+1) % length].classList.add("active");
				list[(index+2) % length].classList.remove("hide");
				list[(index-2) % length].classList.remove("hide");

				list[(index-1) % length].classList.add("hide");
				list[(index-2) % length].classList.add("hide");  

				list[(index-1) % length].classList.remove("opac");
				list[(index+1) % length].classList.remove("opac");

				list[(index) % length].classList.add("opac");
				list[(index+2) % length].classList.add("opac");
				
				
			}
			function tabback(){
				// console.log(index);
				list[(index-2) % length].style.left="0px"
				list[(index-1) % length].style.left="300px";
				list[(index) % length].style.left="600px";
				list[(index+1) % length].style.left="1200px";
				list[(index+2) % length].style.left="-600px";
				
				
				//for (var i = -2; i < 2; i++) 
					//list[(index + i) %length].style.left = (i + 2) * 600 + 'px';
				//list[(index + i) % length].style.left="-400px";

				list[(index-2) % length].classList.remove("hide");
				list[(index-1) % length].classList.add("active");
				list[(index) % length].classList.remove("active");
				list[(index+2) % length].classList.remove("hide");

				list[(index+1) % length].classList.add("hide");
				list[(index+2) % length].classList.add("hide");  


				list[(index-2) % length].classList.add("opac");
				list[(index-1) % length].classList.remove("opac");
				list[(index) % length].classList.add("opac");
				list[(index+1) % length].classList.remove("opac");


			}
			
			return function (btnElemId, btnElemId2, listElemId, ctrl,container) {
				//settings = setting;
				btn = document.getElementById(btnElemId);
				btn2=document.getElementById(btnElemId2);
				container=document.getElementById(container);
				list = document.getElementById(listElemId).getElementsByTagName('li');
				length = list.length;

				dots = document.getElementById(ctrl).getElementsByTagName('li');



				btn.onclick=function(){  // event
					if(flag) return;

					flag = true;
			  		tabforward();

			  		dots[index%length].classList.remove('light');
			  		index++;
			  		console.log(index);
			  		setTimeout(function () {
						flag=false;
					}, 400);
					dots[index%length].classList.add('light');

					
				}
				btn2.onclick=function(){
					if(flag) return;
					flag=true;
					tabback();
					dots[index%length].classList.remove('light');
					index--;
					if (index < 2)  index += length;
					console.log(index);
					setTimeout(function(){
						flag=false;
					},400);
					dots[index%length].classList.add('light');


				}
			 var timer;//申明一个局部变量 timer
			 function start() {
                //重复执行的定时器
		                	timer = setInterval(function () {//这个timer是对外边的timer的引用
		                    	btn2.onclick();
		               	 }, 3000);
	            		};

	            		function stopTap(){
	            			clearInterval(timer);
	            		};
	            		 container.onmouseover = stopTap;
	            		container.onmouseout = start;
	            	
	            		start();
			};
		})();
