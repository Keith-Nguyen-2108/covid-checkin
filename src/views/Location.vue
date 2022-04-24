<template>
  <div class="location__screen">
    <div class="w-95">
      <h6>To begin, please select your country and facility location</h6>
      <p>Select your country:</p>
      <div class="countries-container">
        <div
          class="countries__item"
          v-for="item in countries"
          :key="item.id"
          @click="choose(item.id)"
        >
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>

    <Container
      msg="Select the facility you are entering"
      :array="newCountries"
      name="city"
      @update="updateFacility"
    />
    <Container
      msg="Select the status"
      :array="arrStatus"
      name="status"
      @update="updateStatus"
    />
    <hr style="border-block: 1px solid #f3f5f7" class="w-95" />
    <Button
      type="button"
      location="office-guidelines"
      primaryButton="Next"
      increse="true"
      decrease="false"
      :disabled="disabled"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Container from "../components/Container.vue";
import Button from "../components/Button.vue";
export default {
  name: "Location",
  components: {
    Container,
    Button,
  },
  computed: {
    ...mapState(["countries"]),
  },
  mounted() {
    this.$store.dispatch("fetchCountry");
  },
  data() {
    return {
      newCountries: [],
      arrStatus: [
        { id: 1, name: "Visitor", value: "Visitor" },
        { id: 2, name: "Employee", value: "Employee" },
      ],
      status: "",
      facility: "",
      disabled: true,
    };
  },
  methods: {
    choose(id) {
      this.facility = "";
      let arr = this.countries.filter((item) => item.id === id);
      this.newCountries = arr[0]?.facilityList;
      this.$store.commit("setCountry", arr[0]);
    },
    updateFacility(val) {
      this.facility = val;
    },
    updateStatus(val) {
      this.status = val;
    },
  },
  watch: {
    "this.$store.state.country": () => {
      console.log(this.$store.state.country);
    },
    facility: {
      handler() {
        this.$store.state.facility = this.facility;
        this.disabled =
          this.facility.length > 0 && this.status.length > 0 ? false : true;
      },
      deep: true,
    },
    status: {
      handler() {
        this.$store.state.status = this.status;
        this.disabled =
          this.facility.length > 0 && this.status.length > 0 ? false : true;
      },
      deep: true,
    },
  },
};
</script>

<style>
.location__screen {
  font-family: "Roboto";
}

.location__screen h6 {
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  word-wrap: break-word;
  color: #003180;
  margin-top: 20px;
  margin-bottom: 20px;
}

.location__screen p {
  color: #475362;
}

.countries-container {
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  margin-bottom: 1em;
}

.countries-container::-webkit-scrollbar {
  display: none;
}

.countries__item {
  /* padding: 0 10px; */
  background: #f6f6fa;
  width: 90px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.countries__item p {
  font-size: 14px;
  font-weight: bold;
}
</style>
