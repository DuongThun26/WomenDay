import React, { useState, useEffect } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TypewriterTextProps {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speedMs = 65,
  startDelayMs = 400,
  className,
  style,
}) => {
  const isReducedMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isReducedMotion) {
      return;
    }

    let currentIndex = 0;
    let timer: number | null = null;

    const startTimer = window.setTimeout(() => {
      timer = window.setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          setIsDone(true);
          if (timer) window.clearInterval(timer);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimer);
      if (timer) window.clearInterval(timer);
    };
  }, [text, speedMs, startDelayMs, isReducedMotion]);

  const effectiveText = isReducedMotion ? text : displayedText;
  const effectiveDone = isReducedMotion ? true : isDone;

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        position: 'relative',
        ...style,
      }}
    >
      {/* Accessible DOM text for assistive technologies */}
      <span
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {text}
      </span>

      {/* Visual animated text */}
      <span aria-hidden="true">
        {effectiveText}
      </span>

      {/* Blinking cursor while typing, disappears when done */}
      {!effectiveDone && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1.1em',
            backgroundColor: 'var(--color-gold-accent)',
            marginLeft: '3px',
            verticalAlign: 'middle',
            animation: 'sparklePop 0.8s infinite alternate',
          }}
        />
      )}
    </div>
  );
};
