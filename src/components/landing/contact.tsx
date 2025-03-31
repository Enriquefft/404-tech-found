import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
	return (
		<section id="contact" className="tech-section bg-black text-white">
			<div className="tech-container">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-4xl font-bold mb-6">
							Únete a la Revolución{" "}
							<span className="text-techblue">Deep Tech</span>
						</h2>
						<div className="h-1 w-24 bg-techblue mb-8"></div>
						<p className="text-lg mb-8 opacity-90">
							¿Listo para ser parte del futuro tecnológico de Latinoamérica?
							Aplica ahora a nuestro programa o contáctanos para colaborar.
						</p>

						<div className="space-y-6 mb-8">
							<div className="flex items-start">
								<Mail className="text-techblue mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-semibold mb-1">Email</h3>
									<p className="opacity-80">info@404techfound.com</p>
								</div>
							</div>

							<div className="flex items-start">
								<Phone className="text-techblue mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-semibold mb-1">Teléfono</h3>
									<p className="opacity-80">+51 123 456 789</p>
								</div>
							</div>

							<div className="flex items-start">
								<MapPin className="text-techblue mr-4 flex-shrink-0" />
								<div>
									<h3 className="font-semibold mb-1">Ubicación</h3>
									<p className="opacity-80">
										Lima, Perú (con operaciones en toda LATAM)
									</p>
								</div>
							</div>
						</div>

						<div className="flex gap-4">
							<Button className="tech-button">Aplicar al Programa</Button>
							<Button
								variant="outline"
								className="border-white/20 hover:border-white text-white hover:bg-white/10"
							>
								Ser Mentor
							</Button>
						</div>
					</div>

					<div className="tech-card">
						<h3 className="text-xl font-bold mb-6 text-center">
							¿Interesado en colaborar?
						</h3>

						<form className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-1"
								>
									Nombre
								</label>
								<input
									type="text"
									id="name"
									className="w-full p-3 bg-black/50 border border-white/20 rounded-md focus:ring-2 focus:ring-techblue focus:border-transparent"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-1"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full p-3 bg-black/50 border border-white/20 rounded-md focus:ring-2 focus:ring-techblue focus:border-transparent"
								/>
							</div>

							<div>
								<label
									htmlFor="interest"
									className="block text-sm font-medium mb-1"
								>
									Interés
								</label>
								<select
									id="interest"
									className="w-full p-3 bg-black/50 border border-white/20 rounded-md focus:ring-2 focus:ring-techblue focus:border-transparent"
								>
									<option value="">Seleccionar...</option>
									<option value="invertir">Invertir</option>
									<option value="mentorear">Ser mentor</option>
									<option value="alianza">Formar una alianza</option>
									<option value="otro">Otro</option>
								</select>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-1"
								>
									Mensaje
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full p-3 bg-black/50 border border-white/20 rounded-md focus:ring-2 focus:ring-techblue focus:border-transparent"
								></textarea>
							</div>

							<Button className="w-full tech-button flex items-center justify-center gap-2">
								Enviar Mensaje <Send size={16} />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
