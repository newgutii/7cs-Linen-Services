"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Hotel/Resort",
    volume: "",
    message: "",
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, totalSteps));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext(); // moves to the final success step
  };

  return (
    <section id="quote" className="py-24 relative overflow-hidden bg-deep-navy text-white">
      {/* Abstract Background for Glassmorphism Context */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy via-deep-navy/95 to-transparent" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Copy */}
        <AnimatedSection className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-sm font-bold text-gray-300 tracking-widest uppercase">Request A Quote</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to Elevate Your Standards?
          </h3>
          <p className="text-lg text-gray-300 font-light leading-relaxed">
            Fill out our quick 3-step form to receive a customized proposal and cost-analysis for your business. Our experts will get back to you within 24 hours.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center text-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Dedicated account manager
            </div>
            <div className="flex items-center text-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Cost-analysis of current linen usage
            </div>
            <div className="flex items-center text-gray-200">
              <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" /> Sample deliveries available
            </div>
          </div>
        </AnimatedSection>

        {/* Right Side: Glassmorphism Form */}
        <AnimatedSection delay={0.2} className="w-full lg:w-1/2">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            
            {/* Step Indicator */}
            {step < totalSteps && (
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
                  Step {step} of {totalSteps - 1}
                </span>
                <div className="flex space-x-2">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300", 
                        s <= step ? "w-8 bg-white" : "w-4 bg-white/30"
                      )} 
                    />
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <h4 className="text-2xl font-bold mb-4">Contact Details</h4>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" />
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" />
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" />
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <h4 className="text-2xl font-bold mb-4">Service Details</h4>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Industry Type</label>
                      <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full bg-deep-navy/50 border border-white/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all appearance-none">
                        <option>Hotel/Resort</option>
                        <option>Restaurant/Catering</option>
                        <option>Aesthetic/Spa</option>
                        <option>Country Club</option>
                        <option>Senior Living</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Estimated Volume / Needs</label>
                      <input required type="text" name="volume" value={formData.volume} onChange={handleChange} placeholder="e.g. 50 rooms, 200 seats..." className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-5"
                  >
                    <h4 className="text-2xl font-bold mb-4">Additional Information</h4>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us more about your current challenges or specific needs..." className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none"></textarea>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h4 className="text-3xl font-bold text-white">Request Sent!</h4>
                    <p className="text-gray-300 font-light">Thank you, {formData.name || 'there'}. Our team will contact you shortly to discuss your custom linen program.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {step < totalSteps && (
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <button 
                    type="button" 
                    onClick={handlePrev}
                    disabled={step === 1}
                    className={cn(
                      "flex items-center text-sm font-semibold transition-colors", 
                      step === 1 ? "text-transparent pointer-events-none" : "text-gray-300 hover:text-white"
                    )}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                  
                  <button 
                    type="submit"
                    className="flex items-center bg-white text-deep-navy px-6 py-3 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all"
                  >
                    {step === 3 ? (
                      <>Submit Request <Send className="w-4 h-4 ml-2" /></>
                    ) : (
                      <>Continue <ChevronRight className="w-4 h-4 ml-2" /></>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
