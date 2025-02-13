var generateBtn = document.querySelector("#generate");

function writePassword() {

    // the characters for Generator
    let arrabc = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr123 = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9'];
    let arrSch = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '?', '+', '=', '|', ':', ';', '<', '>', ',', '.'];
    let symbForPass = [];
    let numSteps;
    let newPass = '';
    

    // 8 - 128  STEPS Generator
    let maxAndMin = prompt('\n\ Enter the number of characters for the password from 8 to 128.\n\ Or press CANCEL, when the password is only 8 characters');

    if (maxAndMin) {
        numSteps = maxAndMin;
    } else {
        numSteps = 8;
    }

    //lowercase
    let chooseLowercase = confirm('The password will contain lowercase characters.\n\OK?');
    if (chooseLowercase) {
        symbForPass.push(arrabc);
    }

    //UPPERcase
    let chooseUppercase = confirm('The password will contain uppercase characters.\n\OK?');
    if (chooseUppercase) {
        symbForPass.push(arrABC);
    }

    //123
    let chooseNumeric = confirm('The password will contain numeric characters.\n\OK?');
    if (chooseNumeric) {
        symbForPass.push(arr123);
    }

    // special characters
    let chooseSpecial = confirm('The password will contain special characters.\n\OK?');
    if (chooseSpecial) {
        symbForPass.push(arrSch);
    }

    // one character type 
    if(!chooseLowercase && !chooseUppercase && !chooseNumeric && !chooseSpecial) {
        alert('The password must contain at least one condition\n\Try again.');
        writePassword();
    }

    alert('Сongratulations!\n\Your password is ready');

    //Generator
    for (let i = 0; i < numSteps; i++) {
        let arrIndex1 = Math.floor(Math.random() * symbForPass.length);
        let arrIndex2 = Math.floor(Math.random() * symbForPass[arrIndex1].length);
        newPass = newPass + symbForPass[arrIndex1][arrIndex2];
    }

    // add to page
    let myPass = document.querySelector('#password');
    myPass.textContent = newPass;
}

generateBtn.addEventListener("click", writePassword);