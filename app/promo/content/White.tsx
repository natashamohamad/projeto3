"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, TrendingUp, CheckCheck, Loader2 } from "lucide-react";
import { useState } from "react";
import { useLayer } from "@/context/layer-provider";
import Progress from "@/components/progress";
import Button from "@/components/button";

const CHECKOUT_LINK = "https://pay.hotmart.com/U104758447T?off=6ijz3f3g";

export default function White() {

  const { promoLink } = useLayer();
  const checkoutLink = CHECKOUT_LINK || promoLink;

  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => setActive(false), 750);
  };

  const benefits = [
    "Lifetime access to the complete Faceless YouTube system.",
    "All future updates included automatically.",
    "Priority creator community support.",
    "No subscriptions or recurring payments."
  ];

  return (
    <div className="min-h-svh w-full bg-gray-100 text-black relative overflow-x-hidden overflow-y-auto">

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent pointer-events-none" />

      {/* Warning Banner */}
      <div className="relative z-10 w-full bg-red-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 font-medium text-center text-sm font-semibold">
          Please do not close or refresh this page, we have a limited time offer!
        </div>
      </div>

      {/* Checkout Button - Top */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-5 pt-6">
        <a href={checkoutLink} className="w-full block">
          <Button
            onClick={handleClick}
            disabled={active}
            className="w-full pulse p-5 bg-red-600 hover:bg-red-500 text-white"
          >
            {active ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <CheckCheck className="size-5" />
            )}
            <span>YES! UNLOCK LIFETIME ACCESS</span>
          </Button>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl gap-8 px-5 py-8 mx-auto">

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3 text-center w-full"
        >
          <span className="text-sm italic text-gray-500">
            We are processing your fee payment…
          </span>

          <Progress progress={67} />
        </motion.div>

        {/* Offer Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-lg">

            <div className="relative z-10 space-y-6">

              {/* Header */}
              <div className="text-center space-y-4">

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 bg-red-50"
                >
                  <Zap className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold text-red-600">
                    EXCLUSIVE ONE-TIME OFFER
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-black text-black">
                  Lifetime Access
                </h2>

                <p className="text-xl md:text-2xl text-gray-600 font-light">
                  Eliminate monthly payments forever.
                </p>

              </div>

              {/* Offer Text */}
              <div className="space-y-4 text-gray-700 leading-relaxed">

                <p className="text-lg">
                  Upgrade now to <span className="text-red-600 font-semibold">Faceless YouTube – Lifetime Access</span> and unlock everything permanently with a single investment.
                </p>

                {/* Benefits */}
                <div className="space-y-3">

                  {benefits.map((benefit, index) => (

                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-gray-50"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p>{benefit}</p>

                    </motion.div>

                  ))}

                </div>

                <p className="text-lg font-semibold text-black pt-2">
                  Secure lifetime access today and focus entirely on growing your YouTube channels.
                </p>

              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-200"
              >

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-red-600" />
                  <span>Secure Payment</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 text-red-600" />
                  <span>One-Time Investment</span>
                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}