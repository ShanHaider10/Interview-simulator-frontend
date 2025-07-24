"use client";

import useInterviewData from "../hooks/useInterviewData"
import {useInterviewContext } from "../context/InterviewContext"
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Transcript from "./Transcript";




export default function Question() {
  const { role, setTranscript } = useInterviewContext();
  const { questions, loading } = useInterviewData(role);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleNext = async () => {
    const response = await fetch("http://localhost:4000/api/sentiment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer }),
    });
    const { sentiment } = await response.json();
    setTranscript((prev) => [...prev, { question: questions[index], answer, sentiment }]);
    setAnswer("");
    setIndex(index + 1);
  };

//   if (loading) return <LoadingSpinner />;
//   if (index >= questions.length) return <Transcript />;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        padding: "2rem",
        color: "#f8fafc",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          padding: "2rem",
          borderRadius: "1rem",
          backdropFilter: "blur(16px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1rem" }}>
          💬 {questions[index]}
        </h2>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "0.75rem",
            fontSize: "1rem",
            border: "1px solid #334155",
            resize: "none",
            minHeight: "120px",
            marginBottom: "1.5rem",
          }}
        />
        <button
          onClick={handleNext}
          style={{
            width: "100%",
            padding: "0.9rem",
            borderRadius: "0.75rem",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "white",
            background: "linear-gradient(to right, #22d3ee, #0ea5e9)",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 12px 25px rgba(14, 165, 233, 0.3)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        >
          ➡️ Next
        </button>
      </div>
    </div>
  );
}
