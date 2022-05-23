// LiveReload:hot reload the app
// Outlet for route
import { LiveReload, Outlet } from '@remix-run/react';

// root of the app
export default function App() {
  return (
    <html>
      <head>
        <meta charSet='utf-8' />
        <title>Remix Jokes App</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
