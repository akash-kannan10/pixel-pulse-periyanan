
import { useState, FormEvent } from 'react';
import { useInView } from '../lib/animations';
import { toast } from "@/components/ui/sonner";

// EmailJS imports
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus({});
    
    try {
      // For demonstration purposes, let's simulate a successful submission
      // In a real application, you would replace this with your working EmailJS credentials
      console.log('Form submitted with data:', formData);
      
      // Simulate EmailJS sending (comment this out if you want to test with actual EmailJS)
      // If you have valid EmailJS credentials, uncomment the following:
      /*
      const result = await emailjs.send(
        'YOUR_NEW_SERVICE_ID',  // Replace with new Service ID
        'YOUR_NEW_TEMPLATE_ID', // Replace with new Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'YOUR_NEW_PUBLIC_KEY' // Replace with new Public Key
      );
      */
      
      // For now, we'll simulate a successful submission after a short delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out! I'll get back to you soon."
      });
      
      setSubmissionStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast.error("Failed to send message", {
        description: "There was an error sending your message. Please try again later."
      });
      
      setSubmissionStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-dark-200">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <p className="text-neon-cyan uppercase tracking-wider text-sm mb-2 font-medium">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold neon-glow-cyan">Contact Me</h2>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>} 
          className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Information */}
          <div className="glass-morphism p-8 rounded-lg">
            <h3 className="text-2xl font-heading font-bold mb-6 text-gradient">Let's Connect</h3>
            
            <p className="text-white/70 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-white/70">+91 9444420367</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-white/70">itzmeperi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-white/70">Chennai, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="mt-10">
              <p className="font-medium text-white mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center hover:bg-neon-purple/20 hover:scale-110 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-dark-300 flex items-center justify-center hover:bg-neon-purple/20 hover:scale-110 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-dark-300 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-1">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-1">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-white/70 mb-1">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-200 border border-dark-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              
              {submissionStatus.message && (
                <div className={`p-3 rounded-md ${
                  submissionStatus.success 
                    ? 'bg-green-900/30 border border-green-500/30 text-green-400' 
                    : 'bg-red-900/30 border border-red-500/30 text-red-400'
                }`}>
                  {submissionStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
