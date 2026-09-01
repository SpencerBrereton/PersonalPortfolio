import './MovingBackgroundStripes.css';

export function MovingBackgroundStripes() {
  return (
    <div className="moving-background-stripes">
      {/* Create multiple horizontal stripe rows at different vertical offsets */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="moving-stripe-row" 
          style={{ 
            top: `${(i * 100) / 11}%`,
            animationDuration: `${10 + (i % 4) * 5}s`,
            animationDelay: `-${i * 1.5}s`,
            opacity: 0.2 + (i % 3) * 0.15 // Bolder opacity: 0.2, 0.35, 0.5
          }}
        >
          {/* Each row contains two sets of colors to allow for a seamless infinite loop */}
          <div className="stripe-segment">
            <div className="bg-stripe bg-stripe-0"></div>
            <div className="bg-stripe bg-stripe-1"></div>
            <div className="bg-stripe bg-stripe-2"></div>
            <div className="bg-stripe bg-stripe-3"></div>
          </div>
          <div className="stripe-segment">
            <div className="bg-stripe bg-stripe-0"></div>
            <div className="bg-stripe bg-stripe-1"></div>
            <div className="bg-stripe bg-stripe-2"></div>
            <div className="bg-stripe bg-stripe-3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
