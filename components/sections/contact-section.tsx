"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Get In Touch</h2>
        <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-6"></div>
        <p className="text-lg text-neutral-700 dark:text-neutral-300">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Fill out the
          form below or reach out directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-neutral-300 dark:border-neutral-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-neutral-300 dark:border-neutral-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="border-neutral-300 dark:border-neutral-700"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="border-neutral-300 dark:border-neutral-700"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-200 dark:text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white rounded-md text-center"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <Card className="border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">Email</h3>
                    <a
                      href="mailto:nishantdhupia18@gmail.com"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      nishantdhupia18@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">Phone</h3>
                    <a
                      href="tel:+917611073555"
                      className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      +91 76110 73555
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">Location</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">Jaipur, Rajasthan, IN</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Availability</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                I'm currently available for freelance work and consulting. My typical response time is within 24 hours.
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full dark:bg-[#00FF00]"></div>
                <span className="text-sm font-medium text-black dark:text-white">Available for new projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
