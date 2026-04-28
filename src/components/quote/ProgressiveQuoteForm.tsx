"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProgressiveQuoteForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeds: [] as string[],
    frequency: "Weekly",
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps + 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.serviceNeeds.includes(service);
      if (exists) return { ...prev, serviceNeeds: prev.serviceNeeds.filter((s) => s !== service) };
      return { ...prev, serviceNeeds: [...prev.serviceNeeds, service] };
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sm:p-12">
      
      {/* Progress Indicator */}
      {step <= totalSteps && (
        <div className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
              Step {step} of {totalSteps}
            </h2>
          </div>
          <div className="flex space-x-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  s === step ? "w-12 bg-emerald-500" : s < step ? "w-8 bg-emerald-200" : "w-8 bg-slate-100"
                )}
              />
            ))}
          </div>
        </div>
      )}

      {/* Form Steps */}
      <div className="relative overflow-hidden min-h-[350px]">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.form
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleNext}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Tell us about yourself</h3>
                <p className="text-slate-500 font-light mb-8">We just need a few details to get started on your customized proposal.</p>
              </div>

              <div className="space-y-4">
                <input required type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" />
                <input required type="email" placeholder="Business Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" />
                <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" />
              </div>

              <button type="submit" className="mt-8 w-full flex items-center justify-center bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-emerald-500 transition-colors group">
                Continue <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleNext}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Service Needs</h3>
                <p className="text-slate-500 font-light mb-8">Select the linen categories your establishment requires.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Dining Room Textles", "Chef & Kitchen Uniforms", "Towels & Mats", "Housekeeping Attire"].map((svc) => {
                  const isActive = formData.serviceNeeds.includes(svc);
                  return (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => toggleService(svc)}
                      className={cn(
                        "p-5 rounded-xl border-2 text-left font-semibold transition-all flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2",
                        isActive ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-slate-100 bg-white text-slate-600 hover:border-slate-300"
                      )}
                    >
                      {svc}
                      {isActive && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex space-x-4 pt-6 mt-6 border-t border-slate-100">
                <button type="button" onClick={handlePrev} className="px-6 py-4 rounded-lg font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center">
                  <ChevronLeft className="w-5 h-5 mr-1" /> Back
                </button>
                <button type="submit" className="flex-grow flex items-center justify-center bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-emerald-500 transition-colors group">
                  Continue <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.form>
          )}

          {step === 3 && (
            <motion.form
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleNext}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Frequency</h3>
                <p className="text-slate-500 font-light mb-8">How often do you need your linens replenished?</p>
              </div>

              <div className="space-y-4">
                {["Daily Delivery", "3 Times a Week", "Weekly Delivery", "On-Demand Delivery"].map((freq) => (
                  <label key={freq} className={cn(
                    "flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all focus-within:ring-2 focus-within:ring-emerald-500",
                    formData.frequency === freq ? "border-emerald-500 bg-emerald-50" : "border-slate-100 bg-white hover:border-slate-300"
                  )}>
                    <input 
                      type="radio" 
                      name="frequency" 
                      value={freq} 
                      checked={formData.frequency === freq}
                      onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                      className="w-5 h-5 text-emerald-500 border-slate-300 focus:ring-emerald-500" 
                    />
                    <span className={cn("ml-4 font-semibold text-lg", formData.frequency === freq ? "text-emerald-900" : "text-slate-700")}>
                      {freq}
                    </span>
                  </label>
                ))}
              </div>

              <div className="flex space-x-4 pt-6 mt-6 border-t border-slate-100">
                <button type="button" onClick={handlePrev} className="px-6 py-4 rounded-lg font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center">
                  <ChevronLeft className="w-5 h-5 mr-1" /> Back
                </button>
                <button type="submit" className="flex-grow flex items-center justify-center bg-emerald-500 text-white py-4 rounded-lg font-extrabold text-lg hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1">
                  Complete Request
                </button>
              </div>
            </motion.form>
          )}

          {step === 4 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 space-y-6 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">Request Received!</h3>
              <p className="text-lg text-slate-600 font-light max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our hospitality specialists are reviewing your needs and will contact you within 24 hours with a custom proposal.
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
