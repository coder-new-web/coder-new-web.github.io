import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as t,a as r,b as s,d as l,e as c,f as a}from"./app-af427ef1.js";const i="/assets/install-mysql-1-ff20abec.png",d="/assets/install-mysql-2-7e688383.png",k="/assets/install-mysql-3-ac5edcdb.png",u="/assets/install-mysql-4-8e6d1130.png",m="/assets/install-mysql-5-71c7f89b.png",v="/assets/install-mysql-6-676471fb.png",b="/assets/install-mysql-7-e8bc60ef.png",h={},y=a('<div class="hint-container tip"><p class="hint-container-title">注意</p><p>此教程使用的操作系统是，Centos 8，不同版本可能有些许差异，请尽量与本教程采用一致的版本。</p></div><h2 id="tar方式安装" tabindex="-1"><a class="header-anchor" href="#tar方式安装" aria-hidden="true">#</a> tar方式安装</h2><h3 id="_1、选择下载版本" tabindex="-1"><a class="header-anchor" href="#_1、选择下载版本" aria-hidden="true">#</a> 1、选择下载版本</h3>',3),g={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},f=s("br",null,null,-1),q=s("img",{src:i,alt:"image.png",loading:"lazy"},null,-1),_=a('<p>选择“<strong>Compressed TAR Archive</strong>”右键下载，然后复制链接：<br><img src="'+d+`" alt="image.png" loading="lazy"></p><h3 id="_2、下载解压mysql" tabindex="-1"><a class="header-anchor" href="#_2、下载解压mysql" aria-hidden="true">#</a> 2、下载解压mysql</h3><p>进入Centos：<br> 下载：<br><code>wget https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.20-linux-glibc2.12-x86_64.tar.gz</code></p><p>解压：<br><code>tar -zxvf mysql-5.7.20-linux-glibc2.12-x86_64.tar.gz</code></p><p>重命名文件：<br><code>mv mysql-5.7.20-linux-glibc2.12-x86_64.tar.gz mysql</code></p><p>移动文件：<br><code>mv mysql /usr/local/</code></p><h3 id="_3、创建mysql用户" tabindex="-1"><a class="header-anchor" href="#_3、创建mysql用户" aria-hidden="true">#</a> 3、创建mysql用户</h3><p>首先删除系统已有的mysql：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>#删除mariadb
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">rpm</span> <span class="token expression"><span class="token operator">-</span>qa<span class="token operator">|</span>grep mariadb</span></span>
mariadb<span class="token operator">-</span>libs<span class="token operator">-</span><span class="token number">5.5</span><span class="token number">.68</span><span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">rpm</span> <span class="token expression"><span class="token operator">-</span>e <span class="token operator">--</span>nodeps mariadb<span class="token operator">-</span>libs<span class="token operator">-</span><span class="token number">5.5</span><span class="token number">.68</span><span class="token operator">-</span><span class="token number">1.</span>el7<span class="token punctuation">.</span>x86_64</span></span>
#和删除mariadb一样，列出了多少个，就一个个通过：rmp <span class="token operator">-</span>e <span class="token operator">--</span>nodeps来删除
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">rpm</span> <span class="token expression"><span class="token operator">-</span>qa<span class="token operator">|</span>grep mysql</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个不需要登录的mysql账号，给对应的目录授予权限。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code># 创建不需要登录的一个mysql账号，启动MySQL服务时会使用该账号
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">groupadd</span> <span class="token expression">mysql</span></span>
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">useradd</span> <span class="token expression"><span class="token operator">-</span>r <span class="token operator">-</span>g mysql <span class="token operator">-</span>s <span class="token operator">/</span>bin<span class="token operator">/</span>false mysql</span></span>
#与上面作用一样 useradd <span class="token operator">-</span>r <span class="token operator">-</span>g mysql <span class="token operator">-</span>s <span class="token operator">/</span>sbin<span class="token operator">/</span>nologin mysql
#授予权限——返回到 <span class="token operator">/</span>usr<span class="token operator">/</span>local
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">mkdir</span> <span class="token expression"><span class="token operator">-</span>p <span class="token operator">/</span>data<span class="token operator">/</span>mysql</span></span>
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">chown</span> <span class="token expression"><span class="token operator">-</span>R mysql<span class="token operator">:</span>mysql <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>mysql</span></span>
<span class="token macro property"><span class="token directive-hash">#</span> <span class="token directive keyword">chown</span> <span class="token expression"><span class="token operator">-</span>R mysql<span class="token operator">:</span>mysql <span class="token operator">/</span>data<span class="token operator">/</span>mysql</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、安装依赖" tabindex="-1"><a class="header-anchor" href="#_4、安装依赖" aria-hidden="true">#</a> 4、安装依赖</h3><p><code>yum -y install libaio</code></p><h3 id="_5、初始化" tabindex="-1"><a class="header-anchor" href="#_5、初始化" aria-hidden="true">#</a> 5、初始化</h3><p>1、<code>cd /usr/local/mysql</code><br> 2、<code>./bin/mysqld --user=mysql --basedir=/usr/local/mysql --datadir=/data/mysql/data --initialize</code><br> 初始化的时候会显示初始的root账户密码，如下红框所示。<code>rjjLXVMp:6&amp;3</code>即为默认root账户密码：<br><img src="`+k+'" alt="image.png" loading="lazy"></p><h3 id="_6、添加环境变量" tabindex="-1"><a class="header-anchor" href="#_6、添加环境变量" aria-hidden="true">#</a> 6、添加环境变量</h3><p>1、<code>cd /etc</code><br> 2、<code>vim profile</code>，点击<code>i</code>进入编辑模式<br> 3、<code>export PATH=$PATH:/usr/local/mysql/bin</code><br><img src="'+u+`" alt="image.png" loading="lazy"><br> 还有就是变量的写法：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>export MYSQL_HOME<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>mysql
export PATH<span class="token operator">=</span>$PATH<span class="token operator">:</span>$<span class="token punctuation">{</span>MYSQL_HOME<span class="token punctuation">}</span><span class="token operator">/</span>bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4、输完后点击<code>esc</code>退出编辑模式，再次输入<code>:wq</code>保存并退出<br> 5、运行<code>source profile</code>重新加载环境变量配置文件</p><h3 id="_7、添加到系统服务" tabindex="-1"><a class="header-anchor" href="#_7、添加到系统服务" aria-hidden="true">#</a> 7、添加到系统服务</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token punctuation">[</span>root@mother<span class="token operator">-</span>board mysql<span class="token punctuation">]</span># cd support<span class="token operator">-</span>files
#修改mysql<span class="token punctuation">.</span>server中的basedir、datadir、mysqld_pid_file_path对应的值
<span class="token punctuation">[</span>root@mother<span class="token operator">-</span>board support<span class="token operator">-</span>files<span class="token punctuation">]</span># vim mysql<span class="token punctuation">.</span>server
basedir<span class="token operator">=</span><span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>mysql
datadir<span class="token operator">=</span><span class="token operator">/</span>data<span class="token operator">/</span>mysql<span class="token operator">/</span>data
mysqld_pid_file_path<span class="token operator">=</span><span class="token operator">/</span>data<span class="token operator">/</span>mysql<span class="token operator">/</span>mysql<span class="token punctuation">.</span>pid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、设置开机启动" tabindex="-1"><a class="header-anchor" href="#_8、设置开机启动" aria-hidden="true">#</a> 8、设置开机启动</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>#启动mysql，设置开机启动
<span class="token punctuation">[</span>root@mother<span class="token operator">-</span>board support<span class="token operator">-</span>files<span class="token punctuation">]</span># cp mysql<span class="token punctuation">.</span>server <span class="token operator">/</span>etc<span class="token operator">/</span>init<span class="token punctuation">.</span>d<span class="token operator">/</span>mysql
<span class="token punctuation">[</span>root@mother<span class="token operator">-</span>board support<span class="token operator">-</span>files<span class="token punctuation">]</span># chmod <span class="token number">755</span> <span class="token operator">/</span>etc<span class="token operator">/</span>init<span class="token punctuation">.</span>d<span class="token operator">/</span>mysql
<span class="token punctuation">[</span>root@mother<span class="token operator">-</span>board support<span class="token operator">-</span>files<span class="token punctuation">]</span># service mysql start
<span class="token punctuation">[</span>root@mother<span class="token operator">-</span>board support<span class="token operator">-</span>files<span class="token punctuation">]</span># chkconfig <span class="token operator">--</span>add mysql
<span class="token punctuation">[</span>root@mother<span class="token operator">-</span>board support<span class="token operator">-</span>files<span class="token punctuation">]</span># chkconfig <span class="token operator">--</span>list

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_9、登录mysql" tabindex="-1"><a class="header-anchor" href="#_9、登录mysql" aria-hidden="true">#</a> 9、登录mysql</h3><p><code>mysql -u root -p</code><br> 可能遇到的报错：<br> 1、</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>mysql<span class="token operator">:</span> error <span class="token keyword">while</span> loading shared libraries<span class="token operator">:</span> libncurses<span class="token punctuation">.</span>so<span class="token punctuation">.</span><span class="token number">5</span><span class="token operator">:</span> cannot open shared object file<span class="token operator">:</span> No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方式：<code>ln -s libncurses.so.6.1 libncurses.so.5</code>，创建一个软链接<br> 注意：可能你的电脑并不一定是<code>libncurses.so.6.1</code>，正如我网上找的教程是<code>libncurses.so.6.2</code>，需要自己看看，具体方法：<code>cd /usr/lib64</code>，然后<code>ls</code>查看文件。<br> 如果软件链接创建错误，在<code>ls</code>的时候会标红：<br><img src="`+v+`" alt="image.png" loading="lazy"><br> 可以选择删掉，如：<code>sudo rm -rf libncurses.so.5</code></p><p>2、</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>mysql<span class="token operator">:</span> error <span class="token keyword">while</span> loading shared libraries<span class="token operator">:</span> libtinfo<span class="token punctuation">.</span>so<span class="token punctuation">.</span><span class="token number">5</span><span class="token operator">:</span> cannot open shared object file<span class="token operator">:</span> No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决方式：<code>sudo ln -s /usr/lib64/libtinfo.so.6.1 /usr/lib64/libtinfo.so.5</code><br> 注意事项同上</p><h3 id="_10、修改密码" tabindex="-1"><a class="header-anchor" href="#_10、修改密码" aria-hidden="true">#</a> 10、修改密码</h3><ol><li><code>mysql -u root -p</code></li><li>输入密码，第一次是你初始化时候看到的密码，我这里是：<code>rjjLXVMp:6&amp;3</code></li><li>修改密码：<code>alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;qyxcmysql&#39;;</code></li></ol><p><code>alter user &#39;用户名&#39;@&#39;localhost&#39; identified by &#39;新密码&#39;;</code>，记得一定要带上分号，但新密码默认不能过于简单。<br> 但可以敲入以下命令来取消约束：<br><code>set global validate_password_policy=0;</code><br><code>set global validate_password_length=1;</code></p><ol start="4"><li></li></ol><h3 id="_11、远程访问" tabindex="-1"><a class="header-anchor" href="#_11、远程访问" aria-hidden="true">#</a> 11、远程访问</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>mysql<span class="token operator">&gt;</span> use mysql
Reading table information <span class="token keyword">for</span> completion of table and column names
You can turn off this feature to get a quicker startup with <span class="token operator">-</span>A

Database changed
mysql<span class="token operator">&gt;</span> select host<span class="token punctuation">,</span>user from user<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> host      <span class="token operator">|</span> user          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span>session <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span>sys     <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> root          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token number">3</span> rows in <span class="token function">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> update user set host <span class="token operator">=</span> <span class="token char">&#39;%&#39;</span> where user <span class="token operator">=</span> <span class="token char">&#39;root&#39;</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">1</span> row <span class="token function">affected</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
Rows matched<span class="token operator">:</span> <span class="token number">1</span>  Changed<span class="token operator">:</span> <span class="token number">1</span>  Warnings<span class="token operator">:</span> <span class="token number">0</span>

mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> rows <span class="token function">affected</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> select host<span class="token punctuation">,</span>user from user<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> host      <span class="token operator">|</span> user          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> <span class="token operator">%</span>         <span class="token operator">|</span> root          <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span>session <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span>sys     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token number">3</span> rows in <span class="token function">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此方法是修改root连接方式进行远程连接。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>mysql<span class="token operator">&gt;</span> grant all privileges on <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> to <span class="token char">&#39;remote&#39;</span>@<span class="token char">&#39;%&#39;</span> identified by <span class="token char">&#39;remotemysql&#39;</span> with grant option<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> rows affected<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token function">warning</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> select host<span class="token punctuation">,</span>user from user<span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> host      <span class="token operator">|</span> user          <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token operator">|</span> <span class="token operator">%</span>         <span class="token operator">|</span> remote        <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token operator">%</span>         <span class="token operator">|</span> root          <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span>session <span class="token operator">|</span>
<span class="token operator">|</span> localhost <span class="token operator">|</span> mysql<span class="token punctuation">.</span>sys     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
<span class="token number">4</span> rows in <span class="token function">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> rows <span class="token function">affected</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此方法是添加一个新用户可以进行远程连接</p><h3 id="_12、配置防火墙" tabindex="-1"><a class="header-anchor" href="#_12、配置防火墙" aria-hidden="true">#</a> 12、配置防火墙</h3><ol><li><code>systemctl start firewalld</code>——打开防火墙</li><li><code>firewall-cmd --zone=public --list-ports</code>——查看所有已打开的端口</li><li><code>firewall-cmd --zone=public --add-port=3306/tcp --permanent</code>——添加3306端口，显示为success即代表设置成功</li><li><code>systemctl restart firewalld.service</code>——重启防火墙</li><li>重启完可以再用第二条命令查看所有已打开的端口。注：刚设置完查看也看不到的，需要重启防火墙再查看</li></ol><h3 id="_12、设置连接数" tabindex="-1"><a class="header-anchor" href="#_12、设置连接数" aria-hidden="true">#</a> 12、设置连接数</h3><ol><li>查询当前连接数：<code>show global status like &#39;Max_used_connections&#39;;</code></li></ol><figure><img src="`+b+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ol start="2"><li>设置最大连接数： <ol><li>第一种方法</li></ol></li></ol><p>此方法重启后失效：<br><code> set GLOBAL max_connections=1000;</code></p><ol start="2"><li>第二种方法：</li></ol><p>修改<code>my.cnf</code>文件添加如下配置(注意：最大连接数不要设置过大，有可能会在启动的时候爆掉哦)，然后执行命令：<code>service mysql restart</code><br><code>max_connections=1000</code></p><h3 id="_13、退出mysql" tabindex="-1"><a class="header-anchor" href="#_13、退出mysql" aria-hidden="true">#</a> 13、退出mysql</h3><p><code>quit</code>回车</p>',51);function x(w,z){const n=o("ExternalLinkIcon");return p(),t("div",null,[r(" more "),y,s("p",null,[s("a",g,[l("选择下载版本链接"),c(n)]),f,q]),_])}const A=e(h,[["render",x],["__file","centos-install-mysql.html.vue"]]);export{A as default};