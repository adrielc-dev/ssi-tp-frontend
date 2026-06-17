import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartCard, ChartTitle } from '../styles/DashboardStyles';

function ParticipationsByDayChart({ logs }) {
  const dataMap = {};
  (logs || []).forEach((log) => {
    const date = log.date;
    dataMap[date] = (dataMap[date] || 0) + 1;
  });

  const data = Object.entries(dataMap)
    .map(([date, count]) => ({ date, cantidad: count }))
    .sort((a, b) => {
      const [dA, mA, yA] = a.date.split('/');
      const [dB, mB, yB] = b.date.split('/');
      return new Date(`${yA}-${mA}-${dA}`) - new Date(`${yB}-${mB}-${dB}`);
    });

  return (
    <ChartCard>
      <ChartTitle>📊 Participaciones por Día</ChartTitle>
      {data.length === 0 ? (
        <p style={{ color: '#5f6368', textAlign: 'center', padding: '40px 0', fontSize: '14px' }}>
          Sin datos disponibles
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis
              dataKey="date"
              tick={{ fill: '#9e9e9e', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#9e9e9e', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                background: '#16213e',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '13px',
              }}
              cursor={{ fill: 'rgba(233, 69, 96, 0.08)' }}
            />
            <Bar
              dataKey="cantidad"
              fill="#e94560"
              radius={[6, 6, 0, 0]}
              maxBarSize={48}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
}

export default ParticipationsByDayChart;
