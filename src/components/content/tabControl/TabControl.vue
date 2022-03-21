<template>
  <div class="tabControl">
    <div
      class="tabControl-item"
      @click="counterinde(index)"
      :class="{ active: index === counterindex }"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      counterindex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    counterinde(index) {
      this.counterindex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style scoped>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 16px;
    height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tabControl-item {
  flex: 1;

}
.tabControl-item span {
  padding: 5px;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
