'use client';

import stylesGlass from '@/styles/glass.module.css';
import stylesEffect from '@/styles/effect.module.css';
import type { ViewState, Phase } from './types';

const codeSnippets = [
  {
    lang: 'bash',
    label: '安装',
    code: 'pip install pyisland\n# 或 clone 源码\ngit clone https://github.com/Python-island/Python-island',
  },
  {
    lang: 'python',
    label: '快速开始',
    code: 'from pyisland import Island\n\nisland = Island()\nisland.on_click(lambda: print("点击了灵动岛"))\nisland.run()',
  },
  {
    lang: 'python',
    label: '自定义 UI',
    code: 'island.set_brightness_control(enabled=True)\nisland.set_media_control(enabled=True)\nisland.set_rainbow_mode(enabled=True)',
  },
];

function CodeCard({ snippet, slideIn }: { snippet: typeof codeSnippets[number]; slideIn: number }) {
  const langColors: Record<string, string> = {
    bash: '#71717a',
    python: '#2563EB',
    rust: '#D97706',
  };
  const color = langColors[snippet.lang] ?? '#86868B';

  return (
    <div
      style={{
        width: '260px',
        flexShrink: 0,
        background: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '14px',
        overflow: 'hidden',
        transform: `translateY(${(1 - slideIn) * 30}px)`,
        opacity: slideIn,
        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          background: 'rgba(245, 245, 247, 0.6)',
        }}
      >
        <div style={{ display: 'flex', gap: '5px' }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
            <div key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <span style={{ fontSize: '10px', color: '#86868B', fontWeight: '500', marginLeft: '4px' }}>
          {snippet.label}
        </span>
        <span
          style={{
            marginLeft: 'auto',
            fontSize: '9px',
            color: color,
            fontWeight: '600',
            fontFamily: 'ui-monospace, monospace',
            letterSpacing: '0.05em',
          }}
        >
          {snippet.lang}
        </span>
      </div>
      {/* Code body */}
      <div style={{ padding: '14px 16px' }}>
        <pre
          style={{
            margin: 0,
            fontSize: '11px',
            lineHeight: 1.7,
            color: '#1D1D1F',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
          }}
        >
          {snippet.code}
        </pre>
      </div>
    </div>
  );
}

interface DeveloperContentProps {
  progress: number;
  activeView: ViewState;
  phase: Phase;
}

export default function DeveloperContent({ progress, activeView, phase }: DeveloperContentProps) {
  const isDevelopers = activeView === 'developers';
  const isTransitioning = phase === 'transitioning';

  // Slide-out: when transitioning developers→branches (progress 0→1), this view fades out
  const slideOut = isTransitioning && activeView === 'branches' ? progress : 0;

  const opacity = isDevelopers ? Math.max(0, 1 - slideOut) : 0;
  const slideInFactor = isDevelopers ? 1 : 0;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 'clamp(24px, 5vh, 60px)',
        opacity,
        pointerEvents: isDevelopers ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
        zIndex: 4,
      }}
    >
      {/* Screen / window container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: `translateY(${(1 - slideInFactor) * 60}px)`,
          opacity: slideInFactor,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease',
        }}
      >
        {/* Title above screen */}
        <div
          style={{
            marginBottom: 'clamp(16px, 3vh, 28px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            transform: `translateY(${(1 - slideInFactor) * -20}px)`,
            opacity: slideInFactor,
            transition: 'transform 0.7s ease, opacity 0.7s ease',
          }}
        >
          <span
            className={stylesEffect.gradientText}
            style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: '600', letterSpacing: '-0.02em' }}
          >
            开发指南
          </span>
          <p style={{ fontSize: '13px', color: '#86868B', textAlign: 'center', lineHeight: 1.6 }}>
            基于 PySide6 · 完整 API · 插件系统
          </p>
        </div>

        {/* Main screen window */}
        <div
          style={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(0, 0, 0, 0.07)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 48px rgba(0, 0, 0, 0.10), 0 2px 12px rgba(0, 0, 0, 0.06)',
          }}
        >
          {/* Window title bar */}
          <div
            style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
              background: 'rgba(245, 245, 247, 0.7)',
            }}
          >
            {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
              <div key={c} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />
            ))}
            <span
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                fontSize: '12px',
                color: '#86868B',
                fontWeight: '500',
                letterSpacing: '0.02em',
              }}
            >
              docs.pyisland.com — pyislandPyside6
            </span>
          </div>

          {/* Window content */}
          <div
            style={{
              padding: 'clamp(20px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Feature highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px',
              }}
            >
              {[
                { icon: '●', label: '核心功能', desc: '灵动岛胶囊、时间显示、控制面板' },
                { icon: '◉', label: '系统控制', desc: '亮度调节、WiFi/蓝牙、电池监控' },
                { icon: '○', label: '实用功能', desc: '剪贴板 URL 检测、快捷链接' },
                { icon: '◈', label: '事件总线', desc: '异步事件驱动架构' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    padding: '12px 14px',
                    background: 'rgba(0, 0, 0, 0.025)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.04)',
                    transform: `translateY(${(1 - slideInFactor) * 16}px)`,
                    opacity: slideInFactor,
                    transition: `transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.08}s, opacity 0.6s ease ${i * 0.08}s`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '10px', color: '#86868B' }}>{item.icon}</span>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#1D1D1F' }}>{item.label}</span>
                  </div>
                  <p style={{ fontSize: '11px', color: '#86868B', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Code snippets */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                paddingBottom: '4px',
                transform: `translateY(${(1 - slideInFactor) * 20}px)`,
                opacity: slideInFactor,
                transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, opacity 0.7s ease 0.2s',
              }}
            >
              {codeSnippets.map((snippet, i) => (
                <CodeCard key={snippet.label} snippet={snippet} slideIn={slideInFactor} />
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                background: 'rgba(0, 0, 0, 0.025)',
                borderRadius: '10px',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                transform: `translateY(${(1 - slideInFactor) * 16}px)`,
                opacity: slideInFactor * 0.9,
                transition: 'transform 0.6s ease 0.3s, opacity 0.6s ease 0.3s',
              }}
            >
              <div>
                <p style={{ fontSize: '13px', fontWeight: '600', color: '#1D1D1F', margin: '0 0 2px' }}>
                  了解更多
                </p>
                <p style={{ fontSize: '11px', color: '#86868B', margin: 0 }}>
                  完整 API 文档 · 插件开发 · 贡献指南
                </p>
              </div>
              <a
                href="https://docs.pyisland.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 18px',
                  background: '#1D1D1F',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                访问文档 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
