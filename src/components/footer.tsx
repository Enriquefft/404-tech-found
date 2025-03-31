import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="tech-container">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<h3 className="text-xl font-bold mb-4">
							<span className="text-white">404</span>
							<span className="text-techblue"> TECH FOUND</span>
						</h3>
						<p className="opacity-70 mb-4">
							Formando a la próxima generación de Deep Founders en LATAM
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-white hover:text-techblue transition-colors"
							>
								<Facebook size={20} />
							</a>
							<a
								href="#"
								className="text-white hover:text-techblue transition-colors"
							>
								<Twitter size={20} />
							</a>
							<a
								href="#"
								className="text-white hover:text-techblue transition-colors"
							>
								<Instagram size={20} />
							</a>
							<a
								href="#"
								className="text-white hover:text-techblue transition-colors"
							>
								<Linkedin size={20} />
							</a>
							<a
								href="#"
								className="text-white hover:text-techblue transition-colors"
							>
								<Github size={20} />
							</a>
						</div>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Explora</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#about"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									Nosotros
								</a>
							</li>
							<li>
								<a
									href="#program"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									Programa
								</a>
							</li>
							<li>
								<a
									href="#houses"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									Houses
								</a>
							</li>
							<li>
								<a
									href="#success"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									Casos de Éxito
								</a>
							</li>
							<li>
								<a
									href="#faq"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									FAQ
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Legal</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									Términos y Condiciones
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									Política de Privacidad
								</a>
							</li>
							<li>
								<a
									href="#"
									className="opacity-70 hover:opacity-100 hover:text-techblue transition-colors"
								>
									Cookies
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Contacto</h4>
						<ul className="space-y-2">
							<li className="opacity-70">Lima, Perú</li>
							<li className="opacity-70">info@404techfound.com</li>
							<li className="opacity-70">+51 123 456 789</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 pt-8 mt-8 text-center">
					<p className="opacity-70">
						© {currentYear} 404 TECH FOUND. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
