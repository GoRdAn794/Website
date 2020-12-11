$(document).ready(function(){
  $(".navbar").click(function(){
    $("#panel").slideToggle("slow");
    $('#ffa2').mouseover(function(){
    	var interval;
    	console.log('fldnvfdv');
    	clearInterval(interval);
    })
  });
  var a=$('.slide').length;
  	var b=$('.slides');
  	var c=1;
  	$("#c1").css("color","red");
  	interval = setInterval(function(){
  		b.animate({
  			marginLeft:'-=98.1vw'
  		},2000,function(){
  			$("#c1").css("color","red");
  			c++;
  			if(c==1)
  			{
  				$("#c2").css("color","white");
  				$("#c1").css("color","red");
  				$("#c3").css("color","white");
  				$("#c4").css("color","white");
  			}
  			else if(c==2)
  			{
  				$("#c2").css("color","red");
  				$("#c1").css("color","white");
  				$("#c3").css("color","white");
  				$("#c4").css("color","white");
  			}
  			else if(c==3)
  			{
  				$("#c1").css("color","white");
  				$("#c2").css("color","white");
  				$("#c3").css("color","red");
  				$("#c4").css("color","white");
  			}
  			else if(c==4)
  			{
  				$("#c1").css("color","white");
  				$("#c2").css("color","white");
  				$("#c4").css("color","red");
  				$("#c3").css("color","white");
  			}
  			else if(c===a)
  			{
  				$("#c1").css("color","red");
  				$("#c2").css("color","white");
  				$("#c4").css("color","white");
  				$("#c3").css("color","white");
  				b.css('marginLeft','0px');
  				c=1;
  			}
  			// console.log(c);
  			});
  	},3000);
  	$("#ffa1").on('click',function(){
  		$('.slides').css('float','right')
		$('.slides').animate({
  			marginRight:'-=98.1vw'
  		},800,function(){

  			c++;
  			if(c==1)
  			{
  				$("#c2").css("color","white");
  				$("#c1").css("color","white");
  				$("#c3").css("color","white");
  				$("#c4").css("color","red");
  			}
  			else if(c==2)
  			{
  				$("#c2").css("color","white");
  				$("#c1").css("color","white");
  				$("#c3").css("color","red");
  				$("#c4").css("color","white");
  			}
  			else if(c==3)
  			{
  				$("#c1").css("color","white");
  				$("#c2").css("color","red");
  				$("#c3").css("color","white");
  				$("#c4").css("color","white");
  			}
  			else if(c==4)
  			{
  				$("#c1").css("color","red");
  				$("#c2").css("color","white");
  				$("#c4").css("color","white");
  				$("#c3").css("color","white");
  			}
  			if(c===a)
  			{
  				$("#c1").css("color","red");
  				$("#c2").css("color","white");
  				$("#c4").css("color","white");
  				$("#c3").css("color","white");
  				b.css('marginLeft','0px');
  				c=1;
  			}


  		});

	});
  	// console.log(a);
  	$("#ffa2").on('click',function(){
  		$('.slides').css('float','left')
		$('.slides').animate({
  			marginLeft:'-=98.1vw'
  		},800,function(){
  			c++;
  			if(c==1)
  			{
  				$("#c2").css("color","white");
  				$("#c1").css("color","red");
  				$("#c3").css("color","white");
  				$("#c4").css("color","white");
  			}
  			else if(c==2)
  			{
  				$("#c2").css("color","red");
  				$("#c1").css("color","white");
  				$("#c3").css("color","white");
  				$("#c4").css("color","white");
  			}
  			else if(c==3)
  			{
  				$("#c1").css("color","white");
  				$("#c2").css("color","white");
  				$("#c3").css("color","red");
  				$("#c4").css("color","white");
  			}
  			else if(c==4)
  			{
  				$("#c1").css("color","white");
  				$("#c2").css("color","white");
  				$("#c4").css("color","red");
  				$("#c3").css("color","white");
  			}
  			if(c===a)
  			{
  				$("#c1").css("color","red");
  				$("#c2").css("color","white");
  				$("#c4").css("color","white");
  				$("#c3").css("color","white");
  				b.css('marginLeft','0px');
  				c=1;
  			}
  			// console.log(c);
  			});
	});
	$("#c1").on('click',function(){
		$('.slides').css('marginLeft','0vw');
		$("#c1").css("color","red");
  				$("#c2").css("color","white");
  				$("#c4").css("color","white");
  				$("#c3").css("color","white");

	});
	$("#c2").on('click',function(){
		$('.slides').css('margin-left','-98.1vw');
		$("#c1").css("color","white");
  				$("#c2").css("color","red");
  				$("#c4").css("color","white");
  				$("#c3").css("color","white");

	});
	$("#c3").on('click',function(){
		$('.slides').css('margin-left','-196.20vw');
		$("#c1").css("color","white");
  				$("#c2").css("color","white");
  				$("#c4").css("color","white");
  				$("#c3").css("color","red");

	});
	$("#c4").on('click',function(){
		$('.slides').css('margin-left','-392.40vw');
		$("#c1").css("color","white");
  				$("#c2").css("color","white");
  				$("#c4").css("color","red");
  				$("#c3").css("color","white");

	})

});
