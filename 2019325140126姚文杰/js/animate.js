window.onload = function(){
				var box = document.getElementsByClassName("box")[0];
				var small = box.children[0];
				var big = box.children[1];
				var bigImg = big.children[0];
				var mask = small.children[1];
				
				//big和mask在鼠标移入small时显示，移出时隐藏
				small.onmouseenter = function(){
					big.style.display = "block";
					mask.style.display = "block";
				};
				small.onmouseleave = function(){
					big.style.display = "none";
					mask.style.display = "none";
				};
				
				small.onmousemove = function(event){
					event = event || window.event;
					//mask跟随鼠标移动，且不会超出small范围
					//x作为mask的left值，y作mask的top值。
					var pagex = event.pageX || scroll().left + event.clientX;
					var pagey = event.pageY || scroll().top + event.clientY;
					
					//减去mask宽高的一半，让鼠标在mask的中间
					var x = pagex - box.offsetLeft - mask.offsetWidth/2;
					var y = pagey - box.offsetTop - mask.offsetHeight/2;
					
					//不让mask超出small
					if(x < 0){
						x=0;
					}
					if(x > small.offsetWidth - mask.offsetWidth){
						x = small.offsetWidth - mask.offsetWidth;
					}
					if(y < 0){
						y=0;
					}
					if(y > small.offsetHeight - mask.offsetHeight){
						y = small.offsetHeight - mask.offsetHeight;
					}
					
					mask.style.left = x + "px";
					mask.style.top = y + "px";
					
					//bigImg随着mask的移动移动
					//比例 = 大图移动的距离/mask移动的距离 = 大图/小图
					var scale = bigImg.offsetWidth / small.offsetWidth;
					
					bigImg.style.marginLeft = -scale * x +"px";
					bigImg.style.marginTop = -scale * y +"px";
				}
			};