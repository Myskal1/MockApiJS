const apiUrl = 'https://656976ecde53105b0dd7128c.mockapi.io/api/users';

function submitForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
 
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const newUser = {
        "name": username,
        "e-mail": email,
        "password": password
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        localStorage.removeItem('userId');
        window.location.href = 'index.html';
    })
    .catch(error => {
        console.error('Error adding user:', error);
    });
}

