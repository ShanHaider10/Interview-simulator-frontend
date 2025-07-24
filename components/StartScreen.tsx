"use client";

import {useInterviewContext} from "../context/InterviewContext"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function StartScreen() {
  const router = useRouter();
  const { setRole, reset } = useInterviewContext();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

//   const handleStart = (selectedRole: string) => {
//     reset();
//     setRole(selectedRole);
//     router.push("/interview");
//   };

 const handleStart = (selectedRole: string) => {
    reset();
    setRole(selectedRole);
    router.push("/inter");
  };



  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          theme === "dark"
            ? "radial-gradient(circle at top left, #0f172a, #1e293b, #0f172a)"
            : "radial-gradient(circle at top left, #fef9c3, #f3f4f6, #e5e7eb)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        color: theme === "dark" ? "#f9fafb" : "#111827",
        transition: "all 0.5s ease-in-out",
        fontFamily: "'Inter', sans-serif",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          background: theme === "dark" ? "rgba(255, 255, 255, 0.06)" : "#ffffffd9",
          backdropFilter: "blur(30px)",
          padding: "3rem",
          borderRadius: "1.75rem",
          boxShadow: theme === "dark"
            ? "0 25px 80px rgba(0, 0, 0, 0.75)"
            : "0 20px 50px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
          width: "100%",
          maxWidth: "500px",
          animation: "fadeInUp 0.9s ease forwards",
          border: theme === "dark" ? "1px solid #334155" : "1px solid #e2e8f0",
        }}
      >
        <h1
          style={{
            fontSize: "2.75rem",
            fontWeight: 800,
            marginBottom: "2.2rem",
            lineHeight: 1.3,
            letterSpacing: "-0.7px",
          }}
        >
          🎯 Choose Your Role & Get Ready!
        </h1>
        <button
          onClick={() => handleStart("sales")}
          style={{
            marginBottom: "1.5rem",
            width: "100%",
            padding: "0.9rem",
            borderRadius: "0.9rem",
            background: "linear-gradient(to right, #8b5cf6, #4f46e5)",
            color: "white",
            fontWeight: 700,
            fontSize: "1.1rem",
            cursor: "pointer",
            border: "none",
            boxShadow: "0 12px 25px rgba(139, 92, 246, 0.45)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.04)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.0)"}
        >
          💼 Sales Representative
        </button>
        <button
          onClick={() => handleStart("support")}
          style={{
            width: "100%",
            padding: "0.9rem",
            borderRadius: "0.9rem",
            background: "linear-gradient(to right, #22d3ee, #0ea5e9)",
            color: "white",
            fontWeight: 700,
            fontSize: "1.1rem",
            cursor: "pointer",
            border: "none",
            boxShadow: "0 12px 25px rgba(14, 165, 233, 0.45)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.04)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1.0)"}
        >
          🤝 Customer Support
        </button>
        <button
          onClick={toggleTheme}
          style={{
            marginTop: "2.8rem",
            background: theme === "dark" ? "#1e293b" : "#e0f2fe",
            border: "none",
            padding: "0.7rem 1.4rem",
            borderRadius: "0.6rem",
            fontSize: "1rem",
            color: theme === "dark" ? "#f8fafc" : "#1e293b",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: theme === "dark" ? "0 6px 16px rgba(0, 0, 0, 0.3)" : "0 6px 16px rgba(0, 0, 0, 0.08)",
          }}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}
