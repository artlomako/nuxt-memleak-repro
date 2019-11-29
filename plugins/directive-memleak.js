import Vue from "vue";

const directivesPlugin = ctx => {
  Vue.directive("foo", {
    inserted() {
      if (ctx.app) {
      }
    }
  });

  Vue.mixin({});
};
export default directivesPlugin;
