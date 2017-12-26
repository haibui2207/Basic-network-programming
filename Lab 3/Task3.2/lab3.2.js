//Format Jquery like this
+function($){

}(jQuery);
+function($){

}(jQuery);

$(document).ready(function(){

});
	
//
//Hide page2
+function($){
	$(".main-page1").show();
	$(".main-page2").hide();	
}(jQuery);

//
//Set input datepicker format ToDay
+function($){
	$("#datepicker").val(function(){
  		var date = new Date();
  		var d = date.getDate();
  		var m = date.getMonth()+1;
  		var y = date.getFullYear();  		
  		return d + "/0" + m +"/" +y;
  	});
}(jQuery);

//
//Datepicker collapse
+function($){
	$("#datepicker").datepicker({
		format: 'dd/mm/yyyy',
    	startDate: '-3d', 
        autoclose: true, 
        todayHighlight: true,       
  	});	
}(jQuery);

//
//Swich Header Welcom
+function($){
	var x;
	$("#main-page1-header-content-welcom").on("click",function(){
		var counter = 1;
		var max = 4;	
		x = setInterval(function(){	
			var text ,color ;
			if(counter == 0){
				text = "Hello !";
				color = "#fff";
				counter ++;
			}
			else if(counter == 1){
				text = "Have a nice day !";
				color = "#68cc41";
				counter --;
			}
			/*else if(counter == 2){
				text = "Please fill out the form !";
				color = "#54e1f9";
				counter = 0;
			}*/
			document.getElementById("main-page1-header-content-welcom").style.color = color;
			document.getElementById("main-page1-header-content-welcom").innerHTML = text;
		},1000);	
	});
	//Stop switch
	$("#main-page1-header-content-welcom").on("mouseover",function(){
		clearInterval(x);
	});
}(jQuery);

//
//Switch Background Image
+function($){
	var counter = 1;
	var maxImg = 4;
	setInterval(function(){
		counter ++;
		if(counter > maxImg){counter = 1;}
		var url = "pictures/pic" + counter +".jpg";
		document.body.style.backgroundImage = "url("+url+")";
	},10000);
}(jQuery);

//
//CountDown and click button OK
+function($){
	function CountdownTimer(elm,tl,mes){
	  this.initialize.apply(this,arguments);
	}
	CountdownTimer.prototype={
	  initialize:function(elm,tl,mes) {
	  this.elem = document.getElementById(elm);
	  this.tl = tl;
	  this.mes = mes;
	 },countDown:function(){
	  var timer = '';
	  var today=new Date();
	  var day= /*today.getDay();*/Math.floor((this.tl-today)/(24*60*60*1000));
	  document.getElementById("day-rest").innerHTML = day;
	  var hour=/*today.getHours();*/Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
	  var min=/*today.getMinutes();*/Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
	  var sec=/*today.getSeconds();*/Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
	  var me=this;

	  if( ( this.tl - today ) > 0 ){
	    timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
   		timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">HOURS</div><span class="number hour">'+hour+'</span></span>';
   		timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">MINS</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">SECS</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
	    this.elem.innerHTML = timer;
	    tid = setTimeout( function(){me.countDown();},10 );
	  }else{
	    this.elem.innerHTML = this.mes;
		document.body.style.backgroundImage = "url('pictures/bg.jpg')";
	    return;
 	  }
	},addZero:function(num){ return ('0'+num).slice(-2); }
	}
	function CDT(){

	// Set countdown limit
	var dmy = new Date();
	var gio = dmy.getHours();
	if((gio >0) && (gio <= 12)){
		document.getElementById("buoi").innerHTML = "sáng";
	} 
	else {
		document.getElementById("buoi").innerHTML = "chiều";
	}
	var strDate = $("#datepicker").val();
	var old , y;
	var yy = strDate.substr(6,4);
	var m = strDate.substr(3,2);
	var d = strDate.substr(0,2);	
	if((dmy.getMonth() + 1) > m){ 
		y = dmy.getFullYear() + 1;
	}
	else if(((dmy.getMonth() + 1) == m) && (dmy.getDate() > d)){
		y = dmy.getFullYear() + 1;	
	}
	else {
		y = dmy.getFullYear();
	}
	old = dmy.getFullYear() - yy ;
	document.getElementById("yearolds").innerHTML = old;
	var sDay = y + "/" + m +"/" + d;
	var getNewDate = new Date(sDay);
	var tl = new Date(sDay);//set date in here yyyy/mm/dd

	// You can add time's up message here
	var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
	timer.countDown();
	}
	$("#btnOK").on("click",function(){		 	
		var name = $(".main-page1-info-ans input[type=text]").val();	
  	    if(name ==""){name = "Thanh Hải";}
	    document.getElementById("name").innerHTML = name;  	    
	    CDT(); 
	    $(".main-page1").hide();
	    $(".main-page2").show();
});
}(jQuery);

//
//
+function($){
	
}(jQuery);

//
//
+function($){
	
}(jQuery);

//
//
+function($){
	
}(jQuery);

//
//
+function($){
	
}(jQuery);

//
//
+function($){
	
}(jQuery);

//
//
+function($){
	
}(jQuery);

//
//
+function($){
	
}(jQuery);





