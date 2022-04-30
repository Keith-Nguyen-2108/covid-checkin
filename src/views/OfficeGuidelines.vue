<template>
  <div class="office-guideline">
    <div class="w-95">
      <header-bar msg="Next: Health Checklist" />
      <div style="text-align: center">
        <p style="margin-top: 64px">
          Read and acknowledge the Office Guidelines
        </p>
        <a
          href="https://assets.kpmg/content/dam/kpmg/ie/pdf/2020/05/6232_COVID19_Return_to_Work_PDF_May_2020.pdf"
          target="_blank"
          @click="toggleButton"
        >
          <div class="file__container">
            <img class="icon-pdf" src="../assets/iconPDF.png" alt="" />
            <p style="margin-top: 8px">Tap to open PDF</p>
          </div>
        </a>
      </div>
    </div>
    <hr style="border-block: 1px solid #f3f5f7; margin-top: 92px" />
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
.file__container {
  width: 220px;
  height: 220px;
  background: #f6f6fa;
  border-radius: 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline: auto;
}

.icon-pdf {
  width: 60px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
}

.office-guideline p {
  width: 200px;
  margin-inline: auto;
  word-wrap: break-word;
  color: #475362;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
