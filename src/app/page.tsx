import Footer from "@/components/footer";
import About from "@/components/landing/about";
import Challenge from "@/components/landing/challenge";
import Contact from "@/components/landing/contact";
// import Success from "@/components/landing/success";
import FAQ from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import Houses from "@/components/landing/houses";
import Program from "@/components/landing/program";
import Navbar from "@/components/navbar";

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
				{/*<Success />*/}
				<FAQ />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
