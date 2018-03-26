var $scrollNav = $('#scroll-nav');
var $indexNav = $('#index-nav');

$(document).scroll(function() {
  $scrollNav.css({display: $(this).scrollTop()>100 ? "flex":"none"});
});

$(document).scroll(function() {
  $indexNav.css({display: $(this).scrollTop()>100 ? "none":"flex"});
})