import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { ChartCard, ChartTitle } from '../styles/DashboardStyles';

const COLORS = ['#e94560', '#533483', '#0f3460', '#4285f4', '#34a853', '#fbbc05', '#ea4335', '#00bcd4'];

function DomainsChart({ logs }) {
  const domainMap = {};
  (logs || []).forEach((log) => {
    const d = log.domain;
    domainMap[d] = (domainMap[d] || 0) + 1;
  });

  const data = Object.entries(domainMap)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const renderLabel = ({ name, percent }) =>
    percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : '';

  return (
    <ChartCard>
      <ChartTitle>🌐 Dominios Más Utilizados</ChartTitle>
      {data.length === 0 ? (
        <p style={{ color: '#5f6368', textAlign: 'center', padding: '40px 0', fontSize: '14px' }}>
          Sin datos disponibles
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={95}
              innerRadius={45}
              paddingAngle={3}
              dataKey="value"
              label={renderLabel}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: '#16213e',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '13px',
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '12px', color: '#9e9e9e' }}
              iconType="circle"
              iconSize={8}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
}

export default DomainsChart;
