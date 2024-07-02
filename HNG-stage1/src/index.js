function updateTime() {
    const time = document.getElementById('Time');
    const day = document.getElementById('Day');

    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const newTime = new Intl.DateTimeFormat('en-US', options).format(now);
    const weekDay = now.toLocaleDateString('en-GB', { weekday: 'long' });

    time.textContent = newTime;
    day.textContent = weekDay;
 }  
 setInterval(updateTime, 1000);
   
   
   
   
   
   
   /** window.onload = function() {
        var img = document.getElementById('myImage');
        
        if (img.naturalWidth && img.naturalHeight) {
            console.log('Natural Width: ' + img.naturalWidth);
            console.log('Natural Height: ' + img.naturalHeight);

            if (img.width === img.naturalWidth && img.height === img.naturalHeight) {
                console.log('The image is displayed in its natural dimensions.');
            } else {
                console.log('The image is not displayed in its natural dimensions.');
            }
        } else {
            console.log('The image does not have natural dimensions.');
        }
    }; */