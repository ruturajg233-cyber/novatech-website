import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Info, Mail, User, BookOpen, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "demo-success">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address.";
      }
    }

    if (!formData.subject.trim()) {
      errs.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 3) {
      errs.subject = "Subject must be at least 3 characters.";
    }

    if (!formData.message.trim()) {
      errs.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate interactive processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus("demo-success");
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field being edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#050814] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-electric/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-deep/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1124] border border-[#1E294B] text-xs font-semibold text-electric uppercase tracking-wider mb-4">
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have a project in mind or want to explore our AI and web capabilities? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Context Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#0B1124]/90 border border-[#1E294B] p-8 backdrop-blur-xl shadow-lg">
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                NovaTech Project Inquiry
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Whether you need a cutting-edge web application, an intelligent AI workflow, high-conversion growth marketing, or a cinematic showreel, we're ready to engineer your solution.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800/80 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-[#131C38] text-electric">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider">Fast Turnaround</strong>
                    <span className="text-xs text-slate-400">Rapid prototypes and production delivery</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-[#131C38] text-purple-glow">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider">Direct Collaboration</strong>
                    <span className="text-xs text-slate-400">Work directly with senior developers and designers</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-[#131C38] text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block text-xs uppercase tracking-wider">Tailored Architecture</strong>
                    <span className="text-xs text-slate-400">Customized to your exact business specifications</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Honest demonstration disclosure callout */}
            <div className="p-5 rounded-2xl bg-[#0B1124]/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
              <Info className="w-4 h-4 text-electric shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-300 block mb-1">Demonstration Notice</strong>
                This website is configured as an interactive academic case-study showcase. The contact form validates all input in real-time without dispatching messages to an external mail server.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0B1124]/90 border border-[#1E294B] p-8 sm:p-10 backdrop-blur-xl shadow-xl relative">
              {submittedStatus === "demo-success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-electric/10 text-electric border border-electric/30 flex items-center justify-center mx-auto mb-5 shadow-glow-cyan">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">
                    Form Validation Successful!
                  </h3>
                  <div className="max-w-md mx-auto p-4 rounded-xl bg-[#131C38]/70 border border-[#1E294B] text-sm text-slate-300 my-4 text-left space-y-1">
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Subject:</strong> {formData.subject}</p>
                  </div>
                  <p className="text-sm text-amber-300/90 max-w-md mx-auto leading-relaxed bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                    <strong>Note:</strong> This form is a frontend demonstration showcase. No backend mail server is connected, so no real email was dispatched.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedStatus("idle");
                      setFormData({ fullName: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full text-sm font-medium bg-[#131C38] text-white hover:bg-slate-700 transition-colors"
                  >
                    Send Another Demo Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name <span className="text-electric">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Elena Rostova"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#131C38]/80 text-white placeholder-slate-500 border ${
                          errors.fullName ? "border-rose-500" : "border-[#1E294B] focus:border-electric"
                        } focus:outline-none focus:ring-1 focus:ring-electric transition-colors text-sm`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-electric">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#131C38]/80 text-white placeholder-slate-500 border ${
                          errors.email ? "border-rose-500" : "border-[#1E294B] focus:border-electric"
                        } focus:outline-none focus:ring-1 focus:ring-electric transition-colors text-sm`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Subject <span className="text-electric">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="AI Solution Inquiry & Web Redesign"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#131C38]/80 text-white placeholder-slate-500 border ${
                          errors.subject ? "border-rose-500" : "border-[#1E294B] focus:border-electric"
                        } focus:outline-none focus:ring-1 focus:ring-electric transition-colors text-sm`}
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Message <span className="text-electric">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals, timelines, and technical requirements..."
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#131C38]/80 text-white placeholder-slate-500 border ${
                          errors.message ? "border-rose-500" : "border-[#1E294B] focus:border-electric"
                        } focus:outline-none focus:ring-1 focus:ring-electric transition-colors text-sm resize-none`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-deep via-primary to-electric hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Validating...
                      </span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
