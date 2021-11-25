<template>
  <div class="content-box">
    <div v-for="(item, index) in fileList" :key="index">
      <div>{{ item.name }}</div>
      <div @click="showTag(index)">{{ isContent ? "是" : "否" }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
    isContent: {
    }
  },
  methods: {
    init() {
      for (let i = 0, len = this.fileList.length; i < len; i++) {
        this.isContent[i] = false;
      }
      console.log(this.isContent);
    },
    showTag(index) {
      //    this.fileList[index].isContent = !this.fileList[index].isContent
      this.isContent[index] = !this.isContent[index];
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss">
</style>
