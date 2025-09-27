import React, {useState} from 'react'
import { postContact } from '../services/api'

export default function ContactForm(){
  const [form, setForm] = useState({ name: '', email: '', message: ''});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await postContact(form);
      setStatus('sent');
      setForm({ name: '', email: '', message: ''});
    }catch(err){
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className="w-full p-3 border border-[#A084E8]/40 rounded-lg bg-[#22223B]/60 text-[#F8F8FF] focus:border-[#A084E8] focus:ring-2 focus:ring-[#A084E8] transition-all duration-300 outline-none"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className="w-full p-3 border border-[#A084E8]/40 rounded-lg bg-[#22223B]/60 text-[#F8F8FF] focus:border-[#A084E8] focus:ring-2 focus:ring-[#A084E8] transition-all duration-300 outline-none"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        rows={5}
        className="w-full p-3 border border-[#A084E8]/40 rounded-lg bg-[#22223B]/60 text-[#F8F8FF] focus:border-[#A084E8] focus:ring-2 focus:ring-[#A084E8] transition-all duration-300 outline-none"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-[#A084E8] to-[#F7CA18] text-[#18122B] font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:scale-105 animate-pulse"
      >
        Send
      </button>
      {status === 'sent' && (
        <div className="mt-2 text-green-400 animate-fade-in">Thanks — message sent!</div>
      )}
      {status === 'error' && (
        <div className="mt-2 text-red-400 animate-fade-in">Error sending message.</div>
      )}
    </form>
  )
}