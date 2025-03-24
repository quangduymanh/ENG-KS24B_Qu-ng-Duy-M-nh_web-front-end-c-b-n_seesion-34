document.addEventListener("DOMContentLoaded", loadEmployees);
        function loadEmployees() {
            let employees = JSON.parse(localStorage.getItem("employees")) || [];
            let tableBody = document.getElementById("employeeTable");
            tableBody.innerHTML = "";
            employees.forEach((employee, index) => {
                let row = `<tr>
                                <td>${index + 1}</td>
                                <td>${employee.name}</td>
                                <td>${employee.role}</td>
                           </tr>`;
                tableBody.innerHTML += row;
            });
        }
        function addEmployee() {
            let name = document.getElementById("nameInput").value.trim();
            let role = document.getElementById("roleInput").value.trim();
            if (name === "" || role === "") {
                console.log("Vui lòng nhập đầy đủ thông tin!");
                return;
            }
            let employees = JSON.parse(localStorage.getItem("employees")) || [];
            employees.push({ name, role });
            localStorage.setItem("employees", JSON.stringify(employees));
            console.log("Đã thêm nhân viên:", name, "-", role);
            document.getElementById("nameInput").value = "";
            document.getElementById("roleInput").value = "";
            loadEmployees();
        }