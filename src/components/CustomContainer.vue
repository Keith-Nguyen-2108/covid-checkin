<template>
  <div class="container">
    <p
      :style="
        nameGrpRad === 'city' || nameGrpRad === 'status'
          ? lighterTextColor
          : dakerTextColor
      "
    >
      {{ title }}:
    </p>
    <div v-for="(i, index) in arrData" :key="i.id" style="margin-bottom: 16px">
      <input
        type="radio"
        :id="i.name + nameGrpRad"
        :value="i.value ? i.value : i.name"
        :name="nameGrpRad"
        :checked="index === defaultChecked"
        @click="(e) => onClickButton(e.target.value, idGrpRad - 1)"
      />
      <label
        class="f-s-16 f-w-400 text-c-primary-2"
        :for="i.name + nameGrpRad"
        >{{ i.name }}</label
      ><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomContainer",
  props: {
    msg: {
      type: String,
    },
    arrData: {
      type: Array,
    },
    nameGrpRad: {
      type: String,
    },
    idGrpRad: {
      type: Number,
    },
    defaultChecked: {
      type: Number,
    },
  },
  data() {
    return {
      title: "",
      dakerTextColor: { color: "#272D35", fontWeight: "500" },
      lighterTextColor: {
        color: "#475362",
        fontWeight: "400",
      },
    };
  },
  mounted() {
    this.title = this.idGrpRad > 0 ? `${this.idGrpRad}.${this.msg}` : this.msg;
  },
  methods: {
    onClickButton(value, index) {
      if (this.nameGrpRad === "city" || this.nameGrpRad === "status") {
        this.$emit("update", value);
      } else this.$emit("add-answer", value, index);
    },
  },
};
</script>

<style scoped>
.container p {
  margin-block-start: 0;
  line-height: 24px;
  margin-bottom: 16px;
}

.container input[type="radio"] {
  width: 24px;
  height: 24px;
}

.container label {
  margin-left: 10px;
  height: fit-content;
  vertical-align: super;
}
</style>
