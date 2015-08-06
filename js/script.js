(function($){
  var toTop = $('#toTop').length ? $('#toTop').offset().top - $(window).height() + 20 : 0;

  // Share
  //[idss]replaced by landscape-plus
  $('body').on('click', function(){
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function(e){
    e.stopPropagation();

    var $this = $(this)
    var offset = $this.offset()
    var url = $this.attr('data-url')

    var box = $('#article-share-box')
    box.find('input').val(url)
    shareDataUrl = $this.attr('data-url');
    shareDataTitle = $this.attr('data-title');

    if (box.hasClass('on')){
      box.removeClass('on');
      return;
    }

    $('.article-share-box.on').hide();

    box.css({
      top: offset.top + 25,
      left: offset.left - 35
    }).addClass('on');
  }).on('click', '.article-share-box', function(e){
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function(){
    $(this).select();
  }).on('click', '.article-share-box-link', function(e){
    e.preventDefault();
    e.stopPropagation();

    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });
  //[idss]replaced by landscape-plus
  
  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;
      if ($(this).hasClass('nofancy')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  // Profile card
  $(document).on('click', function () {
    $('#profile').removeClass('card');
  }).on('click', '#profile-anchor', function (e) {
    e.stopPropagation();
    $('#profile').toggleClass('card');
  }).on('click', '.profile-inner', function (e) {
    e.stopPropagation();
  });

  // To Top
  $(document).on('scroll', function () {
    if ($(document).width() >= 800) {
      if($(this).scrollTop() > toTop) {
        $('#toTop').addClass('fix');
        $('#toTop').css('left', $('#sidebar').offset().left);
      } else {
        $('#toTop').removeClass('fix');
      }
    } else {
      $('#toTop').addClass('fix');
      $('#toTop').css('right', 20);
    }
  }).on('click', '#toTop', function () {
    $(document).scrollTop(0);
  });

})(jQuery);