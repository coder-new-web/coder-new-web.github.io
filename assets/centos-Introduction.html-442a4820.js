import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as d,a as o,b as e,d as l,e as t,f as s}from"./app-af427ef1.js";const n="/assets/attr-1-e688f5e7.png",p="/assets/attr-2-248232c6.png",f="/assets/attr-3-0d663eab.png",g="/assets/attr-4-8a977ea6.png",m="/assets/attr-5-98452722.png",x="/assets/attr-6-2e9b97ed.png",h={},u=s('<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="操作系统命令" tabindex="-1"><a class="header-anchor" href="#操作系统命令" aria-hidden="true">#</a> 操作系统命令</h3><ol><li><code>ls</code>查看当前文件下的文件</li><li><code>ls -l</code>或简写<code>ll</code>，列举文件且查看每个文件的文件信息</li><li><code>pwd</code>获取当前路径</li><li><code>cd ..</code>返回上级路径</li><li><code>mkdir xxx</code>创建文件夹</li><li><code>touch xxx.js</code>创建文件</li><li><code>cd xxx</code>打开某一文件</li><li><code>vim xxx.js</code>编辑某一文件，<code>i</code>开启编辑模式，<code>按ese</code>退出编辑模式，<code>wq</code>保存并退出</li><li><code>wget 网址</code>根据这个网址下载东西</li><li><code>cd ~</code></li><li><code>cd etc</code>配置环境变量在这里配置</li><li><code>vim profile</code>编辑profile文件，然后<code>esc</code>取消编辑，<code>:wq</code>保存并退出，<code>source profile</code>重启环境变量配置文件</li><li><code>echo $path</code>查看系统的环境变量，以<code>:</code>进行分隔环境变量</li><li><code>adduser xxx</code>创建新用户</li><li><code>passwd xxx</code>为该用户设置密码</li><li><code>chmod 777 index.txt</code>创建index.js文件，此创建文件方式，所有用户权限都是一样的，777涵义看下面文件权限的说明。</li><li><code>cat index.txt</code>查看index.txt文件中的内容</li><li><code>sudo</code>提升当面指令操作权限</li><li><code>rm [选项] 文件名</code>：如<code>sudo rm -rf file</code></li></ol><p>rm的选项参数：<br> -f，--force，强制删除，不需要确认<br> -i，每删除一个文件或进入一个子目录都要求确认<br> -l，在删除超过三个文件或者递归删除前要求确认<br> -r，-R递归删除子目录<br> -d，--dir 删除空目录<br> -v，-verbose 显示删除结果</p><ol start="20"><li><code>mv 原文件名 新文件名</code>重命名文件</li><li><code>mv nginx /usr/local/</code>将nginx文件移动到<code>ur/local</code>路径下</li><li><code>ps -ef | grep nginx</code>查找有关nginx的进程</li><li><code>kill -9 进程号</code>杀死指定进程</li><li><code>netstat -ntlp |grep 80</code> 查询端口进程，，如没有提示则：<code>yum install net-tools</code>，<code>kill 20246</code></li></ol><h3 id="解压命令tar" tabindex="-1"><a class="header-anchor" href="#解压命令tar" aria-hidden="true">#</a> 解压命令tar</h3><ol><li><code>-c</code>压缩。</li><li><code>-x</code>解压。</li><li><code>-t</code>：查看内容</li><li><code>-r</code>：向压缩归纳文件末尾追加文件</li><li><code>-u</code>：更新原压缩包中的文件</li><li><code>-z</code>：有gzip属性的</li><li><code>-j</code>：有bz2属性的</li><li><code>-Z</code>：有compress属性的</li><li><code>-v</code>：显示所有过程</li><li><code>-O</code>：将文件解开到标准输出</li><li><code>-f</code>：使用档案名字，这个参数是最后一个参数，后面只能接档案名</li></ol><p>使用示例：</p><ol><li>tar -cf all.tar tar *.jpg——将所有.jpg文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。</li><li>tar -rf all.tar *.gif——将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。</li><li>tar -uf all.tar logo.gif——更新原来tar包all.tar中的logo.gif文件，-u表示更新文件的意思。</li><li>tar -tf all.tar——列出all.tar包中所有的文件，-t是列出文件的意思。</li><li>tar -xf all.tar——接出all.tar包中所有的文件，-x是解开的意思。</li></ol><p>压缩：</p><ol><li>tar -cvf jpg.tar *.jpg ——将目录所有jpg文件打包成tar.jpg。</li><li>tar -czf jpg.tar.gz *.jpg ——将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz</li><li>tar -cjf jpg.tar.bz2 *.jpg —— 将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip压缩过的包，命名为jpg.tar.bz2</li><li>tar -cZf jpg.tar.Z *.jpg——将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z</li><li>rar a jpg.rar *.jpg——rar格式的压缩，需要先下载rar for Linux</li><li>zip jpg.zip *.jpg——zip格式的压缩，需要先下载zip for Linux</li></ol><p>解压：</p><ol><li>tar -xvf file.tar——解压tar包</li><li>tar -xzvf file.tar.gz ——解压tar.gz</li><li>tar -xjvf file.tar.bz2——解压tar.bz2</li><li>tar -xZvf file.tar.Z——解压tar.Z</li><li>unrar e file.rar——解压rar</li><li>unzip file.zip——解压zip</li></ol><p>解压node压缩包：<code>tar -xvf node-v14.19.1-linux-x64.tar.xz</code></p><h2 id="linux文件属性" tabindex="-1"><a class="header-anchor" href="#linux文件属性" aria-hidden="true">#</a> Linux文件属性</h2><p><code>ls -l</code>打印出文件和文件信息</p><ol><li><code>-</code>开头代表文件的意思，如<code>index.txt</code>文件</li><li><code>d</code>开头代表的是文件夹的意思</li><li><code>l</code>开头代表超级链接的意思，指向后面的路径,通俗讲就是快捷方式的意思</li><li><code>b</code>开头代表U盘的意思</li><li><code>c</code>开头代表鼠标键盘等硬件</li></ol><p><strong>文件属性解读：</strong><br> 如某文件是：<code>-rw-r--r--</code>，以每三个为一组，那拆分出来的就是：<code>rw-</code>、<code>r--</code>、<code>r--</code><br> 第一组代表的意思是：该文件创建者的所属权限。<br> 第二组代表的意思是：该文件所在用户组的权限。<br> 第三组代表的意思是：该文件所在其它用户权限。</p><p><code>r</code>代表的是可读<br><code>w</code>代表的是可写<br><code>x</code>代表的是可执行<br> 如果不可执行就不会显示x</p><figure><img src="'+n+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>第二行的数量 代表你有多少文件 和目录里面有多少文件</p><figure><img src="'+p+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>第三行表示<br> 创建该文件用户的名字 第二个是改文件所属用户组的名字<br> 第一个就是用户名 第二个就是组名</p><p><img src="'+f+'" alt="image.png" loading="lazy"><br> 第四行表示改文件和文件夹所属的体积</p><figure><img src="'+g+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p>第五行表示 创建该文件的日期</p><p><img src="'+m+'" alt="image.png" loading="lazy"><br> 第六行代表的就是文件或者文件夹等一系列的名称</p><h1 id="linux文件权限" tabindex="-1"><a class="header-anchor" href="#linux文件权限" aria-hidden="true">#</a> Linux文件权限</h1><p>若此时创建一个文件<code>chmod 777 index.txt</code>，那么此时index.txt文件所有用户都是读读写的。<br> 777的涵义是什么？由上面我们知道，r代表可读，w代表可写，x代表可执行，其中r又可以用4代替，w可以用2代表，1代表的可执行。也就是说，4+2+1=7，就是可读可写可执行。3个7代表了归属，其它用户和群组<br><img src="'+x+'" alt="image.png" loading="lazy"></p><h2 id="linux防火墙" tabindex="-1"><a class="header-anchor" href="#linux防火墙" aria-hidden="true">#</a> Linux防火墙</h2><h3 id="_1、firewalld的基本使用" tabindex="-1"><a class="header-anchor" href="#_1、firewalld的基本使用" aria-hidden="true">#</a> 1、firewalld的基本使用</h3><ul><li>systemctl start firewalld——启动防火墙</li><li>systemctl status firewalld——查看防火墙状态</li><li>systemctl stop firewalld——关闭防火墙</li><li>systemctl disable firewalld——禁用防火墙</li></ul><h3 id="_2、systemctl基本使用" tabindex="-1"><a class="header-anchor" href="#_2、systemctl基本使用" aria-hidden="true">#</a> 2、systemctl基本使用</h3><ul><li>启动一个服务：systemctl start firewalld.service</li><li>关闭一个服务：systemctl stop firewalld.service</li><li>重启一个服务：systemctl restart firewalld.service</li><li>显示一个服务的状态：systemctl status firewalld.service</li><li>在开机时启用一个服务：systemctl enable firewalld.service</li><li>在开机时禁用一个服务：systemctl disable firewalld.service</li><li>查看服务是否开机启动：systemctl is-enabled firewalld.service</li><li>查看已启动的服务列表：systemctl list-unit-files|grep enabled</li><li>查看启动失败的服务列表：systemctl --failed</li></ul><h3 id="_3、firewalld-cmd基本命令" tabindex="-1"><a class="header-anchor" href="#_3、firewalld-cmd基本命令" aria-hidden="true">#</a> 3、firewalld-cmd基本命令</h3><ul><li>查看版本： firewall-cmd --version</li><li>查看帮助： firewall-cmd --help</li><li>显示状态： firewall-cmd --state</li><li>查看所有打开的端口： firewall-cmd --zone=public --list-ports</li><li>更新防火墙规则： firewall-cmd --reload</li><li>查看区域信息: firewall-cmd --get-active-zones</li><li>查看指定接口所属区域： firewall-cmd --get-zone-of-interface=eth0</li><li>拒绝所有包：firewall-cmd --panic-on</li><li>取消拒绝状态： firewall-cmd --panic-off</li><li>查看是否拒绝： firewall-cmd --query-panic</li><li>添加80端口：firewall-cmd --zone=public --add-port=80/tcp --permanent （--permanent永久生效，没有此参数重启后失效）</li><li>重新载入：firewall-cmd --reload</li><li>查看80端口：firewall-cmd --zone= public --query-port=80/tcp</li><li>删除80端口：firewall-cmd --zone= public --remove-port=80/tcp --permanent</li></ul><h2 id="下载openssh-选看" tabindex="-1"><a class="header-anchor" href="#下载openssh-选看" aria-hidden="true">#</a> 下载OpenSSH（选看）</h2>',37),b={href:"http://www.mls-software.com/opensshd.html",target:"_blank",rel:"noopener noreferrer"},w=e("br",null,null,-1),_=e("h2",{id:"连接服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#连接服务器","aria-hidden":"true"},"#"),l(" 连接服务器")],-1),z=e("p",null,[l("在终端输入以下命令后回车："),e("br"),e("code",null,"ssh 用户名@公网IP地址"),e("br"),l(" 如："),e("code",null,"ssh root@101.xx.xx.xx")],-1),j=e("p",null,[l("回车后就会提示你输入连接密码，输入密码后继续回车，若显示"),e("code",null,"[用户名@xxxx]"),l("则证明连接成功。")],-1);function v(y,k){const i=r("ExternalLinkIcon");return c(),d("div",null,[o(" more "),u,e("p",null,[l("windows下需要下载工具："),e("a",b,[l("OpenSSH"),t(i)]),l("。"),w,l(" mac电脑自带，无需下载。")]),_,z,j])}const I=a(h,[["render",v],["__file","centos-Introduction.html.vue"]]);export{I as default};
