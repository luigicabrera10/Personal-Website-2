'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { sendEmail } from "@/actions/actions";

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(formData: FormData) {
        setStatus('sending');
        const result = await sendEmail(formData);
        
        if (result.success) {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    }

    return (
        <div className="relative">
            <form action={handleSubmit} className="flex flex-col justify-center gap-1.5 lg:gap-3">

                <div className="flex flex-col">
                    <label className="font-semibold">Name</label>
                    <input
                        name="name"
                        required
                        type="text"
                        placeholder="Alias or real name"
                        className="p-2 rounded-xs border-2 border-green-500 bg-transparent outline-none focus:shadow-[0_0_10px_rgba(0,201,81,0.4)] transition-all"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Subject</label>
                    <input
                        name="subject"
                        required
                        type="text"
                        placeholder="What brings you here?"
                        className="p-2 rounded-xs border-2 border-green-500 bg-transparent outline-none focus:shadow-[0_0_10px_rgba(0,201,81,0.4)] transition-all"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Message</label>
                    <textarea
                        name="message"
                        required rows={4} 
                        placeholder={"Drop your message here.\nInclude a way to reach you back!"}
                        className="p-2 rounded-xs border-2 border-green-500 bg-transparent outline-none focus:shadow-[0_0_10px_rgba(0,201,81,0.4)] transition-all"
                    />
                </div>

                <button 
                    disabled={status === 'sending'}
                    className="my-2.5 p-2 rounded-xs border-2 border-green-500 lg:my-4.5 hover:shadow-[0_0_30px_rgba(0,201,81,0.9)] hover:cursor-pointer disabled:opacity-50 transition-all uppercase font-bold"
                    type="submit"
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <AnimatePresence>
                {status === 'success' && (
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, scale: 0.95 }}
                        className="fixed bottom-14 right-12 z-50 flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(34,197,94,0.4)] font-bold border border-green-400"
                    >
                        <span className="text-xl">✓</span>
                        <div>
                            <p>Success!</p>
                            <p className="text-xs font-normal opacity-90">I'll get back to you soon.</p>
                        </div>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, scale: 0.95 }}
                        className="fixed bottom-14 right-12 z-50 flex items-center gap-3 bg-red-500 text-white px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(239,68,68,0.4)] font-bold border border-red-400"
                    >
                        <span className="text-xl">✕</span>
                        <div>
                            <p>Error</p>
                            <p className="text-xs font-normal opacity-90">Something went wrong. Try again?</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}