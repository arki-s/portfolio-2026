"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Contact() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-foreground-warm mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Get In Touch<span className="text-primary">.</span>
        </h2>
        <p
          className={`text-muted-foreground mb-10 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {"お仕事のご相談、案件のご依頼など、GitHubまたはLinkedInよりお気軽にご連絡ください。"}
        </p>
        <div
          className={`flex items-center justify-center gap-8 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="https://github.com/arki-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <div className="p-4 border border-border rounded-full group-hover:border-primary/50 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </div>
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rikasaito/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <div className="p-4 border border-border rounded-full group-hover:border-primary/50 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
