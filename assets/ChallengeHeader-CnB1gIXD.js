import{as as o,i as r,p as l,n as s,K as n,at as c,x as d,au as h,r as g,s as p,t as x}from"./index-0BhnDQbh.js";function w(e,t="en-US"){if(o.getState().alphabet.isMuted)return;window.speechSynthesis.cancel();const i=new SpeechSynthesisUtterance(e);i.lang=t,i.rate=.95,i.pitch=1.1,window.speechSynthesis.speak(i)}const y=e=>{const t=["Good Start","Keep Going","Well Done","So Smart","Half Way","Great Job","Amazing","Brilliant","Nearly There","Almost Done"];return e<0?"Keep going":t[e%t.length]},u=r(l.div)`
  cursor: ${e=>e.$isClickable?"pointer":"default"};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  text-align: center;
`,m=r(n)`
  margin-bottom: 4px;
  opacity: 0.95;
`,S=r(n)`
  opacity: 0.85;
  line-height: 1.2;
`,f=r(c)`
  padding: 0;
`,T=({title:e="Achievement",subtitle:t,onClick:a})=>s.jsx(f,{"data-testid":"ghost-area",children:s.jsxs(u,{$isClickable:!!a,onClick:a,whileHover:a?{backgroundColor:"rgba(255,255,255,0.08)"}:{},whileTap:a?{scale:.98}:{},children:[s.jsx(m,{fontSize:"sm",color:"white",fontWeight:"800",children:e}),t&&s.jsx(S,{fontSize:"xs",color:"white",fontWeight:"500",children:t})]})}),b=({icon:e,title:t,subtitle:a,iconColor:i="#6366F1"})=>s.jsx(h,{"data-testid":"title-area",children:s.jsxs(g,{children:[s.jsxs(p,{children:[s.jsx(e,{size:40,color:i,strokeWidth:2.5}),t]}),s.jsx(x,{children:a})]})}),H=d.memo(b);export{H as C,T as S,y as g,w as r};
