let modalCart = document.querySelector('.modal--cart');

document.addEventListener('click', function(e) {
  let elem = e.target.closest('.js-add-to-cart');
  if (!elem) return;

  modalCart.classList.add('modal--show');

  function close() {
    modalCart.classList.remove('modal--show');
  }

  function onKeydown(e) {
    if (e.code == 'Escape') {
      close();
      document.removeEventListener('keydown', onKeydown);
      e.preventDefault();
    }
  }

  document.addEventListener('keydown', onKeydown);

  document.querySelector('.add-to-cart__item-btn').focus();
  e.preventDefault();
});


// add-to-cart

let sizeList = document.querySelector('.add-to-cart__list');
let btnsList = document.querySelectorAll('.add-to-cart__item-btn');

sizeList.addEventListener('click', function(e) {
  let btn = e.target;
  if (!btn.matches('.add-to-cart__item-btn')) return;

  let activeBtn = sizeList.querySelector('.add-to-cart__item-btn--active');
  if (activeBtn) activeBtn.classList.remove('add-to-cart__item-btn--active');
  btn.classList.add('add-to-cart__item-btn--active');
});

let addBtn = document.querySelector('.add-to-cart__add-btn');

btnsList[0].addEventListener('keydown', function(e) {
  if (e.code === 'Tab' && e.shiftKey) {
    addBtn.focus();
    e.preventDefault();
  }
});

addBtn.addEventListener('keydown', function(e) {
  if (e.code === 'Tab' && !e.shiftKey) {
    btnsList[0].focus();
    e.preventDefault();
  }
});

addBtn.addEventListener('click', function(e) {
  modalCart.classList.remove('modal--show');
  e.preventDefault();
});

// main-nav

let mainNav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function (e) {
  e.preventDefault();

  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});

try {const slider = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.slider__arrow--right',
    prevEl: '.slider__arrow--left',
  },

  spaceBetween: 30,

  simulateTouch: true,
});} catch {

}



function initMap() {
  let options = {
    center: {lat: 59.938796670197384, lng: 30.323075023081532},
    zoom: 17,

  }

  map = new google.maps.Map(document.getElementById('map'), options);

  const marker = new google.maps.Marker({
    position: {
      lat: 59.938796670197384, lng: 30.323075023081532
    },

    animation: google.maps.Animation.DROP,
    map: map,
    icon: {
      url: 'img/map-pin.svg',
      // size: new google.maps.Size(100, 100),
      scaledSize: new google.maps.Size(66, 101),
      // anchor: new google.maps.Point(50, 100)
     },
     title: 'mishka'
  });



  const detailWindow = new google.maps.InfoWindow({
    content: `<h2>Mishka site</h2>`
  });

  marker.addListener('click', () => {
    detailWindow.open(map, marker);
  });
}






