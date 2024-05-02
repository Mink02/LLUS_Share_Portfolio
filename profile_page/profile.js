function handleClick(clickedButtonId) {
  var buttons = document.querySelectorAll('.button-box');

  buttons.forEach(function(button) {
    var link = button.querySelector('a');

    if (button.id === clickedButtonId) {
      link.style.color = 'inherit';
    } else {
      link.style.color = 'grey';
    }
  });
}
