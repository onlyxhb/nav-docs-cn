import{f as a,o as n,c as s}from"./app.3db304b0.js";function l(){return fetch("https://api.github.com/repos/vitejs/docs-cn/releases/latest").then(t=>t.json()).then(t=>{var e;return(e=t.tag_name)!=null?e:""}).then(t=>{const e=document.querySelector("div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline"),i=document.createElement("samp");i.classList.add("docs-cn-github-release-tag"),i.innerText=t,e==null||e.appendChild(i)})}const d=JSON.parse('{"title":"Vite","titleTemplate":"\u4E0B\u4E00\u4EE3\u7684\u524D\u7AEF\u5DE5\u5177\u94FE","description":"","frontmatter":{"layout":"home","title":"Vite","titleTemplate":"\u4E0B\u4E00\u4EE3\u7684\u524D\u7AEF\u5DE5\u5177\u94FE","hero":{"name":"Vite","text":"\u4E0B\u4E00\u4EE3\u7684\u524D\u7AEF\u5DE5\u5177\u94FE","tagline":"\u4E3A\u5F00\u53D1\u63D0\u4F9B\u6781\u901F\u54CD\u5E94","image":{"src":"/logo-with-shadow.png","alt":"Vite"},"actions":[{"theme":"brand","text":"\u5F00\u59CB","link":"/guide/"},{"theme":"alt","text":"\u4E3A\u4EC0\u4E48\u9009 Vite\uFF1F","link":"/guide/why"},{"theme":"alt","text":"\u5728 GitHub \u4E0A\u67E5\u770B","link":"https://github.com/vitejs/vite"}]},"features":[{"icon":"\u{1F4A1}","title":"\u6781\u901F\u7684\u670D\u52A1\u542F\u52A8","details":"\u4F7F\u7528\u539F\u751F ESM \u6587\u4EF6\uFF0C\u65E0\u9700\u6253\u5305!"},{"icon":"\u26A1\uFE0F","title":"\u8F7B\u91CF\u5FEB\u901F\u7684\u70ED\u91CD\u8F7D","details":"\u65E0\u8BBA\u5E94\u7528\u7A0B\u5E8F\u5927\u5C0F\u5982\u4F55\uFF0C\u90FD\u59CB\u7EC8\u6781\u5FEB\u7684\u6A21\u5757\u70ED\u66FF\u6362\uFF08HMR\uFF09"},{"icon":"\u{1F6E0}\uFE0F","title":"\u4E30\u5BCC\u7684\u529F\u80FD","details":"\u5BF9 TypeScript\u3001JSX\u3001CSS \u7B49\u652F\u6301\u5F00\u7BB1\u5373\u7528\u3002"},{"icon":"\u{1F4E6}","title":"\u4F18\u5316\u7684\u6784\u5EFA","details":"\u53EF\u9009 \u201C\u591A\u9875\u5E94\u7528\u201D \u6216 \u201C\u5E93\u201D \u6A21\u5F0F\u7684\u9884\u914D\u7F6E Rollup \u6784\u5EFA"},{"icon":"\u{1F529}","title":"\u901A\u7528\u7684\u63D2\u4EF6","details":"\u5728\u5F00\u53D1\u548C\u6784\u5EFA\u4E4B\u95F4\u5171\u4EAB Rollup-superset \u63D2\u4EF6\u63A5\u53E3\u3002"},{"icon":"\u{1F511}","title":"\u5B8C\u5168\u7C7B\u578B\u5316\u7684API","details":"\u7075\u6D3B\u7684 API \u548C\u5B8C\u6574\u7684 TypeScript \u7C7B\u578B\u3002"}]},"headers":[],"relativePath":"index.md"}'),o={name:"index.md"},r=Object.assign(o,{setup(t){return a(()=>{l()}),(e,i)=>(n(),s("div"))}});export{d as __pageData,r as default};
