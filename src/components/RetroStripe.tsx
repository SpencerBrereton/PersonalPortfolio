import { useRef, useEffect, useState } from 'react';

interface RetroStripeProps {
  direction?: 'left' | 'right';
}

export function RetroStripe({ direction = 'left' }: RetroStripeProps) {
  const stripeRef = useRef<HTMLDivElement>(null);
  const [animState, setAnimState] = useState<'initial' | 'forward' | 'reverse'>('initial');

  // Compute 8 random durations (2 sets of 4 colors)
  const generateDurations = () => {
    const random = () => (Math.random() * (2.8 - 1.2) + 1.2).toFixed(2) + 's';
    return Array.from({ length: 8 }, () => random());
  };

  const [durations, setDurations] = useState(generateDurations());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Re-roll the dice for the durations on EVERY trigger!
          setDurations(generateDurations());
          
          if (entry.isIntersecting) {
            setAnimState('forward');
          } else {
            setAnimState((prev) => prev === 'forward' ? 'reverse' : 'initial');
          }
        });
      },
      // Intersects as long as element is ABOVE the -400px threshold from the viewport bottom
      { threshold: 0, rootMargin: "10000px 0px -400px 0px" } 
    );

    if (stripeRef.current) {
      observer.observe(stripeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={stripeRef} 
      className={`retro-stripes-container slide-${direction} anim-${animState}`} 
    >
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className={`stripe stripe-${i % 4}`} 
          style={{ transitionDuration: durations[i] }}
        />
      ))}
    </div>
  );
}
