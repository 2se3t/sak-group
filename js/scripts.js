function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


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
  