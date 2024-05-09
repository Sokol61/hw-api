// Получаем ссылки на элементы DOM
const currentImage = document.getElementById('current-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indicators = document.querySelectorAll('.indicator');

// Массив с именами изображений
const imageNames = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

// Функция для обновления текущего изображения
function updateImage() {
    // Формируем путь к изображению
    const imagePath = `img/${imageNames[currentIndex]}`;
    currentImage.src = imagePath;
    // Установка активного класса для соответствующего индикатора
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Обработчик события для кнопки "Предыдущее изображение"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? imageNames.length - 1 : currentIndex - 1;
    updateImage();
});

// Обработчик события для кнопки "Следующее изображение"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === imageNames.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

// Обработчик события для навигационных точек
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
    });
});

// Обновляем изображение при загрузке страницы
updateImage();
