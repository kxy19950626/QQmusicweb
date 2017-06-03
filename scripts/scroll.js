var scroll=(function(){
    		 
		var index = 0,
		     mark=null;
		//      function ttt(){
		 	//scrollIn(index+1);
		 	//setTimeout(ttt, 3000);
		// }
		// c=setTimeout(ttt,3000);
		 function scrollIn(i) {
			// console.log(i);
			
			if (i == index) return;
			
			//console.log(mark);
			if(mark) return;

			if (i < 0) { // z最左左滑动
				/*
				思路是将 ul 克隆出来
				
				*/
				var current=list.offsetLeft;
				var targeLeft=-3600;
				function run(){
					current-=30;
					list.style.left=current+"px";
					if(targeLeft==current) {
						mark = null;
						return;
					}
					mark=setTimeout(run,5);
				}
				mark = setTimeout(run,5);
				index=3;
				resetActive(index);
				
			} else if (i > 3) { // 最右
				var current=list.offsetLeft;
				var targeLeft=0;
				function run(){
					current+=30;
					list.style.left=current+"px";
					if(targeLeft==current) {
						mark = null;
						return;
					}
					mark=setTimeout(run,5);
				}
				mark=setTimeout(run,5);
				index=0;
				resetActive(index);
			
			} else {
				if (i > index) { // right
					rollForward(i);
					
				} else { // left
					rollback(i);
				}
				resetActive(index);

			}

			
			
		}


		function rollback(i) {
			var current=list.offsetLeft;
			var targeLeft=current+(index-i)*1200;
			console.log(targeLeft);
			console.log(current);
			function run(){
				current+=10;
				list.style.left=current+"px";
				if(targeLeft==current) {
					mark = null;
					return;
				}
				mark=setTimeout(run,5);

			}
			mark=setTimeout(run,5);
			//list.style.left=targeLeft+"px";
			index=i;
			

		}

		function rollForward(i) {
			
			var current = list.offsetLeft; 
			var targeLeft = current - (i - index) * 1200;

			function run () {
				current -= 10;
				list.style.left = current + 'px';
				//console.log(current);
				//console.log(targeLeft);
				if (targeLeft == current) {
					mark = null;
					return;
				}
				mark=setTimeout(run, 5);
			}

			mark=setTimeout(run, 5);
			// 使用超时调用来模拟间歇调用
			//console.log('forward ' + mark);
			//list.style.left=targeLeft+"px";
			index=i;
			
		}

		function resetActive(i){
			for(var j=0;j<dot_li.length;j++){
		 			dot_li[j].classList.remove("active");
		 		}
		 		
		 		dot_li[i].classList.add("active");
		 	



		}
		return function( ulElement,btnL,btnR,Dot,container){
			//list =document.getElementById('playlist'),
			 list=document.getElementById(ulElement);
			 //container=list.parentNode;
			container=document.getElementById(container);
			 //alert(container);
		    // btnLeft = document.getElementById('btn_left'),
		    	btnLeft=document.getElementById(btnL);
		     //btnRight = document.getElementById('btn_right'),
		      	btnRight=document.getElementById(btnR);
		      	dot=document.getElementById(Dot);
		 	dot_li=dot.getElementsByTagName("li");

		btnRight.onclick = function () {

			scrollIn(index + 1);
		};
		btnLeft.onclick=function(){
			scrollIn(index-1);
		}

		var timer;
		 function play() {
                //重复执行的定时器
	                	timer = setInterval(function () {
	                    	btnRight.onclick();
	               	 }, 3000)
            		};
            		function stop(){
            			clearInterval(timer);
            		};
            		 container.onmouseover = stop;
            		container.onmouseout = play;
            	
            		play();

		
		 var dot=document.getElementById("dot");
		  
		 
		 for(var i=0;i<dot_li.length;i++){
		 	dot_li[i].index=i;



		 	dot_li[i].onclick=function(){
		 		for(var j=0;j<dot_li.length;j++){
		 			dot_li[j].classList.remove("active");
		 		}
		 		
		 		scrollIn(this.index);
		 		dot_li[this.index].classList.add("active");
		 	}

		 }
		}



    	})();