import React from 'react';
import { motion } from 'framer-motion';
const bloques = [
{
  num: '1',
  emoji: '🧭',
  title: 'Método Maestro',
  desc: 'Circuito completo para planificar, ejecutar y cerrar auditorías.'
},
{
  num: '2',
  emoji: '🗓️',
  title: 'Planificación Inteligente',
  desc: 'Cronogramas, objetivos, alcance y criterios de priorización.'
},
{
  num: '3',
  emoji: '🔍',
  title: 'Auditoría en Campo',
  desc: 'Checklists, actas de inspección y registro de evidencias.'
},
{
  num: '4',
  emoji: '🗂️',
  title: 'Hallazgos e Informes',
  desc: 'Documentación, clasificación de desvíos e informes profesionales.'
},
{
  num: '5',
  emoji: '🛠️',
  title: 'Acciones Correctivas',
  desc: 'Planes de acción con responsables, plazos y seguimiento.'
},
{
  num: '6',
  emoji: '🤝',
  title: 'Implementación con Clientes',
  desc: 'Adaptación a industrias, comercios, obras y servicios.'
}];

export function BloquesSection() {
  return (
    <section className="py-12 md:py-16 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            📦 6 Bloques Incluidos
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {bloques.map((b, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.06
            }}
            className="group relative flex flex-col bg-white border border-[#e6ddc7]/70 rounded-xl sm:rounded-2xl p-2.5 sm:p-5 shadow-[0_2px_14px_rgba(47,58,44,0.05)] hover:shadow-[0_8px_24px_rgba(47,58,44,0.09)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">

              <span className="pointer-events-none absolute -top-2 right-2 font-heading font-bold text-4xl sm:text-6xl text-[#4a553f]/[0.06] select-none leading-none">
                {b.num}
              </span>

              <div className="relative w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#4a553f]/10 flex items-center justify-center text-sm sm:text-lg flex-shrink-0 mb-1.5 sm:mb-3">
                {b.emoji}
              </div>
              <h3 className="relative font-heading font-bold text-[#2f3a2c] text-[13px] sm:text-lg mb-1 sm:mb-1.5 leading-snug">
                {b.title}
              </h3>
              <p className="relative text-[#4b5347] leading-snug text-[11px] sm:text-[13.5px]">
                {b.desc}
              </p>
              <div className="relative mt-2 sm:mt-3 h-px w-8 sm:w-10 bg-[#4a553f]/20 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
