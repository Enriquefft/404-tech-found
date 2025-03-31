import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
	const faqs = [
		{
			question: "¿Quién puede aplicar al programa?",
			answer:
				"Jóvenes talentos entre 18-30 años con formación técnica (ingeniería, ciencias, matemáticas) o administrativa (negocios, marketing, finanzas) con interés en Deep Tech. No es necesario tener una idea de startup previamente.",
		},
		{
			question: "¿Cuánto dura el programa completo?",
			answer:
				"El programa completo dura aproximadamente 6 meses, desde la fase de formación inicial hasta el Demo Day. Después, ofrecemos seguimiento continuo para los equipos que forman startups.",
		},
		{
			question: "¿Tiene algún costo participar?",
			answer:
				"El programa es gratuito para los participantes seleccionados. Nuestro modelo se basa en partnerships con instituciones y un pequeño equity en las startups que se forman (solo si logran levantar capital).",
		},
		{
			question: "¿Es necesario tener experiencia previa en Deep Tech?",
			answer:
				"No es necesario. Buscamos talento con potencial y pasión por la tecnología y la innovación. Nuestro programa está diseñado para brindarte los conocimientos necesarios desde cero.",
		},
		{
			question: "¿Puedo aplicar si no soy de Perú?",
			answer:
				"¡Sí! Aunque nuestro foco principal es Perú, aceptamos participantes de toda Latinoamérica. Tenemos un porcentaje de plazas reservadas para talentos de otros países de la región.",
		},
		{
			question: "¿Cómo se forman los equipos?",
			answer:
				"Durante la fase inicial de formación, facilitamos un proceso de matchmaking entre perfiles técnicos y administrativos basado en intereses comunes, habilidades complementarias y evaluaciones de compatibilidad.",
		},
	];

	return (
		<section id="faq" className="tech-section bg-white">
			<div className="tech-container">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
					<div className="h-1 w-24 bg-techblue mx-auto mb-6"></div>
					<p className="text-lg max-w-3xl mx-auto">
						Aquí encontrarás respuestas a las preguntas más comunes sobre
						nuestro programa.
					</p>
				</div>

				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`}>
								<AccordionTrigger className="text-left font-medium">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-gray-700">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
