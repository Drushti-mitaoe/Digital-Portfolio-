// Toggle Dark Mode
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Form Submission Feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-response').textContent = "Thanks! I'll get back to you soon.";
  this.reset();
});
