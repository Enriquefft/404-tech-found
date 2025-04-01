import React from "react";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Success() {
	const testimonials = [
		{
			quote:
				"404 TECH FOUND me dio la oportunidad de trabajar en tecnología espacial sin tener que salir de Perú. Ahora lidero un proyecto de nanosatélites con impacto regional.",
			name: "María Rodríguez",
			role: "Co-fundadora, SatConnect",
			image: "/placeholder.svg",
		},
		{
			quote:
				"La conexión entre perfiles técnicos y de negocios es invaluable. Encontré a mis co-fundadores aquí y juntos hemos logrado levantar nuestra primera ronda de inversión.",
			name: "Carlos Mendoza",
			role: "CEO, BioSolutions",
			image: "/placeholder.svg",
		},
		{
			quote:
				"La mentoría personalizada y el acceso a una red global de expertos han sido clave para validar nuestra tecnología de IA y encontrar nuestros primeros clientes.",
			name: "Ana Fuentes",
			role: "CTO, AI Health",
			image: "/placeholder.svg",
		},
	];

	const partners = [
		{ name: "Universidad Nacional de Ingeniería", logo: "/placeholder.svg" },
		{ name: "MIT Technology Review", logo: "/placeholder.svg" },
		{ name: "SpaceX", logo: "/placeholder.svg" },
		{ name: "Google for Startups", logo: "/placeholder.svg" },
		{ name: "Banco Interamericano de Desarrollo", logo: "/placeholder.svg" },
		{ name: "CONCYTEC", logo: "/placeholder.svg" },
	];

	return (
		<section id="success" className="tech-section bg-gray-50">
			<div className="tech-container">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
					<div className="h-1 w-24 bg-techblue mx-auto mb-6" />
					<p className="text-lg max-w-3xl mx-auto">
						Estas son algunas historias de éxito de participantes que han
						transformado sus ideas en startups de Deep Tech con potencial
						global.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className="bg-white rounded-lg p-8 shadow-md relative"
						>
							<div className="absolute -top-4 -left-4 bg-techblue rounded-full p-2 shadow-lg">
								<Quote size={20} className="text-white" />
							</div>

							<p className="italic mb-6 text-gray-700">"{testimonial.quote}"</p>

							<div className="flex items-center">
								<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h4 className="font-bold">{testimonial.name}</h4>
									<p className="text-sm text-gray-600">{testimonial.role}</p>
								</div>
							</div>

							<div className="absolute bottom-4 right-4 flex">
								{[...new Array(5)].map((_, i) => (
									<Star
										key={i.toString()}
										size={16}
										className="text-yellow-400 fill-current"
									/>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mb-16">
					<h3 className="text-2xl font-bold text-center mb-8">
						Nuestros Aliados
					</h3>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
						{partners.map((partner) => (
							<div key={partner.name} className="flex justify-center">
								<img
									src={partner.logo}
									alt={partner.name}
									className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
								/>
							</div>
						))}
					</div>
				</div>

				<div className="text-center">
					<Button className="tech-button">Ver Más Historias</Button>
				</div>
			</div>
		</section>
	);
}
