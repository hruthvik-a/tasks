import React, { useEffect, useState } from "react";
import "./main.css";
import Tasks from "./Tasks";

const addedTask = [];
export default function Main() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [taskMeta, setTaskMeta] = useState({});
  const handleAddTasks = () => {
    // let task = {
    //   name: "Test",
    //   description: "Test test test test test",
    //   status: "added",
    // };
    // setTasks([...tasks, task]);
    setOpenDialog(true);
  };

  const handleAddTasks2 = (e) => {
    e.preventDefault();
    let task = {
      name: taskName,
      description: taskDescription,
      status: "added",
    };
    setTasks((prevtasks) => [...prevtasks, task]);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    setOpenDialog(false);
    setTaskName("");
    setTaskDescription("");
  };

  const handleOnDropAdded = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("added-main")) {
       
        let index = tasks.findIndex((item) => item.name === taskMeta["name"])
        let tasksVar = [...tasks]
        tasksVar[index]['status'] = 'added'
      setTasks([...tasksVar])
    }
  };
  const handleonDropStarted = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("started-main")) {
       
        let index = tasks.findIndex((item) => item.name === taskMeta["name"])
        let tasksVar = [...tasks]
        tasksVar[index]['status'] = 'started'
      setTasks([...tasksVar])
    }
  };

  const handleAllowDrop = (e) => {
    e.preventDefault();
  };

  const handleOnDropCompleted = (e) => {
    e.preventDefault();
      if (e.target.classList.contains("completed-main")) {
        
        let index = tasks.findIndex((item) => item.name === taskMeta["name"])
        let tasksVar = [...tasks]
        tasksVar[index]['status'] = 'completed'
        setTasks([...tasksVar])
    }
  };
  //   const handleOnDropStarted = (e) => {
  //     console.log("added to event started");
  //   };

  const handleDragStart = (e) => {
    // Check if the dragged element has the class 'task-name'
    if (e.target.classList.contains("tasks-main-main")) {
      // Accessing the element with the class 'task-name' within the dragged element
      const taskName = e.target.querySelector(".task-name").textContent;
      const taskDescription =
        e.target.querySelector(".task-description").textContent;
      setTaskMeta({
        name: taskName,
        description: taskDescription,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  return (
    <div className="main-page-main">
      <dialog open={openDialog}>
        <p>Add a new Task</p>
        <form onSubmit={handleAddTasks2}>
          <input
            name="taskname"
            placeholder="Task Name"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            required
          />
          <input
            name="taskdescription"
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
          <button>OK</button>
        </form>
      </dialog>
      <div className="header-main">
        <div className="header-main2">
          <span className="heading-main">Track Your Tasks</span>
        </div>
        <button onClick={handleAddTasks} className="add-task-btn">
          Add Task
        </button>
      </div>
      <div className="main-page">
        <div
          className="added-main"
          onDrop={handleOnDropAdded}
          onDragOver={handleAllowDrop}
        >
          <span className="main-heading">Added</span>
          <hr style={{ width: "15vw" }}></hr>
          <div className="added-main-content">
            {tasks
              .filter((item) => item.status === "added")
              .map((item, index) => {
                return (
                  <Tasks
                    key={index}
                    onDragStart={handleDragStart}
                    name={item.name}
                    description={item.description}
                  />
                );
              })}
          </div>
        </div>
        <div
          className="started-main"
          onDrop={handleonDropStarted}
          onDragOver={handleAllowDrop}
        >
          <span className="main-heading">Started</span>
          <hr style={{ width: "15vw" }}></hr>
          <div className="added-main-content">
            {tasks
              .filter((item) => item.status === "started")
              .map((item, index) => {
                return (
                  <Tasks
                    key={index}
                    onDragStart={handleDragStart}
                    name={item.name}
                    description={item.description}
                  />
                );
              })}
          </div>
        </div>
        <div
          className="completed-main"
          onDrop={handleOnDropCompleted}
          onDragOver={handleAllowDrop}
        >
          <span className="main-heading">Completed</span>
          <hr style={{ width: "15vw" }}></hr>
          <div className="added-main-content">
            {tasks
              .filter((item) => item.status === "completed")
              .map((item, index) => {
                return (
                  <Tasks
                    key={index}
                    onDragStart={handleDragStart}
                    name={item.name}
                    description={item.description}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
