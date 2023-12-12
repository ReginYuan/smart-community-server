import{r as d,a as E,c as B,b as a,o as i,d as p,e as t,w as A,f as s,g as u,F as M,h as D,u as q,i as b,j as V,k as P,l as G,m as J,n as T,p as H,t as z,q as I}from"./index.84e92f8c.js";import{u as K}from"./utils.e43ef2c8.js";const O={class:"setting_panel"},Q=["onClick"],W=t("div",{class:"setting_panel_title"},"\u7CFB\u7EDF\u914D\u7F6E",-1),X={__name:"setting",emits:["saved"],setup(U,{emit:F}){const h=F;d(11),d(11),d(600),d(350);const r=d(""),n=E({}),y=E({});let l=B.getConfig();l.forEach(function(o,e,w){n[o.key]=o.value,y[o.key]=[{required:o.required,message:"\u8BF7\u8F93\u5165"+o.label,trigger:"blur"}]});const f=()=>{h("hideSetting",{})},m=()=>{},C=async o=>{!o||(l=B.defaultconfig,l.forEach(function(e,w,g){n[e.key]=e.value,y[e.key]=[{required:e.required,message:"\u8BF7\u8F93\u5165"+e.label,trigger:"blur"}]}))},S=async o=>{!o||await o.validate((e,w)=>{if(!e)return;let g=[];for(let x in n){let v=null;for(let c=0;c<l.length;c++)if(l[c].key==x){v=l[c];break}!v||(v.value=n[x],g.push(v))}K.saveConfig(g),h("saved",{})})};return(o,e)=>{const w=a("Close-bold"),g=a("el-icon"),x=a("el-input"),v=a("el-option"),c=a("el-select"),R=a("el-form-item"),N=a("el-button"),$=a("el-col"),j=a("el-row"),L=a("el-form");return i(),p("div",O,[t("div",{class:"setting_panel_maker",onClick:f},[t("div",{class:"inner_contaner",onClick:A(m,["stop"])},[s(g,{size:25,class:"settingPanelCloseBtn",onClick:f},{default:u(()=>[s(w,{size:25})]),_:1}),W,s(L,{ref_key:"settingFormRef",ref:r,model:n,"status-icon":"",rules:y,"label-width":"120px",class:"settingForm"},{default:u(()=>[(i(!0),p(M,null,D(q(l),(_,me)=>(i(),b(R,{label:_.label+":",prop:"item.type"},{default:u(()=>[_.type!="select"?(i(),b(x,{key:0,modelValue:n[_.key],"onUpdate:modelValue":k=>n[_.key]=k,placeholder:"\u8BF7\u8F93\u5165{{item.label}}",type:"item.type",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])):V("",!0),_.type=="select"?(i(),b(c,{key:1,style:{width:"100%"},modelValue:n[_.key],"onUpdate:modelValue":k=>n[_.key]=k,placeholder:"\u8BF7\u9009\u62E9{{item.label}}"},{default:u(()=>[(i(!0),p(M,null,D(_.options,(k,ve)=>(i(),b(v,{label:k.label,value:k.value},null,8,["label","value"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])):V("",!0)]),_:2},1032,["label"]))),256)),s(R,null,{default:u(()=>[s(j,{style:{width:"100%"}},{default:u(()=>[s($,{span:11},{default:u(()=>[s(N,{style:{width:"100%"},type:"primary",onClick:e[0]||(e[0]=_=>S(r.value))},{default:u(()=>[P(" \u4FDD\u5B58\u914D\u7F6E")]),_:1})]),_:1}),s($,{span:2}),s($,{span:11},{default:u(()=>[s(N,{style:{width:"100%"},onClick:e[1]||(e[1]=_=>C(r.value))},{default:u(()=>[P("\u6062\u590D\u9ED8\u8BA4 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])],8,Q)])])}}};const Y={class:"flex title top",style:{"z-index":"999999999"}},Z={style:{width:"30vw"},class:"flex"},ee={class:"time_div"},te={class:"time"},le=t("div",{class:"flex_auto flex-title"},"\u667A\u6167\u5C0F\u533A\u5E73\u53F0",-1),se={class:"flex_item flex"},ne={class:"menus flex_item flex",style:{width:"20vw"}},oe={class:"menus_div flex"},ae=["onClick"],ie={class:"flex flex_item",style:{width:"10vw"}},ce={class:"time_div flex_item flex"},ue={class:"tools flex flex_item",style:{}},re={class:"flex_item flex_item_left"},_e={class:"flex_item flex_item_left"},de=t("span",null,"\u9000\u51FA",-1),fe={__name:"menubar",emits:["showSettingDialog"],setup(U,{emit:F}){const h=E([]);let r=d("\u5168\u5C4F");const n=d(!1),y=()=>{if(n.value)document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen(),r.value="\u5168\u5C4F";else{var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(),r.value="\u6062\u590D"}n.value=!n.value},l=()=>{},f=G();J();const m=d("index"),C=e=>{f.push(e)};f.beforeResolve(async e=>{m.value=e.name});let S=d(new Date().format("yyyy\u5E74MM\u6708dd\u65E5 hh:mm:ss"));const o=setInterval(function(){S.value=new Date().format("yyyy\u5E74MM\u6708dd\u65E5 hh:mm:ss")},1e3);return T(()=>{}),H(()=>{o&&clearInterval(o)}),(e,w)=>{const g=a("full-screen"),x=a("el-icon"),v=a("switch-button");return i(),p("div",Y,[t("div",Z,[t("div",ee,[t("div",te,[t("span",null,z(q(S)),1)])])]),le,t("div",se,[t("div",ne,[t("div",oe,[(i(!0),p(M,null,D(h,c=>(i(),p("div",{class:"flex_item",key:c.sid},[c.isShow?(i(),p("div",{key:0,class:I(["menu_item",m.value,m.value==c.sid?"menu_item_selected":""]),onClick:R=>C(c.path)},[t("span",null,z(c.name),1)],10,ae)):V("",!0)]))),128))])]),t("div",ie,[t("div",ce,[t("div",ue,[t("div",re,[t("div",{class:"tool_item",onClick:y},[s(x,null,{default:u(()=>[s(g)]),_:1}),t("span",null,z(q(r)),1)])]),t("div",_e,[t("div",{class:"tool_item",onClick:l},[s(x,null,{default:u(()=>[s(v)]),_:1}),de])])])])])])])}}},ye={__name:"Home",setup(U){let F=B.getConfig(),h="dark";F.forEach((l,f,m)=>{l.key=="theme"&&(h=l.value),l.key=="turntime"&&l.value*1});const r=d(!1),n=l=>{r.value=!1},y=l=>{window.location.reload()};return T(()=>{}),H(()=>{}),(l,f)=>{const m=a("router-view");return i(),p("div",{class:I(["container",q(h)])},[s(fe,{onShowSettingDialog:f[0]||(f[0]=C=>r.value=!0)}),s(m),r.value?(i(),b(X,{key:0,onSaved:y,onHideSetting:n})):V("",!0)],2)}}};export{ye as default};