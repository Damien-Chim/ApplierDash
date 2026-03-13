export default function ApplierDashLandingPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,#ffffff_0%,#f6f8fc_45%,#eef4ff_100%)] text-slate-900">
            <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-200">
                            A
                        </div>
                        <div>
                            <p className="text-lg font-bold tracking-tight">ApplierDash</p>
                            <p className="text-xs text-slate-500">Internship tracker for students</p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
                        <a href="#features" className="transition hover:text-blue-600">Features</a>
                        <a href="#preview" className="transition hover:text-blue-600">Preview</a>
                        <a href="#how-it-works" className="transition hover:text-blue-600">How it works</a>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            Log in
                        </button>
                        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:pt-24">
                <div>
                    <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                        Built for internship season
                    </div>
                    <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                        A cleaner way to manage the chaos of job applications.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                        Track roles, companies, notes, and progress in one polished dashboard designed for students and early-career job seekers.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700">
                            Get Started
                        </button>
                        <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                            View Demo
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
                        <div>
                            <p className="text-2xl font-bold text-slate-900">200+</p>
                            <p>Applications tracked</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">All-in-one</p>
                            <p>Dashboard, notes, and insights</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">Student-first</p>
                            <p>Simple and focused workflow</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
                    <div className="absolute -right-8 bottom-0 h-44 w-44 rounded-full bg-indigo-200/40 blur-3xl" />

                    <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
                        <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white">
                                    A
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900">ApplierDash</p>
                                    <p className="text-sm text-slate-500">Your application workspace</p>
                                </div>
                            </div>
                            <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                                Application added successfully
                            </div>
                        </div>

                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Internship Tracker</p>
                                <h2 className="mt-2 text-3xl font-bold tracking-tight">Your Applications</h2>
                                <p className="mt-2 text-sm text-slate-500">Keep roles, deadlines, and notes in one place.</p>
                            </div>
                            <button className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200">
                                + Add Application
                            </button>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {[
                                {
                                    company: 'Google',
                                    location: 'Sydney, NSW',
                                    role: 'Software Engineering Intern',
                                    notes: 'Completed OA, waiting for next round.'
                                },
                                {
                                    company: 'Canva',
                                    location: 'Sydney, NSW',
                                    role: 'Frontend Engineering Intern',
                                    notes: 'Applied with referral. Follow-up sent.'
                                },
                                {
                                    company: 'Airwallex',
                                    location: 'Melbourne, VIC',
                                    role: 'Graduate Software Engineer',
                                    notes: 'Resume tailored. Pending application review.'
                                }
                            ].map((card) => (
                                <div
                                    key={card.company}
                                    className="rounded-3xl border border-slate-200 bg-linear-to-b from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                                        Application
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{card.company}</h3>
                                    <div className="mt-4 space-y-3 text-sm">
                                        <div className="rounded-2xl bg-slate-50 p-3">
                                            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Location</p>
                                            <p className="font-medium text-slate-800">{card.location}</p>
                                        </div>
                                        <div className="rounded-2xl bg-slate-50 p-3">
                                            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Role</p>
                                            <p className="font-medium text-slate-800">{card.role}</p>
                                        </div>
                                        <div className="border-t border-slate-200 pt-3">
                                            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Notes</p>
                                            <p className="leading-6 text-slate-600">{card.notes}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-12 max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Features</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        Everything you need for a more organised application season.
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Built to help students stop juggling spreadsheets, sticky notes, and scattered browser tabs.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: 'Track every application',
                            description: 'Save company names, locations, roles, and personal notes in one clean workflow.'
                        },
                        {
                            title: 'Stay on top of progress',
                            description: 'Keep your search structured so you always know what you applied for and what comes next.'
                        },
                        {
                            title: 'Use a dashboard that feels good',
                            description: 'A polished interface makes it easier to stay consistent during internship season.'
                        }
                    ].map((feature) => (
                        <div key={feature.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-600">
                                ✦
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                            <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="preview" className="mx-auto max-w-7xl px-6 py-20">
                <div className="rounded-[36px] border border-slate-200 bg-slate-950 p-10 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Preview</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Familiar enough to understand instantly. Clean enough to actually enjoy using.
                            </h2>
                            <p className="mt-5 max-w-xl leading-8 text-slate-300">
                                The landing page introduces the product, and the logged-in dashboard keeps the same design language so the whole experience feels cohesive.
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div className="space-y-4">
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <p className="text-sm font-semibold text-blue-300">Dashboard Preview</p>
                                    <p className="mt-2 text-sm text-slate-300">Application cards, analytics, and notes in one place.</p>
                                </div>
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <p className="text-sm font-semibold text-blue-300">Simple workflow</p>
                                    <p className="mt-2 text-sm text-slate-300">Log in, add roles, track updates, and stay organised.</p>
                                </div>
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <p className="text-sm font-semibold text-blue-300">Built for focus</p>
                                    <p className="mt-2 text-sm text-slate-300">No clutter. Just the parts that matter during recruitment season.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">How it works</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                        A simple flow from first visit to daily use.
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        ['1', 'Discover the product', 'Visitors land on the homepage and quickly understand the problem ApplierDash solves.'],
                        ['2', 'Log in to your workspace', 'Once authenticated, users move into the actual dashboard where they can manage applications.'],
                        ['3', 'Track everything in one place', 'Save details, update notes, and keep your whole application season organised.']
                    ].map(([step, title, description]) => (
                        <div key={step} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                                {step}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                            <p className="mt-3 leading-7 text-slate-600">{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-24 pt-8">
                <div className="rounded-[36px] border border-blue-100 bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white shadow-[0_25px_80px_rgba(37,99,235,0.28)] sm:px-12">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Get started</p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                Ready to organise your internship search properly?
                            </h2>
                            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                                Start with a clean landing page, guide users into login, and let the dashboard do the rest.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50">
                                Log in
                            </button>
                            <button className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
