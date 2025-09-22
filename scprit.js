<!-- script.js -->
// Paste this into script.js
const form = document.getElementById('contactForm');
const msg = document.getElementById('message');

function validatePhone(phone){
  // Accepts digits, spaces, dashes, plus sign, and should be 7-15 digits total
  const digits = phone.replace(/[^0-9]/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  msg.textContent = '';
  msg.className = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const college = form.college.value.trim();

  // Simple validation
  if(!name || !email || !phone || !college){
    msg.textContent = 'Please fill out all fields.';
    msg.classList.add('error');
    return;
  }

  // HTML5 will validate email input type, but double-check
  if(!form.email.checkValidity()){
    msg.textContent = 'Please enter a valid email address.';
    msg.classList.add('error');
    return;
  }

  if(!validatePhone(phone)){
    msg.textContent = 'Please enter a valid phone number (7–15 digits).';
    msg.classList.add('error');
    return;
  }

  // If all good — show success and log the values (replace this with a real submit where needed)
  msg.textContent = 'Form submitted successfully!';
  msg.classList.add('success');

  const formData = { name, email, phone, college };
  console.log('Form data:', formData);

  // Optionally reset the form after submission
  // form.reset();
});