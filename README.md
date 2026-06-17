# S-Code Phishing Simulation — Frontend

Aplicación React para el simulacro educativo de phishing laboral. Diseño inspirado en Material Design (Google Accounts) para la pantalla de acceso y dashboard con métricas y gráficos.

## Stack Tecnológico

- **Framework:** React 19
- **Build tool:** Vite 6
- **Routing:** React Router 7
- **HTTP Client:** Axios
- **Estilos:** Styled Components
- **Gráficos:** Recharts

## Requisitos

- Node.js >= 18
- npm >= 9

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

Por defecto corre en `http://localhost:5173`. En desarrollo, Vite proxyea `/api` hacia `http://localhost:3000` (backend).

## Build para producción

```bash
npm run build
```

Genera los archivos estáticos en la carpeta `dist/`.

## Rutas

| Ruta         | Componente       | Descripción                          |
| ------------ | ---------------- | ------------------------------------ |
| `/login`     | `LoginPage`      | Pantalla de autenticación falsa      |
| `/dashboard` | `DashboardPage`  | Métricas, tabla y gráficos           |
| `*`          | Redirección      | Cualquier otra ruta → `/login`       |

## Páginas

### Login (`/login`)

Formulario con estilo Google Accounts que captura:
- Correo electrónico
- Contraseña

Envía los datos a `POST /api/access` y redirige a `/dashboard`.

### Dashboard (`/dashboard`)

Muestra:

- **4 tarjetas de métricas:** participantes totales, correos registrados, participaciones del día, última participación
- **Tabla de accesos:** ID, fecha, hora, email, dominio, estado
- **3 gráficos (Recharts):**
  - Participaciones por día (BarChart)
  - Dominios más utilizados (PieChart)
  - Participaciones por hora (LineChart)

Los datos se refrescan automáticamente cada 15 segundos.

## Estructura del proyecto

```
src/
├── api/
│   └── axios.js              # Instancia de Axios (baseURL: /api)
├── components/
│   ├── AccessTable.jsx       # Tabla de accesos
│   ├── DomainsChart.jsx      # Gráfico de dona (dominios)
│   ├── MetricCard.jsx        # Tarjeta de métrica
│   ├── ParticipationsByDayChart.jsx   # Barras por día
│   └── ParticipationsByHourChart.jsx  # Líneas por hora
├── pages/
│   ├── LoginPage.jsx         # Pantalla de login
│   └── DashboardPage.jsx     # Dashboard
├── styles/
│   ├── GlobalStyles.js       # Estilos globales
│   ├── LoginStyles.js        # Estilos del login (Material Design)
│   └── DashboardStyles.js    # Estilos del dashboard
├── App.jsx                   # Router principal
└── main.jsx                  # Entry point
```

## Scripts disponibles

| Comando           | Descripción                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo   |
| `npm run build`   | Build para producción           |
| `npm run preview` | Previsualiza el build localmente|

## Despliegue en Render

1. Subí el repositorio a GitHub.
2. En [Render](https://render.com), creá un **Static Site** conectado al repo.
3. Configuración:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. En la sección **Environment**, agregá una variable:
   - `VITE_API_URL`: URL del backend (ej. `https://tu-backend.onrender.com`)
5. Actualizá `src/api/axios.js` para usar `import.meta.env.VITE_API_URL` como baseURL en producción.

> También podés usar **Vercel** (conectando el repo, detecta Vite automáticamente).

## Licencia

Proyecto educativo con fines de concientización en seguridad informática.
