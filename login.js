console.log("javascript connected");

let emailList = ["abc@gmail.com", "shahmeer@gmail.com", "test1@gmail.com","abdullahansari@gmail.com","alisheikh@gmail.com","zunain@gmail.com","saylani@gmail.com"];
function checkemail() {
    let userInput = document.getElementById("userEmail").value;
    let found = false;

    for (let i = 0; i < emailList.length; i++) {
        if (emailList[i] === userInput) {
            found = true;
            break; 
        }
    }

    if (found) {
        alert("Successfully login");
    } else {
        alert("Incorrect email");
    }
}



let password = [134,741 , "graphitech@1","123","saylani","786",96];
function checkpassword() {
    let passwordInput = document.getElementById("userEmail").value;
    let found = false;

    for (let i = 0; i < emailList.length; i++) {
        if (password[i] === passwordInput) {
            found = true;
            break; 
        }
    }

    if (found) {
        alert("correct");
    } else {
        alert("Incorrect");
    }
}