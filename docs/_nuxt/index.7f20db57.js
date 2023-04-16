import{_ as x}from"./nuxt-link.76ef7bf6.js";import{a as f,o as l,b as g,r as M,e as _,u as w,c as C,w as o,f as e,t as y,h as S,i as t,j as n,k as $,l as A,F as R}from"./entry.b5561eca.js";import{_ as b}from"./_plugin-vue_export-helper.c27b6911.js";const h={__name:"BlurField",props:{blurLevel:{type:String,default:"md"},additionalClasses:{type:String,required:!1,default:""}},setup(a){const r=a,c=f(()=>"bg-clip-padding backdrop-filter backdrop-blur-"+r.blurLevel+" bg-opacity-0 p-4 flex-grow max-w-screen-md mx-10 "+r.additionalClasses);return(s,d)=>(l(),g("div",{class:_(w(c))},[M(s.$slots,"default")],2))}},T=["src"],N={class:"flex flex-col justify-start p-4 leading-normal"},E={class:"mb-2 text-2xl font-bold tracking-tight text-nord-night-0 dark:text-nord-snow-2"},L={class:"mb-3 font-normal text-nord-night-2 dark:text-nord-snow-0"},i={__name:"CardWithPhoto",props:{imgSrc:{type:String,default:"/5ei74R0.io/images/ruin-cities2.png"},title:{type:String,default:"XXX"},description:{type:String,default:"XXX"},linkAddress:{type:String,default:"#"}},setup(a){const r=a;return(c,s)=>{const d=x;return l(),C(d,{to:a.linkAddress,class:"flex flex-col md:flex-row bg-nord-snow-2 border border-nord-snow-0 dark:border-nord-night-2 rounded-lg shadow md:max-w-xl hover:bg-nord-snow-1 dark:bg-nord-night-0 dark:hover:bg-nord-night-1"},{default:o(()=>[e("img",{class:"object-cover w-full h-48 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",src:`${r.imgSrc}`,alt:""},null,8,T),e("div",N,[e("h5",E,y(r.title),1),e("p",L,y(r.description),1)])]),_:1},8,["to"])}}},v={__name:"FixedBackGroundSection",props:{bgImageString:{type:String,required:!1,default:"bg-[url('/images/snowy-mountains2_x2.png')] "},additionalClasses:{type:String,required:!1,default:""}},setup(a){const r=a,c=f(()=>"bg-fixed bg-cover bg-nord-snow-2 dark:bg-nord-night-3 bg-blend-multiply "+r.bgImageString+" "+r.additionalClasses);return(s,d)=>(l(),g("div",{class:_(w(c))},[M(s.$slots,"default")],2))}};const B=S('<g stroke-linecap="round"><g transform="translate(35.57230389564461 7.556960965632641) rotate(182.48453873365986 73.36898854746755 34.06429176916072)"><path d="M-0.6 -1.19 C-2.92 10.06, -43.04 66.09, -14.37 68.08 C14.29 70.07, 140.78 20.33, 171.39 10.75 M1.29 0.8 C-0.61 12.14, -40.42 67.42, -12.1 69.27 C16.22 71.12, 141.02 21.54, 171.22 11.91" stroke="currentColor" stroke-width="1" fill="none"></path></g><g transform="translate(35.57230389564461 7.556960965632641) rotate(182.48453873365986 73.36898854746755 34.06429176916072)"><path d="M-4.29 27.37 C-3.09 22.78, -2.07 11.47, -1.34 -0.02 M-2.38 28.51 C-2.71 20.3, -2.16 14.63, 0.08 -1.54" stroke="currentColor" stroke-width="1" fill="none"></path></g><g transform="translate(35.57230389564461 7.556960965632641) rotate(182.48453873365986 73.36898854746755 34.06429176916072)"><path d="M-23.14 19.27 C-16.96 16.9, -10.99 7.72, -1.34 -0.02 M-21.23 20.41 C-16.75 14.19, -11.45 10.57, 0.08 -1.54" stroke="currentColor" stroke-width="1" fill="none"></path></g></g><mask></mask><g transform="translate(47.38319692351888 25.991071175711795) rotate(0 70.70396423339844 22.5)"><text x="0" y="0" font-family="Virgil" font-size="36px" fill="currentColor" text-anchor="start" style="white-space:pre;" direction="ltr" dominant-baseline="text-before-edge">5ei74R0</text></g><g stroke-linecap="round"><g transform="translate(46.186896096510964 22.756644401042763) rotate(0 82.22277166743675 31.301920551046408)"><path d="M-0.11 -1.11 C-1.79 9.53, -41.53 62.23, -10.4 63.68 C20.74 65.14, 153.71 16.81, 186.72 7.62 M-1.63 0.92 C-2.93 11.21, -39.47 60.51, -8.26 61.79 C22.95 63.08, 152.91 17.31, 185.64 8.65" stroke="currentColor" stroke-width="2" fill="none"></path></g><g transform="translate(46.186896096510964 22.756644401042763) rotate(0 82.22277166743675 31.301920551046408)"><path d="M-3.52 27.03 C-0.45 19.57, -1.68 12.9, 0.46 -0.44 M-1.76 29.39 C-1.71 18.34, -0.44 7.27, -0.57 -1.98" stroke="currentColor" stroke-width="2" fill="none"></path></g><g transform="translate(46.186896096510964 22.756644401042763) rotate(0 82.22277166743675 31.301920551046408)"><path d="M-22.41 19.02 C-14.14 13.79, -10.15 9.33, 0.46 -0.44 M-20.65 21.38 C-13.82 13.01, -5.83 4.79, -0.57 -1.98" stroke="currentColor" stroke-width="2" fill="none"></path></g></g><mask></mask>',5),D=[B],I={__name:"Logo",props:{color:{type:String,required:!1,default:"text-nord-night-2"},colorDark:{type:String,required:!1,default:"text-nord-snow-2"},additionalClasses:{type:String,required:!1,default:""}},setup(a){const r=a,c=f(()=>r.color+" dark:"+r.colorDark+" "+r.additionalClasses);return(s,d)=>(l(),g("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 242.90549268128086 96.47108798852423",class:_(w(c))},D,2))}},H={},O={class:"bg-nord-snow-2 dark:bg-nord-night-0 rounded-lg shadow m-4"},j={class:"w-full max-w-screen-xl mx-auto p-4 md:py-8"},K={class:"sm:flex sm:items-center sm:justify-between"},Y={class:"flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"},z=e("hr",{class:"my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),P={class:"block text-sm text-gray-500 sm:text-center dark:text-gray-400"},q={class:"block text-sm text-gray-500 sm:text-center dark:text-gray-400"};function U(a,r){const c=I,s=x;return l(),g("footer",O,[e("div",j,[e("div",K,[t(s,{to:"#about",class:"flex items-center mb-4 sm:mb-0"},{default:o(()=>[t(c,{class:"h-16"})]),_:1}),e("ul",Y,[e("li",null,[t(s,{to:"#projects",class:"mr-4 hover:underline md:mr-6"},{default:o(()=>[n("Projects")]),_:1})]),e("li",null,[t(s,{to:"#blog-posts",class:"mr-4 hover:underline md:mr-6"},{default:o(()=>[n("Blog Posts")]),_:1})]),e("li",null,[t(s,{to:"#work-experience",class:"mr-4 hover:underline md:mr-6"},{default:o(()=>[n("Work Experience")]),_:1})]),e("li",null,[t(s,{to:"#publications-awards",class:"mr-4 hover:underline md:mr-6"},{default:o(()=>[n("Publications/Awards")]),_:1})]),e("li",null,[t(s,{to:"#miscellaneous",class:"hover:underline"},{default:o(()=>[n("Misc.")]),_:1})])])]),z,e("span",P,[n(" © 2023 "),t(s,{to:"https://github.com/5ei74R0",target:"_blank",class:"hover:underline"},{default:o(()=>[n("5ei74R0")]),_:1}),n(". All Rights Reserved.")]),e("span",q,[n(" Many thx for "),t(s,{to:"https://nuxt.com/",target:"_blank",class:"hover:underline"},{default:o(()=>[n("Nuxt.js")]),_:1}),n(", "),t(s,{to:"https://tailwindcss.com/",target:"_blank",class:"hover:underline"},{default:o(()=>[n("Tailwind CSS")]),_:1}),n(", and "),t(s,{to:"https://flowbite.com/",target:"_blank",class:"hover:underline"},{default:o(()=>[n("Flowbite")]),_:1}),n(". ")])])])}const G=b(H,[["render",U]]),X={},J={class:"my-16 w-11/12 max-w-screen-md dark:bg-nord-night-1 bg-nord-snow-2 dark:border-nord-night-2 border border-nord-snow-1 rounded-lg shadow"},V=S('<div class="flex flex-col items-center pb-10"><img class="w-32 h-32 my-8 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/56509932?v=4" alt=""><h5 class="mb-1 text-2xl font-medium text-nord-night-0 dark:text-nord-snow-2">Seitaro OTSUKI</h5><span class="text-sm text-nord-night-3 dark:text-nord-snow-0">Student</span><div class="flex flex-grow flex-col mt-4 space-x-3 md:mt-6"><p class="mx-auto w-5/6 mb-3 font-normal text-left text-nord-night-0 dark:text-nord-snow-2"> Hey there! I&#39;m a student who&#39;s super interested in machine learning and algorithm &amp; data structure. My research area is AI/ML (specifically Vision-and-Language, Intelligent Robotics). I love doing surveys and keeping abreast of the latest news, for it fuels my curiosity and nourishes my intellectual appetite! </p></div></div>',1),W=[V];function F(a,r){return l(),g("div",J,W)}const Z=b(X,[["render",F]]),Q={computed:{dark(){return this.$colorMode.preference==="dark"}},methods:{toggleColorMode(){this.$colorMode.preference==="dark"?this.$colorMode.preference="light":this.$colorMode.preference="dark"}}},tt={key:0,id:"theme-toggle-dark-icon",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},et=e("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},null,-1),ot=[et],nt={key:1,id:"theme-toggle-light-icon",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},rt=e("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"},null,-1),st=[rt];function at(a,r,c,s,d,m){return l(),g("button",{id:"theme-toggle",type:"button",onClick:r[0]||(r[0]=(...k)=>m.toggleColorMode&&m.toggleColorMode(...k)),class:"text-nord-night-0 dark:text-nord-snow-2 hover:bg-nord-snow-0 dark:hover:bg-nord-night-2 rounded-lg text-sm p-1"},[m.dark?(l(),g("svg",tt,ot)):(l(),g("svg",nt,st))])}const it=b(Q,[["render",at]]),dt={},lt={type:"button",class:"flex mr-3 text-sm bg-transparent rounded-full md:mr-0 focus:ring-4 focus:ring-nord-snow-0 dark:focus:ring-nord-night-3",id:"user-menu-button","aria-expanded":"false","data-dropdown-toggle":"user-dropdown","data-dropdown-placement":"bottom"},ct=e("span",{class:"sr-only"},"open menu",-1),gt=e("img",{class:"w-8 h-8 rounded-full",src:"https://avatars.githubusercontent.com/u/56509932?v=4",alt:"github avatar"},null,-1),mt=[ct,gt];function ut(a,r){return l(),g("button",lt,mt)}const ht=b(dt,[["render",ut]]),pt={class:"bg-nord-snow-2 dark:bg-nord-night-0 fixed w-full z-20 top-0 left-0 border-b border-nord-snow-1 dark:border-nord-night-1"},xt={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},bt={class:"flex items-center md:order-2"},ft=e("div",{class:"w-4"},null,-1),_t={class:"z-50 hidden my-4 text-base list-none bg-nord-snow-2 divide-y divide-nord-snow-2 rounded-lg shadow dark:bg-nord-night-0 dark:divide-nord-night-1",id:"user-dropdown"},wt=S('<div class="px-4 py-3"><span class="block text-base text-nord-night-0 dark:text-nord-snow-2">Seitaro OTSUKI</span><span style="font-family:JetBrains Mono;" class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">s = [cx for cx in &quot;es8usto&quot;] </span><span style="font-family:JetBrains Mono;" class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">t = &quot;i14&quot; + chr(64) </span><span style="font-family:JetBrains Mono;" class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">u = [ch for ch in &quot;pj.oiek&quot;] </span><span style="font-family:JetBrains Mono;" class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">f = lambda x: &quot;&quot;.join(x[::-1]) </span><span style="font-family:JetBrains Mono;" class="block overflow-x-clip text-xs font-extralight text-nord-night-2 truncate dark:text-nord-snow-0">contact = f(s) + t + f(u) </span></div>',1),kt={class:"py-2","aria-labelledby":"user-menu-button"},vt=e("button",{"data-collapse-toggle":"mobile-menu-2",type:"button",class:"inline-flex items-center p-2 ml-1 text-sm text-nord-night-1 rounded-lg md:hidden hover:bg-nord-snow-1 focus:outline-none focus:ring-2 focus:ring-nord-snow-1 dark:text-nord-snow-1 dark:hover:bg-nord-night-1 dark:focus:ring-nord-night-1","aria-controls":"mobile-menu-2","aria-expanded":"false"},[e("span",{class:"sr-only"},"Open main menu"),e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})])],-1),yt={class:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"mobile-menu-2"},St={class:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-nord-snow-2 rounded-lg bg-nord-snow-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-nord-snow-2 dark:bg-nord-night-3 md:dark:bg-nord-night-0 dark:border-nord-night-0"},It={__name:"NavBar",setup(a){return $(()=>{A()}),(r,c)=>{const s=I,d=x,m=it,k=ht;return l(),g("nav",pt,[e("div",xt,[t(d,{to:"#about",class:"flex items-center"},{default:o(()=>[t(s,{class:"h-8"})]),_:1}),e("div",bt,[t(m),ft,t(k),e("div",_t,[wt,e("ul",kt,[e("li",null,[t(d,{to:"https://github.com/5ei74R0",class:"block px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2"},{default:o(()=>[n(" Jump to GitHub")]),_:1})]),e("li",null,[t(d,{to:"https://zenn.dev/5ei74r0",class:"block px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2"},{default:o(()=>[n(" Jump to Zenn (JP)")]),_:1})]),e("li",null,[t(d,{to:"https://smilab.org/en/",class:"block px-4 py-2 text-sm text-nord-night-0 hover:bg-nord-snow-1 dark:hover:bg-nord-night-1 dark:text-nord-snow-1 dark:hover:text-nord-snow-2"},{default:o(()=>[n(" Jump to Lab.")]),_:1})])])]),vt]),e("div",yt,[e("ul",St,[e("li",null,[t(d,{to:"#projects",class:"block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0"},{default:o(()=>[n(" Projects")]),_:1})]),e("li",null,[t(d,{to:"#blog-posts",class:"block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0"},{default:o(()=>[n(" Blog Posts")]),_:1})]),e("li",null,[t(d,{to:"#work-experience",class:"block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0"},{default:o(()=>[n(" Work Experience")]),_:1})]),e("li",null,[t(d,{to:"#publications-awards",class:"block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0"},{default:o(()=>[n(" Publications")]),_:1})]),e("li",null,[t(d,{to:"#miscellaneous",class:"block py-2 pl-3 pr-4 text-nord-night-0 rounded hover:bg-nord-snow-1 md:hover:bg-transparent md:focus:text-nord-aurora-0 md:hover:text-nord-aurora-0 md:p-0 dark:text-nord-snow-2 md:dark:focus:text-nord-aurora-0 md:dark:hover:text-nord-aurora-0 dark:hover:bg-nord-night-1 dark:hover:text-nord-snow-2 md:dark:hover:bg-transparent dark:border-nord-night-0"},{default:o(()=>[n(" Misc.")]),_:1})])])])])])}}},Mt=e("hr",{class:"mt-2 mb-6 border-gray-300 sm:mx-auto dark:border-gray-700"},null,-1),p={__name:"SectionTitle2",props:{title:{type:String,required:!0},linkToItself:{type:String,required:!0,default:"#"},bgImageString:{type:String,required:!1,default:"bg-[url(/images/snowy-mountains2_x2.png)] "},additionalClasses:{type:String,required:!1,default:""}},setup(a){const r=a,c=f(()=>"mt-2 font-extrabold text-[#555] text-4xl text-opacity-60 bg-clip-text bg-fixed bg-cover "+r.bgImageString+r.additionalClasses);return(s,d)=>{const m=x;return l(),g(R,null,[e("h1",{style:{"font-family":"JetBrains Mono",filter:"invert()"},class:_(w(c))},[t(m,{to:a.linkToItself},{default:o(()=>[n(y(a.title),1)]),_:1},8,["to"])],2),Mt],64)}}},Ct=["id"],u={__name:"SmartAnchor",props:{anchorId:String},setup(a){return(r,c)=>(l(),g("div",{id:a.anchorId,style:{display:"block","padding-top":"64px","margin-top":"-64px"}},null,8,Ct))}},$t={},At={class:"h-16"};function Rt(a,r){return l(),g("div",At)}const Tt=b($t,[["render",Rt]]),Nt={class:"flex flex-grow flex-col min-h-screen min-w-full bg-fixed bg-cover bg-[url('/images/snowy-mountains2_x2.png')] bg-nord-snow-2 dark:bg-nord-night-2 bg-blend-multiply scrollbar::-webkit-scrollbar-thumb"},Et={class:"mx-auto self-center items-center flex flex-grow flex-col min-h-screen w-full max-w-screen-xl"},Lt={class:"min-h-screen w-2/3 flex flex-row items-center"},Bt={class:"mx-auto self-center items-start flex flex-grow flex-col min-h-screen w-full max-w-screen-xl"},Dt={class:"block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0"},Ht={class:"mx-auto self-center items-end flex flex-grow flex-col min-h-screen w-full max-w-screen-xl"},Ot={class:"flex flex-col"},jt={class:"block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0"},Kt={class:"mx-auto self-center items-start flex flex-grow flex-col min-h-screen w-full max-w-screen-xl"},Yt={class:"mx-auto self-center items-end flex flex-grow flex-col min-h-screen w-full max-w-screen-xl"},zt=e("h4",{class:"text-2xl text-nord-snow-2 dark:text-nord-snow-0 text-right"},"International Conferences",-1),Pt=e("h4",{class:"text-2xl text-nord-snow-2 dark:text-nord-snow-0 text-right"},"Awards",-1),qt=e("h4",{class:"text-2xl text-nord-snow-2 dark:text-nord-snow-0 text-right"},"Domestic Conferences",-1),Ut={class:"block my-2 mx-auto w-3/4 p-2 rounded-md bg-opacity-40 dark:bg-opacity-20 bg-nord-snow-2 text-2xl text-center text-nord-night-3 dark:text-nord-snow-0 hover:bg-opacity-60 dark:hover:bg-opacity-60 hover:text-nord-night-0 dark:hover:text-nord-night-0"},Gt={class:"mx-auto self-center flex flex-grow flex-col w-full max-w-screen-xl"},Xt=e("h4",{class:"text-2xl text-nord-snow-2 dark:text-nord-snow-0"},"Also, Check followings👇",-1),Ft={__name:"index",setup(a){return(r,c)=>{const s=x;return l(),g("div",Nt,[t(It),t(Tt),e("div",Et,[t(u,{id:"about"}),e("div",Lt,[t(I,{color:"text-nord-snow-0","color-dark":"text-nord-snow-0","additional-classes":"text-opacity-90 dark:text-opacity-50"})]),t(Z)]),t(v,{"bg-image-string":"bg-[url('/images/ruin-cities2.png')]"},{default:o(()=>[e("div",Bt,[t(u,{id:"projects"}),t(h,{"blur-level":"xs",class:"bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3"},{default:o(()=>[t(p,{title:"Projects","link-to-itself":"#projects","bg-image-string":"bg-[url('/images/ruin-cities2.png')]"}),t(i,{"img-src":"../5ei74R0.io/images/anonymask-demo3.png",title:"Anonymask",description:"Anonymask detects any logos and naturally inpaints them. It is a toy product built in a coursework and uses YOLOv5 as a logo detector, MAE as an inpainter, and SwinIR for super resolution. Banish any logo from your sight! 👀","link-address":"https://github.com/5ei74R0/Anonymask/tree/main",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/server-room1.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/ruin-cities2.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4"}),e("button",Dt,[t(s,{to:"https://github.com/5ei74R0?tab=repositories"},{default:o(()=>[n("See more projects at GitHub")]),_:1})])]),_:1})])]),_:1}),e("div",Ht,[t(u,{id:"blog-posts"}),t(h,{blurLevel:"xl",class:"bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3"},{default:o(()=>[t(p,{title:"Blog Posts","link-to-itself":"#blog-posts","bg-image-string":"bg-[url('/images/snowy-mountains2_x2.png')]","additional-classes":" text-right"}),e("div",Ot,[t(i,{"img-src":"https://raw.githubusercontent.com/zellij-org/zellij/main/assets/demo.gif",title:"Zellij: The Rust-Based Terminal Multiplexer Perfect for Beginners (JP)",description:"I hope to make Zellij (I wonder if anyone can read ZELLIJ correctly on their first try) more widely known; how about you become a Zellij user too?",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/ruin-cities2.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4 content-end"}),t(i,{"img-src":"../5ei74R0.io/images/snowy-mountain_x2.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4"}),e("button",jt,[t(s,{to:"https://zenn.dev/5ei74r0"},{default:o(()=>[n("Read more posts at Zenn")]),_:1})])])]),_:1})]),t(v,{"bg-image-string":"bg-[url('/images/server-room1.png')]"},{default:o(()=>[e("div",Kt,[t(u,{id:"work-experience"}),t(h,{blurLevel:"xl",class:"bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3"},{default:o(()=>[t(p,{title:"Work Experience","link-to-itself":"#work-experience","bg-image-string":"bg-[url('/images/server-room1.png')]"}),t(i,{"img-src":"../5ei74R0.io/images/ruin-cities2.png",title:"SOFTWARE ENGINEERING INTERN | GHELIA INC. | AUGUST 2020 - JULY 2022",description:"Worked with the algorithm development team to solve a complex scheduling problem, then thought out and implemented a new approach. / Used my knowledge of algorithm, data structure, and time complexity to propose and implement a suitable algorithm. / Surveyed recent research papers in the field of machine learning. / Thought out a new idea to combine the Parallel Distributed Genetic Algorithm and the idea of the Minimal Generation Gap, then implemented it to improve Genetic Algorithm to solve N-Queens Problem, in the educational period.","link-address":"https://ghelia.com/",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/server-room1.png",title:"INTERNSHIP (AI/ML) | YOKOHAMA LAB., NISSAN MOTOR CO., LTD. | AUGUST 2021 - SEPTEMBER 2021",description:"Tackled the task related to video object detection; built a much more efficient model than the baseline approach: Achieved four or more times fewer parameters and competitive or higher accuracy.","link-address":"https://www.nissan-global.com/JP/INNOVATION/TECHNOLOGY/NRC/RESEARCH/HAMALAB/",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/ruin-cities2.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4"})]),_:1})])]),_:1}),t(v,{"bg-image-string":"bg-[url('/images/snowy-mountain_x2.png')]"},{default:o(()=>[e("div",Yt,[t(u,{id:"publications-awards"}),t(h,{blurLevel:"xl",class:"bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3"},{default:o(()=>[t(p,{title:"Publications / Awards","link-to-itself":"#publications-awards","bg-image-string":"bg-[url('/images/snowy-mountains2_x2.png')]","additional-classes":" text-right"}),zt,t(i,{"img-src":"../5ei74R0.io/images/ruin-cities2.png",title:"Shared Transformer Encoder with Mask-based 3D Model Estimation for Container Mass Estimation",description:"T. Matsubara, S.Otsuki, Y. Wada, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito, “Shared Transformer Encoder with Mask-based 3D Model Estimation for Container Mass Estimation,” in IEEE ICASSP, pp.9142-9146, 2022. (first three authors: equal contribution)","link-address":"https://ieeexplore.ieee.org/document/9747110",class:"mt-2 mb-4"}),Pt,t(i,{"img-src":"../5ei74R0.io/images/ruin-cities1.png",title:"Best performing solution for container capacity estimation and capacity and dimensions estimation and filling mass, The CORSMAL challenge 2022",description:"T. Matsubara, S.Otsuki, Y. Wada, H. Matsuo, T. Komatsu, Y. Iioka, K. Sugiura, H. Saito, Best performing solution for container capacity estimation and capacity and dimensions estimation and filling mass estimation, The CORSMAL challenge 2022, 23 June 2022.",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/snowy-rocky.png",title:"Honorable Mention Award, REVERIE Challenge @ CSIG 2022",description:"M. Kambara, Y. Yoshida, K. Kaneda, S. Otsuki, R. Korekata, H. Matsuo, Y. Wada, W. Yang, K. Sugiura, Honorable Mention Award, REVERIE Challenge @ CSIG 2022, 19 August 2022.",class:"mt-2 mb-4 content-end"}),qt,t(i,{"img-src":"../5ei74R0.io/images/ruin-cities2.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4"}),e("button",Ut,[t(s,{to:"https://smilab.org/en/publications/"},{default:o(()=>[n(" Previous and/or upcoming publications are listed here ")]),_:1})])]),_:1})])]),_:1}),e("div",Gt,[t(u,{id:"miscellaneous"}),t(h,{blurLevel:"xl",class:"m-4 self-center rounded-lg bg-opacity-20 dark:bg-opacity-10 bg-nord-snow-0 dark:bg-nord-night-3"},{default:o(()=>[t(p,{title:"Misc.","link-to-itself":"#miscellaneous","bg-image-string":"bg-[url('/images/snowy-mountains2_x2.png')]"}),Xt,t(i,{"img-src":"../5ei74R0.io/images/snowy-rocky2.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/ruin-cities2.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4 content-end"}),t(i,{"img-src":"../5ei74R0.io/images/server-room1.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4"}),t(i,{"img-src":"../5ei74R0.io/images/ruin-cities1.png",title:"THIS CARD IS A DUMMY! (NO LINK EXISTS)",description:"I mean, you know, this card (and the entire page) is under construction.",class:"mt-2 mb-4 content-end"})]),_:1}),t(G)])])}}};export{Ft as default};
