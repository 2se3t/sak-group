
<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверяем, были ли отправлены данные
    if (isset($_POST['name']) && isset($_POST['phone'])) {
        // Получаем данные из формы
        $name = $_POST['name'];
        $phone = $_POST['phone'];

        // Проверяем введенное имя на соответствие кириллице
        if (!preg_match('/^[А-Яа-яЁё\s]+$/u', $name)) {
            echo "error: Неверный формат имени. Имя может содержать только буквы русского алфавита и пробелы."; 
            exit;
        }

        // Проверяем введенный номер телефона на соответствие шаблону
        if (!preg_match('/^\+?\d+$/', $phone)) {
            echo "error: Неверный формат номера телефона. Номер может содержать только цифры и символ '+' (если есть).";
            exit;
        }

        // Отправляем сообщение в телеграм-бота
        $telegram_token = '7070596625:AAGzA36Kd-zr9A7WDELzfMyQamjrGXKKYj8';
        $chat_id = '-1002088129507';
        $text = "Новый запрос от: $name\nНомер телефона: $phone";

        $telegram_url = "https://api.telegram.org/bot$telegram_token/sendMessage?chat_id=$chat_id&text=" . urlencode($text);
        $response = file_get_contents($telegram_url);

        if ($response) {
            echo "success: Сообщение успешно отправлено!";
        } else {
            echo "error: Ошибка при отправке сообщения в телеграм.";
        }
    } else {
        echo "error: Поля 'name' и 'phone' обязательны для заполнения.";
    }
} else {
    echo "error: Неправильный метод запроса.";
}
?>
