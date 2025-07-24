export const saveTranscriptToDB = async (transcript: any[]) => {
  try {
    const response = await fetch("http://localhost:4000/api/transcripts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transcript }), // 👈 Wrap in an object
    });

    if (!response.ok) {
      console.error("❌ Failed to save transcript");
    } else {
      console.log("✅ Transcript saved");
    }
  } catch (err) {
    console.error("Error saving transcript:", err);
  }
};
