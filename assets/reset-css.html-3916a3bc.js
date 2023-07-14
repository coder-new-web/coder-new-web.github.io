import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-af427ef1.js";const p={},c=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* color palette from &lt;https://github.com/vuejs/theme&gt; */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--vt-c-white</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">--vt-c-white-soft</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--vt-c-white-mute</span><span class="token punctuation">:</span> #f2f2f2<span class="token punctuation">;</span>

  <span class="token property">--vt-c-black</span><span class="token punctuation">:</span> #181818<span class="token punctuation">;</span>
  <span class="token property">--vt-c-black-soft</span><span class="token punctuation">:</span> #222222<span class="token punctuation">;</span>
  <span class="token property">--vt-c-black-mute</span><span class="token punctuation">:</span> #282828<span class="token punctuation">;</span>

  <span class="token property">--vt-c-indigo</span><span class="token punctuation">:</span> #2c3e50<span class="token punctuation">;</span>

  <span class="token property">--vt-c-divider-light-1</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span> 60<span class="token punctuation">,</span> 60<span class="token punctuation">,</span> 0.29<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-c-divider-light-2</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span> 60<span class="token punctuation">,</span> 60<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-c-divider-dark-1</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 84<span class="token punctuation">,</span> 84<span class="token punctuation">,</span> 0.65<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-c-divider-dark-2</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 84<span class="token punctuation">,</span> 84<span class="token punctuation">,</span> 0.48<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--vt-c-text-light-1</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-indigo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-c-text-light-2</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span> 60<span class="token punctuation">,</span> 60<span class="token punctuation">,</span> 0.66<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-c-text-dark-1</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--vt-c-text-dark-2</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>235<span class="token punctuation">,</span> 235<span class="token punctuation">,</span> 235<span class="token punctuation">,</span> 0.64<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* semantic color variables for this project */</span>
<span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--color-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-white<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-background-soft</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-white-soft<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-background-mute</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-white-mute<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-divider-light-2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-border-hover</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-divider-light-1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-heading</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-text-light-1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-text-light-1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--section-gap</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--color-background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-black<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--color-background-soft</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-black-soft<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--color-background-mute</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-black-mute<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token property">--color-border</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-divider-dark-2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--color-border-hover</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-divider-dark-1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token property">--color-heading</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-text-dark-1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">--color-text</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vt-c-text-dark-2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">*,
*::before,
*::after</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-text<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-background<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> color 0.5s<span class="token punctuation">,</span> background-color 0.5s<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Inter<span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> Oxygen<span class="token punctuation">,</span> Ubuntu<span class="token punctuation">,</span>
    Cantarell<span class="token punctuation">,</span> <span class="token string">&#39;Fira Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Droid Sans&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helvetica Neue&#39;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeLegibility<span class="token punctuation">;</span>
  <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
  <span class="token property">-moz-osx-font-smoothing</span><span class="token punctuation">:</span> grayscale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1280px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>

  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[c];function e(i,u){return s(),a("div",null,o)}const k=n(p,[["render",e],["__file","reset-css.html.vue"]]);export{k as default};
