function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (!email) {
        console.log("Email không được để trống");
        return;
    }
    if (!password) {
        console.log("Mật khẩu không được để trống");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log("Đăng nhập thành công");
        console.log("Email:", email);
        
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
    } else {
        console.log("Email hoặc mật khẩu không đúng");
    }
}