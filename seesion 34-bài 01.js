function register() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    if (!email) {
        console.log("Email không được để trống");
        return;
    }
    if (!password) {
        console.log("Mật khẩu không được để trống");
        return;
    }
    if (password !== confirmPassword) {
        console.log(" Mật khẩu xác nhận không khớp");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.some(user => user.email === email);

    if (userExists) {
        console.log("Email đã tồn tại trong hệ thống");
        return;
    }
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Đăng ký thành công");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Danh sách người dùng sau khi đăng ký:", users);
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
}
