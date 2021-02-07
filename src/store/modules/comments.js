export default {
  state: {
    comments: [
      {
        user: "admin",
        title: "admin-comment",
        content: "admin-comment text text text "
      },
      {
        user: "user",
        title: "user-comment",
        content: "user-comment text text text "
      },
      {
        user: "anonim",
        title: "anonim-comment",
        content: "anonim-comment text text text "
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    tabs(state) {
      return state.comments
    }
  },
}
