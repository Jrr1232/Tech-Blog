const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup');
    const email = document.querySelector('#email-signup');
    const password = document.querySelector('#password-signup');

    if (username && email && password) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({
                username: username.value
                , email: email.value
                , password: password.value
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
            alert('Signed Up')
            console.log("signed up")

        } else {
            alert('Failed to sign up.');
        }
    }
};

document.querySelector('.signup-form')?.addEventListener('submit', signupFormHandler);
