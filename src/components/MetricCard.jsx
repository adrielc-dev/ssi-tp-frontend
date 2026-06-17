import { MetricCardWrapper, MetricIcon, MetricLabel, MetricValue } from '../styles/DashboardStyles';

function MetricCard({ icon, label, value, accentColor, iconBg }) {
  return (
    <MetricCardWrapper $accentColor={accentColor}>
      <MetricIcon $bgColor={iconBg}>{icon}</MetricIcon>
      <MetricLabel>{label}</MetricLabel>
      <MetricValue>{value}</MetricValue>
    </MetricCardWrapper>
  );
}

export default MetricCard;
