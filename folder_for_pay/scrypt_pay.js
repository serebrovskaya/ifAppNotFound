document.addEventListener('DOMContentLoaded', function() {
	function simpleDecrypt(encryptedData) {
    try {
        // 1. Декодируем из Base64
        const decodedData = atob(encryptedData);
        
        // 2. Преобразуем в URI-кодированную строку
        const uriEncodedData = decodeURIComponent(escape(decodedData));
        
        return JSON.parse(uriEncodedData);
    } catch (e) {
        console.error('Ошибка расшифровки:', e);
        return null;
    }
}

const encryptedDataFromURL = new URLSearchParams(window.location.search).get('data');
history.replaceState(null, '', window.location.pathname);
	
if (encryptedDataFromURL) {
    const paymentData = simpleDecrypt(encryptedDataFromURL);
    
    if (paymentData) {
        console.log('Данные успешно расшифрованы:', paymentData);
	document.getElementById('amount').value = paymentData.amount;
        document.getElementById('currency').value = paymentData.currency;
    } else {
        console.error('Не удалось расшифровать данные');
	document.getElementById('amount').value = "Ошибка";
        document.getElementById('currency').value = "Не удалось расшифровать";
    }
} else {
        console.log("Данные не получены");
	document.getElementById('amount').value = "Нет данных";
        document.getElementById('currency').value = "Нет данных";
    }
});
