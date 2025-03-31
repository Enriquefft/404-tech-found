import React from "react";
import {
	Lightbulb,
	GraduationCap,
	Hammer,
	Presentation,
	LineChart,
} from "lucide-react";

export default function Program() {
	const phases = [
		{
			icon: <Lightbulb className="h-10 w-10 text-techblue" />,
			title: "Formación",
			description:
				"Inmersión en conceptos básicos de Deep Tech y trabajo en equipo multidisciplinario.",
			timeline: "4 semanas",
		},
		{
			icon: <GraduationCap className="h-10 w-10 text-techblue" />,
			title: "Especialización",
			description:
				"Formación avanzada en uno de nuestros 'houses': Space Tech, BioTech o AI.",
			timeline: "8 semanas",
		},
		{
			icon: <Hammer className="h-10 w-10 text-techblue" />,
			title: "Prototipo",
			description:
				"Desarrollo acelerado de prototipos con mentorías especializadas.",
			timeline: "12 semanas",
		},
		{
			icon: <Presentation className="h-10 w-10 text-techblue" />,
			title: "DemoDay",
			description:
				"Presentación ante inversores y socios estratégicos nacionales e internacionales.",
			timeline: "1 semana",
		},
		{
			icon: <LineChart className="h-10 w-10 text-techblue" />,
			title: "Evaluación",
			description:
				"Seguimiento y apoyo continuo para acelerar el crecimiento de las startups formadas.",
			timeline: "Continuo",
		},
	];

	return (
		<section id="program" className="tech-section bg-gray-50">
			<div className="tech-container">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Programa</h2>
					<div className="h-1 w-24 bg-techblue mx-auto mb-6"></div>
					<p className="text-lg max-w-3xl mx-auto">
						Nuestro programa intensivo está diseñado para transformar talento
						joven en fundadores de startups de Deep Tech a través de un proceso
						estructurado de 5 fases.
					</p>
				</div>

				<div className="relative">
					{/* Vertical Line */}
					<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

					{/* Phases */}
					{phases.map((phase, index) => (
						<div
							key={index}
							className={`relative mb-16 md:mb-24 ${
								index % 2 === 0 ? "md:text-right" : "md:text-left"
							}`}
						>
							<div
								className={`flex flex-col ${
									index % 2 === 0
										? "md:flex-row-reverse items-start"
										: "md:flex-row items-start"
								}`}
							>
								{/* Content */}
								<div
									className={`md:w-5/12 mb-8 md:mb-0 ${
										index % 2 === 0 ? "md:pr-12" : "md:pl-12"
									}`}
								>
									<div className="bg-white p-6 rounded-lg shadow-md transform transition hover:shadow-lg">
										<h3 className="text-2xl font-bold mb-2 flex items-center">
											<span className={`mr-2 md:hidden`}>{phase.icon}</span>
											<span>{phase.title}</span>
										</h3>
										<div className="text-sm font-semibold text-techblue mb-3">
											{phase.timeline}
										</div>
										<p className="text-gray-600">{phase.description}</p>
									</div>
								</div>

								{/* Center Icon (visible on md screens) */}
								<div className="hidden md:flex absolute items-center justify-center top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-techblue shadow-lg z-10">
									{phase.icon}
								</div>

								{/* Empty space for alternating layout */}
								<div className="md:w-5/12"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
