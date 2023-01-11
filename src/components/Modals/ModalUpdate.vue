<template>
  <div class="d-flex flex-column align-items-center m-3 text-center">
    <h3 class="text-center mb-3">Sufod 0.1!</h3>

    <span
      class="my-3"
    >Pronto nuevas actualizaciones!</span>

    <button class="btn btn-primary mt-3" @click="confirmationClicked">Close</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    confirmationClicked() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  image-rendering: unset !important;
}
.discord {
  padding: 4px;
  border-radius: 4px;
  background-color: #36393f;
  max-width: 258x;
}
</style>