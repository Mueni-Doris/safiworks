import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonial from '@/components/Testimonial';

export default function HomePage() {
  return (
    <main className="page-home">
      <Hero />

      <section className="container section-lg">
        <h2 className="section-title">Services crafted for exceptional results</h2>
        <p className="section-lead">Flexible plans, transparent pricing, and trusted teams—bookings made easy.</p>
        <ServicesGrid />
      </section>

      <section className="container section-lg bg-layered">
        <h3 className="section-title">Why customers choose us</h3>
        <div className="testimonials">
          <Testimonial quote="Exceptional attention to detail and friendly teams." author="Maya R." role="Homeowner" />
          <Testimonial quote="Fast booking, great communication, and spotless results." author="Alex P." role="Office Manager" />
          <Testimonial quote="I can always rely on Safiworks for a deep clean before events." author="Jordan K." role="Host" />
        </div>
      </section>
    </main>
  );
}
