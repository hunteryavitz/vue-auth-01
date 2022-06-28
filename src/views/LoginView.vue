<template>
  <main class="login">
    <section class="forms">
      <form
          class="register"
          @submit.prevent="register">
        <h2>Register</h2>
        <input
            type="email"
            placeholder="email@somewhere.com"
            v-model="register_form.email" />
        <input
            type="password"
            placeholder="5ecretS@uce"
            v-model="register_form.password" />
        <input
            type="submit"
            value="Register" />
      </form>
      <form
          class="login"
          @submit.prevent="login">
        <h2>Login</h2>
        <input
            type="email"
            placeholder="email@somewhere.com"
            v-model="login_form.email" />
        <input
            type="password"
            placeholder="5ecretS@uce"
            v-model="login_form.password" />
        <input
            type="submit"
            value="Login" />

      </form>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "LoginView",

  setup() {
    const login_form = ref({})
    const register_form = ref({})
    const store = useStore()

    const login = () => {
      store.dispatch('login', login_form.value)
    }

    const register = () => {
      store.dispatch('register', register_form.value)
    }

    return {
      login_form,
      register_form,
      login,
      register
    }

  }
}
</script>

<style scoped>
.forms {
  display: flex;
  min-height: 100vh;
}
form {
  flex: 1 1 0;
  padding: 8rem 1rem 1rem;
}
form.register {
  color: #FFF;
  background-color: #2c3e50;
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  font-size: 1.5rem;
  padding: 0.5rem 0;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #FFF;
  border-bottom: 2px solid #AAA;
}

form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #000;
}

form.login input[type="submit"] {
  background-color: #2c3e50;
  color: #FFF;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

form.register input[type="submit"] {
  background-color: #FFF;
  color: #2c3e50;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

</style>