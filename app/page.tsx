"use client";

import { useState } from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/15 rounded-3xl p-8 shadow-xl">
      {children}
    </div>
  );
}

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-purple-950 text-white">

      {/* Star background */}
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>

      {/* Top navigation */}
      <nav className="sticky top-0 z-30 bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-6 text-sm">
          {["Overview", "Why Tailwind", "Setup", "Utilities", "Examples"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.replace(" ", "").toLowerCase()}`}
                className="px-4 py-2 rounded-full hover:bg-white/10 transition"
              >
                ✦ {item}
              </a>
            )
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <Card>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-4">
            How to Use Tailwind CSS 🌙
          </h1>
          <p className="text-gray-300 max-w-2xl">
            A tutorial blog that explains Tailwind CSS through clear explanations,
            practical examples, and simple interaction.
          </p>
        </Card>
      </section>

      {/* Overview */}
      <section
        id="overview"
        className="relative z-10 max-w-6xl mx-auto px-6 py-6"
      >
        <Card>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">
            What is Tailwind CSS?
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Tailwind CSS is a utility-first CSS framework. Instead of writing
            traditional CSS, you apply small utility classes directly in your
            HTML or JSX.
          </p>
        </Card>
      </section>

      {/* Why Tailwind */}
      <section
        id="whytailwind"
        className="relative z-10 max-w-6xl mx-auto px-6 py-6"
      >
        <Card>
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">
            Why Use Tailwind CSS?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Speed", "Build interfaces faster without switching files."],
              ["Consistency", "Design stays uniform across components."],
              ["Responsive", "Built-in breakpoints like sm, md, lg."],
              ["Scalable", "Works well for small and large projects."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-black/40 border border-white/10 rounded-2xl p-5"
              >
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Setup */}
      <section
        id="setup"
        className="relative z-10 max-w-6xl mx-auto px-6 py-6"
      >
        <Card>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-3">
            Setup Steps
          </h2>
          <pre className="bg-black/70 border border-white/10 p-5 rounded-xl text-sm overflow-x-auto">
npm install -D tailwindcss postcss autoprefixer
          </pre>
        </Card>
      </section>

      {/* Utilities */}
      <section
        id="utilities"
        className="relative z-10 max-w-6xl mx-auto px-6 py-6"
      >
        <Card>
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">
            Utility Classes
          </h2>
          <p className="text-gray-200 mb-4">
            Each Tailwind class controls a single CSS property such as spacing,
            color, or typography.
          </p>
          <pre className="bg-black/70 border border-white/10 p-4 rounded-xl text-sm">
&lt;div class="bg-indigo-500 text-white p-4 rounded"&gt;
  Tailwind Box
&lt;/div&gt;
          </pre>
        </Card>
      </section>

      {/* Interactive Example */}
      <section
        id="examples"
        className="relative z-10 max-w-6xl mx-auto px-6 py-6"
      >
        <Card>
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
            Interactive Example
          </h2>
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition"
          >
            ✦ {showDemo ? "Hide Example" : "Show Example"}
          </button>

          {showDemo && (
            <div className="mt-6 bg-black/40 border border-white/10 p-6 rounded-2xl text-center">
              <p className="text-gray-200 mb-4">
                This card uses spacing, color, and rounded corners provided by
                Tailwind utilities.
              </p>
              <button className="px-6 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition">
                ✦ Sample Button
              </button>
            </div>
          )}
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-400 py-10">
        Created by <span className="text-indigo-300">Shelley Magdalan | @magdalanshelley in GITHUB</span> ✦
        Tailwind CSS Tutorial 🌙
      </footer>

      {/* Star animation */}
      <style jsx>{`
        .stars {
          position: absolute;
          inset: 0;
          background-repeat: repeat;
          pointer-events: none;
          z-index: 0;
        }

        .stars-small {
          background-image:
            radial-gradient(1px 1px at 20px 30px, white, transparent),
            radial-gradient(1px 1px at 80px 120px, white, transparent),
            radial-gradient(1px 1px at 150px 200px, white, transparent),
            radial-gradient(1px 1px at 300px 400px, white, transparent),
            radial-gradient(1px 1px at 500px 100px, white, transparent);
          background-size: 600px 600px;
          animation: moveStars 120s linear infinite;
          opacity: 0.7;
        }

        .stars-medium {
          background-image:
            radial-gradient(2px 2px at 50px 60px, white, transparent),
            radial-gradient(2px 2px at 200px 150px, white, transparent),
            radial-gradient(2px 2px at 400px 300px, white, transparent);
          background-size: 800px 800px;
          animation: moveStars 200s linear infinite;
          opacity: 0.5;
        }

        @keyframes moveStars {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-1000px);
          }
        }
      `}</style>
    </main>
  );
}
