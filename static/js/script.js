function getCSRFToken() {
  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
  return csrfToken ? csrfToken.value : '';
}

$(function () {
  $('.star').on('click', function () {
    const score = $(this).data('value');
    const bookId = $('#rating-stars').data('book-id');

  $.post(`/rate/${bookId}/`, {
    score: score,
    csrfmiddlewaretoken: getCSRFToken()
  }, function (data) {
    if (data.success) {
      alert("Thanks for your rating!");}
  });
  });
});