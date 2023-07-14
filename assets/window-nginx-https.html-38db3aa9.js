import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as n,f as a}from"./app-af427ef1.js";const i="/assets/nginx-list-ee6fb87e.png",e="/assets/aliyun-ssl-dfc95aa7.png",c="/assets/before-config-987f995c.png",p="/assets/after-config-7a76b5ba.png",r={},l=a('<h2 id="新建ssl文件" tabindex="-1"><a class="header-anchor" href="#新建ssl文件" aria-hidden="true">#</a> 新建SSL文件</h2><p><img src="'+i+'" alt="" loading="lazy"><br> 在此文件夹下新建一个名为ssl的文件夹，用户存放SSL证书。</p><h2 id="下载ssl文件" tabindex="-1"><a class="header-anchor" href="#下载ssl文件" aria-hidden="true">#</a> 下载SSL文件</h2><p>登录阿里云账号，在免费ssl证书页面，先创建一个免费的SSL证书，对应的你要解析的域名。在ssl证书申请通过后选择Apache证书类型下载。</p><p><img src="'+e+'" alt="" loading="lazy"><br> 下载后的文件夹里会有三个文件，分别是：几串数字_你的域名.key、几串数字_你的域名_chain.crt、几串数字_你的域名_public.crt。</p><ol><li>将几串数字_你的域名_chain.crt里的文件内容复制到几串数字_你的域名_public.crt文件里。(为啥需要合并这个文件呢？因为有一个是中间证书，如果不合并，你的https配置好也是有问题的。这个是最方便快速得到后缀名为key、crt文件证书，不用学网上说的还得通过openssl去生成，我真的栓Q了，这个才是最快得到两种文件的方式，还免得你去记一大推操作指令，ctrl+c和ctrl+v才是yyds)</li><li>合并后可以仅保留几串数字_你的域名_public.crt和几串数字_你的域名.key(注意看上一步从谁复制到谁哈)。然后再移动到Nginx的SSL文件下。</li><li>建议最好不要修改文件名，下载怎么就怎样。</li></ol><h2 id="配置nginx的https协议" tabindex="-1"><a class="header-anchor" href="#配置nginx的https协议" aria-hidden="true">#</a> 配置Nginx的Https协议</h2><p>在nginx-&gt;conf，打开nginx.conf文件，滑到最底下就是配置https的地方，其中#代表注释，也就是默认nginx的https是注释了的，需要的自己在原基础上取消注释再配置就可以了。下面简单说说代码意思。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>配置好的图如下:</p><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="可能出现的问题" tabindex="-1"><a class="header-anchor" href="#可能出现的问题" aria-hidden="true">#</a> 可能出现的问题</h2><h3 id="配置好能打开但是提示连接不安全" tabindex="-1"><a class="header-anchor" href="#配置好能打开但是提示连接不安全" aria-hidden="true">#</a> 配置好能打开但是提示连接不安全</h3><p>如果你能通过https:你的域名打开到你的页面，只要不报连接不上或者提示了连接不安全，因为我下面就是告诉你连接不安全的原因。如果是连接不上就是https访问不到你的页面，那就是配置失败了。如果显示不安全，可以点击高级，选择继续访问就可以看到你的页面，只不过浏览器地址栏的https会显示会红色且提示不安全。</p><p>ps：一定要https开头，前面说的，如果https端口你配置的443，就可以省略，服务器默认80、443端口也是开启的。但如果你自己配置的其它端口号，比如啥5566端口呀或者其它数字的端口呀你就先在阿里云控制台打开你的防火墙。打开防火墙的意思就是允许某个端口号访问到你的服务器资源。比如windows的远程桌面连接默认端口号是3306。阿里云叫的安全组，腾讯云直接就是叫的防火墙。<br> 确保你配置的不是443为https端口号就要先去打开防火墙，再去浏览器打开你的链接，此时就是<code>https://你的域名:你的端口号</code>，不打开防火墙你的一切试都没有用。</p><p>回到正题，如果你用https打开你的页面显示不安全。因为nginx部署前端页面本身就是前后台分开部署，网上提示百度说你的ssl证书过期了啥啥的，但是我建议首先检查你的后端接口有没有配置https，如果前端用的https，后端用的http也会提示你的连接不安全。因为你首次配置https，不太可能因为说是证书过期影响的。<br> 此时如果前后端都采用了https协议，还是报连接不安全，你再考虑是不是ssl证书问题，还有其它可能你就自行百度吧。</p><h3 id="利用nginx做代理" tabindex="-1"><a class="header-anchor" href="#利用nginx做代理" aria-hidden="true">#</a> 利用nginx做代理</h3><p>以下仅作参考：<br> 还是在配置https的地方：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
  proxy_pass   http://xxx.com<span class="token punctuation">;</span>   <span class="token comment">#就是把root改为proxy_pass，然后跟地址</span>
  index  index.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[l];function d(h,g){return t(),n("div",null,o)}const x=s(r,[["render",d],["__file","window-nginx-https.html.vue"]]);export{x as default};
