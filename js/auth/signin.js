const mailInput = document.getElementById("EmailInput");
const passwordInput = document .getElementById("passwordInput");
const btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // Ici il faudra appeler l'API pour verifier les credentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        alert("Vous êtes Connecté");

        // Il faudra récupérer le vrai token
        const token = "iguihfioahdfuigedhou";
        setToken(token);

        // Placer ce token en cookies
        setCookie("role", "client", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}