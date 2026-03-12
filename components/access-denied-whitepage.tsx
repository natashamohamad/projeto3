"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  Shield,
  Sparkles,
} from "lucide-react";


import ConfettiEffect from "@/components/confetti";

const CHECKOUT_URL = "https://teu_link_de_checkout_aqui";

export default function FacelessYoutubePage() {

  const features = [
    {
      icon: Zap,
      title: "AI Powered Video Creation",
      description:
        "Generate viral YouTube content without filming or showing your face."
    },
    {
      icon: Rocket,
      title: "Automation System",
      description:
        "Build channels that produce content consistently using simple workflows."
    },
    {
      icon: TrendingUp,
      title: "Viral Growth Strategies",
      description:
        "Learn the exact methods used by fast growing faceless channels."
    },
    {
      icon: Target,
      title: "Content That Attracts Views",
      description:
        "Create videos designed to capture attention and retain viewers."
    },
    {
      icon: Sparkles,
      title: "Shorts Domination",
      description:
        "Leverage YouTube Shorts to rapidly grow new channels."
    },
    {
      icon: Shield,
      title: "Safe Monetization Path",
      description:
        "Avoid common mistakes that cause demonetization or channel bans."
    }
  ];

  const benefits = [
    "How to create YouTube channels without recording videos",
    "Step-by-step system to produce unlimited content",
    "How to identify viral niches before they explode",
    "Content frameworks used by top creators",
    "Simple editing workflows anyone can follow",
    "AI tools that accelerate video production",
    "How to structure videos to keep viewers watching",
    "How to scale content production efficiently",
    "How to build channels designed for long term growth",
    "Avoid beginner mistakes that kill new channels"
  ];

  return (

    <div className="w-full min-h-screen bg-[#0F1115] text-white overflow-x-hidden">

      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,0,0,0.08) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,0,0,0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <main className="relative z-10">

        {/* HERO */}

        <section className="max-w-6xl mx-auto px-6 py-24 text-center">

          <motion.div
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.7}}
          >

            <h1 className="text-5xl md:text-7xl font-black tracking-tight">

              <span className="text-gray-200">
                FACELESS
              </span>

              <br/>

              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                YOUTUBE
              </span>

            </h1>

            <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">

              Discover how modern creators are building powerful YouTube
              channels without filming themselves, without expensive gear,
              and without complicated production.

            </p>

            <p className="mt-4 text-lg text-gray-400">

              A structured system to help you create content faster,
              reach more viewers, and build scalable channels.

            </p>

            <div className="mt-10">

              <button
                onClick={()=> window.open(CHECKOUT_URL,"_blank")}
                className="group px-10 py-5 bg-red-600 hover:bg-red-700 transition-all rounded-lg font-bold text-lg flex items-center gap-3 mx-auto shadow-xl shadow-red-600/30"
              >

                GET INSTANT ACCESS

                <ArrowRight className="group-hover:translate-x-1 transition"/>

              </button>

            </div>

          </motion.div>

        </section>


        {/* FEATURES */}

        <section className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold text-center mb-16">

            What You Will Learn

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature,index)=>{

              const Icon = feature.icon

              return (

                <motion.div
                  key={index}
                  initial={{opacity:0,y:20}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:true}}
                  transition={{delay:index*0.1}}
                  className="bg-[#1A1D23] border border-gray-700 p-6 rounded-xl hover:border-red-500 transition"
                >

                  <div className="bg-red-600/20 p-3 w-fit rounded-lg mb-4">

                    <Icon className="text-red-500"/>

                  </div>

                  <h3 className="text-xl font-bold mb-2">

                    {feature.title}

                  </h3>

                  <p className="text-gray-400">

                    {feature.description}

                  </p>

                </motion.div>

              )

            })}

          </div>

        </section>


        {/* BENEFITS */}

        <section className="max-w-5xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold text-center mb-14">

            Inside the Program

          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {benefits.map((item,index)=>(

              <div
                key={index}
                className="flex gap-4 bg-[#1A1D23] border border-gray-700 p-5 rounded-lg hover:border-red-500 transition"
              >

                <div className="w-5 h-5 mt-1 rounded-full bg-red-600"/>

                <p className="text-gray-300">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </section>


        {/* FINAL CTA */}

        <section className="text-center py-24 px-6">

          <h2 className="text-5xl font-black mb-6">

            Start Your Faceless Channel Today

          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">

            The opportunity to build digital channels has never been more
            accessible. With the right strategy and tools you can begin
            creating powerful content immediately.

          </p>

          <button
            onClick={()=> window.open(CHECKOUT_URL,"_blank")}
            className="px-12 py-6 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-xl shadow-xl shadow-red-600/30 transition"
          >

            ACCESS THE PROGRAM

          </button>

        </section>

        <ConfettiEffect/>

      </main>


      {/* FOOTER */}

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-800">

        © 2025 All Rights Reserved

      </footer>

    </div>
  )
}