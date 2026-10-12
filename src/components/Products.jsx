import { Link } from 'react-router-dom';
import productsBackground from '../assets/products-images/products-page-bg.png';

export default function Products() {
  return (
    <main className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-brand-dark px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/30" />

      <div className="relative max-w-xl text-center">
        <p className="font-badge text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
          ANM Ispat
        </p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Products page coming soon
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/80">
          We’re preparing our product range and specifications. Please check
          back soon.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-brand-orange px-6 py-3 font-badge text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
