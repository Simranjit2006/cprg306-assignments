import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 p-8 transition-colors">
      <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow transition-colors">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/week-2" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 2
            </Link>
          </li>
          <li>
            <Link href="/week-3" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 3
            </Link>
          </li>
          <li>
            <Link href="/week-4" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 4
            </Link>
          </li>
          <li>
            <Link href="/week-5" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 5
            </Link>
          </li>
          <li>
            <Link href="/week-6" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 6
            </Link>
          </li>
          <li>
            <Link href="/week-7" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 7
            </Link>
          </li>
          <li>
            <Link href="/week-8" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 8
            </Link>
          </li>
          <li>
            <Link href="/week-9" className="text-blue-600 dark:text-blue-400 hover:underline">
              Week 9
            </Link>
          </li>
        </ul>

        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          This site contains weekly assignments for CPRG 306.
        </p>
      </div>
    </main>
  );
}
