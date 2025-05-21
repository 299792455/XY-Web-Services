export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 grid grid-cols-12 opacity-5 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={`v-${i}`} className="border-r border-cyan-500" />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 opacity-5 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={`h-${i}`} className="border-b border-cyan-500" />
        ))}
      </div>
    </div>
  );
}
