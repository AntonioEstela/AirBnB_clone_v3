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
