import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const baseURL = ""

export default new Vuex.Store({
  state: {
    tasks: [],
    libraries: ["netmiko", "napalm"],
    devices: ["router01", "router02", "router03", "router04", "router05"]
  },
  mutations: {
    setTasks: (state, tasks) => (state.tasks = tasks),
  },
  actions: {
      async fetchTasks({ commit }) {
        const response = await axios.get(baseURL + "/tasks");
        commit("setTasks", response.data);
    },
    async sendCommand(_, payload) {
      const response = await axios.post(baseURL + "/command", payload);
      console.log(response);
    },
    async sendConfig(_, payload) {
        const response = await axios.post(baseURL + "/config", payload);
        console.log(response);
    },
  },
  getters: {
    allTasks: (state) => state.tasks,
    allDevices: (state) => state.devices,
    allLibraries: (state) => state.libraries,
  }
})
