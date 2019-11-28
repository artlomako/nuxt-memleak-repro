import Vue from "vue";

const directivesPlugin = ctx => {
  // FIX: move variable to outer scope
  const headTitle = ctx.app.head.title;

  Vue.mixin({
    mounted() {
      if (headTitle) {
      }
    }
  });
};
export default directivesPlugin;
