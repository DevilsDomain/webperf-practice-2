if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log('User location:', latitude, longitude);

        const deliveryMessage = document.createElement('p');
        deliveryMessage.textContent = `We deliver to (${latitude}, ${longitude})`;
        deliveryMessage.classList.add('delivery-message');
        document.body.appendChild(deliveryMessage);
      },
      error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error('Geolocation permission denied');
            break;
          case error.POSITION_UNAVAILABLE:
            console.error('Geolocation position unavailable');
            break;
          case error.TIMEOUT:
            console.error('Geolocation timeout');
            break;
          default:
            console.error('Geolocation error:', error.message);
        }
      }
    );
  } else {
    console.error('Geolocation not supported');
  }