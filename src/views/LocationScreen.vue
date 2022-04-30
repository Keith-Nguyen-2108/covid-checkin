<template>
  <div class="location__screen">
    <div class="w-95">
      <h6>To begin, please select your country and facility location</h6>
      <p style="color: #475362">Select your country:</p>
      <div class="countries-container">
        <div
          class="countries__item"
          :class="item.id === indexActive && 'active'"
          v-for="item in countries"
          :key="item.id"
          @click="choose(item.id)"
        >
          <img :src="require(`../assets/${item.code}.jpg`)" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>

    <custom-container
      msg="Select the facility you are entering"
      :array="newCountries"
      name="city"
      @update="updateFacility"
      :defaultChecked="0"
    />
    <custom-container
      msg="Select the status"
      :array="arrStatus"
      name="status"
      @update="updateStatus"
      :defaultChecked="0"
    />
    <hr />

    <custom-buttons
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
import CustomContainer from "@/components/CustomContainer.vue";
import CustomButtons from "../components/CustomButtons.vue";
export default {
  name: "LocationScreen",
  components: {
    CustomContainer,
    CustomButtons,
  },
  computed: {
    ...mapState(["countries"]),
  },
  mounted() {
    this.$store.dispatch("fetchCountry");
    this.choose();
  },
  data() {
    return {
      newCountries: [],
      arrStatus: [
        { id: 1, name: "Visitor", value: "Visitor" },
        { id: 2, name: "Employee", value: "Employee" },
      ],
      status: "Visitor",
      facility: "",
      disabled: true,
      indexActive: 1,
    };
  },
  methods: {
    choose(id = 1) {
      // console.log("hello");
      this.indexActive = id;
      let arr = this.countries.filter((item) => item.id === id);
      if (arr.length > 0) {
        this.newCountries = arr[0]?.facilityList;
        this.facility = `${arr[0]?.code} - ${this.newCountries[0]?.name}`;
        this.$store.commit("setCountry", arr[0]);
      }
    },
    updateFacility(val) {
      let facility = this.facility.split("-");
      this.facility = `${facility[0]} - ${val}`;
      // console.log(this.facility);
    },
    updateStatus(val) {
      this.status = val;
      //
    },
  },
  watch: {
    facility: {
      handler() {
        this.$store.state.facility = this.facility;
        this.disabled =
          this.facility?.length > 0 && this.status?.length > 0 ? false : true;
      },
      deep: true,
    },
    status: {
      handler() {
        this.$store.state.status = this.status;
        this.disabled =
          this.facility?.length > 0 && this.status?.length > 0 ? false : true;
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;

  font-size: 20px;
  line-height: 28px;
  word-wrap: break-word;
  color: #003180;
  margin-top: 24px;
  margin-bottom: 21px;
}

.countries-container {
  display: flex;
  /* justify-content: space-between; */
  overflow-x: scroll;
  margin-bottom: 1em;
}

.countries-container::-webkit-scrollbar {
  display: none;
}

.countries__item:not(:last-child) {
  margin-right: 16px;
}

.countries__item {
  /* padding: 0 10px; */
  background: #f6f6fa;
  color: #272d35;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
}

.countries__item.active {
  background: rgb(27, 27, 27);
  color: white;
}

.countries__item img {
  width: 46px;
  height: 31px;
  border-radius: 4px;
  object-fit: cover;
}

.countries__item p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  margin-top: 5px;
  margin-bottom: 0px;
}
</style>
