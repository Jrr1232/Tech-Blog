const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
    console.log(email)
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: passwordEl.value
        }),
        headers: { 'Content-Type': 'application/json' },
    });


    if (response.ok) {


        document.location.replace('/');
    } else {
        alert('Failed to log in.');
    }

};
