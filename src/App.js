import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(props.tasks);
  const [t, i18n] = useTranslation();

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  //to create unique tasks with id
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskNoun = taskList.length > 1 ? "tasks remaining" : "task remaining";
  const headingText = `${taskList.length} ${t(taskNoun)}`;

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks[0]);
  }

  function toggleLanguage(language) {
    i18n.changeLanguage(language);
  }
  return (
    <div>
      <nav>
        <Button
          variant="outline-primary"
          style={{ border: "1px" }}
          onClick={() => toggleLanguage("en")}
        >
          English
        </Button>
        <Button
          variant="outline-primary"
          style={{ border: "1px" }}
          onClick={() => toggleLanguage("ch")}
        >
          中文
        </Button>
      </nav>
      <div className="todoapp stack-large">
        <h1>{t("Title")}</h1>
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">{filterList}</div>
        <h2 id="list-heading">{headingText}</h2>
        <ul className="todo-list stack-large stack-exception">{taskList}</ul>
      </div>
    </div>
  );
}

export default App;
