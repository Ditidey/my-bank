
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-user');
    const email = emailField.value;

    const passwordField = document.getElementById('password-user');
    const password = passwordField.value;

    if(email === 'ditisexy@gmail.com' && password === 'ditiSexy')
    {
        window.location.href = 'bank.html';
    }
    else 
    {
         alert('Opps Sorry, Incorrect Information!!');
    }
})