import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";

// TODO: Replace with your actual backend URL (e.g., "https://api.yourdomain.com/contact")
const BACKEND_URL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/contact` : "http://localhost:5000/api/contact";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!BACKEND_URL) {
      console.warn("Backend URL not provided. Mimicking success for static demo.");
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setTimeout(() => setSubmitted(false), 3000);
      }, 1000);
      return;
    }

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("An error occurred while sending your message. Please check your connection.");
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding relative dot-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto italic">
            "Every great developer was once a beginner who didn't quit."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-none flex items-center justify-center bg-glow-primary/10 border border-glow-primary/20">
                  <Mail className="text-glow-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                  <p className="font-medium">fidelismpyalimi12@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-none flex items-center justify-center bg-glow-primary/10 border border-glow-primary/20">
                  <MapPin className="text-glow-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                  <p className="font-medium">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Fidelis18c"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="w-12 h-12 rounded-none flex items-center justify-center bg-secondary border border-border/50 text-muted-foreground hover:text-glow-primary hover:border-glow-primary/30 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/fidelis-joseph-mpyalimi-56154038b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="w-12 h-12 rounded-none flex items-center justify-center bg-secondary border border-border/50 text-muted-foreground hover:text-glow-primary hover:border-glow-primary/30 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card p-10 space-y-6 rounded-none border-border/50"
          >
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-4 rounded-none bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:border-glow-primary/50 transition-colors"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-4 rounded-none bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:border-glow-primary/50 transition-colors"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-4 rounded-none bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:border-glow-primary/50 transition-colors"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="glow-button w-full py-4 text-center disabled:opacity-50"
            >
              {loading ? "Sending..." : submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
