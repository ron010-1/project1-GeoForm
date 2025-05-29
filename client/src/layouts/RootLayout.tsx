import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <h1>Teste</h1>
      <Outlet />
    </div>
  );
}
