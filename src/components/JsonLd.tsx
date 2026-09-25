import type { Thing } from "schema-dts";

type Node = Exclude<Thing, string>;

interface JsonLdProps {
  /** One or more schema.org nodes. Each gets its own script tag. */
  data: Node | Node[];
}

// Structured data for search engines. "<" is escaped so the payload can never
// close the script tag early.
export default function JsonLd({ data }: JsonLdProps) {
  const nodes = Array.isArray(data) ? data : [data];
  return nodes.map((node, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          ...(node as object),
        }).replace(/</g, "\\u003c"),
      }}
    />
  ));
}
