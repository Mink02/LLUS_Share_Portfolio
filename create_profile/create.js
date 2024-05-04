document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission behavior
  
  // Retrieve form data
  var formData = new FormData(this);
  var formObject = {};
  formData.forEach(function(value, key){
    formObject[key] = value;
  });

  // Optionally, you can store form data to local storage or send it to the server using AJAX
  
  // Redirect to another page
  window.location.href = '../resume_page/resume.html'; // Replace 'otherpage.html' with the URL of the page you want to navigate to
});