const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Reset errors
  clearErrors();

  let isValid = true;

  // Validate email
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate password length
  if (passwordInput.value.length < 8) {
    showError(passwordInput, 'Password must be at least 8 characters');
    isValid = false;
  }

  if (isValid) {
    alert('Login successful!');
    // You can handle further login logic here
    form.reset();
  }
});

function showError(input, message) {
  const inputGroup = input.parentElement;
  inputGroup.classList.add('error');
  const errorMsg = inputGroup.querySelector('.error-msg');
  errorMsg.textContent = message;
}

function clearErrors() {
  const inputGroups = form.querySelectorAll('.input-group');
  inputGroups.forEach(group => {
    group.classList.remove('error');
    group.querySelector('.error-msg').textContent = '';
  });
}

function validateEmail(email) {
  // Simple email regex for demonstration
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
