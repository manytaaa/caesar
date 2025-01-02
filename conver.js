function encrypt() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);
    let cipherText = caesarCipher(message, shift);
    document.getElementById("output").textContent = "Encrypted Message: " + cipherText;
}

function decrypt() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);
    let originalText = caesarCipher(message, -shift); 
    document.getElementById("output").textContent = "Decrypted Message: " + originalText;
}

function caesarCipher(str, shift) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char.match(/[a-z]/i)) { 
            let code = str.charCodeAt(i);
            if (char >= 'A' && char <= 'Z') {
                char = String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            }
            else if (char >= 'a' && char <= 'z') {
                char = String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            }
        }
        result += char; 
    }
    return result;
}