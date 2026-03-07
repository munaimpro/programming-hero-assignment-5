document.getElementById('signin-btn').addEventListener('click', function () {
    const username = document.getElementById('input-username').value;
    const password = document.getElementById('input-password').value;

    if (username == '' || password == '') {
        alert("Please fill out all information");
    } else {
        if (username == 'admin' && password == 'admin123') {
            alert("Signin Successful");
            // window.location.replace('home.html')
            window.location.assign('home.html')
        } else {
            alert("Signin Failed");
            return;
        }
    }
})