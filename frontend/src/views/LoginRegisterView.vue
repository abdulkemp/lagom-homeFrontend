<template>
  <div class="body">
    <div class="everything">
      <div class="login">
        <div class="front">
          <img
            src="https://i.postimg.cc/fT2ShMJR/23edd32f3158992ec50d955d6b39157a.jpg"
            alt=""
          />
        </div>
        <div class="form">
          <div class="log">
            <form action="" @submit="login" class="loginform">
              <img
                src="https://i.postimg.cc/26C74zH7/lagom-high-resolution-logo-black-on-transparent-background.png"
                alt=""
              />
              <h1 class="head">Welcome Back!</h1>
              <input class="input" type="email" v-model="emailAdd" placeholder="Email" required />
              <input class="input" type="password" v-model="password" placeholder="password" required />
              <button type="submit" class="btn btn-primary">Login</button>
              <router-link class="link" to="">Forget Password</router-link>
              <router-link class="link" to="">Create Account</router-link>
            </form>
          </div>
        </div>
      </div>
      <div class="register">
        <div class="front1">
          <img
            src="https://i.postimg.cc/fT2ShMJR/23edd32f3158992ec50d955d6b39157a.jpg"
            alt=""
          />
        </div>
        <div class="form">
          <div class="log">
            <form action="" @submit="register" class="registerform">
              <img
                src="https://i.postimg.cc/26C74zH7/lagom-high-resolution-logo-black-on-transparent-background.png"
                alt=""
              />
              <input class="input" v-model="firstName" type="text" placeholder="Name" required />
              <input class="input" v-model="lastName" type="text" placeholder="Surname" required />
              <input class="input" v-model="emailAdd" type="email" placeholder="Email" required />
              <input class="input" v-model="password" type="password" placeholder="Password" required />
              <!-- <input
                type="text"
                name="profile image"
                label=""
                v-model="imgPro"
                placeholder="http://"
              /> -->
              <button type="submit" class="btn btn-primary">Register</button>
              <router-link class="link" to="">Forget Password</router-link>
              <router-link class="link" to="">Create Account</router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from '@vue/runtime-core'
import {useStore} from 'vuex'
import axios from 'axios';
import lagomURL from '../store/index'
export default {
  name: "LoginRegister",
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAdd: "",
      password: "",
      // imgPro: "",
    };
  },
  methods:{
    register(e) {
      e.preventDefault();
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        password: this.password
      };
      this.$store.dispatch("register", payload);
    },
    login(e) {
      e.preventDefault();
      const payload = {
        emailAdd: this.emailAdd,
        password: this.password
      };
      this.$store.dispatch("login", payload);
    }
    
  }
};
  
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  overflow: hidden;
}
.login {
  /* margin-right: 5rem; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login .front img {
  width: 600px;
  height: auto;
  max-width: 100%;
}
.register .front1 img {
  width: 600px;
  height: auto;
  max-width: 100%;
}
.front {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  /* margin-top: 3rem; */
}
.front1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  /* margin-top: 3rem; */
}
.loginform h1 {
  /* display: flex;
    justify-content: center;
    align-items: center; */
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: black;
}
.para {
  max-width: 100%;
  width: 550px;
  padding: 0 10px;
}
.para h1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  color: red;
  font-size: 42px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.loginform input {
  margin-bottom:20px;
  border: none;
  border-bottom: 1px solid black;
  background: rgba(128, 128, 128, 0.322);
}
.registerform input {
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid black;
  background: rgba(128, 128, 128, 0.322);
}
.loginform {
  display: contents;
  justify-content: center;
  align-items: center;
}
.registerform {
  display: contents;
  justify-content: center;
  align-items: center;
}
.registerform img{
  margin-bottom: 1rem;
}
.everything {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.login {
  position: relative;
  /* width: 20rem;
  height: 25rem; */
  background-color: aqua;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register {
  position: relative;
  /* width: 20rem;
  height: 25rem; */
  background-color: aqua;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  /* width: 550px; */
}
.form {
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  height: 25rem;
  padding: 20px;
}
button {
  margin-bottom: 5px;
  margin-top: 1rem;
  color: black;
}
.login .form .log {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.register .form .log {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
/* .login:hover {
  transform: translateX(-50%) ;
} */
.login .front {
  position: relative;
  width: 20rem;
  height: 25rem;
  z-index: 1;
  transform-origin: left;
  transform-style: preserve-3d;
  transition: 1s;
}
.register .front1 {
  position: relative;
  width: 20rem;
  height: 25rem;
  z-index: 1;
  transform-origin: right;
  transform-style: preserve-3d;
  transition: 1s;
}
.login:hover .front {
  transform: rotateY(-180deg);
}
.register:hover .front1 {
  transform: rotateY(180deg);
}
.login .front img {
  position: relative;
  top: 0;
  left: 0;
  width: 20rem;
  height: 25rem;
  object-fit: cover;
  transform-style: preserve-3d;
  /* visibility: hidden; */
}
.register .front1 img {
  position: relative;
  top: 0;
  left: 0;
  width: 20rem;
  height: 25rem;
  object-fit: cover;
  transform-style: preserve-3d;
  /* visibility: hidden; */
}
.link{
  text-decoration: underline;
}
@media screen and (max-width: 650px) {
  .login .front img {
    width: 150px;
    height: 300px;
    /* visibility: hidden; */
  }
   .registerform .input {
  margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid black;
  background: rgba(128, 128, 128, 0.322);
}
  .register .front1 img {
    width: 150px;
    height: 300px;
    /* visibility: hidden; */
  }
  .login {
    width: 150px;
    height: 300px;
    /* visibility: hidden; */
  }
  .register {
    width: 150px;
    height: 300px;
    /* visibility: hidden; */
  }
  .loginform img {
    width: 6rem;
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }
  .loginform .input{
    margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid black;
  background: rgba(128, 128, 128, 0.322);
  }
  .registerform img {
    width: 6rem;
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loginform .btn {
    font-size: 10px;
  }
  .registerform .btn {
    font-size: 10px;
  }
  .link {
    font-size: 10px;
    margin-top: 5px;
    
  }
  .loginform .head{
    font-size: 15px;
    /* margin-top: 2rem; */
    /* margin-bottom: 1rem; */
    margin-left: 3px;
  }
  .login:hover {
    transform: translateX(50%);
  }
  .register:hover {
    transform: translateX(-50%);
  }
}
@media screen and (max-width: 900px) {
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }
  form img {
    width: 13rem;
    margin-left: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  .everything {
    display: inline-block;
    justify-content: center;
    align-content: center;
  }
  .form {
    width: 30rem;
    max-width: 100%;
  }
  .login {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }
  .register {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }
  .login:hover {
    transform: translateX(50%);
  }
  .register:hover {
    transform: translateX(-50%);
  }
  .head {
    font-size: 30px;
    margin-left: 2rem;
  }
}
</style>