import Vue from "vue";

export const users = ({ commit }) => {
  Vue.http.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      commit("setUsers", response.body);
    });
};