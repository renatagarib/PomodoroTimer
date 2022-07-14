(function(){"use strict";var e={302:function(e,t,o){var n=o(963),r=o(252);const a={id:"content"},i={id:"timer-container"},s={id:"timer"};function l(e,t,o,n,l,u){const c=(0,r.up)("SettingsWinVue"),m=(0,r.up)("NavigationBarVue"),d=(0,r.up)("PomodoroTimerVue");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(c),(0,r.Wm)(m),(0,r._)("div",i,[(0,r._)("div",s,[(0,r.Wm)(d)])])])}var u=o.p+"img/logo.0c7260fc.png",c=o.p+"img/settings.5863a3d1.png",m=o.p+"img/close.df2a7517.png",d=o.p+"img/expand.ae026e7f.png",v=o(262);const g=e=>((0,r.dD)("data-v-ff43583e"),e=e(),(0,r.Cn)(),e),p=g((()=>(0,r._)("div",{id:"logo"},[(0,r._)("img",{src:u,alt:"tomato"}),(0,r._)("div",{id:"tit"},[(0,r._)("h2",null,"POMODORO timer")])],-1))),f={id:"options"},_={class:"config"};var k={__name:"NavigationBar",setup(e){const t=(0,v.iH)(!1),o=()=>{const e=document.getElementById("settings-id");console.log("oi"),e.classList.toggle("active")},a=()=>{document.getElementById("app").requestFullscreen(),t.value=!0},i=()=>{document.exitFullscreen(),t.value=!1};return(e,s)=>((0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("nav",null,[p,(0,r._)("div",f,[(0,r._)("div",{class:"config"},[(0,r._)("img",{src:c,onClick:o,alt:"settings"})]),(0,r._)("div",_,[(0,r.wy)((0,r._)("img",{src:m,onClick:i,alt:"minimizise"},null,512),[[n.F8,t.value]]),(0,r.wy)((0,r._)("img",{src:d,onClick:a,alt:"maximizise"},null,512),[[n.F8,!t.value]])])])])]))}},h=o(744);const B=(0,h.Z)(k,[["__scopeId","data-v-ff43583e"]]);var y=B;const S=e=>((0,r.dD)("data-v-cfa4852e"),e=e(),(0,r.Cn)(),e),w={class:"switch"},b=S((()=>(0,r._)("input",{type:"checkbox"},null,-1))),I=S((()=>(0,r._)("span",{class:"slider round"},null,-1))),P=[b,I];function L(e,t){return(0,r.wg)(),(0,r.iD)("label",w,P)}const C={},T=(0,h.Z)(C,[["render",L],["__scopeId","data-v-cfa4852e"]]);var M=T,O=o(575);const D=(0,O.Q_)("settings",{state:()=>({pomodoro:{minutes:25,time:25,default:25},shortBreak:{minutes:5,time:5,default:5},longBreak:{minutes:15,time:15,default:15}}),getters:{getPomodoroMinutes(e){return e.pomodoro.minutes},getPomodoroDefault(e){return e.pomodoro.default},getShortBreakMinutes(e){return e.shortBreak.minutes},getShortBreakDefault(e){return e.shortBreak.default},getLongBreakMinutes(e){return e.longBreak.minutes},getLongBreakDefault(e){return e.longBreak.default}},actions:{setPomodoroMinutes(e){this.pomodoro.minutes=e},setShortBreakMinutes(e){this.shortBreak.minutes=e},setLongBreakMinutes(e){this.longBreak.minutes=e},setPomodoroTime(e){this.pomodoro.time=e},setShortBreakTime(e){this.shortBreak.time=e},setLongBreakTime(e){this.longBreak.time=e},getMinutes(e){return this[e].minutes},saveInLocalStorage(){localStorage.setItem("pomodoroTime",this.pomodoro.minutes),localStorage.setItem("shortBreakTime",this.shortBreak.minutes),localStorage.setItem("longBreakTime",this.longBreak.minutes)},retrieveFromLocalStorage(){this.pomodoro.minutes=localStorage.getItem("pomodoroTime"),this.shortBreak.minutes=localStorage.getItem("shortBreakTime"),this.longBreak.minutes=localStorage.getItem("longBreakTime")}}}),H=e=>((0,r.dD)("data-v-2a84583c"),e=e(),(0,r.Cn)(),e),V={class:"settings",id:"settings-id"},x={id:"settings-window"},F={class:"timer-config section"},W={class:"time"},j=H((()=>(0,r._)("p",null,"Pomodoro: ",-1))),z={class:"time"},A=H((()=>(0,r._)("p",null,"Short Break: ",-1))),U={class:"time"},Z=H((()=>(0,r._)("p",null,"Long Break: ",-1))),q={class:"section"},E=H((()=>(0,r._)("p",null,"Auto Start Break",-1)));var N={__name:"SettingsWin",setup(e){const t=D(),o=(0,v.iH)(t.getPomodoroMinutes),a=(0,v.iH)(t.getShortBreakMinutes),i=(0,v.iH)(t.getLongBreakMinutes);(0,r.YP)(o,(()=>{t.setPomodoroMinutes(o),t.saveInLocalStorage()})),(0,r.YP)(a,(()=>{t.setShortBreakMinutes(a),t.saveInLocalStorage()})),(0,r.YP)(i,(()=>{t.setLongBreakMinutes(i),t.saveInLocalStorage()}));const s=()=>{const e=document.getElementById("settings-id");e.classList.toggle("active")};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("div",{id:"outside-settings",onClick:s}),(0,r._)("div",x,[(0,r._)("div",F,[(0,r._)("div",W,[j,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>o.value=e)},null,512),[[n.nr,o.value]])]),(0,r._)("div",z,[A,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e)},null,512),[[n.nr,a.value]])]),(0,r._)("div",U,[Z,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=e=>i.value=e)},null,512),[[n.nr,i.value]])])]),(0,r._)("div",q,[E,(0,r.Wm)(M)]),(0,r._)("div",{class:"section"},[(0,r._)("button",{class:"btn",onClick:s},"Okay ")])])]))}};const Y=(0,h.Z)(N,[["__scopeId","data-v-2a84583c"]]);var R=Y,Q=o(577),G=o.p+"img/resetart.5cfe916d.svg",J=o.p+"media/minecraft_click.f61df6a9.mp3",K=o.p+"media/alarm.9b8747f7.mp3";const X={id:"card"},$={class:"pomodoro types"},ee={class:"shortBreak types"},te={class:"longBreak types"},oe={class:"time"},ne={class:"time-currently"},re={class:"minutes"},ae=(0,r.Uk)(":"),ie={class:"seconds"};var se={__name:"PomodoroTimer",setup(e){const t=D(),o=(0,v.iH)("pomodoro");var a=(0,v.iH)(t.getPomodoroMinutes);const i=(0,v.iH)(0),s=(0,v.iH)(!1),l=(0,v.iH)("Pomodoro"),u=new Audio(J),c=new Audio(K);let m;const d=(e,n)=>{document.querySelector(".restart").classList.remove("active"),o.value=e,a.value=t.getMinutes(o.value),l.value=n,i.value=0,s.value=!1,clearInterval(m)},g=()=>{document.querySelector(".restart").classList.add("active"),s.value=!0,u.play(),c.pause(),m=setInterval((()=>{i.value--,i.value<0&&0!=a.value&&(a.value--,i.value=59),a.value<=0&&i.value<=0&&(clearInterval(m),s.value=!1,c.play(),console.log("finalizo"))}),1e3)},p=()=>{document.querySelector(".restart").classList.remove("active"),s.value=!1,u.play(),clearInterval(m)},f=()=>{a.value=t.getMinutes(o.value),s.value=!1,i.value=0,clearInterval(m)};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",X,[(0,r._)("div",$,[(0,r._)("p",{onClick:t[0]||(t[0]=e=>d("pomodoro","Pomodoro")),class:(0,Q.C_)({active:"Pomodoro"==l.value})},"Pomodoro",2)]),(0,r._)("div",ee,[(0,r._)("p",{onClick:t[1]||(t[1]=e=>d("shortBreak","Short Break")),class:(0,Q.C_)({active:"Short Break"==l.value})},"Short Break",2)]),(0,r._)("div",te,[(0,r._)("p",{onClick:t[2]||(t[2]=e=>d("longBreak","Long Break")),class:(0,Q.C_)({active:"Long Break"==l.value})},"Long Break",2)]),(0,r._)("div",oe,[(0,r._)("div",ne,[(0,r._)("span",re,(0,Q.zw)((0,v.SU)(a).toLocaleString(void 0,{minimumIntegerDigits:2})),1),ae,(0,r._)("span",ie,(0,Q.zw)(i.value.toLocaleString(void 0,{minimumIntegerDigits:2})),1)]),(0,r.wy)((0,r._)("button",{class:"play btn",onClick:g}," START ",512),[[n.F8,!s.value]]),(0,r.wy)((0,r._)("button",{class:"stop btn",onClick:p}," STOP ",512),[[n.F8,s.value]]),(0,r._)("img",{class:"restart",onClick:f,src:G,alt:"logo-restart"})])]))}};const le=(0,h.Z)(se,[["__scopeId","data-v-5443c2d5"]]);var ue=le,ce={name:"App",components:{NavigationBarVue:y,SettingsWinVue:R,PomodoroTimerVue:ue}};const me=(0,h.Z)(ce,[["render",l]]);var de=me;const ve=(0,O.WB)(),ge=(0,n.ri)(de);ge.use(ve),ge.mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,r,a]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/PomodoroTimer/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],l=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var c=l(o)}for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkpomodoro_timer"]=self["webpackChunkpomodoro_timer"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(302)}));n=o.O(n)})();
//# sourceMappingURL=app.7e45b85e.js.map