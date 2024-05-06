function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var password = document.getElementById("key").value || "MySecretPassword"; // Kunci enkripsi (ganti dengan kunci yang kuat)
    var encryptedText = CryptoJS.AES.encrypt(inputText, password).toString();
    document.getElementById("outputText").value = 'Hasil Enkripsi: ' + encryptedText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var password = document.getElementById("key").value || "MySecretPassword"; // Kunci enkripsi (sama dengan yang digunakan untuk enkripsi)
    var decryptedText = CryptoJS.AES.decrypt(inputText, password).toString(CryptoJS.enc.Utf8);
    document.getElementById("outputText").value = 'Hasil Dekripsi: ' + decryptedText;
}
