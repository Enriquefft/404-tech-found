import React from "react";
import { Rocket, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Houses() {
	// Create a custom Flask icon since it's not available in lucide-react
	const Flask = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-12 w-12"
		>
			<title>Flask</title>
			<path d="M9 3h6l1 2c.97 1.29 3 3.5 3 6.69 0 4.27-4.03 7.31-9 7.31s-9-3.04-9-7.31c0-3.19 2.03-5.4 3-6.69l1-2z" />
			<path d="M6.5 9h11" />
		</svg>
	);

	const houses = [
		{
			icon: <Rocket className="h-12 w-12" />,
			name: "Space Tech",
			description:
				"Desarrollo de tecnologías para la exploración espacial, satélites y aplicaciones terrestres.",
			color: "from-blue-500 to-purple-500",
			examples: [
				"Nanosatélites",
				"Sistemas de propulsión",
				"Monitoreo terrestre",
			],
		},
		{
			icon: <Flask />,
			name: "BioTech",
			description:
				"Innovación en biotecnología, medicina de precisión y soluciones sostenibles.",
			color: "from-green-500 to-teal-500",
			examples: [
				"Biofabricación",
				"Diagnóstico avanzado",
				"Agricultura de precisión",
			],
		},
		{
			icon: <BrainCircuit className="h-12 w-12" />,
			name: "AI",
			description:
				"Aplicación de inteligencia artificial para resolver problemas complejos en diversos sectores.",
			color: "from-orange-500 to-pink-500",
			examples: [
				"Computer Vision",
				"Procesamiento de lenguaje natural",
				"Sistemas predictivos",
			],
		},
	];

	return (
		<section id="houses" className="tech-section bg-black text-white">
			<div className="tech-container">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">Nuestras Houses</h2>
					<div className="h-1 w-24 bg-techblue mx-auto mb-6" />
					<p className="text-lg max-w-3xl mx-auto opacity-90">
						Especializamos a nuestros participantes en tres áreas de Deep Tech
						con alto potencial de impacto y oportunidades de crecimiento en
						Latinoamérica.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{houses.map((house) => (
						<div key={house.name} className="tech-card overflow-hidden group">
							<div
								className={`absolute inset-0 bg-gradient-to-br ${house.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
							/>

							<div className="relative z-10">
								<div className="mb-6 text-white">{house.icon}</div>
								<h3 className="text-2xl font-bold mb-4">{house.name}</h3>
								<p className="mb-6 opacity-80">{house.description}</p>

								<div className="mb-6">
									<h4 className="text-sm font-semibold uppercase text-white/50 mb-3">
										Ejemplos de Proyectos
									</h4>
									<ul className="space-y-2">
										{house.examples.map((example) => (
											<li key={example} className="flex items-center">
												<span className="w-2 h-2 bg-techblue rounded-full mr-2" />
												<span>{example}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<Button className="tech-button">Aplicar a una House</Button>
				</div>
			</div>
		</section>
	);
}
