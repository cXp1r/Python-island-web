'use client';

import { useState, useEffect, useCallback } from 'react';
import { Github } from 'lucide-react';

export default function DynamicIsland() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useCallback((hash: string) => {
    history.pushState(null, '', window.location.pathname + hash);
    window.dispatchEvent(new CustomEvent('pyisland:navigate', { detail: { hash } }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: `translateX(-50%) translateY(${isScrolled ? '-100px' : '0'})`,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: isScrolled ? 'none' : 'auto',
        opacity: isScrolled ? 0 : 1,
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
      }}
    >
      <div
        style={{ position: 'relative', pointerEvents: 'auto' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Outer glow */}
        <div
          style={{
            position: 'absolute',
            inset: '-2px',
            borderRadius: '32px',
            background: 'transparent',
            boxShadow: '0 0 0 1px rgba(113, 113, 122, 0.12), 0 8px 32px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15)',
            transform: isHovered ? 'scaleX(1.02)' : 'scaleX(1)',
            transition: 'box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            ...(isHovered && {
              boxShadow: '0 0 0 1px rgba(113, 113, 122, 0.18), 0 12px 48px rgba(0, 0, 0, 0.35), 0 4px 16px rgba(0, 0, 0, 0.2)',
            }),
          }}
        />

        {/* Main island body */}
        <div
          style={{
            position: 'relative',
            borderRadius: '28px',
            background: '#000000',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 10px',
            minWidth: '240px',
            transform: isHovered ? 'scaleX(1.02)' : 'scaleX(1)',
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Left logo */}
          <button
            onClick={() => navigate('#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              cursor: 'pointer',
              flexShrink: 0,
              background: 'none',
              border: 'none',
              padding: 0,
            }}
            aria-label="Pyisland 首页"
          >
            <img src="/island_w.svg" alt="" style={{ width: '20px', height: '20px', flexShrink: 0 }} />
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#fafafa',
                letterSpacing: '-0.02em',
              }}
            >
              Pyisland
            </span>
          </button>

          {/* Divider */}
          <div
            style={{
              width: '1px',
              height: '16px',
              background: 'rgba(255, 255, 255, 0.12)',
              margin: '0 4px',
              flexShrink: 0,
            }}
          />

          {/* Nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <button
              onClick={() => navigate('#features')}
              style={{
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#71717a',
                textDecoration: 'none',
                transition: 'color 0.2s ease, background 0.2s ease',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#fafafa';
                (e.target as HTMLElement).style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#71717a';
                (e.target as HTMLElement).style.background = 'transparent';
              }}
            >
              功能
            </button>
          </div>

          {/* Divider */}
          <div
            style={{
              width: '1px',
              height: '16px',
              background: 'rgba(255, 255, 255, 0.12)',
              margin: '0 4px',
              flexShrink: 0,
            }}
          />

          {/* GitHub icon */}
          <a
            href="https://github.com/Python-island/Python-island"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              color: '#71717a',
              textDecoration: 'none',
              transition: 'color 0.2s ease, background 0.2s ease',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#fafafa';
              el.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = '#71717a';
              el.style.background = 'transparent';
            }}
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
