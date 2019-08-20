<template>
  <div class="app-container">
    <h1>To do list :D</h1>

    <div class="set-task-container">
      <input placeholder="Enter task title" type="text">
      <input placeholder="Enter task description" type="text">
      <button>Create task</button>
    </div>

    <ToDoItem />
  </div>
</template>

<script>
import ToDoItem from '../components/to-do-item.component';

export default {
  name: 'todo',

  components: {
    ToDoItem
  }
}
</script>

<style lang="scss">

.set-task-container {
  margin-bottom: 40px;
}

input {
  margin-right: 20px;
}

</style>
