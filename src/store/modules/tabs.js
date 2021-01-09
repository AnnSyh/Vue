export default {
  state: {
    tabs: [
      {title: "tab1",      content: "content1"},
      {title: "tab2",      content: "content2"},
      {title: "Veronica1", content: "Veridian Dynamics1"},
      {title: "Veronica2", content: "Veridian Dynamics2"},
      {title: "Veronica3", content: "Veridian Dynamics3"},
      {title: "Veronica4", content: "Veridian Dynamics4"},
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    tabs(state) {
      return state.tabs
    }
  },
}
