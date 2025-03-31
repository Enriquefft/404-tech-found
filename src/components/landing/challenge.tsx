import React from "react";
import { ArrowBigRightDash, Users, TrendingUp, Rocket } from "lucide-react";

export default function Challenge() {
	return (
		<section id="challenge" className="tech-section bg-gray-50">
			<div className="tech-container">
				<div className="mb-12 text-center">
					<h2 className="text-4xl font-bold mb-4">El Desafío</h2>
					<div className="h-1 w-24 bg-techblue mx-auto mb-6" />
					<p className="text-lg max-w-3xl mx-auto">
						Perú enfrenta una crisis de talento tecnológico, con una creciente
						emigración de jóvenes profesionales y una brecha significativa en
						oportunidades para desarrollar proyectos de alto impacto.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					<div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
						<div className="mb-4 text-techblue">
							<Users size={36} />
						</div>
						<h3 className="text-xl font-bold mb-3">Emigración de Talento</h3>
						<p className="text-gray-600">
							Más del 70% de jóvenes profesionales con talento técnico
							consideran emigrar debido a la falta de oportunidades para
							desarrollar tecnología avanzada.
						</p>
					</div>

					<div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
						<div className="mb-4 text-techblue">
							<TrendingUp size={36} />
						</div>
						<h3 className="text-xl font-bold mb-3">Brecha de Innovación</h3>
						<p className="text-gray-600">
							Existe una falta de conexión entre perfiles técnicos y
							administrativos para formar equipos multidisciplinarios capaces de
							crear startups de impacto.
						</p>
					</div>

					<div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
						<div className="mb-4 text-techblue">
							<Rocket size={36} />
						</div>
						<h3 className="text-xl font-bold mb-3">Potencial Inexplorado</h3>
						<p className="text-gray-600">
							Latinoamérica tiene un enorme potencial para resolver problemas
							globales a través de Deep Tech, pero carece de ecosistemas de
							apoyo adecuados.
						</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<a
						href="#about"
						className="inline-flex items-center text-techblue hover:text-techblue/80 transition-colors font-semibold"
					>
						Descubre cómo estamos resolviendo estos desafíos{" "}
						<ArrowBigRightDash className="ml-2" />
					</a>
				</div>
			</div>
		</section>
	);
}
