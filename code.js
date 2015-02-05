function makeCode (url) {
	
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		width : 100,
		height : 100
	});
	if (url == '') {
		url = 'http://ihackeverything.com/';
	}
	qrcode.makeCode(url);

};

chrome.tabs.getSelected(null, function(tab) {
    makeCode(tab.url);
});