const apiUrl = 'https://656976ecde53105b0dd7128c.mockapi.io/api/users';

function checkCredentials(email, password) {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then(users => {
      const user = users.find(u => u["e-mail"] === email && u.password === password);
      
      if (user) {
        console.log('Credentials are valid.');
        const userId = user.id;
        localStorage.setItem('userId', userId);
        window.location.href = 'index.html';
      } else {
        alert('Invalid credentials. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function submitForm() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const email = emailInput.value;
  const password = passwordInput.value;

  checkCredentials(email, password);
}
