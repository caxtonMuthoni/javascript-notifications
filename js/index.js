Notification.requestPermission().then(function(permission) {
    if (permission == 'granted') {
        let options = {
            body: 'You have allowed notifications for this site',
            icon: '../images/notification.png'
        };

       const notification = new Notification("Congratulations !", options);
    }
});

const button = document.getElementById('notificationButtuonID');
button.addEventListener('click', function(e) {
    e.preventDefault();
    let options = {
        body: 'This notification was triggered by the button click',
        icon: '../images/notification.png'
    };

   const notification = new Notification("Button Notification", options);
})