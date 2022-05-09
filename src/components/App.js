import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('All');

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(deleteTask) {
    setTasks(tasks.filter((task) => task.text !== deleteTask));
  }

  const showTaskList = tasks.filter((task) =>
    category === 'All' ? 'All' : task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectedCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== 'All')}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList onDeleteTask={handleDeleteTask} tasks={showTaskList} />
    </div>
  );
}

export default App;
