import{_ as e,o as r,c as s,a as o}from"./app.3db304b0.js";const y=JSON.parse('{"title":"\u9884\u89C8\u9009\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"preview.host","slug":"preview-host","link":"#preview-host","children":[]},{"level":2,"title":"preview.port","slug":"preview-port","link":"#preview-port","children":[]},{"level":2,"title":"preview.strictPort","slug":"preview-strictport","link":"#preview-strictport","children":[]},{"level":2,"title":"preview.https","slug":"preview-https","link":"#preview-https","children":[]},{"level":2,"title":"preview.open","slug":"preview-open","link":"#preview-open","children":[]},{"level":2,"title":"preview.proxy","slug":"preview-proxy","link":"#preview-proxy","children":[]},{"level":2,"title":"preview.cors","slug":"preview-cors","link":"#preview-cors","children":[]}],"relativePath":"config/preview-options.md"}'),t={name:"config/preview-options.md"},p=o(`<h1 id="preview-options" tabindex="-1">\u9884\u89C8\u9009\u9879 <a class="header-anchor" href="#preview-options" aria-hidden="true">#</a></h1><h2 id="preview-host" tabindex="-1">preview.host <a class="header-anchor" href="#preview-host" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>string | boolean</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <a href="#server_host"><code>server.host</code></a></li></ul><p>\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u6307\u5B9A ip \u5730\u5740\u3002 \u8BBE\u7F6E\u4E3A <code>0.0.0.0</code> \u6216 <code>true</code> \u4F1A\u76D1\u542C\u6240\u6709\u5730\u5740\uFF0C\u5305\u62EC\u5C40\u57DF\u7F51\u548C\u516C\u5171\u5730\u5740\u3002</p><p>\u8FD8\u53EF\u4EE5\u901A\u8FC7 CLI \u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4F7F\u7528 <code>--host 0.0.0.0</code> \u6216 <code>--host</code>\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u53EF\u80FD\u54CD\u5E94\u7684\u662F\u5176\u4ED6\u670D\u52A1\u5668\u800C\u4E0D\u662F Vite\u3002 \u67E5\u770B <a href="./server-options.html#server-host"><code>server.host</code></a> \u4E86\u89E3\u66F4\u591A\u7EC6\u8282\u3002</p></div><h2 id="preview-port" tabindex="-1">preview.port <a class="header-anchor" href="#preview-port" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>number</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <code>4173</code></li></ul><p>\u6307\u5B9A\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3\u3002\u6CE8\u610F\uFF0C\u5982\u679C\u8BBE\u7F6E\u7684\u7AEF\u53E3\u5DF2\u88AB\u4F7F\u7528\uFF0CVite \u5C06\u81EA\u52A8\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\uFF0C\u6240\u4EE5\u8FD9\u53EF\u80FD\u4E0D\u662F\u6700\u7EC8\u76D1\u542C\u7684\u670D\u52A1\u5668\u7AEF\u53E3\u3002</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3030</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preview</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8080</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="preview-strictport" tabindex="-1">preview.strictPort <a class="header-anchor" href="#preview-strictport" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>boolean</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <a href="#server_strictport"><code>server.strictPort</code></a></li></ul><p>\u8BBE\u7F6E\u4E3A <code>true</code> \u65F6\uFF0C\u5982\u679C\u7AEF\u53E3\u5DF2\u88AB\u4F7F\u7528\uFF0C\u5219\u76F4\u63A5\u9000\u51FA\uFF0C\u800C\u4E0D\u4F1A\u518D\u8FDB\u884C\u540E\u7EED\u7AEF\u53E3\u7684\u5C1D\u8BD5\u3002</p><h2 id="preview-https" tabindex="-1">preview.https <a class="header-anchor" href="#preview-https" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>boolean | https.ServerOptions</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <a href="#server_https"><code>server.https</code></a></li></ul><p>\u542F\u7528 TLS + HTTP/2\u3002\u6CE8\u610F\uFF0C\u53EA\u6709\u5728\u4E0E <a href="#server-proxy"><code>server.proxy</code> \u9009\u9879</a> \u540C\u65F6\u4F7F\u7528\u65F6\uFF0C\u624D\u4F1A\u964D\u7EA7\u4E3A TLS\u3002</p><p>\u8BE5\u503C\u4E5F\u53EF\u4EE5\u4F20\u9012\u7ED9 <code>https.createServer()</code> \u7684 <a href="https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener" target="_blank" rel="noreferrer">options \u5BF9\u8C61</a>\u3002</p><h2 id="preview-open" tabindex="-1">preview.open <a class="header-anchor" href="#preview-open" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>boolean | string</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <a href="#server_open"><code>server.open</code></a></li></ul><p>\u5F00\u53D1\u670D\u52A1\u5668\u542F\u52A8\u65F6\uFF0C\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F\u3002\u5F53\u8BE5\u503C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u5B83\u5C06\u88AB\u7528\u4F5C URL \u7684\u8DEF\u5F84\u540D\u3002\u5982\u679C\u4F60\u60F3\u5728\u4F60\u559C\u6B22\u7684\u67D0\u4E2A\u6D4F\u89C8\u5668\u6253\u5F00\u8BE5\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF <code>p<wbr>rocess.env.BROWSER</code> \uFF08\u4F8B\u5982 <code>firefox</code>\uFF09\u3002\u6B32\u4E86\u89E3\u66F4\u591A\u7EC6\u8282\uFF0C\u8BF7\u53C2\u9605 <a href="https://github.com/sindresorhus/open#app" target="_blank" rel="noreferrer"><code>open</code> \u5305\u7684\u6E90\u7801</a>\u3002</p><h2 id="preview-proxy" tabindex="-1">preview.proxy <a class="header-anchor" href="#preview-proxy" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>Record&lt;string, string | ProxyOptions&gt;</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <a href="#server_proxy"><code>server.proxy</code></a></li></ul><p>\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406\u89C4\u5219\u3002\u5176\u503C\u7684\u7ED3\u6784\u4E3A <code>{ key: options }</code> \u7684\u5BF9\u8C61\u3002\u5982\u679C key \u4EE5 <code>^</code> \u5F00\u5934\uFF0C\u5B83\u5C06\u88AB\u8BC6\u522B\u4E3A <code>RegExp</code>\uFF0C\u5176\u4E2D <code>configure</code> \u9009\u9879\u53EF\u7528\u4E8E\u8BBF\u95EE\u4EE3\u7406\u5B9E\u4F8B\u3002</p><p>\u57FA\u4E8E <a href="https://github.com/http-party/node-http-proxy" target="_blank" rel="noreferrer"><code>http-proxy</code></a> \u5B9E\u73B0\uFF0C\u5B8C\u6574\u7684\u53C2\u6570\u5217\u8868\u53C2\u89C1 <a href="https://github.com/http-party/node-http-proxy#options" target="_blank" rel="noreferrer">\u6B64\u94FE\u63A5</a>\u3002</p><h2 id="preview-cors" tabindex="-1">preview.cors <a class="header-anchor" href="#preview-cors" aria-hidden="true">#</a></h2><ul><li><strong>\u7C7B\u578B\uFF1A</strong> <code>boolean | CorsOptions</code></li><li><strong>\u9ED8\u8BA4\uFF1A</strong> <a href="#server_proxy"><code>server.cors</code></a></li></ul><p>\u4E3A\u5F00\u53D1\u670D\u52A1\u5668\u914D\u7F6E CORS\u3002\u6B64\u529F\u80FD\u9ED8\u8BA4\u542F\u7528\u5E76\u652F\u6301\u4EFB\u4F55\u6765\u6E90\u3002\u53EF\u4F20\u9012\u4E00\u4E2A <a href="https://github.com/expressjs/cors" target="_blank" rel="noreferrer">options \u5BF9\u8C61</a> \u6765\u8FDB\u884C\u914D\u7F6E\uFF0C\u6216\u8005\u4F20\u9012 <code>false</code> \u6765\u7981\u7528\u6B64\u884C\u4E3A\u3002</p>`,28),n=[p];function a(l,i,c,d,h,v){return r(),s("div",null,n)}const u=e(t,[["render",a]]);export{y as __pageData,u as default};
