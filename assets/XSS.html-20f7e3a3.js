import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,f as i}from"./app-af427ef1.js";const d={},s=i('<h3 id="xss简介" tabindex="-1"><a class="header-anchor" href="#xss简介" aria-hidden="true">#</a> XSS简介</h3><p>XSS全称Cross-site scripting，翻译为跨站脚本攻击。</p><h3 id="csrf简介" tabindex="-1"><a class="header-anchor" href="#csrf简介" aria-hidden="true">#</a> CSRF简介</h3><p>CSRF，全称是Cross site request forgery，翻译为跨站请求伪造。</p><h3 id="xss和csrf区别" tabindex="-1"><a class="header-anchor" href="#xss和csrf区别" aria-hidden="true">#</a> XSS和CSRF区别</h3><p>XSS——侧重于脚本，千方百计的注入并执行恶意脚本。<br> CSRF——不注入恶意脚本，侧重于请求伪造，借刀杀人，在用户不知情的情况下，借用户的名义干坏事。</p><h3 id="xss攻击危害" tabindex="-1"><a class="header-anchor" href="#xss攻击危害" aria-hidden="true">#</a> XSS攻击危害</h3><ol><li>窃取cookie</li><li>劫持流量导流到自己设定的网站上</li><li>插入恶意广告</li><li>植入木马获取用户信息等</li><li>获取用户信息</li></ol><h3 id="xss攻击方式" tabindex="-1"><a class="header-anchor" href="#xss攻击方式" aria-hidden="true">#</a> XSS攻击方式</h3><ol><li>url参注入</li><li>输入框注入</li></ol><p>XSS相对用户来说，一切以输入方式输入都是不安全的。</p><h3 id="xss分类" tabindex="-1"><a class="header-anchor" href="#xss分类" aria-hidden="true">#</a> XSS分类</h3><ol><li>反射型</li></ol><p>反射过程：浏览器提交恶意代码到服务器--&gt;服务端将恶意代码传回客户端</p><ol start="2"><li>存储型</li></ol><p>存储过程：浏览器提交恶意代码到服务器--&gt;将恶意代码存储到数据库<br> 存储型给用户带来的危害是最大，因为它是最持久的</p><ol start="3"><li>DOM型</li></ol><p>恶意代码没有提交到服务端，仅在客户端运行。</p><h4 id="反射型和dom型常用攻击方式" tabindex="-1"><a class="header-anchor" href="#反射型和dom型常用攻击方式" aria-hidden="true">#</a> 反射型和DOM型常用攻击方式</h4><p>反射型和DOM型主要通过参数的方式注入，引诱用户点击带有恶意代码的链接</p><h4 id="反射型和dom型区别" tabindex="-1"><a class="header-anchor" href="#反射型和dom型区别" aria-hidden="true">#</a> 反射型和DOM型区别</h4><p>反射型：服务端返回代码中包含恶意代码<br> 客户端--&gt;服务端--&gt;客户端<br> DOM型：服务端返回代码是正常的，一直存储在客户端</p><h4 id="存储型常用攻击方式" tabindex="-1"><a class="header-anchor" href="#存储型常用攻击方式" aria-hidden="true">#</a> 存储型常用攻击方式</h4><p>在输入框输入恶意代码，然后点击提交，就会提交到服务端，服务端就会将恶意代码存储在数据库。以后用户每次访问都会拉取到恶意代码并执行，因此给用户带来的危害也是最持久的。</p><h3 id="如何预防" tabindex="-1"><a class="header-anchor" href="#如何预防" aria-hidden="true">#</a> 如何预防</h3><p>攻击方式都是先注入再执行，那么防止方式就可以分为防止注入和防止执行。<br> 因此对用户的输入和输出做严格的把控，因此可以对输入进行过滤，对输出进行转义</p><h3 id="预防可选方案" tabindex="-1"><a class="header-anchor" href="#预防可选方案" aria-hidden="true">#</a> 预防可选方案</h3><ol><li>校验</li></ol><p>校验即对格式的校验</p><ol start="2"><li>过滤</li></ol><p>过滤对<code>&lt;script&gt;</code>、<code>&lt;iframe&gt;</code>等特殊标签。<br> 过去对<code>onclick</code>、<code>onerror</code>、<code>onfocus</code>等js事件属性</p><ol start="3"><li>编码转义</li></ol><p>对要渲染的内容做编码转义，防止执行</p><ol start="4"><li>限制输入长度</li><li>cookie设置成http only</li></ol>',34),o=[s];function l(h,t){return a(),r("div",null,o)}const p=e(d,[["render",l],["__file","XSS.html.vue"]]);export{p as default};