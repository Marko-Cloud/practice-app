<template>
  <div class="app-container">
    <h1>To do list :D</h1>

    <div class="set-task-container">
      <input placeholder="Enter task title" v-model="taskTitle" type="text">
      <input placeholder="Enter task description" v-model="taskDescr" type="text">
      <button @click="createTask">Create task</button>
    </div>

    <ToDoItem v-for="item in toDoList" :title="item.title" 
                                       :descr="item.descr" 
                                       :id="item.id" 
                                       :finished="item.finished"
                                       @removeItem="deleteItem" 
                                       @checkTaskStatus="checkTaskStatus" />
  </div>
</template>

<script>
// Firebase
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0S3l1Tr-qPuiAgU6nzBaLiQLWzNrkhAY",
  authDomain: "exercise-and-learning.firebaseapp.com",
  databaseURL: "https://exercise-and-learning.firebaseio.com",
  projectId: "exercise-and-learning",
  storageBucket: "exercise-and-learning.appspot.com",
  messagingSenderId: "860042799000",
  appId: "1:860042799000:web:199e38a526dc0224"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Components
import ToDoItem from '../components/to-do-item.component';

export default {
  name: 'todo',

  data() {
    return {
      toDoList: [],
      taskTitle: '',
      taskDescr: ''
    }
  },

  created() { 
    //Get items from Firebase
    let self = this;
    db.collection("tasks").doc("NpERqekVUkF3hmEDmnJT").get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data().tasks);

            self.toDoList = doc.data().tasks;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  },

  methods: {
    createTask() {
      if (this.taskTitle == '' || this.taskDescr == '') {
        alert('Please enter task Title and task description');

        return;
      }
      let timestampId = Date.now();

      let newItem = { title: this.taskTitle, descr: this.taskDescr, id: timestampId, finished: false };
      this.toDoList.push(newItem);

      this.taskTitle = '';
      this.taskDescr = '';

      db.collection("tasks").doc("NpERqekVUkF3hmEDmnJT").update({
          tasks: firebase.firestore.FieldValue.arrayUnion(newItem)
      });
    },

    deleteItem(value) {
      let deleteItem = this.toDoList.find(obj => obj.id == value);
      this.toDoList = this.toDoList.filter(obj => obj.id !== value);

      console.log(deleteItem)
      
      db.collection("tasks").doc("NpERqekVUkF3hmEDmnJT").update({
          tasks: firebase.firestore.FieldValue.arrayRemove(deleteItem)
      });
    },

    checkTaskStatus(valueArray) { 
      let taskId = valueArray[0];
      let taskStatus = valueArray[1];

      this.toDoList = this.toDoList.map(item => {
        if (item.id === taskId) {
          item = { ...item , finished: taskStatus };
        }
        return item;
      });

      sessionStorage.setItem("toDoList", JSON.stringify(this.toDoList));
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
