// apending a input to each amenity
$(document).ready(() => {
    const check = {};
    $(document).on('change', 'input[type="checkbox"]', function () {
      if (this.checked) {
        check[$(this).data('id')] = $(this).data('name');
      } else {
        delete check[$(this).data('id')];
      }
      let amenitiesList = Object.values(check);
      if (amenitiesList.length > 0) {
        $('div.amenities > h4').text(Object.values(check).join(', '));
      } else {
        $('div.amenities > h4').html('&nbsp;');
      }
    });
  });

  $.get('http://localhost:5002/api/v1/status/', data => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let place = data[i];
        $('section.places').append('<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div></div><div class="description">' + place.description + '</div></article>');
      }
    }
});
