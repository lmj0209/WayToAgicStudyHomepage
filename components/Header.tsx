"use client";

import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  currentPage: "ai-coding" | "academic";
}

export default function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "zh">("zh");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const navItems = [
    { id: "ai-coding", label: "AI Coding", labelZh: "AI编程" },
    { id: "academic", label: "Academic", labelZh: "学术" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ML</span>
              </div>
              <span className="font-semibold text-lg text-text-primary hidden sm:block">
                Mengjin Li
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id === "ai-coding" ? "/" : `/${item.id}`}
                className={`text-sm font-medium transition-colors relative ${
                  currentPage === item.id
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {language === "en" ? item.label : item.labelZh}
                {currentPage === item.id && (
                  <span className="absolute bottom-[-20px] left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}

            {/* CV Link */}
            <a
              href="/cv.pdf"
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
              >
                <span>🌐</span>
                <span>{language === "en" ? "EN" : "中"}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${languageDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-border py-1">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLanguageDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-background-alt transition-colors"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("zh");
                      setLanguageDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-background-alt transition-colors"
                  >
                    中
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-text-secondary p-2"
              >
                <span>🌐</span>
                <span>{language === "en" ? "EN" : "中"}</span>
              </button>

              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-border py-1">
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLanguageDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-background-alt transition-colors"
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("zh");
                      setLanguageDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-background-alt transition-colors"
                  >
                    中
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-primary"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.id === "ai-coding" ? "/" : `/${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-background-alt"
                }`}
              >
                {language === "en" ? item.label : item.labelZh}
              </Link>
            ))}

            <a
              href="/cv.pdf"
              className="block px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:bg-background-alt transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "en" ? "CV (Download)" : "CV（下载）"}
            </a>

            <div className="border-t border-border pt-2 mt-2">
              <button
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text-secondary hover:bg-background-alt rounded-lg w-full"
              >
                <span>🌐</span>
                <span>{language === "en" ? "EN / 中" : "中 / EN"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
