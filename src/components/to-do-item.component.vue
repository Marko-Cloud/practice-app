<template>
  <div class="to-do-item">
    <button class="close-button"></button>

    <div class="to-to-item__descr">
      <h4>Naslov taska</h4>
      <p>Opis taska</p>
      <hr>
    </div>

    <div class="to-to-item__status">
      <input type="checkbox" id="checked-status" name="status-checkbox">
      <label for="checked-status">Done</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoItem',

  
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

  p {
    margin-bottom: 15px;
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

  &:hover {
    background: url('../assets/img/close.png') center center/cover no-repeat;
		box-shadow: none;
  }
}

</style>
