$(document).ready(function(){
	$('.btn').click(function(){
		$('nav ul').slideToggle(3000);
	})
})

$(document).ready(function(){
	$('nav ul').click(function(){
		$(this).slideToggle(1000);
	})
})


$('nav a').on('click', function(e){
	if(this.hash != '') {
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800);
	}
})