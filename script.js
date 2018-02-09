$(document).ready(function() {
  $('.sect-4').on('click', 'button', myGoalsBtn);
  function myGoalsBtn (e) {
    e.preventDefault();
    $('.my-goals__article').fadeIn(500).append('<iframe src="https://giphy.com/embed/udsCBnNpNWprO">');
  }
});
