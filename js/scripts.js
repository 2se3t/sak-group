(function($) {
  $.fn.nodoubletapzoom = function() {
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // выкл дабл тап 
        e.preventDefault(); 
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);



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
  

  document.querySelectorAll('.item-serv').forEach(item => {
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
  