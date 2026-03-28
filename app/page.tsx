export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div className="text-center max-w-2xl animate-fade-in">
        <div
          className="mx-auto mb-6 h-16 w-16 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, var(--accent), #7c3aed)",
          }}
        />
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Coming Soon
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          We&apos;re building something amazing. Sections will be added here
          one by one.
        </p>
      </div>
    </div>
  );
}
