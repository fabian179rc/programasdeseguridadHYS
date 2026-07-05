import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es físico o digital?',
  a: '100% digital. Acceso inmediato para descargar, editar e imprimir.'
},
{
  q: '¿Necesito experiencia previa?',
  a: 'No. El sistema guía el proceso completo desde el principio.'
},
{
  q: '¿Sirve para cualquier provincia?',
  a: 'Sí. Los documentos son adaptables a cualquier contexto.'
},
{
  q: '¿Puedo adaptarlo a mis clientes?',
  a: 'Sí. Todos los archivos son editables.'
},
{
  q: '¿Cuándo recibo el acceso?',
  a: 'Inmediatamente después del pago.'
},
{
  q: '¿Ya tengo algunos modelos míos?',
  a: 'Este sistema los complementa y los organiza dentro de un método.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-[#2f3a2c] leading-tight">
            ❓ Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-[#e6ddc7]">

                <button
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>

                  <span className="font-heading font-bold text-[#2f3a2c] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#4a553f] text-white' : 'bg-[#4a553f]/10 text-[#4a553f]'}`}
                    aria-hidden="true">

                    {isOpen ?
                    <Minus className="w-5 h-5" /> :

                    <Plus className="w-5 h-5" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">

                      <div className="px-6 md:px-8 pb-8 -mt-2 text-[#4b5347] leading-relaxed text-[16px] md:text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
