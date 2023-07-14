import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e,b as t,f as o}from"./app-af427ef1.js";const p={},i=t("p",null,"大多数客户端JavaScript程序运行时总是在操作一个或多个文档元素。当这些程序启动时，可以使用全局变量document来引用Document对象。但是，为了操作文档中的元素，必须通过某种方式获得或选取这些引用文档元素的Element对象。",-1),c=o(`<p>DOM定义许多方式来选取元素，查询文档的一个或多个元素有如下方法:</p><ul><li>用指定的id属性</li><li>用指定的name属性用指定的标签名字;</li><li>用指定的CSS类</li><li>匹配指定的CSS选择器。</li></ul><h2 id="通过id获取元素" tabindex="-1"><a class="header-anchor" href="#通过id获取元素" aria-hidden="true">#</a> 通过ID获取元素</h2><p>任何HTML元素可以有一个id属性，在文档中该值必须唯一，即同一个文档中的两个元素不能有相同的ID。可以用Document对象的getElementById()方法选取一个基于唯一ID的元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> section1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;section1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以稍作封装以支持通过ID查找多个元素：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数接受任意多的字符串参数
 * 每个参数将当做元素的id传给documentgetElementById()
 * 返回一个对象，它把这些id映射到对应Element对象
 * 如任何一个id对应的元素未定义，则抛出一个Error对象
*/</span>
<span class="token keyword">function</span> <span class="token function">getElements</span><span class="token punctuation">(</span><span class="token comment">/*ids...*/</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> elements <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>                                      <span class="token comment">//开始是一个空map映射对象</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>             <span class="token comment">//循环每个参数</span>
      <span class="token keyword">var</span> id <span class="token operator">=</span> arguments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>                              <span class="token comment">//参数是元素的id</span>
      <span class="token keyword">var</span> elt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">//查找元素</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>elt <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>                                 <span class="token comment">// 如果未定义</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;No element with id: &quot;</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 抛出异常</span>
      <span class="token punctuation">}</span>
      elements<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> elt<span class="token punctuation">;</span>                                <span class="token comment">//id和元素之间映射</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> elements<span class="token punctuation">;</span>                                      <span class="token comment">// 对于元素映射返回id</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在低于IE 8版本的浏览器，getElementById()对于匹配元素的ID不区分大小写，而且也返回匹配name属性的元素。</p></div><h2 id="通过名字选取元素" tabindex="-1"><a class="header-anchor" href="#通过名字选取元素" aria-hidden="true">#</a> 通过名字选取元素</h2><p>HTML的name属性最初打算为表单元素分配名字，在表单数据提交到服务器时使用该属性的值。类似id属性，name是给元素分配名字，但是区别于id，name属性的值不是必须唯一:多个元素可能有同样的名字，在表单中，单选和复选按钮通常是这种情况而且，和id不一样的是name属性只在少数HTML元素中有效，包括表单、表单元素<code>&lt;iframe&gt;</code>和<code>&lt;img&gt;</code>元素。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> radiobuttons <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">&quot;favorite color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>getElementsByName()定义在HTMLDocument类中，而不在Document类中，所以它只针对HTML文档可用，在XML文档中不可用。</p><p>它返回一个NodeList对象，后者的行为类似一个包含若干Element对象的只读数组。在IE中，getElementsByName()也返回id属性匹配指定值的元素。</p><p>为了兼容，应该小心谨慎，不要将同样的字符串同时用做名字和ID。</p><h2 id="通过标签名选取元素" tabindex="-1"><a class="header-anchor" href="#通过标签名选取元素" aria-hidden="true">#</a> 通过标签名选取元素</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> spans <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类似于<code>getElementsByName()</code>、<code>getElementsByTagName()</code>返回一个NodeList对象，在NodeList中返回的元素按照在文档中的顺序排序的，所以可用如下代码选取文档中的第一个<code>&lt;p&gt;</code>元素：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fistpara <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HTML标签是不区分大小写的，当在HTML文档中使用<code>getElementsByTagName()</code>时，它进行不区分大小写的标签名比较。</p><p>若<code>getElementsByTagName()</code>传递通配符参数“*”将获得一个代表文档中所有元素的NodeList对象。</p><h2 id="通过css类选取元素" tabindex="-1"><a class="header-anchor" href="#通过css类选取元素" aria-hidden="true">#</a> 通过CSS类选取元素</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//查找其class属性值中包含“warning”的所有元素</span>
<span class="token keyword">var</span> warnings <span class="token operator">=</span> <span class="token function">documentgetElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;warning&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//查找以&quot;1og”命名并且有”error“和&quot;fatal&quot;类的元素的所有后代</span>
<span class="token keyword">var</span> log <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;log&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fatal <span class="token operator">=</span> log<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;fatal error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="document-queryselectorall" tabindex="-1"><a class="header-anchor" href="#document-queryselectorall" aria-hidden="true">#</a> document.querySelectorAll()</h2><h2 id="document-queryselector" tabindex="-1"><a class="header-anchor" href="#document-queryselector" aria-hidden="true">#</a> document.querySelector()</h2><h2 id="document-all" tabindex="-1"><a class="header-anchor" href="#document-all" aria-hidden="true">#</a> document.all()</h2><h2 id="parentnode" tabindex="-1"><a class="header-anchor" href="#parentnode" aria-hidden="true">#</a> parentNode</h2><p>该节点的父节点，或者针对类似Document对象应该是null，因为它没有父节点。</p><h2 id="childnodes" tabindex="-1"><a class="header-anchor" href="#childnodes" aria-hidden="true">#</a> childNodes</h2><p>只读的类数组对象（NodeList对象），它是该节点的子节点的实时表示。</p><h2 id="firstchild、lastchild" tabindex="-1"><a class="header-anchor" href="#firstchild、lastchild" aria-hidden="true">#</a> firstChild、lastChild</h2><p>该节点的子节点的第一个和最后一个，如果该节点没有子节点则为null。</p><h2 id="nextsibling、previourssibling" tabindex="-1"><a class="header-anchor" href="#nextsibling、previourssibling" aria-hidden="true">#</a> nextSibling、previoursSibling</h2><p>该节点的兄弟节点中的前一个和下一个。具有相同父节点的两个节点为兄弟节点。节点的顺序反映了它们在文档中的出现顺序。这两个属性将节点之间的双向链表的形式连接起来。</p><h2 id="nodetype" tabindex="-1"><a class="header-anchor" href="#nodetype" aria-hidden="true">#</a> nodeType</h2><p>该节点的类型，9代表Document节点，1代表Element节点，3代表Text节点，8代表Comment节点，11代表DocumentFragment节点。</p><h2 id="nodevalue" tabindex="-1"><a class="header-anchor" href="#nodevalue" aria-hidden="true">#</a> nodeValue</h2><p>Text节点或Comment节点的文本内容</p><h2 id="nodename" tabindex="-1"><a class="header-anchor" href="#nodename" aria-hidden="true">#</a> nodeName</h2><p>元素的标签名，以大写形式表示。</p><h2 id="firstelementchild、lastelementchild" tabindex="-1"><a class="header-anchor" href="#firstelementchild、lastelementchild" aria-hidden="true">#</a> firstElementChild、lastElementChild</h2><p>类似于fistChild、lastChild，但只代表子Element。</p><h2 id="nextelementsibling、previouselementsibling" tabindex="-1"><a class="header-anchor" href="#nextelementsibling、previouselementsibling" aria-hidden="true">#</a> nextElementSibling、previousElementSibling</h2><p>类似于nextSibling和previousSibling，但只代表兄弟Element。</p><h2 id="childelementcount" tabindex="-1"><a class="header-anchor" href="#childelementcount" aria-hidden="true">#</a> childElementCount</h2><p>子元素的数量，返回的值和children.length值相等。</p>`,45);function l(d,r){return a(),s("div",null,[i,e(" more "),c])}const k=n(p,[["render",l],["__file","select-dom-element.html.vue"]]);export{k as default};
