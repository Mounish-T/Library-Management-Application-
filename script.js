function newUser(){
    let input = document.getElementById("input-details");
    input.innerHTML = `
        <form action="">
            <input placeholder="Enter your mail" type="email" class="getMail">
            <input placeholder="Enter your name" type="text" class="getName">
            <input placeholder="Enter password" type="password" class="getPwd">
            <div class="signin">
                <a href="home/home.html">
                    <h4 style="background-color: blue;" onclick="signIn()">Create User</h4>
                </a>
                <h4 style="background-color: green;" onclick="oldUser()">Sign In</h4>
            </div>
        </form>    
    `;
}

function oldUser(){
    let input = document.getElementById("input-details");
    input.innerHTML = `
        <input placeholder="Enter your mail" type="text" class="getMail">
        <div class="signin">
            <a href="home/home.html">
                <h4 style="background-color: blue;" onclick="signIn()">Sign In</h4>
            </a>
            <h4 style="background-color: green;" onclick="newUser()">New User</h4>
        </div>
    `
}
