<template>
  <div class="to-do-item" :class="{ 'done': isChecked }">
    <button class="close-button" @click="removeItem"></button>

    <div class="to-to-item__descr">
      <h4>{{ title }}</h4>
      <p>{{ descr }}</p>
      <hr>
    </div>

    <div class="to-to-item__status">
      <input type="checkbox" v-model="isChecked" name="status-checkbox">
      <label>Done</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',

  data() {
    return {
      isChecked: false,
    }
  },

  props: {
    title: {
      type: String,
      required: true
    },
    descr: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },

  methods: {
    removeItem() {
      this.$emit('removeItem', this.id);
    }
  }
}
</script>

<style lang="scss">

.to-do-item {
  position: relative;
  font-style: italic;
  background: #6b4545;
  padding: 10px;
  border-radius: 4px;
  width: 400px;
  margin-bottom: 20px;

  p {
    margin-bottom: 15px;
  }

  &.done {
    background: green;
  }
}
.close-button {
  width: 30px;
  height: 30px;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  background: url('../assets/img/close.png') center center/cover no-repeat;
  border: none;
  box-shadow: none;
  border-radius: 100%;
  overflow: hidden;

  &:hover {
    background: url('../assets/img/close.png') center center/cover no-repeat;
    background-color: red;
		box-shadow: none;
  }
}

</style>
