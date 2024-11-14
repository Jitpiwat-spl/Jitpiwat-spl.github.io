let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const infobarElement = document.querySelector(".infooobar");

function renderUpcomingTasks() {
    infobarElement.innerHTML = "";  
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const upcomingTasks = tasks.filter(task => {const taskDate = new Date(task.date);
                                                taskDate.setHours(0, 0, 0, 0); 
                                                return taskDate >= currentDate;  
                                                });

    if (upcomingTasks.length > 0) {
        upcomingTasks.forEach((task) => {
            const taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");
            taskContainer.innerHTML = `
                <div class="inf-item">Task : ${task.name}</div>
                <div class="inf-des">Description : ${task.description}</div>
                <div class="inf-date">Due date : ${task.date}</div>
            `;
            infobarElement.appendChild(taskContainer);
        });
    } else {
        infobarElement.innerHTML = "<div>No upcoming tasks</div>";
    }
}

document.addEventListener("DOMContentLoaded", renderUpcomingTasks);
