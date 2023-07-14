import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e,f as t}from"./app-af427ef1.js";const p={},o=t(`<h2 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h2><p>if 语句是使用最频繁的语句之一，语法如下：</p><p>if (condition) statement1 else statement2</p><p>这里的条件（condition）可以是任何表达式，并且求值结果不一定是布尔值。ECMAScript 会自动调用<code>Boolean()</code>函数将这个表达式的值转换为布尔值。如果条件求值为 true，则执行语句statement1；如果条件求值为 false，则执行语句 statement2。这里的语句可能是一行代码，也可能是一个代码块（即包含在一对花括号中的多行代码）。</p><p>也可以像这样连续使用多个 if 语句：<br> if (condition1) statement1 else if (condition2) statement2 else statement3</p><h2 id="switch-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句" aria-hidden="true">#</a> switch 语句</h2><p>基本结构：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>expression<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">case</span> <span class="token literal-property property">value1</span><span class="token operator">:</span>
 statement
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">case</span> <span class="token literal-property property">value2</span><span class="token operator">:</span>
 statement
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">case</span> <span class="token literal-property property">value3</span><span class="token operator">:</span>
 statement
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">case</span> <span class="token literal-property property">value4</span><span class="token operator">:</span>
 statement
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">default</span><span class="token operator">:</span>
 statement
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">case</span> <span class="token number">25</span><span class="token operator">:</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">case</span> <span class="token number">35</span><span class="token operator">:</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;35&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">case</span> <span class="token number">45</span><span class="token operator">:</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;45&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">break</span><span class="token punctuation">;</span>
 <span class="token keyword">default</span><span class="token operator">:</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Other&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">35</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;35&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">45</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;45&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Other&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong><br> switch 语句在比较每个条件的值时会使用全等操作符，因此不会强制转换数据类型（比如，字符串&quot;10&quot;不等于数值 10）。</p>`,13);function c(i,l){return s(),a("div",null,[e(" more "),o])}const d=n(p,[["render",c],["__file","conditional-statement.html.vue"]]);export{d as default};
