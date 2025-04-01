import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-16">
			<div
				className="absolute inset-0 w-full h-full"
				style={{
					background:
						"radial-gradient(circle at center, rgba(10, 132, 255, 0.15) 0%, rgba(0, 0, 0, 1) 70%)",
				}}
			/>

			<div className="tech-container relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
				<h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
					<span className="tech-gradient-text">404 TECH FOUND</span>
				</h1>
				<h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
					Formando a la próxima generación de <br />
					<span className="text-techblue">Deep Founders</span> en LATAM
				</h2>
				<p className="text-lg md:text-xl mb-10 max-w-3xl opacity-90">
					Uniendo perfiles técnicos y administrativos para crear startups de
					Deep Tech que resuelvan los desafíos más importantes de nuestra
					región.
				</p>

				<div className="flex flex-col sm:flex-row gap-4">
					<Button className="tech-button flex items-center gap-2 text-lg">
						Apply Now <ArrowRight size={18} />
					</Button>
					<Button
						variant="outline"
						className="border-white/20 hover:border-white text-white hover:bg-white/10 flex items-center gap-2 text-lg"
					>
						Learn More
					</Button>
				</div>

				<div className="mt-20 animate-bounce">
					<a
						href="#challenge"
						className="text-white/60 hover:text-white transition-colors"
					>
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
						>
							<title>Scroll down</title>
							<path d="M12 5v14M5 12l7 7 7-7" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
