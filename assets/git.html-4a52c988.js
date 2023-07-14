import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as l,b as a,d as s,e,f as d}from"./app-af427ef1.js";const c={},o=d(`<h2 id="git基本命令" tabindex="-1"><a class="header-anchor" href="#git基本命令" aria-hidden="true">#</a> git基本命令</h2><h3 id="克隆项目" tabindex="-1"><a class="header-anchor" href="#克隆项目" aria-hidden="true">#</a> 克隆项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> clone https://github.com/xxxx/xxxx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="关联远程仓库" tabindex="-1"><a class="header-anchor" href="#关联远程仓库" aria-hidden="true">#</a> 关联远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> clone https://github.com/xxxx/xxxx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加文件" tabindex="-1"><a class="header-anchor" href="#添加文件" aria-hidden="true">#</a> 添加文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># 添加全部文件</span>
  <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
  <span class="token comment"># 添加单个文件</span>
  <span class="token function">git</span> <span class="token function">add</span> xxx
  <span class="token comment"># 添加一些文件</span>
  <span class="token function">git</span> <span class="token function">add</span> xxx xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加描述" tabindex="-1"><a class="header-anchor" href="#添加描述" aria-hidden="true">#</a> 添加描述</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;这里是描述内容&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送代码" tabindex="-1"><a class="header-anchor" href="#推送代码" aria-hidden="true">#</a> 推送代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拉取代码" tabindex="-1"><a class="header-anchor" href="#拉取代码" aria-hidden="true">#</a> 拉取代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支" aria-hidden="true">#</a> 查看分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> checkout <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
  <span class="token comment"># or</span>
  <span class="token function">git</span> switch <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token comment">#创建某一分支并切换到这一分支</span>
   <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
   <span class="token comment"># or</span>
   <span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除本地分支" tabindex="-1"><a class="header-anchor" href="#删除本地分支" aria-hidden="true">#</a> 删除本地分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
  <span class="token function">git</span> checkout <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment">#切换你想合并的某个分支</span>
  <span class="token function">git</span> checkout master 
  <span class="token comment">#合并你输入的分支名到当前分支</span>
  <span class="token function">git</span> merge <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置" aria-hidden="true">#</a> git配置</h2><h3 id="查看git配置信息" tabindex="-1"><a class="header-anchor" href="#查看git配置信息" aria-hidden="true">#</a> 查看git配置信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看git用户名、密码、邮箱的配置" tabindex="-1"><a class="header-anchor" href="#查看git用户名、密码、邮箱的配置" aria-hidden="true">#</a> 查看git用户名、密码、邮箱的配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> config user.name
  <span class="token function">git</span> config user.password
  <span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置git用户名、密码、邮箱的配置" tabindex="-1"><a class="header-anchor" href="#设置git用户名、密码、邮箱的配置" aria-hidden="true">#</a> 设置git用户名、密码、邮箱的配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 局部</span>
    <span class="token function">git</span> config user.name <span class="token string">&quot;new-name&quot;</span>
    <span class="token function">git</span> config user.password <span class="token string">&quot;123456&quot;</span>
    <span class="token function">git</span> config user.email <span class="token string">&quot;xxxxxx@qq.com&quot;</span>
    <span class="token comment"># 全局</span>
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;new-name&quot;</span>
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.password <span class="token string">&quot;123456&quot;</span>
    <span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxxxxx@qq.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,31),p={href:"https://blog.csdn.net/sinat_39049092/article/details/113417142",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_26884501/article/details/108142928",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/qq_26884501/article/details/108142928",target:"_blank",rel:"noopener noreferrer"};function m(b,v){const n=t("ExternalLinkIcon");return r(),l("div",null,[o,a("ul",null,[a("li",null,[a("a",p,[s("git 本地仓库关联到远程仓库"),e(n)])]),a("li",null,[a("a",u,[s("git将本地代码推送到远程分支"),e(n)])]),a("li",null,[a("a",h,[s("git将本地代码推送到远程分支"),e(n)])])])])}const x=i(c,[["render",m],["__file","git.html.vue"]]);export{x as default};