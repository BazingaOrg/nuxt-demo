export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    // 这将是 HTML 模板的对象表现形式。
    // console.log("render:html", html);
    html.head.push(
      `<meta name="description" content="My custom description" />`
    );
  });
  // 你也可以在这里拦截响应。
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    // console.log("render:response", response);
  });
});
