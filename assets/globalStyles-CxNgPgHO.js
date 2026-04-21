import{_ as r,i as t,p as o}from"./index-NzOoTDV7.js";r`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;const i=r`
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;r`
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;const m=t.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`,a=t.div`
  background: ${e=>e.theme.colors.surface};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 30px 40px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: none;
  transition: all 0.3s ease;
  border: 1px solid ${e=>e.theme.colors.primary}15;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 6px 15px rgba(0, 0, 0, 0.05),
      0 12px 30px rgba(0, 0, 0, 0.08);
    border-color: ${e=>e.theme.colors.primary}30;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
    border-radius: 20px;
  }
`,g=t.input`
  padding: 10px 20px;
  margin: 15px 0;
  background: ${e=>e.theme.colors.surface};
  border: 3px solid ${e=>e.theme.colors.primary}20;
  border-radius: 16px;
  font-size: ${e=>e.theme.fontSize.xl};
  font-weight: 800;
  font-family: ${e=>e.theme.fonts.primary};
  width: ${e=>e.width||"120px"};
  height: 80px;
  color: ${e=>e.theme.colors.primary};
  text-align: center;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary}40;
  }

  &:focus {
    background: ${e=>e.theme.colors.surface};
    border-color: ${e=>e.theme.colors.primary};
    transform: scale(1.05);
    box-shadow: 0 10px 20px ${e=>e.theme.colors.primary}15;
  }

  @media (max-width: 768px) {
    height: 64px;
    font-size: ${e=>e.theme.fontSize.lg};
    width: ${e=>e.width||"100px"};
  }
`,h=t.span`
  color: ${e=>e.$color||(e.$isActive?"white":e.theme.colors.textSecondary)};
  background: ${e=>e.$bg||(e.$isActive?e.theme.colors.primary:e.theme.colors.surfaceVariant)};
  padding: 10px 18px;
  border-radius: 12px;
  font-size: ${e=>e.theme.fontSize.base};
  font-weight: 700;
  font-family: ${e=>e.theme.fonts.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  border: 1px solid
    ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"10"};
  ${e=>e.$isActive?i:"none"}

  &:hover {
    background: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.primary+"15"};
    color: ${e=>e.$isActive?"white":e.theme.colors.primary};
    transform: translateY(-2px);
    ${i}
  }

  &:active {
    transform: scale(0.95);
  }
`;t.h4`
  color: ${e=>e.theme.colors.primary};
  font-family: ${e=>e.theme.fonts.primary};
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.2px;
  font-size: ${e=>e.theme.fontSize.md};
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 60px; /* Matches the visual height of the PageTitle line */
  padding-top: 5px;
`;const f=t.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`,b=t.div`
  padding: 0 30px 24px; /* Standardized side/bottom padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;t.div`
  padding: ${e=>e.padding||"20px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;t.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;t.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
`;t.li`
  padding: 16px 24px;
  margin-bottom: 12px;
  background: ${e=>e.theme.colors.surfaceVariant}CC;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors.primary}15;
  color: ${e=>e.theme.colors.textPrimary};
  font-family: ${e=>e.theme.fonts.secondary};
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.03);
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background: ${e=>e.theme.colors.surface};
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.06);
  }
`;t.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;t.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${e=>e.theme.colors.surface};
  backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 30px;
  box-shadow:
    0 8px 16px rgba(99, 102, 241, 0.04),
    0 16px 32px rgba(99, 102, 241, 0.06);
  border: 1px solid ${e=>e.theme.colors.primary}15;
`;t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;const n=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 160px;
  height: 160px;
  background: ${e=>e.theme.colors.surface};
  border-radius: 24px;
  border: 1px solid ${e=>e.theme.colors.primary}15;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  padding: 20px;
  margin-bottom: 0;
  box-sizing: border-box;

  @media (max-width: 992px) {
    height: auto;
    min-height: 120px;
    padding: 25px 15px;
    margin-bottom: 0;
  }
`,u=t(n)`
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  border: none;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  margin-bottom: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 992px) {
    order: 10;
    min-height: 120px;
    height: auto;
    margin-top: 20px;
  }
`,y=t(o.button)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 800;
  font-size: ${e=>e.theme.fontSize.md};
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }
`,$=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0;
  gap: 8px;
`,w=t.h1`
  font-family: ${e=>e.theme.fonts.primary};
  font-size: ${e=>e.theme.fontSize.xl};
  font-weight: 800;
  color: ${e=>e.theme.colors.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  letter-spacing: -0.5px;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 6px;
    background: ${e=>e.theme.colors.primary}25;
    border-radius: 10px;
  }
`,v=t.p`
  font-family: ${e=>e.theme.fonts.secondary};
  font-size: ${e=>e.theme.fontSize.base};
  color: ${e=>e.theme.colors.textSecondary};
  margin: 0;
  margin-top: 5px;
  opacity: 0.8;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
`,s=t(a)`
  background: ${e=>e.theme.colors.surface};
  border: 1px solid ${e=>e.theme.colors.primary}20;
  max-width: none;
  padding: 15px 25px;

  &:hover {
    transform: translateY(-4px);
  }
`,p=t(a)`
  /* This represents the primary educational content module */
`,k=t(p)`
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 350px;
    padding: 15px 20px;
    gap: 15px;
  }
`,d=t(o.span)`
  font-size: ${e=>e.theme.fontSize.lg};
`,z=t(d)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,S=t.span`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 900;
  color: #1e293b;
  margin-top: 2px;
`,A=t.span`
  font-size: 1.5rem;
`,j=t.span`
  margin-left: 5px;
  font-weight: 800;
  color: #ffd700;
`,C=t(o.div)`
  margin-top: 15px;
`,l=t(s)`
  /* This represents the configuration/settings module */
`;t(l)`
  /* This represents the configuration/settings module */
`;const x=t.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`,T=t(x)`
  margin-top: 15px;
`,P=t.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px 25px;
  width: 100%;
  align-items: start;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;t.div`
  display: contents;
`;t.div`
  display: contents;
`;const G=t.div`
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px dashed ${e=>e.theme.colors.primary}15;
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,N=t.h4`
  color: ${e=>e.theme.colors.textSecondary};
  font-family: ${e=>e.theme.fonts.primary};
  font-size: ${e=>e.theme.fontSize.sm};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Y=t.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: ${e=>e.$isActive?e.theme.colors.primary+"15":"transparent"};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 5px;
  border: 2px solid ${e=>e.$isActive?e.theme.colors.primary:"transparent"};
  font-size: ${e=>e.theme.fontSize.sm};
  color: ${e=>e.theme.colors.textPrimary};

  &:hover {
    background: ${e=>e.theme.colors.primary}08;
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${e=>e.theme.colors.primary}40;
    border-radius: 50%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background: ${e=>e.theme.colors.surface};
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: ${e=>e.theme.colors.primary};
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 4px solid ${e=>e.theme.colors.surface};
      box-sizing: border-box;
    }

    &:checked {
      border-color: ${e=>e.theme.colors.primary};
    }

    &:checked::after {
      transform: scale(1);
    }
  }
`;export{a as C,C as F,P as G,y as M,T as N,Y as O,b as P,l as S,f as T,$ as a,w as b,v as c,k as d,G as e,N as f,h as g,g as h,x as i,u as j,n as k,m as l,z as m,A as n,S as o,j as p};
