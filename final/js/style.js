let block = document.getElementsByClassName('icon__menu');
let menu = document.getElementsByClassName('list__menu');
for (let i = 0; i < block.length; i++){
	block[i].addEventListener('click', function hiddenBlock(){
		block[i].classList.toggle('open');
		menu[i].parentNode.classList.toggle('hidden');
		var elementChildrens = document.querySelector("ul").children;
			{for (let  n=0, child; child=elementChildrens[n]; n++){
				child.classList.toggle('hidden');
			
			}

		}
		
	});
};



var icon = document.querySelectorAll('.icon__about');

console.log(icon);
icon.forEach(function(item){


item.onclick=function(){
this.parentNode.classList.toggle('activeParent');

}	
});
$(document).ready(function(){
	$('#datepicker').datepicker({
	    todayHighlight: true,
	    toggleActive: true
	});
});


	
$(document).ready(function(){
var scrollBottom = $(window).scrollTop() + $(window).height();
 $(window).scroll(function() {
        if ($(window).scrollTop() < 300) {
            $(".top").css("display","none");
                 }else {
                 $(".top").css("display","block");
                   	
                }
           console.log($(window).scrollTop());    
        });
    });




$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(this);
      console.log(target);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});