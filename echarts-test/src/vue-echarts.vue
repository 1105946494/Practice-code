<template>
  <div ref="container"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["option"],
  mounted() {
    const width = document.documentElement.clientWidth;
    this.$refs.container.style.width = `${width - 20}px`;
    this.$refs.container.style.height = `${(width - 20) * 1.2}px`;
    this.chart = echarts.init(this.$refs.container);
    this.chart.setOption(this.option);
    this.chart.on("click", (e) => {
      console.log(e.data.name);
    });
  },
  watch: {
    option() {
      this.chart.setOption(this.option);
    },
  },
};
</script>

<style lang="scss" scoped></style>
