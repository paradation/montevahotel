import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Monteva Boutique Hotel">
            <AppLogo size={32} />
            <span className="font-display font-semibold text-sm tracking-tight text-foreground">
              Monteva Boutique Hotel
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="#rooms"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Номера
            </a>
            <a
              href="#contacts"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
            <a
              href="https://instagram.com/monteva_boutiquehotel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram Monteva Boutique Hotel"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/77078016267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp для бронирования"
            >
              WhatsApp
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            © 2025 Monteva Boutique Hotel
          </p>
        </div>
      </div>
    </footer>
  );
}