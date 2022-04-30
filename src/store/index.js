import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    countries: [],
    country: {},
    facility: "",
    status: "",
    completedSteps: 0,
    userInfor: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      statusCheckin: "",
    },
  },
  getters: {
    // getAllCountries: state => state.countries,
    // getCurrentCountry: state => state.country
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
    setCountry(state, country) {
      state.country = country;
    },
    setFacility(state, facility) {
      state.facility = facility;
    },
    setStatus(state, status) {
      state.status = status;
    },
    updateCompletedStep(state, num) {
      state.completedSteps += num;
    },
    // setUserInfro(state, key, payload) {
    //   console.log(key, payload);
    //   state.userInfor[key] = payload;
    // },
  },
  actions: {
    fetchCountry({ commit }) {
      axios
        .get("https://ss.covid19checkins.com/backend/api/countries")
        .then((res) => commit("setCountries", res.data));
    },
    async postUserInformation() {
      let userInfor = Object.assign(this.state.userInfor, {
        facility: this.state.facility,
        status: this.state.status,
      });
      console.log(userInfor);
      // await axios
      //   .post("https://ss.covid19checkins.com/backend/api/customers", userInfor)
      //   .then(() => console.log("Post success"));
    },
  },
  modules: {},
});
