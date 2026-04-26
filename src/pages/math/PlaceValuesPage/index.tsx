import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PageContainer,
  SettingsArea,
  GameLayout,
  GameActivityArea,
  ConfigSection,
  ConfigSubTitle,
  Tag,
} from "../../../theme/globalStyles";
import { Binary, HelpCircle, Globe, MapPin } from "lucide-react";
import ChallengeHeader from "../../../components/ChallengeHeader";
import styled from "styled-components";
import { SurpriseCard } from "../../../components/SurpriseCard";

const PlaceCard = styled(motion.div)<{ $color: string; $active: boolean }>`
  background: ${(props) => (props.$active ? props.$color + "20" : props.theme.colors.surface)};
  border: 2px solid ${(props) => (props.$active ? props.$color : props.theme.colors.primary + "10")};
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 140px;
  box-shadow: ${(props) => (props.$active ? `0 10px 20px ${props.$color}20` : "none")};

  @media (max-width: 768px) {
    width: 100%;
    max-width: 150px;
    padding: 12px;
  }

  h3 {
    margin: 0;
    color: ${(props) => props.$color};
    font-size: 1.2rem;
    text-align: center;
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
    opacity: 0.7;
  }
`;

const VisualArea = styled.div`
  margin-top: 20px;
  padding: 24px;
  background: ${(props) => props.theme.colors.primary}05;
  border-radius: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 0.85rem;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary}10;
  }

  th {
    background: ${(props) => props.theme.colors.primary}08;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 800;
  }

  tr:hover {
    background: ${(props) => props.theme.colors.primary}04;
  }
`;

const SystemToggle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const INDIAN_VALUES = [
  {
    id: "ten_lakh_crores",
    label: "10 Lakh Crores",
    value: 10000000000000,
    color: "#0F172A",
    desc: "10,00,00,00,00,000",
  },
  {
    id: "lakh_crores",
    label: "Lakh Crores",
    value: 1000000000000,
    color: "#1E1B4B",
    desc: "1,00,00,00,00,000",
  },
  {
    id: "hundred_crores",
    label: "100 Crores",
    value: 1000000000,
    color: "#312E81",
    desc: "1,00,00,00,000",
  },
  {
    id: "ten_crores",
    label: "10 Crores",
    value: 100000000,
    color: "#4C1D95",
    desc: "10,00,00,000",
  },
  { id: "crores", label: "Crores", value: 10000000, color: "#7C3AED", desc: "1,00,00,000" },
  { id: "ten_lakhs", label: "10 Lakhs", value: 1000000, color: "#EC4899", desc: "10,00,000" },
  { id: "lakhs", label: "Lakhs", value: 100000, color: "#F43F5E", desc: "1,00,00,000" },
  { id: "thousands", label: "Thousands", value: 1000, color: "#3B82F6", desc: "1,000" },
  { id: "hundreds", label: "Hundreds", value: 100, color: "#10B981", desc: "100" },
  { id: "tens", label: "Tens", value: 10, color: "#F59E0B", desc: "10" },
  { id: "ones", label: "Ones", value: 1, color: "#64748B", desc: "1" },
];

const INT_VALUES = [
  {
    id: "quadrillions",
    label: "Quadrillions",
    value: 1000000000000000,
    color: "#020617",
    desc: "1,000,000,000,000,000",
  },
  {
    id: "trillions",
    label: "Trillions",
    value: 1000000000000,
    color: "#0F172A",
    desc: "1,000,000,000,000",
  },
  { id: "billions", label: "Billions", value: 1000000000, color: "#1E1B4B", desc: "1,000,000,000" },
  { id: "millions", label: "Millions", value: 1000000, color: "#EC4899", desc: "1,000,000" },
  { id: "thousands", label: "Thousands", value: 1000, color: "#3B82F6", desc: "1,000" },
  { id: "hundreds", label: "Hundreds", value: 100, color: "#10B981", desc: "100" },
  { id: "tens", label: "Tens", value: 10, color: "#F59E0B", desc: "10" },
  { id: "ones", label: "Ones", value: 1, color: "#64748B", desc: "1" },
];

const COMPARISON_DATA = [
  { value: "1,000", indian: "Thousand", intl: "Thousand" },
  { value: "10,000", indian: "10 Thousand", intl: "10 Thousand" },
  { value: "100,000", indian: "1 Lakh", intl: "100 Thousand" },
  { value: "1,000,000", indian: "10 Lakhs", intl: "1 Million" },
  { value: "10,000,000", indian: "1 Crore", intl: "10 Million" },
  { value: "100,000,000", indian: "10 Crores", intl: "100 Million" },
  { value: "1,000,000,000", indian: "100 Crores", intl: "1 Billion" },
  { value: "1,000,000,000,000", indian: "1 Lakh Crores", intl: "1 Trillion" },
  { value: "1,000,000,000,000,000", indian: "100 Lakh Crores", intl: "1 Quadrillion" },
];

const PlaceValuesPage = () => {
  const [system, setSystem] = useState<"indian" | "intl">("indian");
  const [activeId, setActiveId] = useState("ones");

  const currentValues = system === "indian" ? INDIAN_VALUES : INT_VALUES;
  const current =
    currentValues.find((p) => p.id === activeId) || currentValues[currentValues.length - 1];

  const formatNumber = (val: number) => {
    if (system === "indian") {
      // Manual formatting for Indian system (1,23,45,678)
      const s = val.toString();
      let lastThree = s.substring(s.length - 3);
      const otherNumbers = s.substring(0, s.length - 3);
      if (otherNumbers !== "") {
        lastThree = "," + lastThree;
      }
      return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    }
    return val.toLocaleString("en-US");
  };

  return (
    <PageContainer data-testid="view-place-values">
      <GameLayout>
        <ChallengeHeader
          icon={Binary}
          title="Place Values"
          subtitle="Compare Indian vs International Number Systems!"
          streak={0}
        />

        <SurpriseCard
          title="Math Hero! 🏆"
          subtitle="10 Lakhs is the same as 1 Million. 100 Crores is 1 Billion. Great job learning!"
        />

        <GameActivityArea data-testid="activity-area">
          <SystemToggle>
            <Tag $isActive={system === "indian"} onClick={() => setSystem("indian")}>
              <MapPin size={14} /> Indian System (Lakhs)
            </Tag>
            <Tag $isActive={system === "intl"} onClick={() => setSystem("intl")}>
              <Globe size={14} /> International System (Millions)
            </Tag>
          </SystemToggle>

          <VisualArea>
            <div
              style={{
                fontSize: "min(3.5rem, 8vw)",
                fontWeight: 900,
                color: current.color,
                textAlign: "center",
                wordBreak: "break-all",
              }}
            >
              {formatNumber(current.value)}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId + system}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ textAlign: "center" }}
              >
                <h2 style={{ color: current.color, margin: "5px 0", fontSize: "min(2.5rem, 6vw)" }}>
                  {current.label}
                </h2>
                <p
                  style={{
                    fontWeight: 700,
                    opacity: 0.6,
                    letterSpacing: "1px",
                    fontSize: "0.7rem",
                  }}
                >
                  {system === "indian" ? "INDIAN SYSTEM" : "INTERNATIONAL SYSTEM"}
                </p>
              </motion.div>
            </AnimatePresence>
          </VisualArea>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {currentValues.map((pv) => (
              <PlaceCard
                key={pv.id}
                $color={pv.color}
                $active={activeId === pv.id}
                onClick={() => setActiveId(pv.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3>{pv.label}</h3>
                <span>{formatNumber(pv.value)}</span>
              </PlaceCard>
            ))}
          </div>

          <div style={{ marginTop: "40px", width: "100%" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "8px", color: "#6366F1" }}>
              <Globe size={20} /> Comparison Table
            </h3>
            <div style={{ overflowX: "auto", width: "100%" }}>
              <ComparisonTable>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Indian System</th>
                    <th>International System</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, i) => (
                    <tr key={i}>
                      <td
                        style={{ fontWeight: 700, fontFamily: "monospace", whiteSpace: "nowrap" }}
                      >
                        {row.value}
                      </td>
                      <td style={{ fontWeight: 600, color: "#7C3AED", whiteSpace: "nowrap" }}>
                        {row.indian}
                      </td>
                      <td style={{ fontWeight: 600, color: "#EC4899", whiteSpace: "nowrap" }}>
                        {row.intl}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ComparisonTable>
            </div>
          </div>
        </GameActivityArea>

        <SettingsArea data-testid="settings-area">
          <ConfigSection>
            <ConfigSubTitle>
              <HelpCircle size={16} /> Comma Rule
            </ConfigSubTitle>
            <div style={{ fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 600 }}>
              <p>
                <strong>Indian System:</strong> 1st comma after 3 digits, then every 2 digits.
                (1,00,00,000)
              </p>
              <p style={{ marginTop: "10px" }}>
                <strong>International:</strong> Commas after every 3 digits. (10,000,000)
              </p>
            </div>
          </ConfigSection>

          <div style={{ marginTop: "20px" }}>
            <ConfigSection>
              <ConfigSubTitle>Quick Tip! 💡</ConfigSubTitle>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.5, fontWeight: 600, opacity: 0.8 }}>
                1 Million is the same as 10 Lakhs.
                <br />
                <br />1 Billion is 100 Crores!
              </p>
            </ConfigSection>
          </div>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default PlaceValuesPage;
