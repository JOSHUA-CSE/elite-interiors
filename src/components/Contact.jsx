import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS credentials
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      phone_number: formState.phone,
      message: formState.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormState({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Failed to send the message. Please try again later or contact us directly.");
      });
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-black border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-display text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            10 // CONTACT INQUIRIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white">
            Let's Shape Your <span className="italic text-gold">Vision.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-zinc-950 border border-white/[0.03] rounded-lg flex items-start gap-4 hover:border-gold/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold shrink-0">
                <FiPhone className="text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs text-white/40 tracking-wider">CALL US DIRECTLY</span>
                <a href="tel:8807555436" className="font-display text-lg text-white font-medium hover:text-gold transition-colors duration-300 mt-1" data-hover="true">
                  +91 8807555436
                </a>
                <p className="text-xs text-white/30 mt-1">Available Mon-Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="p-6 bg-zinc-950 border border-white/[0.03] rounded-lg flex items-start gap-4 hover:border-gold/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold shrink-0">
                <FiMail className="text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs text-white/40 tracking-wider">EMAIL INQUIRIES</span>
                <a href="mailto:elitinterirors@gmail.com" className="font-display text-lg text-white font-medium hover:text-gold transition-colors duration-300 mt-1" data-hover="true">
                  elitinterirors@gmail.com
                </a>
                <p className="text-xs text-white/30 mt-1">We respond within 24 business hours</p>
              </div>
            </div>

            <div className="p-6 bg-zinc-950 border border-white/[0.03] rounded-lg flex items-start gap-4 hover:border-gold/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold shrink-0">
                <FiMapPin className="text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xs text-white/40 tracking-wider">HEAD OFFICE</span>
                <span className="font-display text-base text-white font-medium mt-1">
                  Elite Architecture Towers
                </span>
                <p className="text-xs text-white/40 mt-1 leading-relaxed">
                  No 12 second floor<br />
                  Podanur main road coimbatore- 641023
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 p-8 md:p-10 bg-zinc-950 border border-white/[0.03] rounded-lg">
            <h3 className="font-display text-xl font-medium text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative border-b border-white/20 focus-within:border-gold transition-colors duration-300 py-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-none outline-none text-sm text-white font-sans placeholder-white/30"
                  />
                </div>

                {/* Email */}
                <div className="relative border-b border-white/20 focus-within:border-gold transition-colors duration-300 py-2">
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-none outline-none text-sm text-white font-sans placeholder-white/30"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative border-b border-white/20 focus-within:border-gold transition-colors duration-300 py-2">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full bg-transparent border-none outline-none text-sm text-white font-sans placeholder-white/30"
                />
              </div>

              {/* Message */}
              <div className="relative border-b border-white/20 focus-within:border-gold transition-colors duration-300 py-2">
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your space / project details... *"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-none outline-none text-sm text-white font-sans placeholder-white/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-white hover:bg-gold text-black hover:text-white font-display text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group"
                data-hover="true"
              >
                {submitted ? (
                  <span>Message Sent Successfully</span>
                ) : (
                  <>
                    Submit Inquiry
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
