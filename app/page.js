import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        <ul className="list-disc pl-6 space-y-2 text-blue-600">
          <li>
            <Link href="/week-2" className="hover:underline">
              Week 2
            </Link>
          </li>
          <li>
            <Link href="/week-3" className="hover:underline">
              Week 3
            </Link>
          </li>
        </ul>

        <p className="mt-4 text-sm text-slate-600">
          This site contains weekly assignments for CPRG 306.
        </p>
      </div>
    </main>
  );
}
