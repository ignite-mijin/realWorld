import { Routes, Route, Navigate } from "react-router-dom";

import type { RouteItem } from "@/router/routes";

interface RouteIndexProps {
  routes: RouteItem[];
  path?: string;
}

// const Auth = () => {
//login 작업 후 mypage 접근로직 필요
// }

function RouterIndex({ routes }: RouteIndexProps) {
  return (
    <Routes>
      {routes.map(({ component: Component, ...props }, i) => (
        <Route key={`${Date.now()}`} {...props} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default RouterIndex;
