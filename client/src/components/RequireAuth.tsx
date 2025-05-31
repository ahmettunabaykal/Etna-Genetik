// components/RequireAuth.tsx
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const [tokenExists, setTokenExists] = useState<boolean | null>(null);
  const [_, navigate] = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login", { replace: true });
      setTokenExists(false);
    } else {
      setTokenExists(true);
    }
  }, []);

  // Prevent rendering until auth check is done
  if (tokenExists === null) return null;

  // If user was redirected, don't render children
  if (!tokenExists) return null;

  return <>{children}</>;
};

export default RequireAuth;
