import{i as n,p as h,l as F,m as L,x as i,n as t,P as T,G as I,y as z,R as B,W as D,Y as R,_ as M,$ as P,K as v,A as w,z as G,a0 as K,a1 as N,a2 as V,a3 as O}from"./index-CfMFGCh5.js";import{S as U}from"./SpeakIcon-CFTpvR-C.js";import{C as Y,S as _,r as y,g as Q}from"./ChallengeHeader-Dktj-9mS.js";import{g as X,b as q}from"./wordUtils-DPgh885X.js";import{c as J}from"./confetti.module-ONDKWxYZ.js";import{D as Z}from"./DifficultyPicker-DM8nRwAN.js";import{S as ee,C as te}from"./spell-check-3sivN31C.js";import{C as se}from"./circle-question-mark-BX_P3qDL.js";import{C as re}from"./circle-check-C25B30nm.js";const ie=n.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`,ae=n(h.div)`
  width: 60px;
  height: 70px;
  border-radius: 16px;
  background: ${e=>e.theme.colors.surface};
  border: 3px solid
    ${e=>e.$isSuccess?e.theme.colors.success:e.$isError?e.theme.colors.accent:e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"15"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${e=>e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 45px;
    height: 55px;
    font-size: 1.8rem;
    border-radius: 12px;
  }
`,oe=n(h.div)`
  background: ${e=>e.theme.colors.surface};
  padding: 30px;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 3px solid ${e=>e.theme.colors.primary}10;

  &:hover {
    border-color: ${e=>e.theme.colors.primary}40;
    transform: translateY(-2px);
  }
`,ne=n.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`,le=n(h.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${e=>e.$showHint?e.theme.colors.primary:e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;
`,ce=n(h.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: ${e=>e.theme.colors.textSecondary+"40"};
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`;n.div`
  text-align: center;
  padding: 20px;
  width: 100%;
`;n.div`
  margin-bottom: 10px;
`;const pe=n(h.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`,Ce=()=>{const e=F(),o=L(s=>{var r,c;return((c=(r=s.alphabet.gameStats)==null?void 0:r.spelling)==null?void 0:c.streak)??0}),[l,b]=i.useState(""),[m,x]=i.useState(""),[a,g]=i.useState(null),[S,C]=i.useState(!1),[p,k]=i.useState("Easy"),[$,j]=i.useState(!1),f=i.useRef([]),u=i.useCallback(()=>{let s=X();p==="Easy"?s=s.filter(d=>d.length<=4):p==="Medium"?s=s.filter(d=>d.length>4&&d.length<=7):p==="Hard"&&(s=s.filter(d=>d.length>7));let r=0,c="";for(;r<10;){if(c=q(s),!f.current.includes(c)){f.current=[c,...f.current].slice(0,10);break}r++}b(c.toUpperCase()),x(""),g(null),C(!1)},[p]);i.useEffect(()=>{u()},[u]),i.useEffect(()=>{o>0&&o%10===0&&j(!0)},[o]),i.useEffect(()=>{const s=()=>{var r;(r=document.getElementById("spelling-input"))==null||r.focus()};return window.addEventListener("click",s),()=>window.removeEventListener("click",s)},[]);const E=s=>{const r=s.target.value.toUpperCase();r.length<=l.length&&x(r)},H=()=>{if(m===l){const s=Q(o);g({message:s,isCorrect:!0}),y(s),e(V("spelling")),J({particleCount:150,spread:70,origin:{y:.6},colors:["#6366F1","#4F46E5","#FF7675"]}),setTimeout(u,2e3)}else g({message:"Almost! Try one more time! 💪",isCorrect:!1}),y("Try again"),e(O("spelling")),x("")},A=s=>{s.key==="Enter"&&H()},W=[{value:"Easy",label:"Short (3-4)"},{value:"Medium",label:"Medium (5-7)"},{value:"Hard",label:"Long (8+)"}];return t.jsxs(T,{"data-testid":"page-spelling-challenge",children:[t.jsx(ne,{id:"spelling-input",type:"text",value:m,onChange:E,onKeyDown:A,autoFocus:!0}),t.jsxs(I,{children:[t.jsx(Y,{icon:ee,title:"Spelling Bee",subtitle:"Listen to the word and spell it out!",streak:o}),t.jsx(_,{title:"Ready for the Big Test? 🏆",subtitle:"Once you master these words, try the 'Spelling Hero' test to win a trophy!"}),t.jsxs(z,{"data-testid":"activity-area",children:[t.jsxs(B,{children:[Array.from({length:o%10||(o>0?10:0)}).map((s,r)=>t.jsxs(D,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",damping:10,delay:r*.05},children:[t.jsx(R,{children:"⭐"}),t.jsx(M,{children:r+1})]},r)),o>=10&&t.jsx(P,{children:"+"})]}),t.jsx(le,{$showHint:S,whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>C(!0),title:"Need a hint?",children:t.jsx(se,{size:28})}),t.jsx(ce,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:u,title:"Skip to next",children:t.jsx(h.div,{animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:t.jsx("path",{d:"m6 17 5-5-5-5M13 17l5-5-5-5"})})})}),t.jsxs(oe,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>y(l),children:[t.jsx(U,{text:l}),t.jsx(v,{fontSize:"base",color:"textSecondary",fontWeight:"bold",children:"Click to listen"})]}),t.jsx(ie,{children:l.split("").map((s,r)=>t.jsx(ae,{$isActive:m.length===r,$isError:(a==null?void 0:a.isCorrect)===!1&&m.length===l.length,$isSuccess:(a==null?void 0:a.isCorrect)===!0,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:r*.1},children:m[r]||(S&&(r===0||r===l.length-1)?s:"")},r))}),t.jsx(w,{children:a&&t.jsxs(pe,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},children:[a.isCorrect?t.jsx(re,{color:"#4CAF50"}):t.jsx(te,{color:"#FF7675"}),t.jsx(v,{color:a.isCorrect?"success":"accent",fontSize:"md",children:a.message})]})})]}),t.jsx(G,{"data-testid":"settings-area",children:t.jsx(Z,{name:"complexity",options:W,currentValue:p,onChange:s=>k(s)})})]}),t.jsx(w,{children:$&&t.jsx(K,{onClose:()=>{j(!1),e(N())},challengeName:"Spelling Bee",score:o,level:p})})]})};export{Ce as default};
