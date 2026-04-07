import { motion } from "framer-motion";
import heroImg from "@/assets/hero-visual.jpg";
import heroImage from "@/assets/Hero2.jpeg";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center dot-pattern overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-glow-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-glow-secondary/10 blur-[100px] animate-pulse-glow" />

      <div className="container mx-auto px-20 grid lg:grid-cols-2  items-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-heading font-semibold uppercase tracking-widest text-glow-primary mb-4">
            Hello <span className="animate-bounce">👋</span>, I'm Fidelis Joseph
          </p>
          <h1 className="font-heading text-3xl md:text-6xl font-bold leading-tight mb-6">
            Fullstack{" "}
            <span className="gradient-text">Web Developer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            I build real-world, scalable web applications with modern technologies.
            From elegant frontends to robust backends — turning ideas into production-ready software.
          </p>
          <div className="flex flex-cols md:flex-wrap  gap-4">
            <Button onClick={() => scrollTo("#portfolio")} className="" size="sm" >
              View My Work
            </Button>
            <Button onClick={() => scrollTo("#contact")} className="" size="sm">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-glow-primary/20 blur-3xl" />
            <img
              src={heroImage}
              alt="Futuristic tech visual"
              className="relative w-[420px] h-[420px] object-cover rounded-2xl border border-border/30 brightness-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

