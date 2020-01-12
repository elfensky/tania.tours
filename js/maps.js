function initMap() {
    // The location
    var location = {lat: 50.8, lng: 3};
    // The map, centered at location
    var map = new google.maps.Map(
        document.getElementById('map'), 
        {
            zoom: 8, 
            center: location,
            disableDefaultUI: true,
            mapTypeId: 'terrain'

        });
    // The marker, positioned at location
    // var marker = new google.maps.Marker({position: location, map: map});
}
