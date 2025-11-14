interface GradientMeshProps {
  variant?: 'blue' | 'purple' | 'cyan' | 'dark';
  opacity?: number;
}

const GradientMesh = ({ variant = 'blue', opacity = 0.4 }: GradientMeshProps) => {
  const variants = {
    blue: 'from-blue-500/20 via-cyan-500/20 to-indigo-500/20',
    purple: 'from-purple-500/20 via-pink-500/20 to-indigo-500/20',
    cyan: 'from-cyan-500/20 via-blue-500/20 to-teal-500/20',
    dark: 'from-slate-800/30 via-slate-700/30 to-slate-900/30'
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {/* Animated gradient blobs */}
      <div className={`absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br ${variants[variant]} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '8s' }}></div>
      <div className={`absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-tr ${variants[variant]} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      <div className={`absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-tl ${variants[variant]} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      
      {/* Mesh grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)
            `
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientMesh;
