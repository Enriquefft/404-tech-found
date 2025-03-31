"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const navLinks = [
		{ name: "About", href: "#about" },
		{ name: "Program", href: "#program" },
		{ name: "Houses", href: "#houses" },
		{ name: "Success Stories", href: "#success" },
		{ name: "FAQ", href: "#faq" },
		{ name: "Contact", href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
					: "bg-transparent py-4"
			}`}
		>
			<div className="tech-container flex items-center justify-between">
				<div className="flex items-center">
					<a href="/" className="text-white font-bold text-2xl">
						<span className="text-white">404</span>
						<span className="text-techblue"> TECH FOUND</span>
					</a>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-white hover:text-techblue transition-colors"
						>
							{link.name}
						</a>
					))}
					<Button className="tech-button">Apply Now</Button>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden">
					<Button
						type="button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="text-white p-2"
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</Button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg py-4 px-4 animate-fade-in">
					<div className="flex flex-col space-y-4">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-white hover:text-techblue py-2 transition-colors"
								onClick={() => setMobileMenuOpen(false)}
							>
								{link.name}
							</a>
						))}
						<Button className="tech-button w-full mt-4">Apply Now</Button>
					</div>
				</div>
			)}
		</nav>
	);
}
