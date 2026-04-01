import { motion } from "framer-motion";
import { Code2, Globe, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Passionate about clean code, scalable architecture, and delivering performant web applications.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "Keen interest in global economics and how technology shapes markets and opportunities worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "Always learning — from new frameworks to system design patterns and emerging tech trends.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I'm a fullstack developer who thrives on building impactful digital products.
          With expertise spanning frontend, backend, and database technologies,
          I craft solutions that solve real problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card-hover p-8 text-center"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center bg-glow-primary/10">
              <c.icon className="text-glow-primary" size={28} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
