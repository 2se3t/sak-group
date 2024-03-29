$('.no-zoom').bind('touchend', function(e) {
  e.preventDefault();
  // Add your code here. 
  $(this).click();
  // This line still calls the standard click event, in case the user needs to interact with the element that is being clicked on, but still avoids zooming in cases of double clicking.
})


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const offset = sectionTop - (windowHeight / 4); // Высчитываем смещение
      window.scrollBy({ top: offset, behavior: 'smooth' });
  }
}

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
      const popupId = item.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      popup.style.display = 'block'; // Показываем попап
      popup.style.animation = 'slideIn 0.3s forwards'; // Запускаем анимацию появления
    });
  });
  
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const popup = btn.closest('.popup');
      popup.style.animation = 'slideOut 0.3s forwards'; // Запускаем анимацию скрытия
      // Добавляем задержку перед скрытием попапа, чтобы анимация успела проиграться
      setTimeout(() => {
        popup.style.display = 'none'; // Скрываем попап
      }, 300);
    });
  });
  
