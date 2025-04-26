// app/404/page.tsx
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#f7f9fc",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <button style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Go Home
        </button>
      </Link>
    </div>
  );
}
