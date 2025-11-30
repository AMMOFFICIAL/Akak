async function loginUser() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    try {
        const response = await fetch("users.json");
        const data = await response.json();

        const match = data.users.find(
            u => u.username === user && u.password === pass
        );

        if (match) {
            localStorage.setItem("auth", "true");
            window.location.href = "dashboard.html";
        } else {
            alert("Login gagal! Username atau password salah.");
        }

    } catch (err) {
        alert("Connection Error. Pastikan dijalankan dari SERVER.");
        console.error(err);
    }
}
