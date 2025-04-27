document.addEventListener('DOMContentLoaded', function() {
	
	function simpleDecrypt(encryptedData) {
		try {
        		const decodedData = atob(encryptedData);
        		const uriEncodedData = decodeURIComponent(escape(decodedData));
        		return JSON.parse(uriEncodedData);
    		    } catch (e) {
        	    console.error('Ошибка расшифровки:', e);
        	    return null;
    		    }
      	}

const encryptedDataFromURL = new URLSearchParams(window.location.search).get('data');
history.replaceState(null, '', window.location.pathname);
let os = "Android";
if (encryptedDataFromURL) {
    const decryptedData = simpleDecrypt(encryptedDataFromURL);    
    if (decryptedData) {
        console.log('Данные успешно расшифрованы:', decryptedData);
	os = decryptedData.os
    } else {
        console.error('Не удалось расшифровать данные');
    }
} else {
        console.log("Данные не получены");
    }


    const pay = document.getElementById('pay');
    const install = document.getElementById('install');
    const cite = document.getElementById('cite');
	
    console.log('ОС:', os);
	
    pay.addEventListener('click', function() {
        document.body.style.backgroundColor = '#000000';
	setTimeout(() => {
    window.location.href = `folder_for_pay/index_pay.html?data=${encodeURIComponent(encryptedDataFromURL)}`;
}, 1000);

	 });
    
    install.addEventListener('click', function() {
        document.body.style.backgroundColor = '#FFFFFF';
	    if (os == "Android"){
	window.location = `https://acdn.t-bank-app.ru/download_apk/tbank_app.html`
	    }
    });
    
    cite.addEventListener('click', function() {
        document.body.style.backgroundColor = '#FFDD2D';
	window.location = `https://www.tbank.ru/cards/debit-cards/tinkoff-pay/form/`
    });
});
