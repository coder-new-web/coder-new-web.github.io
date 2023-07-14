import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,a as l,f as i}from"./app-af427ef1.js";const t="/assets/flutter-assembleDebug-c5f43f7e.png",o="/assets/flutter-path-97831239.png",c="/assets/flutter-pathfile-setting2-8a20f5ef.png",r="/assets/flutter-pathfile-setting1-a339295c.png",n="/assets/flutter-run-android-6c8162de.png",p="/assets/gradle-path-80d2d940.png",u="/assets/gradle-file-size-cb6fb26f.png",d="/assets/gradle-version-9e02ccb9.png",v={},m=i('<p>错误图：<br><img src="'+t+'" alt="" loading="lazy"><br> 你可以一直等，但是显然这是非常影响开发效率的，下面是解决方案：</p><p>首先找到fultter sdk所在文件夹的位置：依次进flutter\\packages\\flutter_tools\\gradle 文件夹，然后打开flutter.gradle文件，如下图：<br><img src="'+o+'" alt="" loading="lazy"></p><p>然后进行以下修改：</p><ol><li>60行左右进行第一次修改：<br><img src="'+c+`" alt="" loading="lazy"></li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>repositories <span class="token punctuation">{</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google&#39; </span>
    <span class="token punctuation">}</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google-plugin&#39; </span>
    <span class="token punctuation">}</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/public&#39; </span>
    <span class="token punctuation">}</span>
    maven<span class="token punctuation">{</span>
        allowInsecureProtocol = <span class="token boolean">true</span>
        url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/jcenter&#39;</span>
    <span class="token punctuation">}</span>
    google()
    mavenCentral()
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>87行左右进行第二次修改：<br><img src="`+r+`" alt="" loading="lazy"></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//原镜像
//private static final String DEFAULT_MAVEN_HOST = &quot;https://storage.googleapis.com&quot;;
//网上也有人说有这个，但是又说不可用了，所以最好用下面的清华同方或者腾讯云镜像
//private static final String DEFAULT_MAVEN_HOST = &quot;https://storage.flutter-io.cn&quot;;
//清华同方镜像
private static final String DEFAULT_MAVEN_HOST = &quot;https://mirrors.tuna.tsinghua.edu.cn/flutter&quot;;
//腾讯云镜像
//private static final String DEFAULT_MAVEN_HOST = &quot;https://mirrors.cloud.tencent.com/flutter&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>回到flutter项目文件中的android/build.gradle<br><img src="`+n+`" alt="" loading="lazy"><br> 修改此文件的两个地方，分别是<code>buildscript.repositories</code>和<code>allprojects.repositories</code>：</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>buildscript <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google-plugin&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/public&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/jcenter&#39;</span>
        <span class="token punctuation">}</span>
        google()
        mavenCentral()
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/google-plugin&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/public&#39;</span>
        <span class="token punctuation">}</span>
        maven<span class="token punctuation">{</span>
            allowInsecureProtocol = <span class="token boolean">true</span>
            url &#39;https<span class="token operator">:</span><span class="token comment">//maven.aliyun.com/repository/jcenter&#39;</span>
        <span class="token punctuation">}</span>
        google()
        mavenCentral()
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>再次在项目目录路径下终端运行<code>flutter run</code></li></ol><p>若上述步骤都试过无效，删除下面路径的两个文件，分别是<code>caches</code>和<code>wrapper/dists</code>：<br><img src="`+p+'" alt="" loading="lazy"></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>上面步骤修改完，无论是AS上运行，还是终端上输入<code>flutter run</code>命令，可能还是会觉得有点慢<code>Running Gradle task &#39;assembleDebug&#39;</code>，此时你可以看<code>wrapper/dists</code>文件下的文件大小是否在增长，若增长可观，就代码等待一会，一般大小会是400M左右，具体可看下图。</p></div><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有可能你的<code>wrapper/dists</code>下有多个文件，你知道看哪一个，可以在项目的android文件夹下要下载哪个文件：<br><img src="'+d+'" alt="" loading="lazy"></p><p>还可以可能会提示报错如<code>Could not get source at xxxx</code>和<code>xecution failed for task &#39;&#39;:app:checkDebugAarMetadata&#39;</code>，大致意思意思不能在阿里云获取资源啥的，但是跑一会就莫名奇妙没报错了。以上也是我最终成功跑起来的配置。</p><p>上面的方法都是笔者总结出来的，然后最终运行成功：</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17);function b(g,k){return a(),e("div",null,[l(" more "),m])}const y=s(v,[["render",b],["__file","flutter-assembleDebug.html.vue"]]);export{y as default};
