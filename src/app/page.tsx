"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ParticleBackground } from "@/components/ui/particle-background";
import { SequentialTypewriter } from "@/components/ui/typewriter-text";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden bg-transparent">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 z-10 gpu-accelerated"
            >
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-base md:text-sm font-medium text-primary mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  New Platform Release v2.4
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  <SequentialTypewriter
                    speed={120}
                    delay={400}
                    segments={[
                      { text: "Financial", br: true },
                      {
                        text: "Infrastructure",
                        className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50",
                        br: true
                      },
                      {
                        text: "Reimagined.",
                        className: "text-primary"
                      }
                    ]}
                  />
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-xl md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  Build scalable financial products with our unified API.
                  Banking, payments, and compliance infrastructure for the modern enterprise.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="text-lg md:text-base font-semibold bg-primary text-black hover:bg-primary/90 h-14 md:h-12 px-8">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base h-12 px-8 border-white/20 hover:bg-white/5 text-white">
                  Contact Sales
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-white/10 hidden lg:flex gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">99.99%</span>
                  <span className="text-sm text-muted-foreground">Uptime SLA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">$50B+</span>
                  <span className="text-sm text-muted-foreground">Processed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">200+</span>
                  <span className="text-sm text-muted-foreground">Countries</span>
                </div>
              </motion.div>
            </motion.div>



            {/* Hero Animation - Desktop Only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px] flex items-center justify-center">
                {/* Aggressive Radial Mask to clear all edges */}
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 65%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 65%)'
                  }}
                >
                  <video
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="w-[105%] max-w-none h-full object-cover mix-blend-screen opacity-100 scale-[1.05] saturate-[1.1]"
                    style={{ marginLeft: '-2.5%' }}
                  >
                    <source src="/hero-animation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Atmosphere / Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/10 rounded-full blur-[140px] -z-10 pointer-events-none opacity-50" />
            </motion.div>
          </div>
        </div>
      </section >

      {/* Platform Overview */}
      <Section className="border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Complete Financial Stack
          </h2>
          <p className="text-xl md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, launch, and scale financial products.
            One platform, endless possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Payments Engine",
              description: "Accept payments globally with our unified API. Support for cards, wallets, and bank transfers.",
            },
            {
              number: "02",
              title: "Secure Banking",
              description: "Create accounts, issue cards, and manage ledgers with banking-as-a-service infrastructure.",
            },
            {
              number: "03",
              title: "Developer First",
              description: "Built for developers, by developers. Robust SDKs, detailed documentation, and 24/7 support.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="number-card"
            >
              <div className="face face1">
                <div className="content text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="face face2">
                <h2>{feature.number}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </Section >

      {/* Code / Developer Section */}
      <Section className="border-t border-white/5 relative bg-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6">
              <Code2 className="mr-2 h-4 w-4" />
              Developer Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrate in minutes, <br /> not months.
            </h2>
            <p className="text-xl md:text-lg text-muted-foreground mb-8 text-pretty">
              Our intuitive API reference and client libraries make integration seamless.
              Focus on building your product, not wrestling with infrastructure.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Type-safe SDKs for Node, Python, and Go",
                "Real-time webhooks and event streaming",
                "Sandbox environment for testing",
                "Comprehensive API documentation"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white/80">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white h-12 px-6">
              Read Documentation
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-xl border border-white/10 bg-black overflow-hidden shadow-2xl frame-hover-effect">
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-xs text-muted-foreground font-mono opacity-70">payment-intent.ts</div>
              </div>
              <div className="p-6 overflow-x-auto bg-black">
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-[#C792EA]">const</span> <span className="text-[#82AAFF]">payment</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#C792EA]">await</span> <span className="text-[#FFCB6B]">fiducia</span>.<span className="text-[#82AAFF]">payments</span>.<span className="text-[#FFCB6B]">create</span>({"{"}
                  {'\n'}  <span className="text-[#F07178]">amount</span>: <span className="text-[#F78C6C]">5000</span>,
                  {'\n'}  <span className="text-[#F07178]">currency</span>: <span className="text-[#C3E88D]">'usd'</span>,
                  {'\n'}  <span className="text-[#F07178]">customer</span>: <span className="text-[#C3E88D]">'cus_123456789'</span>,
                  {'\n'}  <span className="text-[#F07178]">payment_method</span>: <span className="text-[#C3E88D]">'pm_card_visa'</span>,
                  {'\n'}  <span className="text-[#F07178]">confirm</span>: <span className="text-[#F78C6C]">true</span>
                  {'\n'}{"}"});
                  {'\n'}
                  {'\n'}<span className="text-[#546E7A] italic">// Handle successful payment</span>
                  {'\n'}<span className="text-[#89DDFF]">if</span> (payment.status === <span className="text-[#C3E88D]">'succeeded'</span>) {"{"}
                  {'\n'}  <span className="text-[#82AAFF]">console</span>.<span className="text-[#FFCB6B]">log</span>(<span className="text-[#C3E88D]">'Payment verified!'</span>);
                  {'\n'}{"}"}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section >

      {/* Trust Section */}
      < Section className="py-24 border-t border-white/5 bg-black" >
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-widest">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos represented as text for now, but styled to look like logos */}
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">ACME Corp</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">GlobalBank</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">FinStart</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">SecurePay</h3>
            <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-default">TechFund</h3>
          </div>
        </div>
      </Section >

      {/* CTA Section */}
      < Section className="relative overflow-hidden py-32" >
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-70" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to transform <br /> your infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of developers building the future of finance with Fiducia Tech.
              Get started with $500 in free credits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-shadow">
                Get API Keys
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 text-white hover:bg-white/5 backdrop-blur-sm">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </Section >
    </div >
  );
}
