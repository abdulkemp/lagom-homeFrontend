<template>
  <div>
    <!-- <NavBar /> -->
    <!-- <Spinner /> -->
    <Admin/>
     <EditProduct/>
     <EditUser/>
     <AddProduct/>
     <AddUser/>
  </div>
</template>
    <script>
import Admin from "@/components/Admin.vue";
import EditProduct from "../components/EditProduct.vue";
import EditUser from "../components/EditUser.vue";
import AddProduct from "../components/AddProduct.vue";
import AddUser from "../components/AddUser.vue";
// import Spinner from '../components/Spinner.vue'
// import NavBar from "../components/NavBar.vue";
export default {
  name: "admin-comp",
  components: {
    Admin,
    EditProduct,
    EditUser,
    AddProduct,
    AddUser,
    // Spinner
    // NavBar
  },
};
</script>
    <style scoped>
</style>
