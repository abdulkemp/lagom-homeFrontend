import { createStore } from 'vuex'
import axios from 'axios'
const lagomURL = "https://lagom-project.onrender.com/"
export default createStore({
  state: {
    products: null,
  },
  getters: {
  },
  mutations: {
    setProducts(state, value){
      state.products = value
    }
  },
  actions: {
    async fetchProducts(context){
      const res = await axios.get(`${lagomURL}products`)
      const {results, err} = await res.data;
      if (results) {
        context.commit('setProducts', results)
      } else {
        context.commit(err)
      }
    }
  },
  async login(context, payload){
    console.log(payload);
    fetch(`https://lagom-project.onrender.com/login`, {
    // fetch(`http://localhost:3306/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // console.log(err);
    })
  },
  async register(context, payload){
    console.log(payload);
    fetch(`https://lagom-project.onrender.com/register`, {
      method: 'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify(payload)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // console.log(err);
    })
  },
  modules: {
  }
})
