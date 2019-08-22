$(document).ready(function(){
  //Elastic Search
  $('#search').click(function(elasticSearch){
    elasticSearch.preventDefault();
      $('#search').removeClass('close').addClass('active');
      $('.btn-close').css({"display" : "flex"});
  });
  
  $('.btn-close').click(function(elasticSearch){
    $('.btn-close').css({"display" : "none"});
    $('#search.active').removeClass('active').addClass('close');
  });
  

  // табы
  $(function() {
    $('ul.info__box-nav').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.info__box').find('div.info__box-content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });


  $(document).ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
  });

  // переназначаем переключатели для owl-carousel
  var owl=$("#owl-slider");
    owl.owlCarousel();
    //$(".next") - находим нашу кнопку
    $(".next").click(function(){
      owl.trigger("next.owl.carousel");
    });
    $(".prev").click(function(){
      owl.trigger("prev.owl.carousel");
    });

});
  
});//end

