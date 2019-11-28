import Vue from "vue";

const directivesPlugin = ctx => {
  Vue.mixin({
    mounted() {
      if (ctx.app.head.title) {
      }
    }
  });
};
export default directivesPlugin;
