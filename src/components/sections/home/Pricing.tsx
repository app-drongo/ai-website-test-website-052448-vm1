'use client';

import React, { useState } from 'react';
import { Check, X, Star, Zap, Shield, Crown } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  popular: boolean;
  icon: React.ReactNode;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'accent';
}

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const config = {
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the perfect plan for your needs. No hidden fees, no surprises.',
    monthlyLabel: 'Monthly',
    yearlyLabel: 'Yearly',
    yearlyDiscount: 'Save 20%',
    currency: '$',
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: billingPeriod === 'monthly' ? 9 : 86,
        period: billingPeriod === 'monthly' ? '/month' : '/year',
        description: 'Perfect for individuals and small projects',
        features: [
          'Up to 5 projects',
          '10GB storage',
          'Basic support',
          'Core features',
          'Mobile app access',
        ],
        limitations: ['Limited integrations', 'Basic analytics'],
        popular: false,
        icon: <Zap className="w-6 h-6" />,
        buttonText: 'Get Started',
        buttonVariant: 'secondary' as const,
      },
      {
        id: 'professional',
        name: 'Professional',
        price: billingPeriod === 'monthly' ? 29 : 278,
        period: billingPeriod === 'monthly' ? '/month' : '/year',
        description: 'Ideal for growing teams and businesses',
        features: [
          'Unlimited projects',
          '100GB storage',
          'Priority support',
          'Advanced features',
          'Team collaboration',
          'API access',
          'Custom integrations',
        ],
        limitations: [],
        popular: true,
        icon: <Star className="w-6 h-6" />,
        buttonText: 'Start Free Trial',
        buttonVariant: 'primary' as const,
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: billingPeriod === 'monthly' ? 99 : 950,
        period: billingPeriod === 'monthly' ? '/month' : '/year',
        description: 'For large organizations with advanced needs',
        features: [
          'Everything in Professional',
          'Unlimited storage',
          '24/7 dedicated support',
          'Custom solutions',
          'Advanced security',
          'SLA guarantee',
          'On-premise deployment',
          'Custom training',
        ],
        limitations: [],
        popular: false,
        icon: <Crown className="w-6 h-6" />,
        buttonText: 'Contact Sales',
        buttonVariant: 'accent' as const,
      },
    ] as PricingTier[],
    guaranteeText: '30-day money-back guarantee',
    securityText: 'Enterprise-grade security',
  };

  const handlePlanSelect = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
    // Handle plan selection logic here
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span data-editable="monthlyLabel">{config.monthlyLabel}</span>
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                billingPeriod === 'yearly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span data-editable="yearlyLabel">{config.yearlyLabel}</span>
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                <span data-editable="yearlyDiscount">{config.yearlyDiscount}</span>
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {config.tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                tier.popular
                  ? 'border-primary shadow-lg scale-105 bg-gradient-to-b from-card to-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    tier.popular
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <span data-editable={`tier${index}Name`}>{tier.name}</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span data-editable={`tier${index}Description`}>{tier.description}</span>
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    <span data-editable="currency">{config.currency}</span>
                    <span data-editable={`tier${index}Price`}>{tier.price}</span>
                  </span>
                  <span className="text-muted-foreground ml-1">
                    <span data-editable={`tier${index}Period`}>{tier.period}</span>
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span
                      className="text-foreground"
                      data-editable={`tier${index}Feature${featureIndex}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
                {tier.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start opacity-60">
                    <X className="w-5 h-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                    <span
                      className="text-muted-foreground"
                      data-editable={`tier${index}Limitation${limitIndex}`}
                    >
                      {limitation}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handlePlanSelect(tier.id)}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  tier.buttonVariant === 'primary'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                    : tier.buttonVariant === 'secondary'
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                      : 'bg-accent text-accent-foreground hover:bg-accent/80'
                }`}
                data-editable={`tier${index}ButtonText`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
          <div className="flex items-center text-muted-foreground">
            <Shield className="w-5 h-5 mr-2 text-primary" />
            <span data-editable="securityText">{config.securityText}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Check className="w-5 h-5 mr-2 text-primary" />
            <span data-editable="guaranteeText">{config.guaranteeText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
