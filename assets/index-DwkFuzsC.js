import{k as s,s as k,r as l,n as N,l as E,p as t,z as A,v as L,E as P,F as h,G as g,J as I,N as B,Q as U,R as G}from"./index-CqNqe0_u.js";import{L as M,U as D}from"./user-plus-DrTufbXB.js";const T=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
  background: ${({theme:e})=>e.colors.background};
`,W=s(k.div)`
  background: ${({theme:e})=>e.colors.surface};
  padding: 40px;
  border-radius: 32px;
  box-shadow: ${({theme:e})=>{var n;return((n=e.shadows)==null?void 0:n.xl)||"0 20px 40px rgba(0, 0, 0, 0.1)"}};
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 2px solid ${({theme:e})=>e.colors.border};

  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 20px;
    border-radius: 24px;
  }
`,q=s.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${({theme:e})=>e.colors.primary};
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`,m=s.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,f=s.label`
  font-weight: 800;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-left: 4px;
`,y=s.input`
  padding: 14px 18px;
  border-radius: 16px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  background: ${({theme:e})=>e.colors.surfaceVariant};
  color: ${({theme:e})=>e.colors.textPrimary};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease;
  font-weight: 600;

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
    opacity: 0.5;
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 4px ${({theme:e})=>e.colors.primary}20;
  }
`,F=s.p`
  color: ${({theme:e})=>e.colors.warning||"#ef4444"};
  font-size: 0.9rem;
  font-weight: 700;
  text-align: center;
  background: ${({theme:e})=>e.colors.warning}15;
  padding: 10px;
  border-radius: 12px;
`,H=s.p`
  text-align: center;
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-top: 10px;
  font-weight: 600;

  span {
    color: ${({theme:e})=>e.colors.primary};
    font-weight: 900;
    cursor: pointer;
    margin-left: 4px;
    &:hover {
      text-decoration: underline;
    }
  }
`,R=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.textPrimary};
  border: 2px solid ${({theme:e})=>e.colors.border};
  padding: 14px;
  border-radius: 16px;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceVariant};
    border-color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>{var n;return((n=e.shadows)==null?void 0:n.md)||"0 4px 12px rgba(0, 0, 0, 0.1)"}};
  }

  &:active {
    transform: translateY(0);
  }
`,V=s.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 2px;
    background: ${({theme:e})=>e.colors.border};
  }

  span {
    font-size: 0.85rem;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`,K=()=>{const[e,n]=l.useState(!0),[d,$]=l.useState(""),[p,S]=l.useState(""),[u,_]=l.useState(""),[b,c]=l.useState(""),[w,j]=l.useState(!1),x=N(),v=E(),r=L.en,C=async i=>{i.preventDefault(),c(""),j(!0);try{if(e){const a=(await P(h,d,p)).user;x(g({uid:a.uid,email:a.email,displayName:a.displayName}))}else{const a=(await I(h,d,p)).user;await B(a,{displayName:u}),x(g({uid:a.uid,email:a.email,displayName:u}))}v("/")}catch(o){o instanceof Error?c(o.message):c(String(o))}finally{j(!1)}},z=async()=>{const i=new U;try{const a=(await G(h,i)).user;x(g({uid:a.uid,email:a.email,displayName:a.displayName})),v("/")}catch(o){o instanceof Error?c(o.message):c(String(o))}};return t.jsx(T,{children:t.jsxs(W,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[t.jsx(q,{children:e?r.auth_welcomeBack:r.auth_join}),t.jsxs("form",{onSubmit:C,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[!e&&t.jsxs(m,{children:[t.jsx(f,{children:r.auth_kidsName}),t.jsx(y,{type:"text",placeholder:r.auth_enterName,value:u,onChange:i=>_(i.target.value),required:!0})]}),t.jsxs(m,{children:[t.jsx(f,{children:r.auth_email}),t.jsx(y,{type:"email",placeholder:r.auth_enterEmail,value:d,onChange:i=>$(i.target.value),required:!0})]}),t.jsxs(m,{children:[t.jsx(f,{children:r.auth_password}),t.jsx(y,{type:"password",placeholder:r.auth_enterPassword,value:p,onChange:i=>S(i.target.value),required:!0})]}),b&&t.jsx(F,{children:b}),t.jsx(A,{title:w?r.auth_pleaseWait:e?r.auth_login:r.auth_signUp,onClick:()=>{},variant:"primary",type:"submit",icon:e?t.jsx(M,{size:20}):t.jsx(D,{size:20}),disabled:w})]}),t.jsx(V,{children:t.jsx("span",{children:r.auth_or})}),t.jsxs(R,{type:"button",onClick:z,children:[t.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),r.auth_googleSignIn]}),t.jsxs(H,{children:[e?r.auth_noAccount:r.auth_hasAccount,t.jsx("span",{onClick:()=>n(!e),children:e?r.auth_signUp:r.auth_login})]})]})})};export{K as default};
