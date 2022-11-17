import { useEffect, useState } from "react";

const useGetSession = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  return { loading, session };
};

export default useGetSession;
