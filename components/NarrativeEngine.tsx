
import React, { useState, useRef, useEffect } from 'react';
import { getNarrativeResponse } from '../services/geminiService';
import { Icons } from '../constants';
import { ChatMessage } from '../types';

const NarrativeEngine: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: '¿Qué historia intentamos descifrar hoy?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getNarrativeResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-stone-950 border border-stone-800 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[450px]">
          <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-stone-900/50">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary flex items-center gap-2">
              <Icons.Sparkles /> Motor Narrativo
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-500 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 text-sm font-light leading-relaxed scrollbar-hide"
          >
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`max-w-[85%] ${m.role === 'user' ? 'ml-auto text-right' : 'mr-auto text-left'}`}
              >
                <div className={`inline-block p-3 rounded ${m.role === 'user' ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-stone-900 text-stone-300 border border-stone-800'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto text-left max-w-[85%]">
                <div className="inline-block p-3 rounded bg-stone-900 text-stone-500 animate-pulse">
                  Analizando estructura...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-stone-800 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe una premisa..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-stone-700"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="text-primary hover:scale-110 transition-transform disabled:opacity-50"
            >
              <Icons.Send />
            </button>
          </form>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
      >
        {isOpen ? <span className="text-xl">✕</span> : <Icons.Sparkles />}
      </button>
    </div>
  );
};

export default NarrativeEngine;
