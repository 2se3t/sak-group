document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var errorDiv = document.getElementById("error");
    var name = form.querySelector("#name").value;
    var phone = form.querySelector("#phone").value;

    // Проверка на правильность введенных данных
    var namePattern = /[А-Яа-яЁё]+/;
    var phonePattern = /[\d\+\s]+/;
    if (!namePattern.test(name)) {
        errorDiv.innerText = "Неверный формат имени. Имя может содержать только буквы русского алфавита и пробелы.";
        return;
    }
    if (!phonePattern.test(phone)) {
        errorDiv.innerText = "Неверный формат номера телефона. Номер может содержать только цифры и символ '+' (если есть).";
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = xhr.responseText.split(':');
            var status = response[0].trim();
            var message = response[1].trim();
            if (status === "success") {
                errorDiv.innerText = "Запрос отправлен: " + message;
            } else if (status === "error") {
                errorDiv.innerText = message;
            }
        } else {
            errorDiv.innerText = "Ошибка " + xhr.status + ": " + xhr.statusText;
        }
    };
    xhr.onerror = function () {
        errorDiv.innerText = "Запрос не удался";
    };
    xhr.send(formData);
});
