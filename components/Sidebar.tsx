"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  return (
    <>
      {/* Desktop Sidebar - 右侧栏 */}
      <aside className="hidden lg:flex flex-col bg-background border-r border-border p-6">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src="/avatar.jpg"
            alt="Mengjin Li"
            className="w-24 h-24 rounded-full border-4 border-background-alt object-cover"
            onError={(e) => {
              // 如果图片加载失败，显示占位符
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="w-24 h-24 rounded-full bg-card-bg border-4 border-background-alt flex items-center justify-center hidden">
            <span className="text-4xl font-bold text-primary">ML</span>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-lg font-bold text-center text-text-primary mb-1">
          Mengjin Li
        </h2>
        <p className="text-center text-text-secondary text-sm mb-6">黎梦金</p>

        {/* Title */}
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-text-primary">Ph.D. Student</p>
          <p className="text-xs text-text-secondary">博士研究生</p>
        </div>

        {/* Affiliation */}
        <div className="text-center mb-6 px-2">
          <p className="text-sm font-medium text-text-primary">
            XXX University
          </p>
          <p className="text-xs text-text-secondary mt-1">
            College of XXX
          </p>
          <p className="text-xs text-text-secondary">XXX 学院</p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center text-text-secondary text-sm mb-6">
          <span className="mr-1">📍</span>
          <span>Changsha, China</span>
        </div>

        {/* Divider */}
        <hr className="border-border mb-6" />

        {/* Social Links */}
        <div className="space-y-3">
          <SocialLink
            icon="📧"
            label="Email"
            href="mailto:mengjin.li@example.com"
          />
          <SocialLink
            icon="🐙"
            label="GitHub"
            href="https://github.com/mengjinli"
          />
          <SocialLink
            icon="📚"
            label="Scholar"
            href="https://scholar.google.com/citations?user=example"
          />
          <SocialLink
            icon="🔗"
            label="ORCID"
            href="https://orcid.org/0000-0000-0000-0000"
          />
        </div>
      </aside>

      {/* Mobile Sidebar Header - 顶部折叠栏 */}
      <div className="lg:hidden fixed top-16 left-0 right-0 bg-background border-b border-border z-40">
        <button
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <img
              src="/avatar.jpg"
              alt="Mengjin Li"
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="w-10 h-10 rounded-full bg-card-bg flex items-center justify-center hidden">
              <span className="text-lg font-bold text-primary">ML</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">Mengjin Li</p>
              <p className="text-xs text-text-secondary">黎梦金</p>
            </div>
          </div>
          <span className="text-text-secondary">
            {isMobileExpanded ? "✕" : "▼"}
          </span>
        </button>

        {/* Mobile Expanded Content */}
        {isMobileExpanded && (
          <div className="px-4 pb-4 border-t border-border">
            <div className="pt-3 space-y-2">
              <div className="text-center">
                <p className="text-sm font-medium text-text-primary">Ph.D. Student</p>
                <p className="text-xs text-text-secondary">博士研究生</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-text-primary">
                  XXX University
                </p>
                <p className="text-xs text-text-secondary">XXX 学院</p>
              </div>

              <div className="flex items-center justify-center text-text-secondary text-sm">
                <span className="mr-1">📍</span>
                <span>Changsha, China / 中国，长沙</span>
              </div>

              <hr className="border-border my-3" />

              <div className="flex justify-center space-x-6">
                <SocialLink icon="📧" label="Email" href="mailto:mengjin.li@example.com" />
                <SocialLink icon="🐙" label="GitHub" href="https://github.com/mengjinli" />
                <SocialLink icon="📚" label="Scholar" href="https://scholar.google.com" />
                <SocialLink icon="🔗" label="ORCID" href="https://orcid.org" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function SocialLink({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 text-text-secondary hover:text-primary transition-colors group"
    >
      <span className="text-lg group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}
