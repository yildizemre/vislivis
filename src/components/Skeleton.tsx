/**
 * Skeleton Loading bileşeni
 * İçerik yüklenirken gösterilen placeholder animasyonu
 * 
 * Kullanım:
 * <Skeleton className="h-64 w-full" />
 * <Skeleton variant="text" />
 * <Skeleton variant="circular" className="w-12 h-12" />
 */

interface SkeletonProps {
  variant?: 'rectangular' | 'text' | 'circular';
  className?: string;
  animation?: 'pulse' | 'wave';
}

const Skeleton = ({ 
  variant = 'rectangular', 
  className = '', 
  animation = 'pulse' 
}: SkeletonProps) => {
  const baseClasses = 'bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 bg-[length:200%_100%]';
  
  const variantClasses = {
    rectangular: 'rounded-lg',
    text: 'h-4 rounded',
    circular: 'rounded-full'
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer'
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${animationClasses[animation]}
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

// Hazır skeleton layoutları
export const CardSkeleton = () => (
  <div className="p-6 bg-white rounded-2xl border border-slate-100 space-y-4">
    <Skeleton className="h-48 w-full" />
    <Skeleton variant="text" className="w-3/4" />
    <Skeleton variant="text" className="w-1/2" />
    <div className="flex gap-2">
      <Skeleton variant="circular" className="w-10 h-10" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" className="w-1/3" />
        <Skeleton variant="text" className="w-1/4" />
      </div>
    </div>
  </div>
);

export const BlogCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 space-y-4">
    <Skeleton className="h-56 w-full rounded-none" />
    <div className="p-6 space-y-3">
      <div className="flex gap-4">
        <Skeleton variant="text" className="w-20" />
        <Skeleton variant="text" className="w-16" />
      </div>
      <Skeleton variant="text" className="w-full h-6" />
      <Skeleton variant="text" className="w-5/6 h-6" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-4/5" />
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <Skeleton variant="circular" className="w-10 h-10" />
          <Skeleton variant="text" className="w-24" />
        </div>
        <Skeleton variant="text" className="w-20" />
      </div>
    </div>
  </div>
);

export const SectionSkeleton = () => (
  <div className="py-24 bg-white">
    <div className="container mx-auto px-8">
      <div className="text-center mb-16 space-y-4">
        <Skeleton variant="text" className="w-32 h-8 mx-auto" />
        <Skeleton variant="text" className="w-96 h-12 mx-auto" />
        <Skeleton variant="text" className="w-[600px] h-6 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  </div>
);

export default Skeleton;
