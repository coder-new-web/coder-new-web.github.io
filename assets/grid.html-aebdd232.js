import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,a as i,b as a,d as n,f as c}from"./app-af427ef1.js";const o={},r=a("p",null,[n("CSS Grid布局是二维布局，该布局方式可以同时控制行和列的排布和对齐方式，Grid有水平线和垂直线构成，有行轨道和列轨道之分，开启grid布局仅需要："),a("code",null,"display:grid"),n("即可，容器的子元素就会自动成为grid布局的元素。")],-1),p=c(`<h2 id="gird-template-columns" tabindex="-1"><a class="header-anchor" href="#gird-template-columns" aria-hidden="true">#</a> gird-template-columns</h2><p>控制容器的宽度，如何单位为px则为固定宽度，如何是fr，则会自适应。</p><h2 id="column-gap" tabindex="-1"><a class="header-anchor" href="#column-gap" aria-hidden="true">#</a> column-gap</h2><p><code>column-gap</code>控制容器之间每一列之间的距离。</p><h2 id="row-gap" tabindex="-1"><a class="header-anchor" href="#row-gap" aria-hidden="true">#</a> row-gap</h2><p><code>row-gap</code>控制容器之间每一行之间的距离。</p><h2 id="gap" tabindex="-1"><a class="header-anchor" href="#gap" aria-hidden="true">#</a> gap</h2><p><code>gap</code>即是同时设计<code>column-gap</code>和<code>row-gap</code>。</p><h2 id="grid-template-areas" tabindex="-1"><a class="header-anchor" href="#grid-template-areas" aria-hidden="true">#</a> grid-template-areas</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 父元素 */</span>
<span class="token selector">.container</span><span class="token punctuation">{</span>
    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
        <span class="token string">&quot;header header header&quot;</span>
        <span class="token string">&quot;siderbar content content&quot;</span>
        <span class="token string">&quot;footer footer footer&quot;</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">/* 子元素 */</span>
<span class="token selector">header</span><span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span>header<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">main</span><span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span>content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">aside</span><span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span>siderbar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">footer</span><span class="token punctuation">{</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span>footer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><p>flex布局开启后有主轴和侧轴，而grid布局开启后有行轴和块轴，grid控制行轴和块轴排列方式的属性和值与flex布局控制主轴和侧轴排列方式类似。</p>`,12);function d(l,u){return e(),t("div",null,[r,i(" more "),p])}const h=s(o,[["render",d],["__file","grid.html.vue"]]);export{h as default};
