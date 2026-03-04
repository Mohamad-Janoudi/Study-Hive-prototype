import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const features = [
  {
    title: "Structured Q&A Summaries",
    description: "Turn every lecture into focused questions and concise model answers for active recall."
  },
  {
    title: "Coverage Across 5 Academic Years",
    description: "Navigate from foundational topics to capstone content with organized year-based materials."
  },
  {
    title: "Faster, Smarter Studying",
    description: "Reduce revision time and improve exam performance with high-yield study packs."
  }
];

const testimonials = [
  {
    quote: "Study Hive helped me cut revision time in half while keeping my grades consistently high.",
    name: "Maya R.",
    role: "Year 3 Medical Student"
  },
  {
    quote: "The Q&A structure makes dense lectures easy to remember before exams.",
    name: "Daniel K.",
    role: "Year 2 Engineering Student"
  },
  {
    quote: "It feels like having a study mentor that organizes everything for you.",
    name: "Sara T.",
    role: "Year 5 Law Student"
  }
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="grid-fade overflow-hidden px-4 pb-20 pt-16 sm:px-6">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
              University SaaS Platform
            </span>
            <h1 className="display-font text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Master university lectures with premium Q&A summaries.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Study Hive gives students clean, high-impact lecture summaries in question and answer format,
              mapped from Year 1 to Year 5 for faster, deeper learning.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/auth/signup">
                <Button className="w-full sm:w-auto">Sign Up</Button>
              </Link>
              <Link href="/auth/login">
                <Button className="w-full sm:w-auto" variant="secondary">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-teal-200/40 blur-3xl" />
            <Image
              alt="University students studying together"
              className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl"
              height={900}
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80"
              width={1400}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6" id="features">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <h2 className="display-font text-3xl font-bold text-slate-900">Everything you need to study efficiently</h2>
            <p className="mt-3 text-slate-600">Built for students who want clarity, speed, and consistent results.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <Card className="transition-transform duration-200 hover:-translate-y-1" key={feature.title}>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6" id="about">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
          <Image
            alt="Student writing notes in library"
            className="h-[320px] w-full rounded-3xl object-cover shadow-xl"
            height={900}
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80"
            width={1400}
          />
          <div>
            <h2 className="display-font text-3xl font-bold text-slate-900">About Study Hive</h2>
            <p className="mt-4 leading-7 text-slate-600">
              We built Study Hive to solve one core problem: university content is huge, but student time is
              limited. Our platform distills lectures into clear Q&A summaries so you can revise faster and
              remember longer.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Whether you are entering Year 1 or preparing for final-year assessments, Study Hive keeps your
              preparation structured, practical, and exam-focused.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6" id="testimonials">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="display-font text-3xl font-bold text-slate-900">Trusted by ambitious students</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <p className="text-sm leading-7 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-5 font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/80 bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>� {new Date().getFullYear()} Study Hive. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link className="hover:text-slate-900" href="/auth/login">
              Login
            </Link>
            <Link className="hover:text-slate-900" href="/auth/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
