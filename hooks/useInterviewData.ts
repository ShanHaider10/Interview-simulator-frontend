import { useState, useEffect } from "react";

export default function useInterviewData(role: string) {
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch(`http://localhost:4000/api/interview/sales`);
      const data = await res.json();
      setQuestions(data);
      setLoading(false);
    };
    // if (role) fetchQuestions();

    fetchQuestions()
  }, []);

  return { questions, loading };
}