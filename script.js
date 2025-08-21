function newUser() {
    let input = document.getElementById("input-details");
    input.innerHTML = `
        <form>
            <input placeholder="Enter your mail" type="email" class="getMail">
            <small class="error-mail" style="display:none; color:red;"></small>

            <input placeholder="Enter your name" type="text" class="getName">
            <small class="error-name" style="display:none; color:red;"></small>

            <input placeholder="Enter password" type="password" class="getPwd">
            <small class="error-pass" style="display:none; color:red;"></small>

            <input placeholder="Confirm password" type="password" class="getPwd1">
            <small class="error-pass1" style="display:none; color:red;"></small>

            <div class="signin">
                <h4 style="background-color: blue;" onclick="signIn()">Create User</h4>
                <h4 style="background-color: green;" onclick="showOldUserForm()">Sign In</h4>
            </div>
        </form>
    `;

    document.querySelector(".getMail").addEventListener('keydown', function(event) {
        if (event.key === 'Enter') signIn();
    });
}

    function oldUser(){
        
    const mailElement = document.querySelector(".getMail");
    const errorMsg = document.querySelector(".error-msg");

    if (!mailElement.value) {
        errorMsg.innerText = "Please enter a valid Email!";
        errorMsg.style.display = "block";
        mailElement.classList.add("error-input");
    } 
    else if (mailElement.value === "adminlib@gmail.com") {
        errorMsg.style.display = "none";
        mailElement.classList.remove("error-input");
        alert("Success");
        window.location.href = "admin/home/home.html";
    } 
    else {
        errorMsg.innerText = "Email not recognized!";
        errorMsg.style.display = "block";
    }
}

        


    
    document.querySelector(".getMail").addEventListener('keydown', function(event){
        if(event.key=='Enter') oldUser();
    })

    function showOldUserForm(){
        let inpvar=document.querySelector("#input-details");
        inpvar.innerHTML=`
            <div id="input-details">
                <input placeholder="Enter your mail" type="text" class="getMail">
                <small class="error-msg" style="color: red; display: none;"></small>
                <div class="signin">
                        <h4 style="background-color: blue;" onclick="oldUser()">Sign In</h4>
                    
                    <h4  style="background-color: green;" onclick="newUser()">New User</h4>
                </div>
            </div>
        
        `;
    }
    function signIn() {
    const mailElement = document.querySelector('.getMail');
    const nameElement = document.querySelector('.getName');
    const passElement1 = document.querySelector('.getPwd');
    const passElement2 = document.querySelector('.getPwd1');

    const errorMail = document.querySelector('.error-mail');
    const errorName = document.querySelector('.error-name');
    const errorPass = document.querySelector('.error-pass');
    const errorPass1 = document.querySelector('.error-pass1');

    let valid = true;

    if (!mailElement.value) {
        errorMail.innerText = "Please enter your email";
        errorMail.style.display = "block";
        mailElement.classList.add("error-input");
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(mailElement.value)) {
        errorMail.innerText = "Enter a valid email address";
        errorMail.style.display = "block";
        mailElement.classList.add("error-input");
        valid = false;
    } else {
        errorMail.style.display = "none";
        mailElement.classList.remove("error-input");
    }


    if (!nameElement.value) {
        errorName.innerText = "Please enter your name";
        errorName.style.display = "block";
        nameElement.classList.add("error-input");
        valid = false;
    } else {
        errorName.style.display = "none";
        nameElement.classList.remove("error-input");
    }

    if (!passElement1.value) {
        errorPass.innerText = "Please enter a password";
        errorPass.style.display = "block";
        passElement1.classList.add("error-input");
        valid = false;
    } else if (passElement1.value.length < 6) {
        errorPass.innerText = "Password must be at least 6 characters";
        errorPass.style.display = "block";
        passElement1.classList.add("error-input");
        valid = false;
    } else {
        errorPass.style.display = "none";
        passElement1.classList.remove("error-input");
    }


    if (!passElement2.value) {
        errorPass1.innerText = "Please confirm your password";
        errorPass1.style.display = "block";
        passElement2.classList.add("error-input");
        valid = false;
    } else if (passElement2.value !== passElement1.value) {
        errorPass1.innerText = "Passwords do not match";
        errorPass1.style.display = "block";
        passElement2.classList.add("error-input");
        valid = false;
    } else {
        errorPass1.style.display = "none";
        passElement2.classList.remove("error-input");
    }

    if (valid) {
        alert("User created successfully!");
        
    }
}


