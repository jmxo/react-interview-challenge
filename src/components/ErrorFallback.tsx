import React from "react";

export default function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" style={{ padding: 24 }}>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
