"use client"

import { Github, Linkedin } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <div
        className={`text-center transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        {/* Subtle warm orange radial gradient behind name */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(232,100,12,0.12) 0%, transparent 70%)"
          }}
        />
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground-warm mb-4 tracking-tight">
          Rika Saito
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2">
          Full-Stack Engineer
        </p>
        <p className="text-base sm:text-lg text-muted-foreground/80 font-[family-name:var(--font-noto-sans-jp)] mb-8">
          開発・設計・チームマネジメントを横断するエンジニア
        </p>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          <span className="font-[family-name:var(--font-noto-sans-jp)]">
            CSでのマネジメント・業務改善経験とエンジニアリングを掛け合わせ、
            上流から実装まで一貫して動けるエンジニアです。
          </span>
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/arki-s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/rikasaito/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
