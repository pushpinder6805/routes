import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "custom-pages",

  initialize() {
    withPluginApi("0.8.7", (api) => {
      api.addRoute("tos2", "custom-pages/tos2");
    });
  },
};
