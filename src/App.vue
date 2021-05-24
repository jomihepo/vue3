<template>

  {{userStore}}
  <div v-if="!userStore.getters.isLoggedIn" class="d-grid gap-2 col-6 mx-auto">
    <Login />
  </div>
  <div v-else class="text-center">
    <h2>Welcome, {{ userStore.state.name }}</h2>
    <Counter />
    <button class="btn btn-secondary" @click="userStore.logout()">
      Logout
    </button>
  </div>
</template>
<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import userStore from './store/user'
import Login from './components/Login'
import Counter from './components/Counter.vue'

export default defineComponent({
  name: 'App',
  components: { Login, Counter},
  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
