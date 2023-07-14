import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as r,b as e,d as s,e as n,f as i}from"./app-af427ef1.js";const h="/assets/lighthouse-chrome-devtools-d1378a89.png",d={},c=e("h2",{id:"什么是lighthouse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是lighthouse","aria-hidden":"true"},"#"),s(" 什么是Lighthouse")],-1),u=e("p",null,"Lighthouse是一种用于提高网页质量的开源自动化工具。可以针对任何网页、公共网页或需要身份验证的网页运行它。它对性能、可访问性、渐进式Web应用程序、SEO等进行审核。",-1),g=e("h2",{id:"如何使用lighthouse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何使用lighthouse","aria-hidden":"true"},"#"),s(" 如何使用Lighthouse")],-1),_=e("p",null,[s("可以在Chrome DevTools中使用或作为Node模块运行Lighthouse。使用的时候为Lighthouse提供一个需要审核的URL。它会对页面运行一系列审核，然后生成一份关于页面运行情况的报告。从那里，使用失败的审核作为如何改进页面的指标。每个审计都有一个参考文档，解释为什么审计很重要，以及如何解决它。"),e("br"),s(" 同时还可以使用Lighthouse Cli来防止网页性能下降。")],-1),p=e("p",null,[e("strong",null,"具体使用")],-1),m=i('<li>Chrome DevTools<br> 按F12即可找到：<br><img src="'+h+`" alt="" loading="lazy"></li><li>From the command line <ul><li>使用Node全局安装<code>Lighthouse</code><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span>  lighthouse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>测试网站<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   lighthouse <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li>`,2),b=e("br",null,null,-1),v={href:"https://github.com/GoogleChrome/lighthouse/blob/main/docs/readme.md#using-programmatically",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),k={href:"https://pagespeed.web.dev/",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),L={href:"https://developers.google.com/speed/docs/insights/v5/about?hl=zh-cn#categories",target:"_blank",rel:"noopener noreferrer"};function N(C,E){const o=l("ExternalLinkIcon");return a(),r("div",null,[c,u,g,_,p,e("ol",null,[m,e("li",null,[s("As a Node module"),b,e("a",v,[s("参考代码"),n(o)])]),e("li",null,[s("From a web UI"),f,s(" 一个在线网站，输入对应网址进行分析，"),e("a",k,[s("点击跳转"),n(o)]),x,s(" 对应的"),e("a",L,[s("指标说明文档"),n(o)])])])])}const F=t(d,[["render",N],["__file","lighthouse.html.vue"]]);export{F as default};
