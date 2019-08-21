<template>
  <div class="app-container">
    <h1>To do list :D</h1>

    <div class="set-task-container">
      <input placeholder="Enter task title" v-model="taskTitle" type="text">
      <input placeholder="Enter task description" v-model="taskDescr" type="text">
      <button @click="createTask">Create task</button>
    </div>

    <ToDoItem v-for="item in toDoList" :title="item.title" :descr="item.descr" :id="item.id" @removeItem="deleteItem" />
  </div>
</template>

<script>
import ToDoItem from '../components/to-do-item.component';

const toDoList = [
  { title: 'Title-1', descr: 'some description 1' },
  { title: 'Title-2', descr: 'some description 2' },
  { title: 'Title-3', descr: 'some description 3' },
  { title: 'Title-4', descr: 'some description 4' }
];

export default {
  name: 'todo',

  data() {
    return {
      toDoList: [],
      taskTitle: '',
      taskDescr: ''
    }
  },

  methods: {
    createTask() {
      if (this.taskTitle == '' || this.taskDescr == '') {
        alert('Please enter task Title and task description');

        return;
      }

      let newItem = { title: this.taskTitle, descr: this.taskDescr, id: this.toDoList.length };
      this.toDoList.push(newItem);

      this.taskTitle = '';
      this.taskDescr = '';
    },

    deleteItem(value) {
      this.toDoList = this.toDoList.filter(obj => obj.id !== value);
    }
  },

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
