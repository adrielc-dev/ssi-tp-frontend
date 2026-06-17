import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const countUp = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

export const DashboardWrapper = styled.div`
  min-height: 100vh;
  background: #1a1a2e;
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
`;

export const Header = styled.header`
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  padding: 24px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const HeaderLogo = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e94560, #533483);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: white;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: -0.3px;
`;

export const HeaderBadge = styled.span`
  background: rgba(233, 69, 96, 0.15);
  color: #e94560;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(233, 69, 96, 0.3);
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const MainContent = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 40px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(180deg, #e94560, #533483);
    border-radius: 2px;
  }
`;

/* Metric Cards */
export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const MetricCardWrapper = styled.div`
  background: linear-gradient(145deg, #16213e, #1a1a2e);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    border-color: ${({ $accentColor }) => $accentColor || 'rgba(233, 69, 96, 0.3)'};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $accentColor }) =>
      $accentColor || 'linear-gradient(90deg, #e94560, #533483)'};
    border-radius: 16px 16px 0 0;
  }
`;

export const MetricIcon = styled.div`
  width: 44px;
  height: 44px;
  background: ${({ $bgColor }) => $bgColor || 'rgba(233, 69, 96, 0.12)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const MetricLabel = styled.p`
  font-size: 13px;
  color: #9e9e9e;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 8px;
`;

export const MetricValue = styled.p`
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  animation: ${countUp} 0.6s ease-out;
  letter-spacing: -0.5px;
`;

/* Table */
export const TableContainer = styled.div`
  background: linear-gradient(145deg, #16213e, #1a1a2e);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const TableHeadCell = styled.th`
  padding: 14px 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #9e9e9e;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 14px 20px;
  font-size: 14px;
  color: #e0e0e0;
`;

export const StatusBadge = styled.span`
  background: rgba(76, 175, 80, 0.12);
  color: #66bb6a;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(76, 175, 80, 0.2);
`;

export const DomainBadge = styled.span`
  background: rgba(83, 52, 131, 0.15);
  color: #b388ff;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 48px 20px;
  color: #5f6368;
  font-size: 14px;
`;

/* Charts */
export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.7s ease-out;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  background: linear-gradient(145deg, #16213e, #1a1a2e);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ChartTitle = styled.h3`
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 18px;
  gap: 12px;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(233, 69, 96, 0.2);
  border-top-color: #e94560;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const TableScrollWrapper = styled.div`
  overflow-x: auto;
`;
