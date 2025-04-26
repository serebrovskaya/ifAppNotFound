document.addEventListener('DOMContentLoaded', function() {
	function getUrlParams() {
                const params = new URLSearchParams(window.location.search);
                return {
                    data: params.get('data') // Получаем параметр 'data'
                };
            }

            // Получаем параметры из URL
            const urlParams = getUrlParams();
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