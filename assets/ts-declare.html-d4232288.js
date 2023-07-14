import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t,f as e}from"./app-af427ef1.js";const o={},p=e(`<h2 id="如何将ts的声明文件都归纳到一个文件夹里面" tabindex="-1"><a class="header-anchor" href="#如何将ts的声明文件都归纳到一个文件夹里面" aria-hidden="true">#</a> 如何将TS的声明文件都归纳到一个文件夹里面</h2><ol><li>在项目的根目录下新建一个<code>types</code>文件夹。</li><li>在<code>tsconfig.config.json</code>文件里或者<code>tsconfig.node.json</code>文件里：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@vue/tsconfig/tsconfig.node.json&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;vite.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vitest.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;cypress.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;playwright.config.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;types/*&quot;</span>  <span class="token comment">//在这里加上types/*，types就是在根目录下新建的文件夹，types/*代表的意思是types文件夹下的所有文件。</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;node&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function c(i,l){return s(),a("div",null,[t(" more "),p])}const d=n(o,[["render",c],["__file","ts-declare.html.vue"]]);export{d as default};
