import '../scss/style.scss'

console.log('It works!')

const tabs = document.querySelectorAll('.services__tab');
const contents = document.querySelectorAll('.services__content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('services__tab--active'));
        tab.classList.add('services__tab--active');
  
        contents.forEach(content => content.classList.remove('services__content--visible'));
  
        const selectedId = `tab-${tab.dataset.tab}`;
        const selectedContent = document.getElementById(selectedId);
        if (selectedContent) {
          selectedContent.classList.add('services__content--visible');
        }
      });
    });
    
    // Кнопка "Читать далее"
    const readMoreBtn = document.getElementById('readMoreBtn');
    const readMoreText = document.getElementById('readMoreText');
    const expandIcon = document.getElementById('expandIcon');
    const moreText = document.getElementById('moreText');
    
    readMoreBtn.addEventListener('click', () => {
      const isHidden = moreText.style.display === 'none' || moreText.style.display === '';
      if (isHidden) {
        moreText.style.display = 'block';
        readMoreText.textContent = 'Скрыть';
        expandIcon.classList.add('rotate');
      } else {
        moreText.style.display = 'none';
        readMoreText.textContent = 'Читать далее';
        expandIcon.classList.remove('rotate');
      }
    });

    const toggleButton = document.getElementById('toggle-button');
    const toggleText = document.getElementById('toggle-text');
    const toggleIcon = document.getElementById('toggle-icon');
    const brandList = document.getElementById('brand-list');

    toggleButton.addEventListener('click', () => {
    const isHidden = brandList.style.display === 'none' || brandList.style.display === '';

    brandList.style.display = isHidden ? 'grid' : 'none';
    toggleText.textContent = isHidden ? 'Скрыть' : 'Показать все';
    toggleIcon.src = isHidden ? 'img/expand.png' : 'img/thrt.png'; // замените на нужную иконку
  });

  const mainSwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-paginationes',
  },
});

document.addEventListener('DOMContentLoaded', () => {
  // инициализация Swiper
});

 const burgerBtn = document.getElementById('burger-btn');
const closeBtn = document.getElementById('close-btn');
const sideMenu = document.getElementById('side-menu');

burgerBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});
 new Swiper('.swiper-containerse', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-paginationser',
      clickable: true,
    }
  });

  const anotherSwiper = new Swiper(".swiper-conta", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-paginationiio",
      clickable: true
    },
  });
