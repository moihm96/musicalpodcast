import { useEffect, useState } from "react";

export default function useLoadingBounce() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return {
    loading,
    setLoading,
  };
}
