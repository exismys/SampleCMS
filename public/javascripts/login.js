document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const result = await fetch('/login/', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        })
    }).then((res) => res.json());
    if (result.status == 'ok') {
        localStorage.setItem('token', result.data);
    } else {
        alert(result.error);
    }
})