export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <header className="flex items-center justify-between border-b border-gray-500 py-5">
        <a href="#" className="flex items-center gap-3">
          <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#0f2f4a" />
            <path d="M19 51V13h15a12 12 0 0 1 0 24H27" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 52h6v-7h6v-7h8" fill="none" stroke="#ff7a1a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="leading-tight">
            <span className="block text-lg font-bold">Proline</span>
            <span className="block text-sm text-orange-500">Optimization Group</span>
          </span>
        </a>
        <nav className="flex gap-5 text-sm">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section
        className="relative overflow-hidden rounded-lg bg-cover bg-center px-6 py-24 text-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Practical process optimization consulting
          </h1>
          <p className="mx-auto mb-7 max-w-2xl text-lg">
            Proline Optimization Group is a consultancy helping industrial and
            manufacturing businesses reduce waste, improve throughput and run
            more efficient operations.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-md bg-blue-700 px-7 py-3 text-white"
          >
            Book a consultation
          </a>
        </div>
      </section>

      <section id="services" className="py-12">
        <h2 className="mb-5 text-2xl font-bold">Our Services</h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-gray-500 p-5">
            <h3 className="mb-2 font-semibold">Process Optimization</h3>
            <p>Find bottlenecks, reduce waste and improve flow across your operation.</p>
          </div>
          <div className="rounded-lg border border-gray-500 p-5">
            <h3 className="mb-2 font-semibold">Industrial Engineering</h3>
            <p>Time studies, line balancing, layout design and capacity planning.</p>
          </div>
          <div className="rounded-lg border border-gray-500 p-5">
            <h3 className="mb-2 font-semibold">Manufacturing Engineering</h3>
            <p>Production process analysis, equipment support and technical advisory.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-12">
        <h2 className="mb-6 text-2xl font-bold">About</h2>
        <div className="grid items-start gap-8 md:grid-cols-3">
          <img
            src="/profile.jpg"
            alt="Technical advisor at Proline Optimization Group"
            className="w-full rounded-lg object-cover"
          />
          <div className="space-y-4 md:col-span-2">
            <p>
              Proline Optimization Group is led by an ERB-certified industrial
              and manufacturing engineer and Six Sigma Green Belt who helps
              organisations find where their processes lose time, money and
              output, and fix it.
            </p>
            <p>
              I hold a Bachelor&apos;s degree in Industrial and Manufacturing
              Engineering from the Botswana International University of Science
              and Technology, a Coursera certificate in Process Optimization,
              and a certificate in Business Setup and Entrepreneurship. I
              currently work as a Technical Advisor at CEDA, and I previously
              worked in mining at Mupane Gold Mine and in manufacturing at
              Makoro Bricks.
            </p>
            <p>
              My expertise covers turnaround implementation, need-based
              mentoring, SAP systems, CAD and machine learning, so I can take a
              problem from analysis through to a working solution and help your
              team keep it running.
            </p>
          </div>
        </div>

        <h3 className="mb-3 mt-10 text-xl font-semibold">
          Qualifications and expertise
        </h3>
        <ul className="grid gap-2 md:grid-cols-2">
          <li className="rounded-lg border border-gray-500 p-3">
            BEng, Industrial and Manufacturing Engineering (BIUST)
          </li>
          <li className="rounded-lg border border-gray-500 p-3">
            Six Sigma Green Belt
          </li>
          <li className="rounded-lg border border-gray-500 p-3">
            ERB-certified engineer
          </li>
          <li className="rounded-lg border border-gray-500 p-3">
            Process Optimization certificate (Coursera)
          </li>
          <li className="rounded-lg border border-gray-500 p-3">
            Business Setup and Entrepreneurship certificate
          </li>
          <li className="rounded-lg border border-gray-500 p-3">
            SAP systems, CAD and machine learning
          </li>
          <li className="rounded-lg border border-gray-500 p-3">
            Turnaround implementation
          </li>
          <li className="rounded-lg border border-gray-500 p-3">
            Need-based mentoring
          </li>
        </ul>
      </section>

      <footer id="contact" className="border-t border-gray-500 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
        <p className="mb-6">
          Talk to us about your operation. We will help you find where the
          losses are and how to fix them.
        </p>
        <div className="flex flex-col items-center gap-2">
          <p>
            Email:{" "}
            <a
              href="mailto:mosebiwamaatla50@gmail.com"
              className="underline"
            >
              mosebiwamaatla50@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+26775280086" className="underline">
              +267 75 280 086
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/26775280086"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              +267 75 280 086
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}