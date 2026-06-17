import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartCard, ChartTitle } from '../styles/DashboardStyles';

function ParticipationsByHourChart({ logs }) {
  const hourMap = {};
  for (let i = 0; i < 24; i++) {
    hourMap[i] = 0;
  }

  (logs || []).forEach((log) => {
    if (log.createdAt) {
      const hour = new Date(log.createdAt).getHours();
      hourMap[hour] = (hourMap[hour] || 0) + 1;
    } else if (log.time) {
      const parts = log.time.split(':');
      if (parts.length >= 1) {
        const hour = parseInt(parts[0], 10);
        if (!isNaN(hour)) {
          hourMap[hour] = (hourMap[hour] || 0) + 1;
        }
      }
    }
  });

  const data = Object.entries(hourMap).map(([hour, count]) => ({
    hora: `${String(hour).padStart(2, '0')}:00`,
    cantidad: count,
  }));

  const hasData = data.some((d) => d.cantidad > 0);

  return (
    <ChartCard>
      <ChartTitle>⏰ Participaciones por Hora</ChartTitle>
      {!hasData ? (
        <p style={{ color: '#5f6368', textAlign: 'center', padding: '40px 0', fontSize: '14px' }}>
          Sin datos disponibles
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
            <XAxis
              dataKey="hora"
              tick={{ fill: '#9e9e9e', fontSize: 11 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
              interval={2}
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
            />
            <Line
              type="monotone"
              dataKey="cantidad"
              stroke="#533483"
              strokeWidth={2.5}
              dot={{ fill: '#533483', strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: '#e94560' }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
}

export default ParticipationsByHourChart;
