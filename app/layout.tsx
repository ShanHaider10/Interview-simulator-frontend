import "@/app/globals.css";
import { InterviewProvider } from "@/context/InterviewContext";

export const metadata = {
  title: "Interview Simulator",
  description: "Practice for real interviews",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <InterviewProvider>{children}</InterviewProvider>
      </body>
    </html>
  );
}
