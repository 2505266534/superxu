<template>
  <div class="toast" v-show="isshow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      message: "",
      isshow: false,
    };
  },
  methods: {
    show(message, duration) {
      this.isshow = true;
      
      this.message = message;

      setTimeout(() => {
        this.isshow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  color: #fff;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  transform: translate(-50%, -50%);
}
</style>
