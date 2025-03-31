import React from "react";
import { CheckCircle } from "lucide-react";

export default function About() {
	return (
		<section id="about" className="tech-section bg-black text-white">
			<div className="tech-container">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-4xl font-bold mb-6">
							Sobre <span className="text-techblue">404 TECH FOUND</span>
						</h2>
						<div className="h-1 w-24 bg-techblue mb-8"></div>
						<p className="text-lg mb-6 opacity-90">
							Somos un programa de formación intensivo diseñado para conectar
							talento técnico y administrativo, formando equipos capaces de
							crear startups de Deep Tech que resuelvan problemas críticos en
							Latinoamérica.
						</p>
						<p className="text-lg mb-8 opacity-90">
							Fundado por emprendedores con experiencia en Deep Tech, nuestra
							misión es evitar la fuga de cerebros y crear un ecosistema de
							innovación tecnológica en la región.
						</p>

						<div className="space-y-4">
							<div className="flex items-start">
								<CheckCircle className="text-techblue mr-3 mt-1 flex-shrink-0" />
								<p>
									Formación especializada en tecnologías de vanguardia: Espacio,
									Biotecnología e IA
								</p>
							</div>
							<div className="flex items-start">
								<CheckCircle className="text-techblue mr-3 mt-1 flex-shrink-0" />
								<p>
									Mentoría personalizada por expertos internacionales en cada
									campo
								</p>
							</div>
							<div className="flex items-start">
								<CheckCircle className="text-techblue mr-3 mt-1 flex-shrink-0" />
								<p>Acceso a red de inversores especializados en Deep Tech</p>
							</div>
							<div className="flex items-start">
								<CheckCircle className="text-techblue mr-3 mt-1 flex-shrink-0" />
								<p>
									Oportunidades de colaboración con instituciones de
									investigación
								</p>
							</div>
						</div>
					</div>

					<div className="tech-card p-10 backdrop-blur-sm bg-gray-900/40 border border-white/10 rounded-xl">
						<div className="text-center mb-8">
							<h3 className="text-2xl font-bold mb-2">Nuestro Impacto</h3>
							<p className="text-white/70">
								Estamos formando el futuro del Deep Tech en LATAM
							</p>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="text-center p-4">
								<div className="text-4xl font-bold mb-2 text-techblue">
									100+
								</div>
								<p className="text-sm">Jóvenes Formados</p>
							</div>

							<div className="text-center p-4">
								<div className="text-4xl font-bold mb-2 text-techblue">15+</div>
								<p className="text-sm">Startups Creadas</p>
							</div>

							<div className="text-center p-4">
								<div className="text-4xl font-bold mb-2 text-techblue">
									$2M+
								</div>
								<p className="text-sm">Capital Levantado</p>
							</div>

							<div className="text-center p-4">
								<div className="text-4xl font-bold mb-2 text-techblue">20+</div>
								<p className="text-sm">Mentores Globales</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
