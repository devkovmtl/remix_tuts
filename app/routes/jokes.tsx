import { Outlet } from '@remix-run/react';

export default function Jokes() {
  return (
    <div>
      <h1>J🤪kes</h1>
      <Outlet />
    </div>
  );
}
