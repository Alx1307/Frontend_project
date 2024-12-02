const header1 = document.querySelector("h1");

header1.addEventListener('click', () => {
    alert("Вы кликнули на заголовок - так держать!");
});

header1.addEventListener('mouseover', () => {
    header1.style.fontSize = '45px';
});

header1.addEventListener('mouseout', () => {
    header1.style.fontSize = '30px';
});

const button = document.getElementById("changeThemes");

button.addEventListener('click', () => {
    const table = document.getElementById("secondTable");
    const secondColumn = table.querySelectorAll("tr td:nth-child(2");

    secondColumn[0].textContent = "Базовое бэкенд-приложение";
    secondColumn[1].textContent = "HTTP-запросы";
    secondColumn[2].textContent = "JSON и работа с ним";
    secondColumn[3].textContent = "HTTP-ответы";
    secondColumn[4].textContent = "Проетирование API";
    secondColumn[5].textContent = "Роутинг и его настройка";
    secondColumn[6].textContent = "NoSQL базы данных";
    secondColumn[7].textContent = "Обеспечение авторизации и доступа пользователей";
    secondColumn[8].textContent = "Работа сторонних сервисов уведомления и авторизации";
    secondColumn[9].textContent = "Основы ReactJS";
    secondColumn[10].textContent = "Работа с компонентами динамической DOM";
    secondColumn[11].textContent = "Использование хуков в React";
    secondColumn[12].textContent = "Основы микросервисной архитектуры";
    secondColumn[13].textContent = "Разработка классических модулей веб-приложений";
    secondColumn[14].textContent = "Разработка классических модулей веб-приложений";
});

const studentPhoto = document.getElementById("studentPhoto");

studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.transform = 'scale(1.5)';
});

studentPhoto.addEventListener('mouseout', () => {
    studentPhoto.style.transform = 'scale(1)';
});

studentPhoto.addEventListener('click', () => {
    studentPhoto.src = 'media\teacher.png';
});

studentPhoto.addEventListener('dblclick', () => {
    alert("Не налегай, у меня не так много любимых преподавателей!");
});

const change = document.getElementById("changeColor");

change.addEventListener('click', () => {
    change.style.backgroundColor = "#c3cf18";
});

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('showLectures');
    const table = document.getElementById('lecturesTable');

    button.addEventListener('click', () => {
        if (table.style.display === 'none' || table.style.display === '') {
            table.style.display = 'table';
            setTimeout(() => {
                table.style.opacity = '1';
            }, 0);
        } else {
            table.style.opacity = '0';
            setTimeout(() => {
                table.style.display = 'none';
            }, 900);
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const photo = document.getElementById("photo");

    photo.addEventListener('mouseover', () => {
        photo.style.transform = 'rotate(360deg)';
    });

    photo.addEventListener('mouseout', () => {
        photo.style.transform = 'rotate(0deg)';
    });
});
