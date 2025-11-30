if (!localStorage.getItem("auth")) {
    window.location.href = "login.html";
}

function logout() {
    localStorage.removeItem("auth");
    window.location.href = "login.html";
}
