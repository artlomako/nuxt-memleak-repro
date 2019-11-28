import Vue from "vue";

const directivesPlugin = ctx => {
  Vue.directive("foo", {
    inserted() {
      if (ctx.app.head.title) {
      }
    }
  });

  // FIX: comment mixin declaration
  // Vue.mixin({});
};
export default directivesPlugin;
