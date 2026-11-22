export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <header className="flex items-center justify-between border-b border-gray-500 py-5">
        <h2 className="text-lg font-bold">Proline Optimization Group</h2>
        <nav className="flex gap-5 text-sm">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="py-20 text-center">
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
        <h2 className="mb-3 text-2xl font-bold">About</h2>
        <p>
          Proline Optimization Group is a technical advisory and consulting
          firm specialising in process optimization, industrial engineering
          and manufacturing engineering.
        </p>
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