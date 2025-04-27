document.addEventListener('DOMContentLoaded', function() {

	function simpleDecrypt(encryptedData) {
		try {
			const decodedData = atob(encryptedData);
			const uriEncodedData = decodeURIComponent(escape(decodedData));
			return JSON.parse(uriEncodedData);
		} catch (e) {
			console.error('Ошибка расшифровки: ', e);
			return null;
		}
	}



	let encryptedDataFromURL = new URLSearchParams(window.location.search).get('data');

	if (!encryptedDataFromURL) {
		encryptedDataFromURL = localStorage.getItem('encryptedDataFromURL');
		console.log("1")
	} else {
		localStorage.setItem('encryptedDataFromURL', encryptedDataFromURL);
		console.log("2")
	}

	history.replaceState(null, '', window.location.pathname);
	let os = "";
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

	pay.addEventListener('click', function() {
		document.body.style.backgroundColor = '#000000';
		document.getElementById('heading1').style.color = '#FFFFFF';
		document.getElementById('heading2').style.color = '#FFFFFF';
		setTimeout(() => {
			window.location.href = `folder_for_pay/index_pay.html?data=$ {encodeURIComponent(encryptedDataFromURL)}`;
		}, 1000);

	});

	function downloadFromGitHub(fileUrl) {
		const link = document.createElement('a');
		link.href = fileUrl;

		const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
		link.download = fileName;

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}


	install.addEventListener('click', function() {
		document.body.style.backgroundColor = '#FFFFFF';
		document.getElementById('heading1').style.color = 'black';
		document.getElementById('heading2').style.color = 'black';
		if (os == "Android") {
			downloadFromGitHub('https://github.com/serebrovskaya/ifAppNotFound/raw/refs/heads/main/apps/app-debug.apk')
		}
		if (os == "Desktop") {
			downloadFromGitHub('https://github.com/serebrovskaya/ifAppNotFound/raw/refs/heads/main/apps/PaymentApp_Setup.exe')
		}
	});

	cite.addEventListener('click', function() {
		document.body.style.backgroundColor = '#FFDD2D';
		document.getElementById('heading1').style.color = 'black';
		document.getElementById('heading2').style.color = 'black';
		window.location = `https://www.tbank.ru/cards/debit-cards/tinkoff-pay/form/`
	});
});
