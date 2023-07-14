import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as k,a as d,b as n,d as s,e as a,w as o,f as l}from"./app-af427ef1.js";const m={},b=n("p",null,"React组件分为Class组件和函数式组件的，Class组件本身就有生命周期钩子函数的，而函数式组件本身式没有生命周期钩子函数，但函数式组件配合Hook，使得其可以使用生命周期钩子函数。",-1),v=n("h2",{id:"class组件生命周期钩子函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#class组件生命周期钩子函数","aria-hidden":"true"},"#"),s(" Class组件生命周期钩子函数")],-1),g={href:"https://blog.csdn.net/M0li0809/article/details/104482154/",target:"_blank",rel:"noopener noreferrer"},h=l('<p>生命周期钩子函数：</p><ol><li><code>componentWillMount</code>：在组件渲染之前执行</li><li><code>componentDidMount</code>：在组件渲染之后执行</li><li><code>shouldComponentUpdate</code>：返回true代表允许改变，返回false代表不允许改变。</li></ol><p>仅当shouldComponentUpdate返回true时执行：</p><ul><li><code>componentWillUpdate</code>：数据更新之前执行，(state,props)</li><li><code>componentDidUpdate</code>：数据更新之前执行，(state,props)</li></ul><ol start="4"><li><code>componentWillReveiceProps</code>：props发生改变执行</li><li><code>componentWillUnmount</code>：组件卸载前执行</li></ol>',5),_={href:"https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html",target:"_blank",rel:"noopener noreferrer"},f=l("<ol><li>componentWillMount</li><li>componentWillUpdate</li><li>componentWillReceiveProps</li></ol><p>但是加上<code>UNSAFE_</code>前缀后，控制台就不会再抛出警告。如：<code>UNSAFE_componentWillMount</code>、<code>UNSAFE_componentWillUpdate</code>、<code>UNSAFE_componentWillReceiveProps</code></p>",2),y={class:"hint-container details"},w=n("summary",null,"查看示例代码",-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(" ChildClass "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"./components/Child-class"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"App"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},[s("React"),n("span",{class:"token punctuation"},"."),s("Component")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  state `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"isShow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"courses"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"Web"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Java"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Python"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"componentDidMount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"父组件渲染已完成"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"shouldComponentUpdate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"判断父组件数据是否可以更新"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true可以更新 false不可更新"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"UNSAFE_componentWillUpdate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"父组件数据更新前"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"componentDidUpdate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"父组件数据更新完成"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"componentWillUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"父组件组件卸载前执行"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"UNSAFE_componentWillReceiveProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"父组件props发生改变"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("h2"),n("span",{class:"token operator"},">"),s("父组件"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("h2"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("button onClick"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"courses"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"前端"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"后端"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"运维"'),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("更新数据"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("button onClick"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"isShow"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("state"),n("span",{class:"token punctuation"},"."),s("isShow "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s("控制子组件是否显示"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("state"),n("span",{class:"token punctuation"},"."),s("isShow "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token operator"},"<"),s("ChildClass course"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("state"),n("span",{class:"token punctuation"},"."),s("courses"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ChildClass"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" React "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"react"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Child1ClassDemo"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},[s("React"),n("span",{class:"token punctuation"},"."),s("Component")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"componentDidMount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"子组件渲染已完成"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"shouldComponentUpdate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"判断子组件数据是否可以更新"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// true可以更新 false不可更新"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"UNSAFE_componentWillUpdate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"子组件数据更新前"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"componentDidUpdate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"子组件数据更新完成后"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"componentWillUnmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"子组件组件卸载前执行"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"UNSAFE_componentWillReceiveProps"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"子组件props发生改变"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"render"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("h2"),n("span",{class:"token operator"},">"),s("子组件Hook组件"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("h2"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("ol"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("props"),n("span",{class:"token punctuation"},"."),s("course"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("element"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token operator"},"<"),s("li key"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("index"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("element"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ol"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=l('<p><strong>总结：</strong></p><p><code>constructor</code>在初始化时会调用</p><p><code>render</code>函数里面每次页面数据变化都会执行这个函数</p><p>**渲染顺序：**父组件渲染前 -&gt; 子组件渲染前-&gt; 子组件渲染完成 -&gt; 父组件渲染完成</p><p><strong>数据更新顺序：</strong></p><p>数据更新需要注意的点，数据每次变化都会执行<code>shouldComponentUpdate</code>来判断是否进行数据更新，返回<code>true</code>时会进行数据更新，返回<code>false</code>时不进行数据更新。</p><p>父子组件之间数据更新顺序(<code>shouldComponentUpdate</code>都返回<code>true</code>)：判断父组件数据是否可以更新 -&gt; 父组件数据更新前 -&gt; 子组件props发生改变 -&gt; 子组件判断数据是否可以更新 -&gt; 子组件数据更新前 -&gt; 子组件数据更新完成后 -&gt; 父组件数据更新完成后</p><p>父子组件之间数据更新顺序(父组件<code>shouldComponentUpdate</code>返回<code>false</code>，父组件<code>shouldComponentUpdate</code>返回<code>true</code>)：判断父组件数据是否可以更新 -&gt; 结束</p><p>父子组件之间数据更新顺序(父组件<code>shouldComponentUpdate</code>返回<code>true</code>，父组件<code>shouldComponentUpdate</code>返回<code>false</code>)：判断父组件数据是否可以更新 -&gt; 父组件数据更新前 -&gt; 子组件props发生改变 -&gt; 判断子组件数据是否可以更新 -&gt; 父组件数据更新完成</p><p><strong>卸载顺序：</strong></p><p>子组件卸载前 -&gt; 父组件卸载前</p><h2 id="函数式-hook钩子函数" tabindex="-1"><a class="header-anchor" href="#函数式-hook钩子函数" aria-hidden="true">#</a> 函数式 + Hook钩子函数</h2><p><strong>useState、useEffect、useRef、</strong></p>',13),x={href:"https://blog.csdn.net/weixin_45024453/article/details/129366825?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-129366825-blog-104482154.235%5Ev38%5Epc_relevant_sort_base2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-129366825-blog-104482154.235%5Ev38%5Epc_relevant_sort_base2&utm_relevant_index=3",target:"_blank",rel:"noopener noreferrer"},W={href:"https://zhuanlan.zhihu.com/p/496092335/",target:"_blank",rel:"noopener noreferrer"},S=n("details",{class:"hint-container details"},[n("summary",null,"查看示例代码")],-1);function A(N,R){const t=p("ExternalLinkIcon"),i=p("CodeTabs");return r(),k("div",null,[b,d(" more "),v,n("p",null,[n("a",g,[s("https://blog.csdn.net/M0li0809/article/details/104482154/"),a(t)])]),h,n("p",null,[s("react18不可使用的生命周期钩子函数("),n("a",_,[s("官网说明"),a(t)]),s(")：")]),f,n("details",y,[w,a(i,{id:"81",data:[{id:"父组件"},{id:"子组件"}],"tab-id":"shell"},{title0:o(({value:e,isActive:c})=>[s("父组件")]),title1:o(({value:e,isActive:c})=>[s("子组件")]),tab0:o(({value:e,isActive:c})=>[C]),tab1:o(({value:e,isActive:c})=>[U]),_:1})]),E,n("p",null,[n("a",x,[s("https://blog.csdn.net/weixin_45024453/article/details/129366825?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2~default~YuanLiJiHua~Position-2-129366825-blog-104482154.235^v38^pc_relevant_sort_base2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~YuanLiJiHua~Position-2-129366825-blog-104482154.235^v38^pc_relevant_sort_base2&utm_relevant_index=3"),a(t)])]),n("p",null,[n("a",W,[s("https://zhuanlan.zhihu.com/p/496092335/"),a(t)])]),S])}const M=u(m,[["render",A],["__file","life-cycle.html.vue"]]);export{M as default};