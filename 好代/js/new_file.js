$(function(){
	$('.xiala').click(function(){
		$('.jine-ul1').hide()
		$('.jine-ul').stop(true).slideToggle()
		
		$('li').click(function(){
			var a=$(this).html();
			$('.b1').html(parseInt(a));
			$(ul).css("display","none");
		})
		return false;
	})
//	$('.xiala1').click(function(){
//		$('.jine-ul').hide();
//		$('.jine-ul1').stop(true).slideToggle()
//		
//		$('li').click(function(){
//			var b=$(this).html();
//			$('.b11').html(parseInt(b));
//			$(ul).css("display","none");
//		})
//		return false;
//	})
	$("body").click(function(){
		$('.jine-ul').hide();
		$('.jine-ul1').hide()
	})
})