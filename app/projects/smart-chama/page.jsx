import Link from "next/link";

export default function SmartChamaProject() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 max-w-4xl mx-auto text-slate-800">
      {/* Back Navigation */}
      <Link href="/#work" className="text-blue-600 font-mono hover:underline mb-8 inline-block">
        &larr; cd ../portfolio
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Smart-Chama</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          A full-stack fintech platform designed to digitize local Table Banking and Merry-Go-Round groups, featuring automated contributions and real-time ledger management.
        </p>
      </header>

      {/* Tech Stack Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-300 pb-2">Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
          <li className="bg-white p-3 rounded shadow-sm border border-slate-200">Java Spring Boot</li>
          <li className="bg-white p-3 rounded shadow-sm border border-slate-200">Next.js & React</li>
          <li className="bg-white p-3 rounded shadow-sm border border-slate-200">M-Pesa Daraja API</li>
          <li className="bg-white p-3 rounded shadow-sm border border-slate-200">PostgreSQL</li>
        </ul>
      </section>

      {/* Architecture & Features */}
      <section className="mb-12 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-300 pb-2">Architecture & Features</h2>
        <div>
          <h3 className="font-bold text-lg text-slate-800">Double-Entry Ledger System</h3>
          <p className="text-slate-700 mt-2">
            Engineered a robust database schema to track complex interest calculations and ensure every user contribution and loan distribution is perfectly balanced and audited.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-800">Automated Payment Flows</h3>
          <p className="text-slate-700 mt-2">
            Integrated the M-Pesa Daraja API to allow seamless mobile payment requests, instantly reflecting transactions on the user's dashboard without manual entry.
          </p>
        </div>
      </section>

      {/* Challenges & Solutions (The most important part!) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-300 pb-2">Challenges & Solutions</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="font-bold text-lg text-blue-700 mb-2">Debugging API Transaction Failures</h3>
          <p className="text-slate-700 mb-4">
            During the testing phase of the M-Pesa integration, I encountered a persistent transaction failure that initially appeared to be a broken data rendering cycle on the frontend.
          </p>
          <p className="text-slate-700">
            <strong>The Solution:</strong> After tracing the logs back to the database, I discovered it was actually a logic conflict. To test payments from a single device, I had assigned the same test phone number to multiple user accounts. The system correctly flagged the duplicate telephone variables, halting the transaction. Identifying this allowed me to implement stricter database constraints and improve the error-handling feedback on the frontend.
          </p>
        </div>
      </section>
    </main>
  );
}