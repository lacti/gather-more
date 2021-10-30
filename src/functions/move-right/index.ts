import defineFunction from "../defineFunction";

export default defineFunction(__dirname, {
  handler: "handler.main",
  events: [
    {
      httpApi: {
        method: "post",
        path: "/move-right",
      },
    },
  ],
});
