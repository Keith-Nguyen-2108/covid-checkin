<template>
  <div class="w-95 office-guideline">
    <header-bar msg="Next: Health Checklist" />
    <div style="text-align: center; margin-block: 50px">
      <p>Read and acknowledge the Office Guidelines</p>
      <a
        href="https://assets.kpmg/content/dam/kpmg/ie/pdf/2020/05/6232_COVID19_Return_to_Work_PDF_May_2020.pdf"
        target="_blank"
        @click="toggleButton"
      >
        <img class="icon-pdf" src="../assets/iconPDF.png" alt="" />
      </a>
    </div>
    <custom-buttons
      type="button"
      location="health-checklist"
      :disabled="disabled"
      primaryButton="Next"
      increse="true"
      decrease="true"
    />
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import CustomButtons from "../components/CustomButtons.vue";
export default {
  name: "OfficeGuidelines",
  components: {
    HeaderBar,
    CustomButtons,
  },
  data() {
    return {
      disabled: true,
    };
  },
  methods: {
    toggleButton() {
      this.disabled = false;
    },
  },
};
</script>

<style>
.icon-pdf {
  width: 220px;
  height: 220px;
  object-fit: contain;
  cursor: pointer;
}

.office-guideline p {
  width: 200px;
  margin-inline: auto;
  word-wrap: break-word;
  color: #475362;
}
</style>
