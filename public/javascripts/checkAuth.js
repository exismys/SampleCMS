document.getElementById('authbtn').addEventListener('click', (event) => {
    const result = fetch('/checkAuth/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem('token')
        })
    }).then(res => res.json());
    if (result.status = 'ok') {
        console.log('authorized');
    } else {
        alert(result.error);
    }
});