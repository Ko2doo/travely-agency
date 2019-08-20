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

    // lazyload
  // $(".lazy-1").lazyload({
  //   effect : "fadeIn"
  // });
  
});//end

