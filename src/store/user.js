import { computed, reactive } from "vue"

const state = reactive({
  name: "",
  username: "",

  error: ""
})

const getters = reactive({
  isLoggedIn: computed(() => state.username !== "")
})

const actions = {
  async getUser() {
    // const user = await Request.getUser()
    // if (user == null) return
    // state.name = user.name
    // state.username = user.username
  },
  async login(username, password) {
    fetch("/users.json").then(res => {
      res.json().then(response => {
        console.log(response)
        const user = response.find(
          s => s.password === password && s.username === username
        )
        if (user == null) {
          state.error = "Could not fin error"
        } else {
          state.name = user.name
          state.username = username
          state.error = ""
        }
        console.log(user)
      })
    })

    return true
  },
  async logout() {
    state.name = ""
    state.username = ""
  }
}

export default { state, getters, ...actions }
