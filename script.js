const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");




function checkInput() {
    if (textInput.value === "") {
        return alert("Pleasre input a value");
    }
    else if (textInput.value.length === 1) {
        result.textContent = `${textInput.value} is a palindrome`
    }
    else if (textInput.value.replace(/[^0-9a-zS]/gi, '').toLowerCase() === [...textInput.value.replace(/[^0-9a-zS]/gi, '').toLowerCase()].reverse().join("")) {
        result.textContent = `${textInput.value} is a palindrome`
    }
    else {
        result.textContent = `${textInput.value} is not a palindrome`
    }
    return 0;
    

}

checkButton.addEventListener("click", checkInput);