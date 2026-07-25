import { Metadata } from 'next'
import Link from 'next/link'
import { Wand2, BookOpen, Award, CalendarDays, Route, CalendarClock, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LandingHero } from '@/components/landing/landing-hero'
import { LandingFeatures } from '@/components/landing/landing-features'
import { LandingNavbar } from '@/components/landing/landing-navbar'
import { LandingFooter } from '@/components/landing/landing-footer'

export const metadata: Metadata = {
  title: 'Tandeem Academy — Platform LMS AI untuk Tim Modern',
  description:
    'Buat, jadwalkan, dan sertifikasi program pelatihan internal dengan AI. Self-paced course, workshop terjadwal, dan learning path dalam satu platform.',
}

const howItWorksSteps = [
  {
    icon: Wand2,
    title: 'Tulis Brief',
    description:
      'Mentor cukup menuliskan topik dan tujuan belajar. AI Tandeem Academy memahami konteks industri Anda dan menyiapkan struktur konten.',
  },
  {
    icon: BookOpen,
    title: 'AI Generate',
    description:
      'Sistem otomatis menyusun modul, lesson Markdown, dan quiz sesuai tujuan. Mentor cukup merevisi, bukan mulai dari blank page.',
  },
  {
    icon: Award,
    title: 'Publish & Enroll',
    description:
      'Kursus live dalam hitungan menit. Karyawan langsung mulai belajar, progress terlacak, dan sertifikat terbit otomatis setelah lulus.',
  },
]

const hybridLearningBullets = [
  {
    icon: BookOpen,
    title: 'Self-Paced Online Course',
    description: 'Kursus asynchronous dengan video, Markdown, dan quiz yang bisa dikerjakan kapan saja.',
  },
  {
    icon: CalendarDays,
    title: 'Workshop & Seminar Terjadwal',
    description: 'Pertemuan live dengan kapasitas dan kehadiran tercatat, supporting tugas wajib.',
  },
  {
    icon: Route,
    title: 'Bootcamp Intensif',
    description: 'Gabungan kursus dan sesi live terstruktur untuk pengembangan kompetensi mendalam.',
  },
]

const testimonials = [
  {
    quote:
      'Tandeem Academy memangkas waktu kami menyiapkan onboarding dari dua minggu menjadi dua hari. Konten kini konsisten untuk semua divisi.',
    name: 'Rina Pratiwi',
    role: 'Head of People Ops, PT Maju Bersama',
  },
  {
    quote:
      'Kombinasi kursus self-paced dan workshop live membuat tim kami lebih konsisten menyelesaikan pelatihan. Dashboard L&D-nya juga ringan dipakai.',
    name: 'Budi Santoso',
    role: 'L&D Manager, Grup Teladan',
  },
  {
    quote:
      'Learning path per peran membantu kami menjalankan succession planning dengan lebih terstruktur. Sertifikat digital menjadi bukti kompetensi yang valid.',
    name: 'Sari Wulandari',
    role: 'HR Director, Mitra Sejati',
  },
]

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />

      <LandingHero />

      {/* Section: Cara Kerja */}
      <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Cara Kerja
            </p>
            <h2 id="how-it-works-heading" className="mt-2 text-2xl font-bold sm:text-3xl">
              Cara Kerja Tandeem Academy
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Dari brief singkat hingga kursus siap pakai dalam hitungan menit.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <div
                key={step.title}
                className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/40">
                  <step.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mt-4 font-semibold transition-colors duration-200 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Hybrid Learning */}
      <section id="hybrid-learning" aria-labelledby="hybrid-learning-heading" className="py-16 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Hybrid Learning
              </p>
              <h2 id="hybrid-learning-heading" className="mt-2 text-2xl font-bold sm:text-3xl">
                Satu Platform untuk Tiga Mode Belajar
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Tandeem Academy menggabungkan tiga format pelatihan yang biasanya tersebar di banyak vendor menjadi satu sumber kebenaran untuk tim L&D Anda.
              </p>
              <ul className="mt-8 space-y-5">
                {hybridLearningBullets.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/40">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-sm dark:from-blue-950/40 dark:to-indigo-950/40">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border bg-card/80 p-5 backdrop-blur">
                  <CalendarDays className="h-6 w-6 text-blue-600" />
                  <p className="mt-3 text-sm font-medium">Jadwal Workshop</p>
                  <p className="text-xs text-muted-foreground">Live session, kapasitas, kehadiran</p>
                </div>
                <div className="rounded-xl border bg-card/80 p-5 backdrop-blur">
                  <Route className="h-6 w-6 text-teal-600" />
                  <p className="mt-3 text-sm font-medium">Learning Path</p>
                  <p className="text-xs text-muted-foreground">Jalur karier per peran</p>
                </div>
                <div className="rounded-xl border bg-card/80 p-5 backdrop-blur sm:col-span-2">
                  <BookOpen className="h-6 w-6 text-amber-600" />
                  <p className="mt-3 text-sm font-medium">Self-Paced Course</p>
                  <p className="text-xs text-muted-foreground">Konten Markdown + quiz + sertifikat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Features (existing) */}
      <div id="features">
        <LandingFeatures />
      </div>

      {/* Section: Testimonial */}
      <section id="testimonial" aria-labelledby="testimonial-heading" className="py-16 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Testimonial
            </p>
            <h2 id="testimonial-heading" className="mt-2 text-2xl font-bold sm:text-3xl">
              Dipercaya Tim L&D Indonesia
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Catatan: kutipan berikut adalah placeholder untuk demo B2B. Wajib diganti dengan testimoni klien real sebelum go-live produksi.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-xl border bg-card p-6 shadow-sm"
              >
                <blockquote className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Section: CTA Contact */}
      <section id="contact" aria-labelledby="contact-heading" className="relative py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 id="contact-heading" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Siap Transformasi L&D Tim Anda?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base lg:text-lg">
            Jadwalkan demo singkat dengan tim Tandeem Academy untuk melihat cara AI mengubah alur kerja L&D Anda.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group gap-2 px-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              asChild
            >
              <a href="mailto:hello@tandeem.ai?subject=Request%20Demo%20Tandeem%20Academy">
                <CalendarClock className="h-5 w-5 transition-transform group-hover:scale-110" />
                Request Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 transition-all duration-300 hover:bg-accent hover:scale-105"
              asChild
            >
              <Link href="/auth/login">
                <Mail className="h-5 w-5" />
                Masuk
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  )
}
