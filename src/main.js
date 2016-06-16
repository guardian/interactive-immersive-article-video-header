var videoHeader = require('./html/video.html');
var detect = require('./utils/detect.js');


function boot(el) {


	if( !detect.isIOS() && !detect.isAndroid() && detect.getViewport().width >= 1000){

		var altData = el.getAttribute('data-alt');
		insertVideo(altData);

	}
}

function insertVideo(videourl) {
	console.log('writing')
	videoHeader = videoHeader.replace('{{videourl}}',videourl);
    document.getElementsByTagName("picture")[0].innerHTML = document.getElementsByTagName("picture")[0].innerHTML + videoHeader;
	
}

module.exports = { boot: boot };
