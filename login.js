let users = [
    { email: "abc@gmail.com", password: "134" },
    { email: "shahmeer@gmail.com", password: "741" },
    { email: "test1@gmail.com", password: "graphitech@1" },
    { email: "abdullahansari@gmail.com", password: "123" },
    { email: "alisheikh@gmail.com", password: "saylani" },
    { email: "zunain@gmail.com", password: "786" },
    { email: "saylani@gmail.com", password: "96" }
];


function login() {
    let emailInput = document.getElementById("userEmail").value;
    let passwordInput = document.getElementById("userPassword").value;

    let isValid = users.some(user => 
        user.email === emailInput && user.password === passwordInput
    );

    if (isValid) {
        alert("Login successful ✅");
    } else {
        alert("Invalid email or password ❌");
    }
}
