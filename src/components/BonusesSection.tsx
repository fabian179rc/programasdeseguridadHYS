import React from 'react';
import { motion } from 'framer-motion';
const bonuses = [
{
  num: 1,
  title: 'Kit Express — Auditoría en 30 Min',
  desc: 'Checklist de recorrida + guía paso a paso para usar desde el celular.',
  image: "b1.webp"

},
{
  num: 2,
  title: 'Checklist de Primera Visita al Cliente',
  desc: 'Todos los puntos críticos del primer relevamiento en un solo documento.',
  image: "b2.webp"

},
{
  num: 3,
  title: '+150 Frases Técnicas para Informes',
  desc: 'Observaciones y recomendaciones ya redactadas, listas para copiar y adaptar.',
  image: "b3.webp"

},
{
  num: 4,
  title: 'Mapa Visual de Clasificación de Desvíos',
  desc: 'Criterios claros para diferenciar observaciones, NC y desvíos críticos.',
  image: "b4.webp"

},
{
  num: 5,
  title: 'Método "Informe Profesional en 7 Pasos"',
  desc: 'De la recorrida al informe entregado, sin quedarte en blanco.',
  image: "b5.webp"

}];

export function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f9f8f6] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4a553f] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
            🎁 5 Bonos Gratis Incluidos
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonuses.map((b, i) =>
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
              delay: i * 0.08
            }}
            className="bg-white border border-[#e6ddc7] rounded-2xl overflow-hidden shadow-sm">

              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}${b.image}`}
                  alt={`Bono ${b.num}: ${b.title}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover object-top" />
                <span className="absolute top-3 left-3 bg-[#b85c43] text-white font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                  Bono {b.num}
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-[#4a7a4a] text-white font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full shadow-sm">
                  🎁 Gratis
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#2f3a2c] text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-[#4b5347] text-[15px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
