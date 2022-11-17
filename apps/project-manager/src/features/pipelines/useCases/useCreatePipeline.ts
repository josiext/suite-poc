import { useState } from "react";

const useCreatePipeline = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async () => {};

  return { loading, error, create };
};

export default useCreatePipeline;
