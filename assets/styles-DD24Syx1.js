import{k as t,s as i}from"./index-C6BBkSek.js";const a=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,s=t(i.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: ${e=>e.theme.colors.primary}10;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`,d=t(i.div)`
  font-size: clamp(10rem, 30vw, 18rem);
  font-weight: 900;
  color: ${e=>e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  z-index: 1;
  text-shadow: 0 20px 40px ${e=>e.theme.colors.primary}20;
`;t.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  background: ${e=>e.theme.colors.surfaceVariant}20;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors.primary}08;
`;const m=t.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
`,r=t(i.div)`
  width: 50px;
  height: 50px;
  background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.surface};
  color: ${e=>e.$isActive?"white":e.theme.colors.textPrimary};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid
    ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"10"};
  box-shadow: ${e=>e.$isActive?`0 8px 16px ${e.theme.colors.primary}30`:"none"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${e=>e.theme.colors.primary};
    background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"05"};
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    border-radius: 10px;
  }
`,n=t(r)`
  width: 60px;
  @media (max-width: 480px) {
    width: 45px;
  }
`;export{d as B,s as D,m as G,a as L,n as N,r as a};
