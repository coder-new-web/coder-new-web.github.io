import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t,b as e,f as o}from"./app-af427ef1.js";const p={},c=e("p",null,"Global 对象是 ECMAScript 中最特别的对象，因为代码不会显式地访问它。ECMA-262 规定 Global对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。",-1),l=o(`<p>事实上，不存在全局变量或全局函数这种东西。在全局作用域中定义的变量和函数都会变成 Global 对象的属性 。</p><p>类似Global对象方法还有isNaN()、、isFinite()、parseInt()和 parseFloat()。</p><h2 id="url编码" tabindex="-1"><a class="header-anchor" href="#url编码" aria-hidden="true">#</a> URL编码</h2><p>encodeURI()和 encodeURIComponent()方法用于编码统一资源标识符（URI），以便传给浏览器。有效的 URI 不能包含某些字符，比如空格。使用 URI 编码方法来编码 URI 可以让浏览器能够理解它们，同时又以特殊的 UTF-8 编码替换掉所有无效字符。</p><p>两者区别：<br> encodeURI()不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、井号，而 encodeURIComponent()会编码它发现的所有非标准字符。来看下面的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> uri <span class="token operator">=</span> <span class="token string">&quot;http://www.wrox.com/illegal value.js#start&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;http://www.wrox.com/illegal%20value.js#start&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 encodeURI()和 encodeURIComponent()相对的是 decodeURI()和 decodeURIComponent()。decodeURI()只对使用 encodeURI()编码过的字符解码。<br> decodeURIComponent()解码所有被 encodeURIComponent()编码的字符，基本上就是解码所有特殊值。来看下面的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> uri <span class="token operator">=</span> <span class="token string">&quot;http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURI</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// http:// www.wrox.com/illegal value.js#start</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> eval()</h2><p>eval()是整个 ECMAScript 语言中最强大的了，它就是 eval()。这个方法就是一个完整的 ECMAScript 解释器，它接收一个参数，即一个要执行的 ECMAScrip（JavaScript）字符串。来看一个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;console.log(&#39;hi&#39;)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//等价于</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 eval()执行的代码属于该调用所在上下文，被执行的代码与该上下文拥有相同的作用域链。这意味着定义在包含上下文中的变量可以在 eval()调用内部被引用：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;console.log(msg)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello world&quot;  //这行代码会被替换成一行真正的函数调用代码。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>书上说：<mark>通过 eval()定义的任何变量和函数都不会被提升，这是因为在解析代码的时候，它们是被包含在一个字符串中的。它们只是在 eval()执行的时候才会被创建</mark>。但我觉得这句话并不太正确，见下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;const sayHi = ()=&gt; { console.log(&#39;hi&#39;); }&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: sayHi is not defined</span>

<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;function sayHi() { console.log(&#39;hi&#39;); }&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hi</span>

<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;let msg = &#39;hello world&#39;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Uncaught ReferenceError: msg is not defined</span>

<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;var msg = &#39;hello world&#39;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不存在变量提升，我想解释不了：为什么let声明方式和var声明方式，let声明会报错，而var报错声明不会报错（<mark>待求证</mark>）。</p><p>在严格模式下，在 eval()内部创建的变量和函数无法被外部访问。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>解释代码字符串的能力是非常强大的，但也非常危险。在使用 eval()的时候必须极为慎重，特别是在解释用户输入的内容时。因为这个方法会对 XSS 利用暴露出很大的攻击面。恶意用户可能插入会导致你网站或应用崩溃的代码。</p></div>`,18);function i(u,r){return s(),a("div",null,[c,t(" more "),l])}const v=n(p,[["render",i],["__file","Global.html.vue"]]);export{v as default};