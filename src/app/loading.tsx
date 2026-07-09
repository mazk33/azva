export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--azva-canvas)]">
      <div className="text-center">
        <p className="eyebrow mb-6">AZVA</p>
        <p className="font-[var(--font-fraunces)] text-4xl italic text-[var(--azva-primary)]">
          Aligning...
        </p>
      </div>
    </div>
  );
}