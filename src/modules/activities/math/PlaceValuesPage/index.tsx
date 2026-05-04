import { useState } from "react";
import { KidoText } from "../../../../components/KidoText";
import { motion, AnimatePresence } from "framer-motion";
import {
  PageContainer,
  SettingsArea,
  GameLayout,
  GameActivityArea,
  ConfigSection,
  ConfigSubTitle,
  Tag,
} from "../../../../theme/globalStyles";
import { Binary, HelpCircle, Globe, MapPin } from "lucide-react";
import ChallengeHeader from "../../../../components/ChallengeHeader";
import styled from "styled-components";
import { TRANSLATIONS } from "../../../../constants/translations";

import { DisplayWrapper, PulseCircle } from "../../shared/learnStyles";

const PlaceCard = styled(motion.div)<{ $color: string; $active: boolean }>`
  background: ${(props) => (props.$active ? props.$color : props.theme.colors.surface)};
  border: 2px solid ${(props) => (props.$active ? props.$color : props.theme.colors.primary + "10")};
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 140px;
  box-shadow: ${(props) => (props.$active ? `0 10px 20px ${props.$color}40` : "none")};

  @media (max-width: 768px) {
    width: calc(50% - 10px);
    max-width: 150px;
    padding: 12px;
  }

  h3 {
    margin: 0;
    color: ${(props) => (props.$active ? "white" : props.$color)};
    font-size: 1.1rem;
    text-align: center;
    font-weight: 800;
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${(props) => (props.$active ? "white" : props.theme.colors.textSecondary)};
    opacity: ${(props) => (props.$active ? 1 : 0.7)};
  }
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 0;
  font-size: 0.85rem;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.primary}15;

  th,
  td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary}10;
  }

  th {
    background: ${(props) => props.theme.colors.primary}08;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.75rem;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background: ${(props) => props.theme.colors.primary}04;
  }
`;

const SystemToggle = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

const INDIAN_VALUES = [
  {
    id: "ten_lakh_crores",
    label: "10 Lakh Crores",
    value: 10000000000000,
    color: "#6366F1", // Indigo
    desc: "10,00,00,00,00,000",
  },
  {
    id: "lakh_crores",
    label: "Lakh Crores",
    value: 1000000000000,
    color: "#8B5CF6", // Violet
    desc: "1,00,00,00,00,000",
  },
  {
    id: "hundred_crores",
    label: "100 Crores",
    value: 1000000000,
    color: "#D946EF", // Fuchsia
    desc: "1,00,00,00,000",
  },
  {
    id: "ten_crores",
    label: "10 Crores",
    value: 100000000,
    color: "#F43F5E", // Rose
    desc: "10,00,00,000",
  },
  { id: "crores", label: "Crores", value: 10000000, color: "#FB7185", desc: "1,00,00,000" },
  { id: "ten_lakhs", label: "10 Lakhs", value: 1000000, color: "#FB923C", desc: "10,00,000" },
  { id: "lakhs", label: "Lakhs", value: 100000, color: "#FBBF24", desc: "1,00,000" },
  { id: "thousands", label: "Thousands", value: 1000, color: "#2DD4BF", desc: "1,000" },
  { id: "hundreds", label: "Hundreds", value: 100, color: "#34D399", desc: "100" },
  { id: "tens", label: "Tens", value: 10, color: "#60A5FA", desc: "10" },
  { id: "ones", label: "Ones", value: 1, color: "#94A3B8", desc: "1" },
];

const INT_VALUES = [
  {
    id: "quadrillions",
    label: "Quadrillions",
    value: 1000000000000000,
    color: "#6366F1",
    desc: "1,000,000,000,000,000",
  },
  {
    id: "trillions",
    label: "Trillions",
    value: 1000000000000,
    color: "#8B5CF6",
    desc: "1,000,000,000,000",
  },
  { id: "billions", label: "Billions", value: 1000000000, color: "#D946EF", desc: "1,000,000,000" },
  { id: "millions", label: "Millions", value: 1000000, color: "#F43F5E", desc: "1,000,000" },
  { id: "thousands", label: "Thousands", value: 1000, color: "#2DD4BF", desc: "1,000" },
  { id: "hundreds", label: "Hundreds", value: 100, color: "#34D399", desc: "100" },
  { id: "tens", label: "Tens", value: 10, color: "#60A5FA", desc: "10" },
  { id: "ones", label: "Ones", value: 1, color: "#94A3B8", desc: "1" },
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
  const t = TRANSLATIONS.en;
  const [system, setSystem] = useState<"indian" | "intl">("indian");
  const [activeId, setActiveId] = useState("ones");

  const currentValues = system === "indian" ? INDIAN_VALUES : INT_VALUES;
  const current =
    currentValues.find((p) => p.id === activeId) || currentValues[currentValues.length - 1];

  const formatNumber = (val: number) => {
    if (system === "indian") {
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
        <GameActivityArea data-testid="activity-area">
          <ChallengeHeader
            icon={Binary}
            title={t.math_placeValues}
            subtitle={t.pv_subtitle}
            streak={0}
          />
          <SystemToggle>
            <Tag $isActive={system === "indian"} onClick={() => setSystem("indian")}>
              <MapPin size={16} /> {t.pv_indian} ({t.pv_lakhs})
            </Tag>
            <Tag $isActive={system === "intl"} onClick={() => setSystem("intl")}>
              <Globe size={16} /> {t.pv_international} ({t.pv_millions})
            </Tag>
          </SystemToggle>

          <DisplayWrapper>
            <PulseCircle
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId + system}
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.2, opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    fontSize: "min(4rem, 10vw)",
                    fontWeight: 900,
                    color: current.color,
                    textAlign: "center",
                    wordBreak: "break-all",
                    textShadow: `0 10px 20px ${current.color}20`,
                    lineHeight: 1.1,
                  }}
                >
                  {formatNumber(current.value)}
                </div>
                <KidoText fontSize="xl" color="primary">
                  {current.label}
                </KidoText>
                <p
                  style={{
                    fontWeight: 800,
                    opacity: 0.5,
                    letterSpacing: "2px",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    color: current.color,
                  }}
                >
                  {system === "indian"
                    ? t.pv_indian.toUpperCase()
                    : t.pv_international.toUpperCase()}
                </p>
              </motion.div>
            </AnimatePresence>
          </DisplayWrapper>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              maxWidth: "900px",
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

          <div style={{ marginTop: "60px", width: "100%", maxWidth: "800px" }}>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#6366F1",
                fontWeight: 900,
              }}
            >
              <Globe size={24} /> {t.pv_comparisonTable}
            </h3>
            <div
              style={{ overflowX: "auto", width: "100%", borderRadius: "20px", marginTop: "15px" }}
            >
              <ComparisonTable>
                <thead>
                  <tr>
                    <th>{t.pv_number}</th>
                    <th>{t.pv_indian}</th>
                    <th>{t.pv_international}</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          fontWeight: 800,
                          fontFamily: "monospace",
                          color: "#6366F1",
                          fontSize: "1rem",
                        }}
                      >
                        {row.value}
                      </td>
                      <td style={{ fontWeight: 700, color: "#8B5CF6" }}>{row.indian}</td>
                      <td style={{ fontWeight: 700, color: "#EC4899" }}>{row.intl}</td>
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
              <HelpCircle size={16} /> {t.pv_commaRule}
            </ConfigSubTitle>
            <div style={{ fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 600 }}>
              <p>
                <strong style={{ color: "#6366F1" }}>{t.pv_indian}:</strong> 1st comma after 3
                digits, then every 2 digits. (1,00,00,000)
              </p>
              <p style={{ marginTop: "12px" }}>
                <strong style={{ color: "#EC4899" }}>{t.pv_international}:</strong> Commas after
                every 3 digits. (10,000,000)
              </p>
            </div>
          </ConfigSection>

          <ConfigSection>
            <ConfigSubTitle>{t.pv_quickTip}</ConfigSubTitle>
            <div style={{ fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 600, opacity: 0.9 }}>
              <p>1 Million = 10 Lakhs</p>
              <p style={{ marginTop: "4px" }}>1 Billion = 100 Crores</p>
              <p style={{ marginTop: "4px" }}>1 Trillion = 1 Lakh Crores</p>
            </div>
          </ConfigSection>
        </SettingsArea>
      </GameLayout>
    </PageContainer>
  );
};

export default PlaceValuesPage;
