import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,e as p,w as l,b as n,d as s}from"./app-af427ef1.js";const u={},i=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" oss "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'{"bus_key":"2023/06/08/6657c455911f402dab9d5e778fcbb95c"'),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"formatOss"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"oss"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" format "),n("span",{class:"token operator"},"="),s(" oss"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substr"),n("span",{class:"token punctuation"},"("),s("oss"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" oss"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"}"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\\\"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"g")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("oss"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"&&"),s(" oss"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"}"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"&&"),s(" format"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"endsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`'""'`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" format"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" format"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},`'传入格式错误，不包括符号 "{" 或 "}"'`),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"formatOss"),n("span",{class:"token punctuation"},"("),s("oss"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function k(r,d){const a=e("CodeDemo");return o(),c("div",null,[p(a,{id:"code-demo-0",type:"normal",title:"%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81",code:"eJx9ULtOwzAU/ZWLhyYRbV40faEOjEwdWSzRPJw2YBwUOxKo6lgJiaIuCImtC0yVOsKQz2kKTPwCTkMRIITlwbrn+rxG6ISjDvJjxgXEnEMX+iOMvJQfn5JLjDoY2aa9Z5gNw2wZjYbT9OuO07assG7ageu1A4c0m63Q97y242PU38cMszBlvohiBmGcnLmix7kquTUYYQZQapWIlJOAzlOPi6TY0SMWkIteqGIkbWjVDUxdLg6/5mM5h12wND0h59T1yQGlqoHlMQZVwEjCGxMAUQh/cMJOtws1CyqVf8i/LZVOdcICfhSJoaoUEor2mQYgISJNtlG3UczqdkAJG4gh1MAubAGMgVBOfn1WVtk8nzys51mezd5u71+Xy/dsunq+yaeT9fXiZfGYz55kNukf1ld38iWNKhs6zOTFrGg1pkSn8UD92XrZBhp/AIEWqks="},{default:l(()=>[i]),_:1})])}const g=t(u,[["render",k],["__file","replace-slash.html.vue"]]);export{g as default};
