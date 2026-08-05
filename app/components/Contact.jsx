'use client'; 

import { useState } from 'react';

const Contact = () => {
  // We only need one state variable to handle the message text
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // Spam-prevention metadata
    formData.append("subject", "New Contact Form Submission - Portfolio");
    formData.append("from_name", "Portfolio Automated Server");
    // Safely pull the key from your .env.local file
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! I'll get back to you soon.");
        event.target.reset(); // Clear the form
        
        // FIX: We now clear the 'result' state after 5 seconds
        setTimeout(() => {
          setResult('');
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Something went wrong. Please check your internet connection.");
    } finally {
      // This ensures the button re-enables whether it succeeds or fails
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-20 px-6 max-w-2xl mx-auto scroll-mt-24">
      
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
        Get In Touch
      </h2>
      <p className="text-center text-slate-700 mb-12">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      {/* The Form */}
      <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md border border-slate-200">
        
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea 
            name="message" 
            required 
            rows="5" 
            placeholder="Hi, I'd like to discuss a project..."
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success/Error Message */}
        {result && (
          <p className={`text-center text-sm font-medium mt-4 ${result.includes("Successfully") ? "text-green-600" : "text-red-600"}`}>
            {result}
          </p>
        )}

      </form>
    </section>
  );
};

export default Contact;