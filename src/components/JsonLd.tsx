interface JsonLdProps {
  data: Record<string, unknown>;
}

// Structured data for search engines. "<" is escaped so the payload can never
// close the script tag early.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
