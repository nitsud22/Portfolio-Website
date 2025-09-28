// src/pages/TestPage.tsx

export default function TestPage() {
  const paragraphs = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Test Page</h1>
      <p>Scroll down this long page, navigate away, and then click back.</p>
      {paragraphs.map((p) => (
        <p key={p}>Paragraph #{p}</p>
      ))}
    </div>
  );
}
