'use client'; 

import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // Your active Web3Forms key is safely kept here
    formData.append("access_key", "b4089249-e165-43de-abff-bf321b0e86ed"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset(); // Clear the form
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="pt-32 pb-20 px-6 max-w-2xl mx-auto scroll-mt-24">
      
      {/* Header locked to text-slate-900 */}
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
        Get In Touch
      </h2>
      <p className="text-center text-slate-700 mb-12">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      {/* The Form - Clean white background to pop off the warm page */}
      <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md border border-slate-200">
        
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
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
          <p className={`text-center text-sm font-medium mt-4 ${result.includes("Success") ? "text-green-600" : "text-red-600"}`}>
            {result}
          </p>
        )}

      </form>
    </section>
  );
};

export default Contact;