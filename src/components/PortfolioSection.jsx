import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dear Mama Foundation",
    desc: "Full-featured online store with payment integration, admin dashboard, and real-time inventory.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-blue-600/20 to-cyan-500/20",
  },
  {
    title: "Project Management Tool",
    desc: "Collaborative task management app with real-time updates, team workspaces, and analytics.",
    stack: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    color: "from-indigo-600/20 to-blue-500/20",
  },
  {
    title: "Finance Dashboard",
    desc: "Data visualization dashboard for tracking investments, expenses, and financial metrics.",
    stack: ["React", "D3.js", "Express", "MongoDB"],
    color: "from-cyan-600/20 to-teal-500/20",
  },
  {
    title: "Social Media API",
    desc: "RESTful API with authentication, rate limiting, file uploads, and notification system.",
    stack: ["Node.js", "Express", "Redis", "JWT"],
    color: "from-blue-700/20 to-indigo-500/20",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding relative dot-pattern">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          My <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A selection of projects showcasing my skills across the full stack.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 md:ml-[5rem] md:mr-[5rem] gap-10  ">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover group overflow-hidden"
          >
            <div className={`h-40  bg-gradient-to-br ${p.color} flex items-center justify-center relative md:rounded-none`}>
              <div className="absolute inset-0 bg-glow-primary/5 group-hover:bg-glow-primary/10 transition-colors" />
              <ExternalLink className="text-glow-primary opacity-30 group-hover:opacity-60 transition-opacity" size={30} />
            </div>
            <div className="">
              <h3 className="font-heading font-semibold text-lg md:pl-2 md:pt-1 md:mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground md:pl-2 md:mb-1 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;

