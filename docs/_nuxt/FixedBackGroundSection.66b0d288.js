import{h as a,o as d,a as c,b as s,i as r,u as t,r as g}from"./entry.fe598a3b.js";const u={class:"relative z-10"},m={__name:"FixedBackGroundSection",props:{bgImageString:{type:String,required:!1,default:"bg-[url('/images/bg-waterfall4.png')]"},additionalClasses:{type:String,required:!1,default:""}},setup(n){const e=n,l=a(()=>"relative "+e.additionalClasses),o=a(()=>`absolute inset-0 bg-cover bg-nord-snow-0 dark:bg-nord-night-0 bg-blend-overlay ${e.bgImageString}`);return(i,b)=>(d(),c("div",{class:r(t(l))},[s("div",{class:r(t(o)),"aria-hidden":"true"},null,2),s("div",u,[g(i.$slots,"default")])],2))}};export{m as _};
