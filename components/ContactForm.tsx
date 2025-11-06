"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setSubmitStatus({ type: "error", message: "Please fill all fields" })
        setIsSubmitting(false)
        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setSubmitStatus({ type: "error", message: "Please enter a valid email" })
        setIsSubmitting(false)
        return
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitStatus({
        type: "success",
        message: data.message || "Message sent successfully! We'll get back to you soon.",
      })

      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus({ type: "error", message: error.message || "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-yellow-50 rounded-xl p-8 border-3 border-[#00572B]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-[#00572B] mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-[#00572B] bg-white text-[#00572B] focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#00572B] mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-[#00572B] bg-white text-[#00572B] focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#00572B] mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-[#00572B] bg-white text-[#00572B] h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#FFBB00]"
            placeholder="Your message..."
            required
          />
        </div>

        {submitStatus && (
          <div
            className={`p-3 rounded-lg text-sm font-semibold ${
              submitStatus.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00572B] hover:bg-[#004620] text-white font-semibold border-2 border-[#00572B] disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
