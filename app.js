let basketTimer; // Переменная для таймера

// При наведении на элемент .basket-menu
document.querySelector('.basket-menu').addEventListener('mouseenter', function() {
    // Показываем окошко с корзиной
    document.querySelector('.basket-body').style.display = 'block';
    // Очищаем таймер, чтобы избежать скрытия корзины при мгновенном наведении
    clearTimeout(basketTimer);
});

// При уходе с элемента .basket-menu
document.querySelector('.basket-menu').addEventListener('mouseleave', function(e) {
    // Устанавливаем таймер на скрытие корзины через 500 миллисекунд
    basketTimer = setTimeout(() => {
        // Проверяем, находится ли элемент, на который был совершен переход, внутри .basket-menu
        if (!this.contains(e.relatedTarget)) {
            // Если курсор ушел из .basket-menu, скрываем корзину
            document.querySelector('.basket-body').style.display = 'none';
        }
    }, 300); // Задаем время задержки для таймера (в миллисекундах)
});

// При наведении на окошко с корзиной
document.querySelector('.basket-body').addEventListener('mouseenter', function() {
    // Очищаем таймер, чтобы окошко не скрылось
    clearTimeout(basketTimer);
});

// При уходе с окошка с корзиной
document.querySelector('.basket-body').addEventListener('mouseleave', function(e) {
    // Устанавливаем таймер на скрытие корзины через 500 миллисекунд
    basketTimer = setTimeout(() => {
        // Проверяем, находится ли элемент, на который был совершен переход, внутри .basket-menu
        if (!document.querySelector('.basket-menu').contains(e.relatedTarget)) {
            // Если курсор ушел из .basket-body и не находится на .basket-menu, скрываем корзину
            document.querySelector('.basket-body').style.display = 'none';
        }
    }, 300); // Задаем время задержки для таймера (в миллисекундах)
});




document.querySelector('a[href="#wrapper-content"]').addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    const section = document.querySelector('#wrapper-content'); // Находим элемент с нужным id
    const sectionOffset = section.offsetTop; // Получаем вертикальное смещение элемента относительно верхнего края страницы
    window.scrollTo({
        top: sectionOffset, // Прокручиваем страницу к верхнему краю элемента
        behavior: 'smooth' // Добавляем плавную анимацию прокрутки
    });
});



document.querySelector('a[href="#wrapper-content"]').addEventListener('click', function(e) {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    const section = document.querySelector('#wrapper-content'); // Находим элемент с нужным id
    const sectionOffset = section.offsetTop; // Получаем вертикальное смещение элемента относительно верхнего края страницы
    window.scrollTo({
        top: sectionOffset, // Прокручиваем страницу к верхнему краю элемента
        behavior: 'smooth' // Добавляем плавную анимацию прокрутки
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const addButtons = document.querySelectorAll(".add-card");
    const basketItemsContainer = document.getElementById("basket-items");
    const buyButton = document.querySelector(".buy-basket");

    addButtons.forEach(button => {
        button.addEventListener("click", function() {
            const card = this.parentElement;
            const itemName = card.querySelector(".name").textContent;
            const itemPrice = card.querySelector(".price-card").textContent;

            // Создание нового элемента для товара в корзине
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("basket-item");
            itemDiv.innerHTML = `
                <p>${itemName}</p>
                <p>${itemPrice}</p>
            `;

            // Добавление элемента товара в корзину
            basketItemsContainer.appendChild(itemDiv);

            updateBasketInfo(); // Обновление информации о корзине
        });
    });

    // Обработчик события нажатия на кнопку "Заказать"
    buyButton.addEventListener("click", function() {
        // Ваш код для обработки заказа товаров из корзины
        // Например, отправка данных на сервер или открытие формы заказа
        console.log("Заказать товары из корзины");
    });

    // Функция для обновления информации о корзине
    function updateBasketInfo() {
        const basketItems = document.querySelectorAll(".basket-item");
        const infoBasket = document.querySelector(".info-basket p");
        const buyButton = document.querySelector(".buy-basket");

        // Обновление информации о количестве товаров в корзине
        infoBasket.textContent = `Товаров: ${basketItems.length}`;

        // Показ кнопки заказа, если корзина не пуста
        if (basketItems.length > 0) {
            buyButton.style.display = "block";
        } else {
            buyButton.style.display = "none";
        }
    }
});


// Находим все кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll('.add-card');

// Для каждой кнопки добавляем обработчик события клика
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Изменяем текст кнопки на "Добавлено"
        button.innerText = 'Добавлено';
        // Блокируем кнопку, чтобы её нельзя было нажать снова
        button.disabled = true;
    });
});