<template>
  <div class="container">
<!-- Modal -->
<div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <h1>Add User</h1>
      <label class="label">FirstName</label>
      <input type="text">
      <label class="label">LastName</label>
      <input type="text">
      <label class="label">Email</label>
      <input type="text">
      <label class="label">Password</label>
      <input type="text">
      <label class="label">Image</label>
      <input type="text">
      <button class="btn btn-success mt-3" @click="$event => updateProduct()">Add</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
.modal-body{
  display: flex;
  flex-direction: column;
}
</style>