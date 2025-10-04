"use client";

// @ts-nocheck
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ServicesCostToolTip from "./ServicesCostToolTip";

interface PricingCardProps {
  plan: any;
  billingPeriod: "monthly" | "annually";
  handlePurchase?: (priceInfo: any) => Promise<void>;
  calculatePrice?: (plan: any) => {
    priceInfo: any;
    totalPrice: number;
    annualPrice: number | null;
  };
  popularPlan: string;
  popularPlanText: string;
  index?: number;
}

export function PricingCard({
  plan,
  popularPlan,
  popularPlanText,
  billingPeriod,
  handlePurchase,
  calculatePrice,
  index,
}: PricingCardProps) {



  return (
    <div
      className={cn(
        "group relative bg-white/5 backdrop-blur-sm p-8 h-full w-full",
        "transform transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10",
        "hover:-translate-y-2",
        "rounded-[16px]",
      )}
      >
      {/* {plan.id === popularPlan && (
        <div
          className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2",
            "px-4 py-1.5 rounded-full",
            "bg-primary text-black font-medium text-sm",
            "transform transition-transform duration-300",
            "group-hover:scale-105"
          )}
        >
          {popularPlanText}
        </div>
      )} */}

      <div className="relative flex flex-col  h-full">
        <h2 className="text-xl font-bold text-white mb-2 transition-colors group-hover:text-primary">
          {plan.name}
        </h2>

        <p className="text-gray-400 mb-4 transition-colors group-hover:text-gray-300 text-sm">
          {plan.description}
        </p>

        <div className="mb-6">
          


          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white transition-colors group-hover:text-primary">
              {plan.id === "starter" ? (
                <>
                  <p className="mt-2 text-sm text-primary opacity-0">
                    Starting
                  </p>
                  <div className="flex items-end gap-2">
                    FREE
                  </div>
                </>
                
              ) : (
                <>
                  {/* on homepage, we do not pass handlePurchase, so we show starting */}
                  {plan.id !== "starter" && !handlePurchase && (
                    <p className="mt-2 text-xs text-primary">
                      Starting
                    </p>
                  )}
                  <div className="flex flex-row gap-2 items-end">
                    <div>
                      ${plan.price.toFixed(2)}
                      
                      <span className="text-xs line-through font-light">
                        {plan.previousPrice && ( 
                          <span>$ {plan.previousPrice?.toFixed(2)}</span>
                          )}
                      </span>
                      
                      <span className="text-gray-400 text-xs ml-1 font-normal"> {billingPeriod === "annually" ? "/ year" : "/ month"}</span>
                    </div>
                  </div>
                </>
              )}
            </span>
          </div>

        </div>

        <ul className="space-y-4 mb-8">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-3 group/feature">
              <svg
                className="w-5 h-5 mt-0.5 shrink-0 text-primary transition-all duration-300 group-hover/feature:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300 group-hover:text-gray-200 transition-colors flex items-center gap-2 text-xs">
                {feature}
                {feature.includes("*") && (
                  <ServicesCostToolTip info="AI Recomendations: 2"/>
                )}
              </span>
            </li>
          ))}
        </ul>

        <Button variant="primary" className="mt-auto">
          {plan.id === "starter" ? "Get Started" : "Get Started"}
        </Button>

        <p className="mt-4 text-center text-xs text-gray-400 opacity-70 font-light">
          {plan.id === "starter" ? (
            "Not credit card required"
          ) : (
            <span className="">30-day money-back guarantee</span>
          )}
        </p>
      </div>
    </div>
  );
}
