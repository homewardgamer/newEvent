// $(document).ready(function() {
 
//     $("#owl-example").owlCarousel({
//           navigation : true, 
//         slideSpeed : 300,
//         paginationSpeed : 400,
//         singleItem: true,
//               pagination: false,
//           rewindSpeed: 500,
//           afterMove: moved
//       });
      
//         $('.custom-control').on('click', 'button', function() {
//       var $this = $(this);
//       var slideNum = $(this).data('slide');
//       $("#owl-example").trigger('owl.goTo', slideNum);
//   });
  
//     function moved() {
//        var owl = $("#owl-example").data('owlCarousel');
//        var $buttons = $('.custom-control button');
//        $buttons.removeClass('active').removeAttr('disabled');
//        $('.custom-control').find('[data-slide="'+owl.currentItem +'"]').addClass('active').attr('disabled', 'disabled');
//      }
   
//   });
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})