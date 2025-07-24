"use client";
import { createContext, useContext, useState } from "react";
import { TranscriptEntry } from "../types/types";

const InterviewContext = createContext<any>(null);

export function InterviewProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState("");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);

  const reset = () => {
    setRole("");
    setTranscript([]);
  };

  return (
    <InterviewContext.Provider value={{ role, setRole, transcript, setTranscript, reset }}>
      {children}
    </InterviewContext.Provider>
  );
}

export const useInterviewContext = () => useContext(InterviewContext);