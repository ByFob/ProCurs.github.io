$(document).ready(function() {
	$(".footer_wrapp .wrapper .tab").click(function() {
	$(".footer_wrapp .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".footer_wrapp .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


	$(".find_wrp .wrapper .tab").click(function() {
	$(".find_wrp .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".find_wrp .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(".owl-carousel").owlCarousel({
		autoplay: true,
		loop: true,
		responsive : {
			0 : {
				items : 1,
				autoplaySpeed : 500,
			}
		},
	});


	function wResize(){
		$("header").css("min-height", $(window).height());
	}; 
	wResize();
	$(window).resize(function(){
		wResize() 
	});
	
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});

	
});