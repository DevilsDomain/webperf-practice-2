if ('geolocation' in navigator) {
    // Request permission
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log('User location:', latitude, longitude);
        // Display user's location
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
  