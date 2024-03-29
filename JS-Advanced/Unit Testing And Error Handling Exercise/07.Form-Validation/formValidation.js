function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let companyNumber = document.getElementById('companyNumber');
    let company = document.getElementById('company');
    let arr = [];

    company.addEventListener('change', () => {
        document.getElementById('companyInfo').style.display = company.checked ? 'block' : 'none';
    });

    document.getElementById('submit').addEventListener('click', validFields)

    function correctUsername(username) {
        let userNamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
        return userNamePattern.test(username);
    }

    function correctEmail(email) {
        let emailPattern = /^\w+@\w*\.+/;
        return emailPattern.test(email);
    }

    function correctPass(password) {
        let regexp = /^\w{5,15}$/;
        return regexp.test(password) && password.localeCompare(confirmPassword.value) === 0;
    }

    function correctCompanyInfo(companyNumber) {
        let regexp = /^[0-9]{4}$/;
        return regexp.test(companyNumber);
    }

    function validFields(e) {
        e.preventDefault();

        if (!correctUsername(username.value)) {
            arr.push(username);
        }

        if (!correctEmail(email.value)) {
            arr.push(email);
        }

        if (!correctPass(password.value) || password.value !== confirmPassword.value) {
            arr.push(password);
            arr.push(confirmPassword);
        }

        if (company.checked) {
            if (!correctCompanyInfo(companyNumber.value)) {
                arr.push(companyNumber);
            }
        }
        arr.forEach(fld => fld.style.borderColor = 'red');

        document.getElementById('valid').style.display = arr.length ? 'none' : 'block';
    }
}