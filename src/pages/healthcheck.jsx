import { useState, useEffect } from "react";

export default function HealthCheck() {
  const [healthStatus, setHealthStatus] = useState("Checking...");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("/api/healthcheck");
        if (response.status === 200) {
          setHealthStatus("API is healthy");
        } else {
          setHealthStatus("API is not healthy");
        }
      } catch (error) {
        setHealthStatus("Error checking API health");
      }
    };
    checkHealth();
  }, []);

  return (
    <div>
      <p>{healthStatus}</p>
    </div>
  );
}
