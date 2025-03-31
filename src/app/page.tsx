import Navbar from "@/components/navbar";
import Hero from "@/components/landing/hero";
import Challenge from "@/components/landing/challenge";
import About from "@/components/landing/about";
import Program from "@/components/landing/program";
import Houses from "@/components/landing/houses";
import Success from "@/components/landing/success";
import FAQ from "@/components/landing/faq";
import Contact from "@/components/landing/contact";
import Footer from "@/components/footer";

/**
 * @returns Home page component
 */
export default async function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Challenge />
				<About />
				<Program />
				<Houses />
				<Success />
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
