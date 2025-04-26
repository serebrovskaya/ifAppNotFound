document.addEventListener('DOMContentLoaded', function() {
	function getUrlParams() {
                const params = new URLSearchParams(window.location.search);
                return {
                    data: params.get('data') // Получаем параметр 'data'
                };
            }

            // Получаем параметры из URL
            const urlParams = getUrlParams();
	const encryptedData = urlParams.data;

            if (encryptedData) {
        try {
            // Декодируем и расшифровываем данные
            const decodedData = decodeURIComponent(encryptedData);
            const paymentData = simpleDecrypt(decodedData);

            if (paymentData && paymentData.amount && paymentData.currency) {
                // Отображаем данные в полях ввода
                document.getElementById('amount').value = paymentData.amount;
                document.getElementById('currency').value = paymentData.currency;
            } else {
                console.error("Неверный формат данных");
                document.getElementById('amount').value = "Ошибка";
                document.getElementById('currency').value = "Неверные данные";
            }
        } catch (e) {
            console.error("Ошибка обработки данных:", e);
            document.getElementById('amount').value = "Ошибка";
            document.getElementById('currency').value = "Не удалось расшифровать";
        }
    } else {
        console.log("Данные не получены");
        document.getElementById('amount').value = "Нет данных";
        document.getElementById('currency').value = "Нет данных";
    }
});