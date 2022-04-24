<template>
  <div class="w-95">
    <Header msg="Final Step" />
    <div class="contact-infor">
      <p>Please fill in your contact details:</p>
      <div class="container">
        <form id="frmContact">
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              v-model="formValue.firstName"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              v-model="formValue.lastName"
            />
          </div>
          <div>
            <label>Contect number</label>
            <div class="phone__container">
              <select v-model="formValue.selected">
                <option disabled value="">Select one</option>

                <option v-for="country in countriesCode" :key="country.id">
                  {{ country.code }}
                </option>
              </select>
              <input
                type="text"
                placeholder="Enter phone number"
                v-model="formValue.phoneNumber"
              />
            </div>
          </div>
          <div class="confirm__container">
            <input
              type="checkbox"
              id="chkbxConfirm"
              v-model="formValue.confirm"
            />
            <p>
              I confirm that the above information is accurate and I have read
              and understood the requirements and expectations of entering the
              Silicon Stack premises.
            </p>
          </div>
        </form>
      </div>
    </div>
    <hr style="border-block: 1px solid #f3f5f7" class="w-95" />
    <Button
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
import Header from "@/components/Header.vue";
import Button from "../components/Button.vue";
export default {
  name: "ContactInformation",
  components: {
    Header,
    Button,
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
    };
  },
  computed: {
    checkAnswer() {
      let check = Object.values(this.formValue).every((item) => item);
      return check;
    },
  },
  methods: {
    statusSubmit(val) {
      if (this.checkAnswer === true) {
        this.isSubmit = val;
      } else {
        if (
          this.formValue.phoneNumber.length > 0 &&
          !this.formValue.phoneNumber.match(/^[0-9]{10}$/)
        ) {
          alert("Phone number just accept number only and must have 10 digits");
        } else alert("You need to fill all fields with data");
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

          // console.log(this.formValue?.firstName);
          // console.log(this.formValue?.lastName);
          // console.log(this.formValue?.phoneNumber);
          // this.$store.commit(
          //   "setUserInfro",
          //   "firstName",
          //   this.formValue?.firstName
          // );
          // this.$store.commit(
          //   "setUserInfro",
          //   "lastName",
          //   this.formValue?.lastName
          // );
          // this.$store.commit(
          //   "setUserInfro",
          //   "phoneNumber",
          //   this.formValue?.phoneNumber
          // );
          this.$store.dispatch("postUserInformation");
          // console.log(this.$store.state.userInfor);
        }
      },
      deep: true,
    },
  },
};
</script>

<style>
#frmContact div:first-child {
  margin-top: 5px;
}

#frmContact div:not(:first-child) {
  margin-top: 15px;
}

.contact-infor label {
  margin-left: 0px;
  color: #475362;
}

.contact-infor input {
  width: 100%;
  height: 40px;
  padding-left: 10px;
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

.phone__container select {
  width: 30%;
}

.phone__container input {
  width: 60%;
}

#chkbxConfirm {
  width: 50px;
  height: 20px;
}

.confirm__container p {
  margin-left: 20px;
}
</style>
