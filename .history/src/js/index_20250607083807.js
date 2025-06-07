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
  
  
function initSwiperIfNeeded() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 320) {
      document.querySelector('.brand-grid').style.display = 'none';
      document.getElementById('brand-list').style.display = 'none';
      document.getElementById('toggle-button').style.display = 'none';
      document.getElementById('brand-swiper').style.display = 'block';

       toggleButton.addEventListener('click', () => {
    const isExpanded = brandList.classList.contains('expanded');
  
  brandList.classList.toggle('expanded');
  brandList.classList.toggle('brand-list');
  
  toggleText.textContent = isExpanded ? 'Показать все' : 'Скрыть';
  toggleIcon.src = isExpanded ? 'img/thrt.png' : 'img/expand.png';
  toggleIcon.alt = isExpanded ? 'Показать все' : 'Скрыть';
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
 
