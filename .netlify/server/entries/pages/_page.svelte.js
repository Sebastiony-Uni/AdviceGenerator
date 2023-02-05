import { c as create_ssr_component, e as escape, d as add_attribute } from "../../chunks/index.js";
const dice_icon = "/_app/immutable/assets/icon-dice-60cce3a8.svg";
const pattern_divide1 = "/_app/immutable/assets/pattern-divider-desktop-7d83d59a.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.green.svelte-4f75n4{color:#54feaa}@font-face{font-family:"Manrope";font-style:normal;font-weight:800;src:local("Manrope"), url("https://fonts.google.com/specimen/Manrope")}.container.svelte-4f75n4{font-family:"Manrope";background-color:#212632;display:flex;flex-direction:column;position:absolute;align-items:center;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)\n    }.box.svelte-4f75n4{text-align:center;border-radius:10px;display:flex;flex-direction:column;align-items:center;padding:10px 50px 50px 50px;width:300px;background-color:#303a49;margin-top:auto}h1.svelte-4f75n4{margin-top:0px;color:white;font-size:19px}.advice.svelte-4f75n4{font-size:10px}.imgBorder.svelte-4f75n4{margin-top:-17.5px;display:flex;width:20px;height:20px;align-items:center;justify-content:center;background-color:#54feaa;border-radius:100%;padding:7px}.dice_icon.svelte-4f75n4{width:15px;height:15px}.pattern-divider.svelte-4f75n4{max-width:100%}.imgBorder.svelte-4f75n4:active{background-color:orange}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text = "";
  let resId;
  $$result.css.add(css);
  return `
<body class="${"container svelte-4f75n4"}">
    <div class="${"box svelte-4f75n4"}"><p class="${"green advice svelte-4f75n4"}">A D V I C E  # ${escape(resId)}</p>
        <h1 class="${"svelte-4f75n4"}">&quot;${escape(text)}&quot;</h1>
        <img class="${"pattern-divider svelte-4f75n4"}"${add_attribute("src", pattern_divide1, 0)} alt="${"dividing pattern"}"></div>
    
    <div class="${"imgBorder svelte-4f75n4"}"><button style="${"display:flex; color: transparent; background-color: transparent; border-color: transparent;"}"><img class="${"dice_icon svelte-4f75n4"}"${add_attribute("src", dice_icon, 0)} alt="${""}"></button></div>
</body>`;
});
export {
  Page as default
};
