export const GeometricShape = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main rotating square */}
      <div className="absolute w-64 h-64 md:w-80 md:h-80 border-4 border-foreground animate-float">
        <div className="absolute inset-4 bg-foreground" />
      </div>
      
      {/* Secondary square */}
      <div 
        className="absolute w-48 h-48 md:w-64 md:h-64 border-4 border-foreground rotate-45 animate-float"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Inner circle */}
      <div 
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-foreground bg-background animate-float"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-foreground transform -translate-x-1/2 -translate-y-full" />
      <div className="absolute bottom-0 left-1/2 w-0.5 h-16 bg-foreground transform -translate-x-1/2 translate-y-full" />
      <div className="absolute left-0 top-1/2 h-0.5 w-16 bg-foreground transform -translate-y-1/2 -translate-x-full" />
      <div className="absolute right-0 top-1/2 h-0.5 w-16 bg-foreground transform -translate-y-1/2 translate-x-full" />
    </div>
  );
};
