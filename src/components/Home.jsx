import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Testimonials from "./components/Testimonials";

<Testimonials />

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <ReviewForm />
    </main>
  );
}