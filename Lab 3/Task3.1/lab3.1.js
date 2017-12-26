function showDate(){
  document.getElementById("date").innerHTML = Date()
}
function myRandom(){
  document.getElementById("ran-num").innerHTML = Math.floor(Math.random() * 1000) + 1;
}
function Cong(){                
  var a = Math.floor(Math.random() * 100) + 1;
  document.getElementById("number1").innerHTML = a;        
  var b = Math.floor(Math.random() * 100) + 1;
  document.getElementById("number2").innerHTML = b;     
  var c = Number(a) + Number(b);
  document.getElementById("number3").innerHTML = c;                            
}
function switchImg(){
	var counter = 1;
	var maxImg = 3;
	setInterval(function(){
		counter ++;
		if(counter > maxImg){counter = 1;}
		var url = "pictures/pic" + counter +".jpg";
		document.body.style.backgroundImage = "url("+url+")";
	},5000);	
}