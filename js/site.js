$(function () {
  $('.js-link').on('click', function (e) {
    e.preventDefault();
    const aid = $(this).attr('href');
    $('html,body').animate({scrollTop: $(aid).offset().top});
  });

  $('.js-hella-item').on('click', function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });

  $('.js-hella-item-input').on('click', 'input', function (evt) {
    $(evt.delegateTarget).siblings().removeClass('is-active');
    $(evt.delegateTarget).addClass('is-active');
  });
});