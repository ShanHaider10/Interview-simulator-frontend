"use client";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveTranscriptToDB } from "../utils/api";
import { useInterviewContext } from "../context/InterviewContext";

export default function Transcript() {
  const { transcript, reset } = useInterviewContext();
  const router = useRouter();

  useEffect(() => {
    if (transcript.length > 0) {
      saveTranscriptToDB(transcript);
    }
  }, [transcript]);

  const handleRestart = () => {
    reset();
    router.push("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 6,
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", maxWidth: "1200px" }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid #00bcd4",
            color: "#fff",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom sx={{ color: "#80deea", fontWeight: "bold" }}>
            📄 Interview Summary
          </Typography>

          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="interview summary table">
              <TableHead sx={{ backgroundColor: "rgba(0, 188, 212, 0.3)" }}>
                <TableRow>
                  <TableCell sx={{ color: "#e0f7fa", fontWeight: "bold" }}>#</TableCell>
                  <TableCell sx={{ color: "#e0f7fa", fontWeight: "bold" }}>Question</TableCell>
                  <TableCell sx={{ color: "#e0f7fa", fontWeight: "bold" }}>Answer</TableCell>
                  <TableCell sx={{ color: "#e0f7fa", fontWeight: "bold" }}>Sentiment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transcript.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <TableCell sx={{ color: "#4dd0e1", fontWeight: "bold" }}>{idx + 1}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{item.question}</TableCell>
                    <TableCell sx={{ color: "#cfd8dc" }}>{item.answer}</TableCell>
                    <TableCell>
                      <Chip
                        label={item.sentiment}
                        sx={{
                          backgroundColor:
                            item.sentiment === "positive"
                              ? "rgba(76, 175, 80, 0.2)"
                              : item.sentiment === "negative"
                              ? "rgba(244, 67, 54, 0.2)"
                              : "rgba(255, 235, 59, 0.2)",
                          color:
                            item.sentiment === "positive"
                              ? "#81c784"
                              : item.sentiment === "negative"
                              ? "#ef9a9a"
                              : "#fff176",
                          fontWeight: "bold",
                          backdropFilter: "blur(4px)",
                        }}
                      />
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box textAlign="center" mt={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                onClick={handleRestart}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "999px",
                  background: "linear-gradient(to right, #00bcd4, #2196f3)",
                  color: "#fff",
                  fontWeight: "bold",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  ":hover": {
                    background: "linear-gradient(to right, #2196f3, #00bcd4)",
                  },
                }}
              >
                🔁 Restart Interview
              </Button>
            </motion.div>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
