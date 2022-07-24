$('.header-sections a').on('click', function(e) {
  if(this.hash != ''){

    e.preventDefault();

    const click = this.hash;

    $('html, body').animate(
      {
      scrollTop: $(click).offset().top
      },
      1000);
  }
})