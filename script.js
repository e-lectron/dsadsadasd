document.addEventListener('DOMContentLoaded', () => {
    const timerText = document.querySelector('.timer-text');
    const timerImage = document.querySelector('.timer-image');
    const totalTime = 3; // Время таймера в секундах
    let remainingTime = totalTime;
    let timerInterval;

    function updateTimer() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const progress = ((totalTime - remainingTime) / totalTime) * 100;
        timerImage.style.transform = `scaleX(${progress / 100})`;

        if (remainingTime <= 0) {
            timerText.textContent = 'CLAIM'; // Изменение текста на "CLAIM"
            timerText.removeEventListener('click', restartTimer); // Удаление предыдущего обработчика клика
            timerText.addEventListener('click', restartTimer); // Добавление нового обработчика клика
            clearInterval(timerInterval);
        } else {
            remainingTime -= 1;
        }
    }

    function startTimer() {
        remainingTime = totalTime;
        timerImage.style.transform = 'scaleX(0)'; // Сброс масштаба
        timerText.textContent = `${String(Math.floor(totalTime / 60)).padStart(2, '0')}:${String(totalTime % 60).padStart(2, '0')}`;
        timerInterval = setInterval(updateTimer, 1000);
    }

    function restartTimer() {
        startTimer(); // Перезапуск таймера
    }

    startTimer(); // Запуск таймера при загрузке страницы
});
document.addEventListener('DOMContentLoaded', () => {
    const bottomBarItems = document.querySelectorAll('.bottom-bar-item');
    const screens = document.querySelectorAll('.screen');

    bottomBarItems.forEach(item => {
        item.addEventListener('click', () => {
            // Убираем класс active у всех элементов
            bottomBarItems.forEach(i => i.classList.remove('active'));
            // Добавляем класс active к нажатому элементу
            item.classList.add('active');

            // Получаем target экрана из атрибута data-target
            const targetScreenId = item.getAttribute('data-target');
            // Скрываем все экраны
            screens.forEach(screen => screen.style.display = 'none');
            // Отображаем целевой экран
            document.getElementById(targetScreenId).style.display = 'flex';
        });
    });

    // Инициализация первого активного элемента и экрана
    bottomBarItems[0].classList.add('active');
    screens[0].style.display = 'flex';
});
document.addEventListener('DOMContentLoaded', () => {
    const bottomBarItems = document.querySelectorAll('.bottom-bar-item');
    const screens = document.querySelectorAll('.screen');
    const coin = document.querySelector('.coin');

    bottomBarItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            bottomBarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            screens.forEach(screen => {
                if (screen.id === target) {
                    screen.style.display = 'flex';
                } else {
                    screen.style.display = 'none';
                }
            });
        });
    });

    coin.addEventListener('click', () => {
        coin.classList.add('coin-active');
        setTimeout(() => {
            coin.classList.remove('coin-active');
        }, 300);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, доступен ли объект Telegram Web Apps
    if (window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;
        const user = webApp.initDataUnsafe.user;

        // Если пользовательская информация доступна, устанавливаем ее
        if (user) {
            document.getElementById('nickname').textContent = user.username;
            document.getElementById('user-photo').src = user.photo_url;
        }

        // Инициализация веб-приложения Telegram
        webApp.ready();
    } else {
        console.error("Telegram Web Apps не доступен.");
    }
});
