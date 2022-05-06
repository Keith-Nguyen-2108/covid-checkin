<template>
  <div>
    <div class="w-95">
      <header-bar msg="Final Step" />
      <div class="contact-infor">
        <p class="text-c-primary-3">Please fill in your contact details:</p>
        <div class="container">
          <form id="frmContact">
            <div>
              <label class="text-c-primary-3">First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                v-model="formValue.firstName"
              />
              <span class="text-warn">{{ errors.firstName }}</span>
            </div>
            <div>
              <label class="text-c-primary-3">Last Name</label>
              <input
                class="f-s-16 f-w-400"
                type="text"
                placeholder="Enter last name"
                v-model="formValue.lastName"
              />
              <span class="text-warn">{{ errors.lastName }}</span>
            </div>
            <div>
              <label class="text-c-primary-3">Contact number</label>
              <div class="phone__container">
                <select v-model="formValue.selected">
                  <option disabled value="">Select one</option>

                  <option v-for="country in countriesCode" :key="country.id">
                    {{ country.code }}
                  </option>
                </select>
                <input
                  class="f-s-16 f-w-400"
                  type="text"
                  placeholder="Enter phone number"
                  v-model="formValue.phoneNumber"
                />
              </div>
              <span class="text-warn">{{
                errors.selected ? errors.selected : errors.phoneNumber
              }}</span>
            </div>
            <div
              class="confirm__container"
              :class="{ active__error: errors.isChecked }"
            >
              <input
                type="checkbox"
                id="chkbxConfirm"
                v-model="formValue.confirm"
              />
              <p class="f-s-14 f-w-400 text-c-primary-1">
                I confirm that the above information is accurate and I have read
                and understood the requirements and expectations of entering the
                Silicon Stack premises.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr />
    <custom-buttons
      type="submit"
      value="Submit"
      primaryButton="Submit"
      increse="true"
      decrease="true"
      @is-submit="statusSubmit"
    />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import CustomButtons from "../components/CustomButtons.vue";
export default {
  name: "ContactInformation",
  components: {
    HeaderBar,
    CustomButtons,
  },
  data() {
    return {
      formValue: {
        firstName: "",
        lastName: "",
        selected: "",
        phoneNumber: "",
        confirm: false,
      },
      countriesCode: [
        {
          id: 1,
          code: "+84",
        },
        {
          id: 2,
          code: "+61",
        },
        {
          id: 3,
          code: "+1",
        },
        {
          id: 4,
          code: "+91",
        },
      ],
      country: {},
      isSubmit: false,
      errors: {
        firstName: "",
        lastName: "",
        selected: "",
        phoneNumber: "",
        isChecked: false,
      },
    };
  },
  methods: {
    statusSubmit(val) {
      this.errors = {
        firstName: "",
        lastName: "",
        selected: "",
        phoneNumber: "",
      };
      if (this.formValue.firstName.length < 1) {
        this.errors.firstName = "First name is required";
      } else if (this.formValue.lastName.length < 1) {
        this.errors.lastName = "Last name is required";
      } else if (this.formValue.selected.length < 1) {
        this.errors.selected = "You need to choose a country phone code";
      } else if (this.formValue.phoneNumber.length < 1) {
        this.errors.phoneNumber = "Phone number is required";
      } else if (!this.formValue.phoneNumber.match(/^[0-9]{10}$/)) {
        this.errors.phoneNumber =
          "Phone number just accept number only and must have 10 digits";
      } else if (this.formValue.confirm === false) {
        this.errors.isChecked = true;
      } else {
        this.isSubmit = val;
      }
    },
  },
  watch: {
    isSubmit: {
      handler() {
        if (this.isSubmit === true) {
          // console.log(this.formValue);
          this.$store.state.userInfor.firstName = this.formValue?.firstName;
          this.$store.state.userInfor.lastName = this.formValue?.lastName;
          this.$store.state.userInfor.phoneNumber = this.formValue?.phoneNumber;
          this.$router.push("/status-checkin");
          this.$store.dispatch("postUserInformation");
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
#frmContact div:first-child {
  margin-top: 5px;
}

#frmContact div:not(:first-child) {
  margin-top: 15px;
}

.contact-infor {
  margin-block: 30px;
}

.contact-infor label {
  margin-left: 0px;
  font-size: 14px;
}

.contact-infor input {
  width: 100%;
  height: 40px;
  padding-left: 12px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #d1d1d1;
}

.contact-infor input:focus,
.phone__container select:focus {
  outline: none;
  border: 1px solid #3381ff;
  box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
}

.phone__container {
  margin-top: 0px !important;
}

.phone__container,
.confirm__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.active__error {
  border: 1px solid red;
  box-shadow: 2px 2px 5px #e94d4d;
}

.phone__container select {
  width: 30%;
}

.phone__container input {
  width: 60%;
}

.text-warn {
  font-size: 13px;
  color: red;
  font-style: normal;
}

#chkbxConfirm {
  width: 93px;
  height: 24px;
  margin-left: 0px;
  padding: 0px;
  outline: none;
  border: none;
  box-shadow: none !important;
}

.confirm__container p {
  margin-left: 16px;
  margin-top: 0px;
}
</style>
