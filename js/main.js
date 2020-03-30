var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.arrow',
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
      }
    }
  });
  


  var menuButton = document.querySelector('.menu-button');
  var menu = document.querySelector('.header');
  menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
    
  });


  //Кнопка//
  var buttons = document.getElementsByClassName('butt'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    var addDiv  = document.createElement('div'),
        mValue  = Math.max(this.clientWidth, this.clientHeight),
        rect    = this.getBoundingClientRect();
        sDiv    = addDiv.style,
        px      = 'px';

    sDiv.width  = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}