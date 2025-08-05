"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import { Jersey_25_Charted } from "next/font/google"

const jersey = Jersey_25_Charted({
  weight: "400", // adjust if needed
  subsets: ["latin"],
})

export default function HomeSection() {
  return (
    <div className="relative min-h-screen w-full flex items-center">
      <div className="container mx-auto px-4 md:px-6 z-10 mt-16">
        <div className="max-w-3xl">
          <motion.p
            className="text-lg md:text-xl text-black dark:text-white font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className={`text-6xl md:text-7xl lg:text-8xl mb-6 text-black dark:text-white ${jersey.className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >Nishant  Dhupia</motion.h1>

          <motion.div
            className="flex flex-col space-y-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-3xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-300">
              SE @ Capgemini | .NET Core & Azure Developer | Full-Stack Enthusiast
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Passionate developer building scalable, cloud-based applications with .NET Core, C#, and Microsoft Azure at Capgemini. I love transforming ideas into functional products, blending clean code with thoughtful design. With a strong foundation in C/C++, full-stack development, and a growing interest in machine learning, I aim to create impactful digital experiences that are both powerful and user-friendly.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button
              className="bg-black hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-black text-black hover:bg-neutral-100 dark:border-white dark:text-white dark:hover:bg-neutral-900"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="https://github.com/dhupianishant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhupianishant/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/NishantDhupia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
