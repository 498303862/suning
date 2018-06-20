window.onload=function(){
	//下拉左开始
	let tbzuobox=document.getElementsByClassName("tbzuobox")[0];
	console.log(tbzuobox);
	let a=tbzuobox.getElementsByTagName("a");
	console.log(a);
	let xiala1=document.getElementsByClassName("xiala1")
	console.log(xiala1)
	
		a[0].onmouseenter=function(){
			xiala1[0].style.height="240px"
			xiala1[0].style.border="1px solid #dddddd"
			xiala1[0].style.borderTop="none"
		}
		a[0].onmouseleave=function(){
			xiala1[0].style.height="0"
			xiala1[0].style.border="none"
		}
		a[1].onmouseenter=function(){
			xiala1[1].style.height="123px"
			xiala1[1].style.border="1px solid #dddddd"
			xiala1[1].style.borderTop="none"
		}
		a[1].onmouseleave=function(){
			xiala1[1].style.height="0"
			xiala1[1].style.border="none"
		}
		a[2].onmouseenter=function(){
			xiala1[2].style.height="123px"
			xiala1[2].style.border="1px solid #dddddd"
			xiala1[2].style.borderTop="none"
		}
		a[2].onmouseleave=function(){
			xiala1[2].style.height="0"
			xiala1[2].style.border="none"
		}
	
		//下拉右开始
	let sngouwu=document.getElementsByClassName("sngouwu")[0];
	console.log(sngouwu);
	let aa=sngouwu.getElementsByTagName("a");
	console.log(aa)
	let div=sngouwu.getElementsByTagName("div");
	console.log(div)
		aa[0].onmouseenter=function(){
			div[0].style.height="123px"
			div[0].style.border="1px solid #dddddd"
			div[0].style.borderTop="none"
		}
		aa[0].onmouseleave=function(){
			div[0].style.height="0"
			div[0].style.border="none"
		}
		aa[1].onmouseenter=function(){
			div[1].style.height="160px"
			div[1].style.border="1px solid #dddddd"
			div[1].style.borderTop="none"
		}
		aa[1].onmouseleave=function(){
			div[1].style.height="0"
			div[1].style.border="none"
		}
		aa[3].onmouseenter=function(){
			div[7].style.height="400px"
			div[7].style.border="1px solid #dddddd"
			div[7].style.borderTop="none"
		}
		aa[3].onmouseleave=function(){
			div[7].style.height="0"
			div[7].style.border="none"
		}
		aa[6].onmouseenter=function(){
			div[9].style.height="223px"
			div[9].style.border="1px solid #dddddd"
			div[9].style.borderTop="none"
		}
		aa[6].onmouseleave=function(){
			div[9].style.height="0"
			div[9].style.border="none"
		}
		//左侧图开始
	let lbztul=document.getElementsByClassName("lbztul")[0];
	console.log(lbztul)	;
	let lb1=document.getElementsByClassName("lb1");
	console.log(lb1);
	let li=lbztul.getElementsByTagName("li");
	console.log(li);
		for(let i=0;i<li.length;i++){
			li[i].onmouseenter=function(){
				lb1[i].style.display="block"
		   }
		   li[i].onmouseleave=function(){
		   		lb1[i].style.display="none"
		   }
	  }
	  // 轮播图开始
	 
	let banner=document.querySelector(".banner")
	let lbtuzhong=document.querySelector(".lbtuzhong");
	console.log(lbtuzhong);
	let lis=document.querySelectorAll(".lbtuzhong li");
	console.log(lis);
	let lid=document.querySelectorAll(".boxdian li");
	console.log(lid);
	let bdaj=document.querySelector(".bdaj")
	let bdzaj=document.querySelector(".bdzaj")



	let index=0;
	let t=setInterval(move,2000);
	lis[0].style.zIndex=10;
	lid[0].className="hot";

	// 移入
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	// 点击
	 bdaj.onclick=function(){
		move()
	}
	 bdzaj.onclick=function(){
		move1()
	}
	// 正着轮播
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		lis.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		lid.forEach(function(meiyige){
			meiyige.className="";
		})
		lis[index].style.zIndex=10;
		lid[index].className="hot"
	}
	// 倒着轮播
	function move1(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		lis.forEach(function(meiyige){
			meiyige.style.zIndex=5;
		})
		
		lid.forEach(function(meiyige){
			meiyige.className="";
		})
		lis[index].style.zIndex=10;
		lid[index].className="hot"
	}

	// 点击轮播点
	for(let i=0;i<lid.length;i++){
		lid[i].onclick=function(){
			lis.forEach(function(meiyige){
				meiyige.style.zIndex=5;
			})
			lid.forEach(function(meiyige){
				meiyige.className="";
			})
			lis[i].style.zIndex=10;
			lid[i].className="hot";
			index=i;
		}
	}
		

}