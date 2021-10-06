$('.products__item-like').on('click', function () {
   if($(this).hasClass('active')){
      $(this).removeClass('active');
   }
   else{$(this).addClass('active');
   }
});


$('#modal').on( 'click', function(){ 
   var el = $(this);
   $('html').animate({ 
      scrollTop: $('html, body').offset().top // прокручиваем страницу к требуемому элементу
   }, 500 // скорость прокрутки
   );
});

if($(window).height() < $('body').height()){
   $('#modal').addClass('show');
}

$('.menu__btn').on('click', function () {
   $('.menu__list').slideToggle();
});
