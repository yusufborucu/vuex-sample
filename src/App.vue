<template>
  <div>
    <h3>Kullanıcılar</h3>
    <ul>
      <li 
        v-bind:key="user.id"
        v-for="user in getUsers">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    created() {
      this.$store.dispatch("users");
    },
    computed: {
      ...mapGetters(["getUsers"])
    }
  }
</script>