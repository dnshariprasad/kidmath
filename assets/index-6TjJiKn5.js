import{i as r,p as v,x,n as e,P as j,G as b,y as f,z as m,A as C,F as S,H as u,J as p}from"./index-Qm0jZaIu.js";import{C as T}from"./ChallengeHeader-Dui8Vge4.js";import{S as k}from"./SurpriseCard-CEUcfMa9.js";import{B as w,M as A,G as g}from"./map-pin-PSFUPvvM.js";import{C as $}from"./circle-question-mark-DB47xoPX.js";const B=r(v.div)`
  background: ${i=>i.$active?i.$color+"20":i.theme.colors.surface};
  border: 2px solid ${i=>i.$active?i.$color:i.theme.colors.primary+"10"};
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 140px;
  box-shadow: ${i=>i.$active?`0 10px 20px ${i.$color}20`:"none"};

  @media (max-width: 768px) {
    width: 100%;
    max-width: 150px;
    padding: 12px;
  }

  h3 {
    margin: 0;
    color: ${i=>i.$color};
    font-size: 1.2rem;
    text-align: center;
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
    opacity: 0.7;
  }
`,I=r.div`
  margin-top: 20px;
  padding: 24px;
  background: ${i=>i.theme.colors.primary}05;
  border-radius: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`,E=r.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 0.85rem;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid ${i=>i.theme.colors.primary}10;
  }

  th {
    background: ${i=>i.theme.colors.primary}08;
    color: ${i=>i.theme.colors.primary};
    font-weight: 800;
  }

  tr:hover {
    background: ${i=>i.theme.colors.primary}04;
  }
`,L=r.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,M=[{id:"ten_lakh_crores",label:"10 Lakh Crores",value:1e13,color:"#0F172A",desc:"10,00,00,00,00,000"},{id:"lakh_crores",label:"Lakh Crores",value:1e12,color:"#1E1B4B",desc:"1,00,00,00,00,000"},{id:"hundred_crores",label:"100 Crores",value:1e9,color:"#312E81",desc:"1,00,00,00,000"},{id:"ten_crores",label:"10 Crores",value:1e8,color:"#4C1D95",desc:"10,00,00,000"},{id:"crores",label:"Crores",value:1e7,color:"#7C3AED",desc:"1,00,00,000"},{id:"ten_lakhs",label:"10 Lakhs",value:1e6,color:"#EC4899",desc:"10,00,000"},{id:"lakhs",label:"Lakhs",value:1e5,color:"#F43F5E",desc:"1,00,00,000"},{id:"thousands",label:"Thousands",value:1e3,color:"#3B82F6",desc:"1,000"},{id:"hundreds",label:"Hundreds",value:100,color:"#10B981",desc:"100"},{id:"tens",label:"Tens",value:10,color:"#F59E0B",desc:"10"},{id:"ones",label:"Ones",value:1,color:"#64748B",desc:"1"}],z=[{id:"quadrillions",label:"Quadrillions",value:1e15,color:"#020617",desc:"1,000,000,000,000,000"},{id:"trillions",label:"Trillions",value:1e12,color:"#0F172A",desc:"1,000,000,000,000"},{id:"billions",label:"Billions",value:1e9,color:"#1E1B4B",desc:"1,000,000,000"},{id:"millions",label:"Millions",value:1e6,color:"#EC4899",desc:"1,000,000"},{id:"thousands",label:"Thousands",value:1e3,color:"#3B82F6",desc:"1,000"},{id:"hundreds",label:"Hundreds",value:100,color:"#10B981",desc:"100"},{id:"tens",label:"Tens",value:10,color:"#F59E0B",desc:"10"},{id:"ones",label:"Ones",value:1,color:"#64748B",desc:"1"}],N=[{value:"1,000",indian:"Thousand",intl:"Thousand"},{value:"10,000",indian:"10 Thousand",intl:"10 Thousand"},{value:"100,000",indian:"1 Lakh",intl:"100 Thousand"},{value:"1,000,000",indian:"10 Lakhs",intl:"1 Million"},{value:"10,000,000",indian:"1 Crore",intl:"10 Million"},{value:"100,000,000",indian:"10 Crores",intl:"100 Million"},{value:"1,000,000,000",indian:"100 Crores",intl:"1 Billion"},{value:"1,000,000,000,000",indian:"1 Lakh Crores",intl:"1 Trillion"},{value:"1,000,000,000,000,000",indian:"100 Lakh Crores",intl:"1 Quadrillion"}],D=()=>{const[i,d]=x.useState("indian"),[t,y]=x.useState("ones"),n=i==="indian"?M:z,a=n.find(l=>l.id===t)||n[n.length-1],c=l=>{if(i==="indian"){const s=l.toString();let o=s.substring(s.length-3);const h=s.substring(0,s.length-3);return h!==""&&(o=","+o),h.replace(/\B(?=(\d{2})+(?!\d))/g,",")+o}return l.toLocaleString("en-US")};return e.jsx(j,{"data-testid":"view-place-values",children:e.jsxs(b,{children:[e.jsx(T,{icon:w,title:"Place Values",subtitle:"Compare Indian vs International Number Systems!",streak:0}),e.jsx(k,{title:"Math Hero! 🏆",subtitle:"10 Lakhs is the same as 1 Million. 100 Crores is 1 Billion. Great job learning!"}),e.jsxs(f,{"data-testid":"activity-area",children:[e.jsxs(L,{children:[e.jsxs(m,{$isActive:i==="indian",onClick:()=>d("indian"),children:[e.jsx(A,{size:14})," Indian System (Lakhs)"]}),e.jsxs(m,{$isActive:i==="intl",onClick:()=>d("intl"),children:[e.jsx(g,{size:14})," International System (Millions)"]})]}),e.jsxs(I,{children:[e.jsx("div",{style:{fontSize:"min(3.5rem, 8vw)",fontWeight:900,color:a.color,textAlign:"center",wordBreak:"break-all"},children:c(a.value)}),e.jsx(C,{mode:"wait",children:e.jsxs(v.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},style:{textAlign:"center"},children:[e.jsx("h2",{style:{color:a.color,margin:"5px 0",fontSize:"min(2.5rem, 6vw)"},children:a.label}),e.jsx("p",{style:{fontWeight:700,opacity:.6,letterSpacing:"1px",fontSize:"0.7rem"},children:i==="indian"?"INDIAN SYSTEM":"INTERNATIONAL SYSTEM"})]},t+i)})]}),e.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap",justifyContent:"center",marginTop:"20px"},children:n.map(l=>e.jsxs(B,{$color:l.color,$active:t===l.id,onClick:()=>y(l.id),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("h3",{children:l.label}),e.jsx("span",{children:c(l.value)})]},l.id))}),e.jsxs("div",{style:{marginTop:"40px",width:"100%"},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#6366F1"},children:[e.jsx(g,{size:20})," Comparison Table"]}),e.jsx("div",{style:{overflowX:"auto",width:"100%"},children:e.jsxs(E,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Number"}),e.jsx("th",{children:"Indian System"}),e.jsx("th",{children:"International System"})]})}),e.jsx("tbody",{children:N.map((l,s)=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:700,fontFamily:"monospace",whiteSpace:"nowrap"},children:l.value}),e.jsx("td",{style:{fontWeight:600,color:"#7C3AED",whiteSpace:"nowrap"},children:l.indian}),e.jsx("td",{style:{fontWeight:600,color:"#EC4899",whiteSpace:"nowrap"},children:l.intl})]},s))})]})})]})]}),e.jsxs(S,{"data-testid":"settings-area",children:[e.jsxs(u,{children:[e.jsxs(p,{children:[e.jsx($,{size:16})," Comma Rule"]}),e.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.6,fontWeight:600},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Indian System:"})," 1st comma after 3 digits, then every 2 digits. (1,00,00,000)"]}),e.jsxs("p",{style:{marginTop:"10px"},children:[e.jsx("strong",{children:"International:"})," Commas after every 3 digits. (10,000,000)"]})]})]}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsxs(u,{children:[e.jsx(p,{children:"Quick Tip! 💡"}),e.jsxs("p",{style:{fontSize:"0.82rem",lineHeight:1.5,fontWeight:600,opacity:.8},children:["1 Million is the same as 10 Lakhs.",e.jsx("br",{}),e.jsx("br",{}),"1 Billion is 100 Crores!"]})]})})]})]})})};export{D as default};
