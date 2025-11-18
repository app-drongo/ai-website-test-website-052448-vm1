'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const config = {
    title: 'Build Something Amazing',
    subtitle: 'Test Your Ideas',
    description:
      'Transform your concepts into reality with our cutting-edge platform. Simple, powerful, and designed for creators who demand excellence.',
    primaryCta: 'Get Started',
    primaryCtaHref: '#pricing',
    secondaryCta: 'Watch Demo',
    secondaryCtaHref: '#demo',
    scrollText: 'Scroll to explore',
    features: ['Lightning Fast', 'Secure & Reliable', 'Easy to Use'],
  };

  const animatedWords = ['Amazing', 'Incredible', 'Revolutionary', 'Powerful'];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % animatedWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryClick = () => {
    scrollToSection(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    scrollToSection(config.secondaryCtaHref);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            <span data-editable="subtitle">{config.subtitle}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span data-editable="title">Build Something </span>
            <span className="relative inline-block">
              <span className="text-primary transition-all duration-500 ease-in-out">
                {animatedWords[currentWord]}
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            <span data-editable="description">{config.description}</span>
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {config.features.map((feature, index) => (
              <div
                key={index}
                className={`px-4 py-2 bg-card border border-border rounded-full text-sm text-card-foreground transition-all duration-300 hover:bg-accent hover:border-accent-foreground/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <span data-editable={`feature${index + 1}`}>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <button
              onClick={handlePrimaryClick}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
              className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <span data-editable="primaryCta">{config.primaryCta}</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={handleSecondaryClick}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="group inline-flex items-center px-8 py-4 bg-card border border-border text-card-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-accent hover:border-accent-foreground/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
              <span data-editable="secondaryCta">{config.secondaryCta}</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <button
            onClick={handleScrollDown}
            className="group flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg p-2"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2 font-medium">
              <span data-editable="scrollText">{config.scrollText}</span>
            </span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div
        className="absolute top-1/3 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />
    </section>
  );
}
