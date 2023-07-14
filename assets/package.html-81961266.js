import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c,a as d,b as n,d as s,e as a,w as l,f as e}from"./app-af427ef1.js";const u={},h=e("<p>package.json 是一个用于描述和配置项目的重要文件，其中包含了许多字段和选项，可以影响项目的构建、依赖管理、脚本执行等方面。了解这些字段可以帮助开发者更好地理解和控制项目的行为。</p><p>package.json对于大部分前端开发者来说，知道dependencies与devDependencies就够了。但对于库开发者或有更高级需求的开发者来说，了解 package.json 的其他字段是非常有必要的。</p><p>本文介绍的字段分为官方字段与非官方字段。非官方字段是被主流打包工具（webpack，Rollup）所支持， 旨在提供更高级的配置和功能，以满足特定的构建需求，可能不具备通用性。</p><p><code>package.json</code>文件其实就是对项目或者模块包的描述，里面包含许多元信息，比如名称、版本等等。</p><p>新项目可通过<code>npm init</code>初始化配置<code>package.json</code>文件信息，也可以通过<code>npm init -y</code>一键初始化默认<code>package.json</code>文件配置。</p>",5),v=e('<h2 id="必须属性" tabindex="-1"><a class="header-anchor" href="#必须属性" aria-hidden="true">#</a> 必须属性</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>定义项目名称，注意不得包含大写字母、不能以<code>.</code>和<code>_</code>开头。</p><p>可以通过<code>npm view</code>命令查看模块名是否重复，如果不重复就会提示 404。</p><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>定义项目的版本号，命名格式为<code>主版本号.次版本号.修订号</code>。</p>',6),k=n("code",null,"name",-1),m=n("code",null,"version",-1),b=n("h2",{id:"描述信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述信息","aria-hidden":"true"},"#"),s(" 描述信息")],-1),g=n("h3",{id:"description-和-keywords",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#description-和-keywords","aria-hidden":"true"},"#"),s(" description 和 keywords")],-1),q=n("code",null,"description",-1),x=n("code",null,"keywords",-1),f={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"npm search xxx",-1),y=e(`<h3 id="author" tabindex="-1"><a class="header-anchor" href="#author" aria-hidden="true">#</a> author</h3><p>定义项目的作者</p><h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> contributors</h3><p>定义项目的贡献者</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;contributors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;name &lt;b@rubble.com&gt; (http://barnyrubble.tumblr.com/)&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="homepage" tabindex="-1"><a class="header-anchor" href="#homepage" aria-hidden="true">#</a> homepage</h3><p>定义项目的主页地址</p><h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> repository</h3><p>定义项目的仓库地址</p><h3 id="bugs" tabindex="-1"><a class="header-anchor" href="#bugs" aria-hidden="true">#</a> bugs</h3><p>定义项目提交问题的地址</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//提交问题的地址和反馈的邮箱,url通常是Github中的issues页面</span>
<span class="token property">&quot;bugs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
  <span class="token property">&quot;url&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;https://github.com/facebook/react/issues&quot;</span><span class="token punctuation">,</span> 
  <span class="token property">&quot;email&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;xxxxx@xx.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="funding" tabindex="-1"><a class="header-anchor" href="#funding" aria-hidden="true">#</a> funding</h3><p>指定项目的资金支持方式和链接</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;funding&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;patreon&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.patreon.com/my-module&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="依赖配置" tabindex="-1"><a class="header-anchor" href="#依赖配置" aria-hidden="true">#</a> 依赖配置</h2><h3 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> dependencies</h3><p>定义生成环境的依赖包</p><ul><li>安装包的版本号如果前面不带符号，代表只安装这个指定版本。</li><li><code>~</code>代表表示安装最近的小版本，<code>^</code>代表安装最近的大版本。如<code>~1.0.5</code>代表安装安装<code>1.0.x</code>，<code>^1.0.5</code>代表安装<code>1.x.x</code>。</li></ul><p>简而言之，<code>~</code>只能安装主版本号和次版本号固定的版本，修订号随意，而<code>^</code>只能安装主版本号固定的版本，次版本号和修订号随意。</p><h3 id="devdependencies" tabindex="-1"><a class="header-anchor" href="#devdependencies" aria-hidden="true">#</a> devDependencies</h3><p>定义开发环境的依赖包，例如webpack、vite、babel、ESLint等。这些包将不会在生成环境中使用</p><ul><li>使用<code>npm install xxx --save</code>或<code>npm install xxx -S</code>代表安装在生产环境中。</li><li>使用<code>npm install xxx --save-dev</code>或者<code>npm install xxx -D</code>代表安装在开发环境中。关于环境的相关解释，见下一章节。</li></ul><h3 id="peerdependencies" tabindex="-1"><a class="header-anchor" href="#peerdependencies" aria-hidden="true">#</a> peerDependencies</h3><p>对等依赖的作用：</p><ul><li>减小打包体积：例如使用react开发的组件库，安装react是必不可少的，而使用组件库的开发者，本地项目肯定安装了react，因此开发的组件库中不必把react打包进去（期望项目的使用者来提供这些模块的实现）。</li><li>版本一致性：使用你的组件库的开发者需要确保他们项目中安装了与你声明的对等依赖版本兼容的包，以确保组件库正常运行。</li></ul><p>示例：声明要使用组件库，需在项目中安装大于17.0.1版本的react</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;peerDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;17.0.1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="peerdependenciesmeta" tabindex="-1"><a class="header-anchor" href="#peerdependenciesmeta" aria-hidden="true">#</a> peerDependenciesMeta</h3><p>将对等依赖标记为可选，如果用户没有安装对等依赖，npm不会发出警告</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;peerDependenciesMeta&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;optional&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//标记为可选</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bundleddependencies" tabindex="-1"><a class="header-anchor" href="#bundleddependencies" aria-hidden="true">#</a> bundledDependencies</h3><p>声明捆绑依赖项（使用情景较少）</p><h3 id="optionaldependencies" tabindex="-1"><a class="header-anchor" href="#optionaldependencies" aria-hidden="true">#</a> optionalDependencies</h3><p>声明可选依赖项（使用情景较少）</p><h3 id="engines" tabindex="-1"><a class="header-anchor" href="#engines" aria-hidden="true">#</a> engines</h3><p>声明对npm或node的版本要求</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=8.10.3 &lt;12.13.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=6.9.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>engines只是起一个说明的作用，即使用户安装的版本不符合要求，也不影响依赖包的安装。</p><h3 id="workspaces" tabindex="-1"><a class="header-anchor" href="#workspaces" aria-hidden="true">#</a> workspaces</h3><p>单个代码库中统一管理多个包（monorepo），在workspaces声明目录下的package会软链到根目录的node_modules中。</p><h2 id="脚本配置" tabindex="-1"><a class="header-anchor" href="#脚本配置" aria-hidden="true">#</a> 脚本配置</h2><h3 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> scripts</h3><p>定义脚本入口，代表包在包生命周期中不同的时间运行的脚本命令。执行命令<code>npm run xxx</code>，其中 xxx 代表的就是<code>scripts</code>对象里的键值，然后执行对应键值的值。</p><p>如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span><span class="token string">&quot;vite&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),_=n("code",null,"npm run dev",-1),w=n("code",null,"npm run dev",-1),S=n("code",null,"vite",-1),D=n("code",null,"vite",-1),C={href:"https://blog.coder-new.cn/interview/npm-run-xxx.html",target:"_blank",rel:"noopener noreferrer"},E=e(`<h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>用于定义项目的配置项，例如设置环境变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//在\`package.json\`文件中</span>
<span class="token string-property property">&quot;config&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;port&quot;</span><span class="token operator">:</span><span class="token number">8080</span>
<span class="token punctuation">}</span>
<span class="token comment">//在js文件中</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>npm_package_config_port<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件-目录" tabindex="-1"><a class="header-anchor" href="#文件-目录" aria-hidden="true">#</a> 文件&amp;目录</h2><h3 id="module" tabindex="-1"><a class="header-anchor" href="#module" aria-hidden="true">#</a> module</h3><p>指定 ES 模块入口文件</p><p>示例：当其他开发者在他们的项目中导入你的包时，会加载并执行包中的dist/index.esm.js</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/index.esm.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> main</h3><p>指定 CommonJS 模块或 ES 模块入口文件。如果不指定该字段，默认是根目录下的index.js</p><p>提示：从 Node.js 12.20.0 版本开始，&quot;main&quot; 字段也可以指定 ES 模块的入口文件</p><h3 id="browser" tabindex="-1"><a class="header-anchor" href="#browser" aria-hidden="true">#</a> browser</h3><p>指定浏览器使用的入口文件，例如umd模块。</p><h3 id="types-非官方字段" tabindex="-1"><a class="header-anchor" href="#types-非官方字段" aria-hidden="true">#</a> types（非官方字段）</h3><p>指定 TypeScript 类型声明文件（.d.ts 文件）的路径</p><p>指定模块系统的使用方式，&quot;commonjs&quot;，&quot;module&quot;，&quot;umd&quot;，&quot;json&quot;</p><p>示例：指定模块系统为ES module模式，使用CommonJS文件时，需显式的定义为 .cjs 文件扩展名，来明确指定这些文件为 CommonJS 模块</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;module&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exports-非官方字段" tabindex="-1"><a class="header-anchor" href="#exports-非官方字段" aria-hidden="true">#</a> exports（非官方字段）</h3><p>当打包工具支持exports字段时（webpack、Rollup 等），以上main，browser，module，types四个字段都被忽略</p><ul><li><code>.</code> 表示默认导出</li><li><code>import</code>: 指定了 ES module (ESM) 规范下的导出文件路径</li><li><code>require</code>: 指定了 CommonJS 规范下的导出文件路径</li><li><code>browser</code>: 指定了用于浏览器环境的导出文件路径</li><li><code>types</code>: 指定了类型声明文件的路径</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;exports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;.&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.esm.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.cjs.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.umd.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/index.d.ts&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> files</h3><p>指定哪些包被推送到npm服务器中</p><p>示例：只推送index.js和dist包到npm服务器</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;dist&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在项目根目录新建一个.npmignore文件，说明不需要提交到npm服务器的文件，类似.gitignore。写在这个文件中的文件即便被写在files属性里也会被排除在外</p><h3 id="bin" tabindex="-1"><a class="header-anchor" href="#bin" aria-hidden="true">#</a> bin</h3><p>定义在全局安装时可执行的命令（使用情景较少）</p><h3 id="man" tabindex="-1"><a class="header-anchor" href="#man" aria-hidden="true">#</a> man</h3><p>Linux 中的帮助指令（使用情景较少）</p><h3 id="directories" tabindex="-1"><a class="header-anchor" href="#directories" aria-hidden="true">#</a> directories</h3><p>定义项目目录结构的字段（使用情景较少）</p><h2 id="发布配置" tabindex="-1"><a class="header-anchor" href="#发布配置" aria-hidden="true">#</a> 发布配置</h2><h3 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> private</h3><p>防止私有包发布到npm服务器，要发布到npm上设为false</p><h3 id="preferglobal-非官方字段" tabindex="-1"><a class="header-anchor" href="#preferglobal-非官方字段" aria-hidden="true">#</a> preferGlobal（非官方字段）</h3><p>当设置 &quot;preferGlobal&quot; 字段为 true 时，它表示你的包更适合以全局方式安装，而不是作为项目的依赖项进行本地安装。</p><p>这个字段的设置是为了向用户传达关于你的包的最佳使用方式的建议。它并不会直接影响包的安装方式或包管理器的行为。</p><h3 id="publishconfig" tabindex="-1"><a class="header-anchor" href="#publishconfig" aria-hidden="true">#</a> publishConfig</h3><p>在发布包时指定特定的配置</p><p>示例：指定包发布的注册表 URL，指定所有用户都可以访问（私有的会收费）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;publishConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;registry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://registry.npmjs.org/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="os" tabindex="-1"><a class="header-anchor" href="#os" aria-hidden="true">#</a> os</h3><p>指定你的包适用的操作系统</p><p>示例：包只适用于darwin（macOS）和 linux</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;os&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;darwin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：禁用win32</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;os&quot;</span> <span class="token punctuation">[</span><span class="token string">&quot;!win32&quot;</span><span class="token punctuation">]</span> <span class="token comment">//禁用的操作系统</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> cpu</h3><p>该配置和OS配置类似，用CPU可以更准确的限制用户的安装环境</p><h3 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> license</h3><p>定义指定许可，默认为<code>MIT</code>，允许你任意使用、复制、修改代码库</p><p>ISC：在所有副本中保留版权声明和许可证声明，使用者就可以拿你的代码做任何想做的事情，你也无需承担任何责任</p><p>MIT：在所有副本或主要部分中保留版权声明和许可证声明，使用者就可以拿你的代码做任何想做的事情，你也无需承担任何责任</p>`,55),N={href:"https://opensource.org/licenses/",target:"_blank",rel:"noopener noreferrer"},I=n("h2",{id:"第三方配置-非官方字段",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第三方配置-非官方字段","aria-hidden":"true"},"#"),s(" 第三方配置（非官方字段）")],-1),L=n("h3",{id:"eslintconfig",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslintconfig","aria-hidden":"true"},"#"),s(" eslintConfig")],-1),V=n("p",null,"eslint的配置，更推荐新建 .eslintrc 进行配置",-1),R={href:"https://juejin.cn/post/7228978346502946874#heading-16",target:"_blank",rel:"noopener noreferrer"},J=e(`<h3 id="babel" tabindex="-1"><a class="header-anchor" href="#babel" aria-hidden="true">#</a> babel</h3><p>babel的配置，更推荐新建 .babelrc 进行配置</p><h3 id="unpkg" tabindex="-1"><a class="header-anchor" href="#unpkg" aria-hidden="true">#</a> unpkg</h3><p>unpkg 是一个基于 CDN 的前端包托管服务，用于在浏览器中直接引用和加载 npm 上发布的包。</p><p>无需下载，直接通过 <code>&lt;script&gt;</code> 标签引用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/package-name@version&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3><p>lint-staged是一个在Git暂存文件上运行linters的工具，通常配合gitHooks一起使用。</p>`,8),M={href:"https://juejin.cn/post/7228978346502946874#heading-22",target:"_blank",rel:"noopener noreferrer"},T=e(`<h3 id="browserslist" tabindex="-1"><a class="header-anchor" href="#browserslist" aria-hidden="true">#</a> browserslist</h3><p>告知支持哪些浏览器及版本，Autoprefixer常用到它</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;defaults&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;not ie &lt; 8&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;&gt; 1%&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iOS 7&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;last 3 iOS versions&quot;</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sideeffects" tabindex="-1"><a class="header-anchor" href="#sideeffects" aria-hidden="true">#</a> sideEffects</h3><p>指示包是否具有副作用，协助Webpack，Rollup等进行tree shaking</p><p>多数情况下可以直接设置为false，这样打包工具就会自动删除未被import的代码</p><p>但是有些情况例外：</p><ul><li>有一些特定的模块文件，它们执行一些副作用操作，如注册全局事件监听器、修改全局状态等。</li><li>告诉构建工具不要将样式文件排除在无用代码消除的优化范围之外</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;sideEffects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./path/to/module.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*.css&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h2><h3 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h3><p>定义：开发环境是用于开发和调试软件的环境。它是开发人员进行编码、测试和调试的工作区域。</p><p>特点：</p><ul><li>实时调试：开发环境通常提供实时的代码调试功能，方便开发人员在开发过程中检查代码逻辑和解决问题。</li><li>灵活性：开发环境提供了丰富的工具和库，供开发人员使用和测试新功能和技术。</li><li>模拟数据：开发环境通常支持模拟数据和模拟服务器的功能，以便开发人员在不依赖实际后端服务的情况下进行开发和测试。</li><li>实时更新：开发环境允许开发人员对代码进行实时修改，并立即查看更改后的效果，提高开发效率。</li></ul><p>示例：开发人员可以使用本地开发服务器、集成开发环境（IDE）和浏览器开发者工具等工具来创建、编辑和调试代码。</p><h3 id="演示环境" tabindex="-1"><a class="header-anchor" href="#演示环境" aria-hidden="true">#</a> 演示环境</h3><p>定义：演示环境是用于展示软件功能和特性的环境，供项目相关人员和客户预览和评估。</p><p>特点：</p><ul><li>类似生产环境：演示环境应与生产环境尽可能接近，以确保演示效果与实际环境一致。</li><li>数据隔离：演示环境的数据应与生产环境的数据隔离，以防止敏感信息泄露。</li><li>模拟用户体验：演示环境应提供与实际用户体验类似的功能和界面。</li><li>可重置性：演示环境应具备重置或恢复初始状态的能力，以便反复进行演示和评估。</li></ul><p>示例：演示环境可以是专门的演示服务器或虚拟主机，用于展示软件的功能、界面和性能。</p><h3 id="测试环境" tabindex="-1"><a class="header-anchor" href="#测试环境" aria-hidden="true">#</a> 测试环境</h3><p>定义： 测试环境是用于进行软件测试的环境，旨在验证软件的功能、性能和稳定性。</p><p>特点：</p><ul><li>模拟生产环境：测试环境应尽可能接近生产环境，以便准确地模拟用户在真实环境中的行为。</li><li>隔离性：测试环境应与开发环境和生产环境相互隔离，以避免测试活动对其他环境造成影响。</li><li>测试数据：测试环境应具备合适的测试数据，以确保覆盖各种测试用例和场景。</li><li>自动化测试：测试环境通常配置自动化测试框架和工具，以提高测试效率和准确性。</li></ul><p>示例：测试环境可以是专门的测试服务器或虚拟机，用于进行单元测试、集成测试、系统测试和性能测试等。</p><h3 id="预发布环境" tabindex="-1"><a class="header-anchor" href="#预发布环境" aria-hidden="true">#</a> 预发布环境</h3><p>定义：预发布环境是在软件发布之前的一个环境，用于进行最后的功能测试、性能测试和验证。</p><p>特点：</p><ul><li>验证发布准备：预发布环境用于验证软件是否已经准备好进行正式发布，包括功能的完整性、性能的稳定性以及兼容性等。</li><li>类似生产环境：预发布环境应该尽量与生产环境相似，以确保测试结果能够准确反映实际发布后的表现。</li><li>隔离性：预发布环境与生产环境应该相互隔离，以防止预发布期间的测试活动对生产环境产生影响。</li><li>回滚能力：预发布环境应该具备回滚的能力，以便在测试期间发现问题时能够快速还原到之前的可靠状态。</li></ul><p>示例：预发布环境可以是专门的服务器或虚拟机，用于进行最后的集成测试、用户验收测试和性能测试。</p><h3 id="持续集成-交付环境" tabindex="-1"><a class="header-anchor" href="#持续集成-交付环境" aria-hidden="true">#</a> 持续集成/交付环境</h3><p>定义：持续集成/交付环境是一种自动化的开发流程，将代码的集成、构建和部署自动化进行，以实现快速、频繁的软件交付。</p><p>特点：</p><ul><li>自动化集成：持续集成/交付环境会自动将开发团队的代码集成到共享代码库，并执行自动化构建和测试。</li><li>频繁交付：持续集成/交付环境旨在实现频繁的软件交付，以便快速响应需求和反馈。</li><li>部署自动化：持续集成/交付环境会自动化地将软件部署到测试环境、预发布环境或生产环境中。</li><li>持续监控：持续集成/交付环境会监控软件的运行情况，包括错误日志、性能指标等。</li></ul><p>示例：持续集成/交付环境通常会使用工具和平台，如 Jenkins、Travis CI 等，以自动化执行集成、构建和部署任务。</p><h3 id="生产环境-1" tabindex="-1"><a class="header-anchor" href="#生产环境-1" aria-hidden="true">#</a> 生产环境</h3><p>定义：生产环境是软件最终部署和运行的环境，用于向最终用户提供服务。</p><p>特点：</p><ul><li>高性能：生产环境需要具备高性能和稳定性，以处理大量的用户访问和并发请求。</li><li>安全性：生产环境需要采取安全措施来保护用户数据和防止潜在的攻击。</li><li>优化和压缩：在生产环境中，代码会经过优化和压缩，以减少加载时间和带宽消耗。</li><li>监控和日志：生产环境通常配备监控和日志系统，以便实时追踪系统状态、性能和错误。</li></ul><p>示例：生产环境可以是云服务器、虚拟主机、CDN（内容分发网络）等用于部署和运行网站或应用程序的环境。</p><h3 id="环境顺序" tabindex="-1"><a class="header-anchor" href="#环境顺序" aria-hidden="true">#</a> 环境顺序</h3><p>根据上面介绍到的环境，进行排序：</p><p>生产环境 -&gt; 演示环境 -&gt; 测试环境 -&gt; 预发布环境 -&gt; 持续集成/交付环境 -&gt; 生产环境。</p><p>但这个顺序可能因为组织、项目和开发流程不同的而有所变化。有些环境可能会并存存在，而不是按照上面的顺序进行的，开发人员需要根据具体情况灵活调整和组织各个环境。</p><p>企业常使用的开发流程：</p><p>开发环境 -&gt; 测试环境 -&gt; 预发布环境 -&gt; 生产环境</p><h2 id="代码环境" tabindex="-1"><a class="header-anchor" href="#代码环境" aria-hidden="true">#</a> 代码环境</h2><p>我们都知道安装库的时候，可以选择安装开发环境代码还是生产环境代码，这两者环境代码有什么区别？</p><ul><li>开发版本（Development Version）：开发版本的主要目的是方便开发人员进行调试和开发工作。它通常包含了更多的调试信息、详细的错误提示和更易读的代码结构。开发版本可能包含未经优化的代码、调试工具和日志记录功能，以帮助开发人员更好地理解和调试代码。这些额外的功能和信息可以帮助开发人员快速定位和解决问题，但也会增加文件大小和加载时间。</li><li>生产版本（Production Version）：生产版本的主要目的是在实际生产环境中使用，以提供更高的性能和更小的文件大小。生产版本通常会经过代码压缩、文件合并和其他优化处理，以减少文件大小并提高执行效率。不再包含调试信息、日志记录和其他开发时需要的辅助功能，从而使代码更紧凑、更高效。生产版本通常被用于部署到生产服务器、发布给最终用户或在生产环境中进行性能测试。</li></ul><p>通过提供开发版本和生产版本，开发人员可以在开发过程中使用开发版本进行调试和开发，而在部署到生产环境时使用生产版本以提供更好的性能和用户体验。开发版本可以帮助开发人员更容易地追踪和修复问题，而生产版本则专注于最终产品的性能和可靠性。</p><p><code>npm install xxx</code>中后缀在<code>-S</code>和<code>-D</code>究竟区别在哪里？</p><p>通常情况下，通过<code>-S</code>安装的会在<code>dependencies</code>中，这里面的库或插件都会最终打包进最终部署的产品中去。这些库是项目在生产环境中必要的，并且会被打包和部署到最终产品中。</p><p>而通过<code>-D</code>安装的会在<code>devDependencies</code>中，这里面的库通常不会打包进最终部署产品中去。这些库在最终产品中不会被包含，它们主要用于开发、测试和构建过程中的辅助功能。</p><p>下面是一个参考的<code>package.json</code>安装信息：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;@element-plus/icons-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;animate.css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;element-plus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.3.4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pinia&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.35&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.62.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.47&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.1.6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;@types/node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^18.16.3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;@vitejs/plugin-vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.2.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;@vitejs/plugin-vue-jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;@vue/tsconfig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~4.8.4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;unplugin-vue-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.24.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.3.4&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vue-tsc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.6.4&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55);function G(O,B){const p=o("RouterLink"),t=o("ExternalLinkIcon");return r(),c("div",null,[h,d(" more "),v,n("p",null,[s("对于版本号的介绍"),a(p,{to:"/web/practical-skills/version-desc.html"},{default:l(()=>[s("参考此文章")]),_:1}),s("。"),k,s("和"),m,s("是最重要的字段，共同构成唯一标识符")]),b,g,n("p",null,[q,s("描述和"),x,s("关键字有助于我们在"),n("a",f,[s("npm"),a(t)]),s("上发现包。会在"),j,s("中列出。")]),y,n("p",null,[s("上面代表可执行的命令是"),_,s("，当你在终端中输入"),w,s("是，相当于直接执行"),S,s("，但是又不可以在终端中直接输入"),D,s("，原因可见"),n("a",C,[s("此文章"),a(t)]),s("。")]),E,n("p",null,[s("开源协议查询地址："),n("a",N,[s("opensource.org/licenses/"),a(t)])]),I,L,V,n("p",null,[s("使用参考："),n("a",R,[s("新建 .eslintrc"),a(t)])]),J,n("p",null,[s("使用参考："),n("a",M,[s("配置 husky、lint-staged、@commitlint/cli"),a(t)])]),T])}const A=i(u,[["render",G],["__file","package.html.vue"]]);export{A as default};