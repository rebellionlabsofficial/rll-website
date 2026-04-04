import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ScrollAnimation>
        <h1 className="font-heading text-4xl font-bold text-text-heading">
          Rebel Lion Labs
        </h1>
      </ScrollAnimation>
    </main>
  );
}
