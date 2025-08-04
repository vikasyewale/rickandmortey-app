import { Outlet } from '@tanstack/react-router';

export default function App() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Outlet />
    </div>
  );
}
