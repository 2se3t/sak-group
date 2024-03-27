
    // Проверка на правильность введенных данных
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var form = event.target;
        var formData = new FormData(form);
        var errorDiv = document.getElementById("error");
        var name = form.querySelector("#name").value;
        var phone = form.querySelector("#phone").value;
        var captchaCheckbox = form.querySelector("#captchaCheckbox");
    
        // Проверка на правильность введенных данных и простую капчу
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
        if (!captchaCheckbox.checked) {
            errorDiv.innerText = "Подтвердите, что вы не робот.";
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
                    // Плавно скрываем кнопку после успешной отправки
                    document.getElementById("submitButton").style.opacity = 0;
                    setTimeout(function() {
                        document.getElementById("submitButton").style.display = "none";
                    }, 500);
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