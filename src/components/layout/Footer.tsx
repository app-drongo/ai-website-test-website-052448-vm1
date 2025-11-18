import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const footerData = {
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '#hero' },
        { label: 'Contact', href: '#hero' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
    copyright: '© 2024 Website Test. All rights reserved.',
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                <span data-editable="brandName">Website Test</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              <span data-editable="brandDescription">
                A simple test website showcasing modern web development practices with clean design
                and functionality.
              </span>
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              <span data-editable="companyTitle">{footerData.company.title}</span>
            </h4>
            <ul className="space-y-3">
              {footerData.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    data-editable-href={`companyLink${index}Href`}
                    data-href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span data-editable={`companyLink${index}Label`}>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              <span data-editable="legalTitle">{footerData.legal.title}</span>
            </h4>
            <ul className="space-y-3">
              {footerData.legal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    data-editable-href={`legalLink${index}Href`}
                    data-href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span data-editable={`legalLink${index}Label`}>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyright">{footerData.copyright}</span>
            </p>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-1 group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg
                className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
