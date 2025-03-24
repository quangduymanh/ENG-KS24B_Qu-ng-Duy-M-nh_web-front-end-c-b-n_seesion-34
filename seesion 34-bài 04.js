document.addEventListener("DOMContentLoaded", loadTasks);

        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            tasks.forEach((task, index) => {
                let li = document.createElement("li");
                li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(${index})">Xóa</button>`;
                taskList.appendChild(li);
            });
        }
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let task = taskInput.value.trim();

            if (task === "") {
                console.log("Vui lòng nhập công việc!");
                return;
            }

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));

            console.log("Đã thêm công việc:", task);
            taskInput.value = "";
            loadTasks();
        }
        function deleteTask(index) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            console.log("Đã xóa công việc:", tasks[index]);
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadTasks();
        }