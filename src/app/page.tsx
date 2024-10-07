import Link from "next/link";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'LightWork | Dashboard',
  description: '',
}
export default function Home() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to Dashboard
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Dive into the heart of your data and unlock powerful insights with our intuitive dashboard.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started
        </Link>
      </div>
    </div>
  </section>
  );
}
