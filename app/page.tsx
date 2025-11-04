import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '72px' }}>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'QR Menu',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '299',
              priceCurrency: 'TRY',
            },
            description: 'Modern dijital QR menü sistemi',
          }),
        }}
      />
    </>
  );
}


