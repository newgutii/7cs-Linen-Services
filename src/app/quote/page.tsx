"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState<"Restaurant" | "Kitchen" | "Facility" | null>(null);
  
  // Logic-based dynamic states
  const [restaurantServices, setRestaurantServices] = useState<string[]>([]);
  const [uniformQuantity, setUniformQuantity] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate CRM API Call Payload Structure
    const crmPayload = {
      contact: formData,
      industry,
      specificNeeds: industry === "Restaurant" ? restaurantServices : industry === "Kitchen" ? uniformQuantity : "Facility Assessment",
      timestamp: new Date().toISOString()
    };
    
    // Simulate network latency for CRM
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("CRM Payload Ready:", crmPayload);
    setIsSubmitting(false);
    setStep(4); // Success step
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-40 pb-32 px-6 flex flex-col items-center transition-colors duration-500">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-center text-slate-900">
          Initiate Service
        </h1>
        <p className="text-slate-500 text-center mb-16 text-lg font-light max-w-xl mx-auto">
          Our logistics network acts as an invisible extension of your brigade. Configure your requirements below.
        </p>

        <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-8 md:p-16 relative min-h-[500px] flex flex-col justify-center">
          {/* Progress Indication */}
          {step < 4 && (
             <div className="flex space-x-2 mb-12">
               {[1, 2, 3].map(s => (
                 <div key={s} className={`h-2 flex-1 rounded-full transition-all duration-500 ${s <= step ? "bg-emerald-500 shadow-sm" : "bg-slate-100"}`} />
               ))}
             </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 text-emerald-600">1. Contact Identity</h2>
                <div className="space-y-6">
                  <input required placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-6 py-5 text-lg md:text-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all placeholder:text-slate-400" />
                  <input required type="email" placeholder="Corporate Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-6 py-5 text-lg md:text-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all placeholder:text-slate-400" />
                  <input required placeholder="Establishment Name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-6 py-5 text-lg md:text-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white transition-all placeholder:text-slate-400" />
                </div>
                <button type="submit" className="mt-12 w-full py-5 bg-emerald-500 text-white rounded-xl font-black uppercase tracking-[0.2em] hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex justify-center items-center group">
                  Continue <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 text-emerald-600">2. Operational Focus</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  {["Restaurant", "Kitchen", "Facility"].map((ind) => (
                     <button
                       key={ind}
                       onClick={() => { setIndustry(ind as any); setStep(3); }}
                       className="border-2 border-slate-100 bg-slate-50 rounded-2xl p-6 hover:bg-emerald-50 hover:border-emerald-500 hover:shadow-md transition-all text-left group hover:-translate-y-1"
                     >
                       <span className="block text-lg lg:text-xl font-black uppercase mb-4 text-slate-900 truncate group-hover:text-emerald-900">{ind}</span>
                       <span className="text-xs lg:text-sm font-bold text-emerald-600 flex items-center">
                         Select Sector <ArrowRight className="w-4 h-4 ml-1 lg:ml-2 group-hover:translate-x-1 lg:group-hover:translate-x-2 transition-transform" />
                       </span>
                     </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="mt-12 text-slate-400 hover:text-emerald-600 font-bold text-sm uppercase tracking-widest transition-colors flex items-center">
                  Back to Step 1
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold uppercase tracking-widest mb-2 text-emerald-600">3. Specific Requirements</h2>
                <p className="text-slate-500 mb-10 font-medium">Configuring logic based on: <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-md ml-2">{industry}</span></p>

                {/* LOGIC-BASED CONDITIONAL FIELDS */}
                
                {industry === "Restaurant" && (
                  <div className="space-y-6">
                    <label className="block text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">Services Required</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Tablecloths & Overlays", "Napkins Collection", "Custom Textiles"].map(service => {
                        const isSelected = restaurantServices.includes(service);
                        return (
                          <div 
                            key={service} 
                            onClick={() => setRestaurantServices(prev => 
                              isSelected ? prev.filter(s => s !== service) : [...prev, service]
                            )} 
                            className={`border-2 rounded-xl p-5 cursor-pointer text-center font-bold transition-all ${isSelected ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm' : 'border-slate-100 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`}
                          >
                            {service}
                            {isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-500 inline-block ml-3 -mt-1" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {industry === "Kitchen" && (
                  <div className="space-y-6">
                    <label className="block text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">Estimated Uniform Quantity</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["1-20 Staff", "21-50 Staff", "50-100 Staff", "100+ Enterprise"].map(qty => (
                        <div key={qty} onClick={() => setUniformQuantity(qty)} className={`border-2 rounded-xl p-5 cursor-pointer text-center font-bold transition-all ${uniformQuantity === qty ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm' : 'border-slate-100 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`}>
                          {qty}
                          {uniformQuantity === qty && <CheckCircle2 className="w-5 h-5 text-emerald-500 inline-block ml-3 -mt-1" />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {industry === "Facility" && (
                  <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <p className="text-slate-600 font-medium leading-relaxed border-l-4 border-emerald-500 pl-4">
                      Facility Services include Kitchen Towels, Mops, and Custom Floor Mats. A logistics expert will consult with you to map your exact square footage and soil-extraction frequency.
                    </p>
                  </div>
                )}

                <div className="mt-12 flex justify-between items-center">
                   <button type="button" onClick={() => setStep(2)} className="text-slate-400 font-bold hover:text-emerald-600 text-sm uppercase tracking-widest transition-colors flex items-center">Back</button>
                   <button type="submit" disabled={isSubmitting} className="px-8 md:px-12 py-4 md:py-5 bg-emerald-500 text-white rounded-xl font-black uppercase tracking-[0.2em] hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 transition-all disabled:opacity-50 flex items-center group">
                     {isSubmitting ? "Transmitting..." : "Submit Request"}
                     {!isSubmitting && <CheckCircle2 className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                   </button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                 <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                   <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                 </div>
                 <h2 className="text-4xl font-black uppercase tracking-widest mb-6 text-slate-900">Transmitted.</h2>
                 <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md mx-auto">
                   The logistics team for <span className="font-bold text-slate-900">{formData.company || 'your establishment'}</span> has received the brief. A consultant will contact you within 24 hours.
                 </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
