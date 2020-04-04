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

// //круги//

// let card = new Card('js-card');
// card.run();


// function Card(classCard) {
//   this.cards = document.querySelectorAll('.' + classCard);
//   this.bindEventsCard = function() {
//     for (let i = 0, length = this.cards.length; i < length; i++) {
//       this.cards[i].addEventListener('mousemove', this.startRotate);
//       this.cards[i].addEventListener('mouseout', this.stopRotate);
//     }
//   }
//   this.startRotate = function(event) {
//     let cardItem = this.querySelector('.card-item'),
//         halfHeight = cardItem.offsetHeight / 2,
//         halfWidth = cardItem.offsetWidth / 2;
//     cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 10 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 10 + 'deg)';
//   }
//   this.stopRotate = function(event) {
//   let cardItem = this.querySelector('.card-item');
//   cardItem.style.transform = 'rotate(0)';
// }
//   this.run = () => {
//     this.bindEventsCard();
//   }
// }

