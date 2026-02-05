import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MotivationalSection from '@/components/MotivationalSection';
import ProductsSection from '@/components/ProductsSection';
import LifeSection from '@/components/LifeSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import ChatC from '@/components/ChatC';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MotivationalSection />
      <ProductsSection />
      <LifeSection />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
      <ChatC />
    </main>
  );
}
