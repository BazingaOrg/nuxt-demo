// 使用 Nitro 插件修改渲染的 head：如果你需要更高级的控制，你可以使用 hook 拦截渲染的 html，并以编程方式修改 head。
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    html.head.push(
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">'
    );
  });
});
