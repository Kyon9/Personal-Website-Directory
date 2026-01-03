
import React, { useState, useEffect } from 'react';
import { PROJECTS, UI_STRINGS } from './constants';
import { getAIInsight } from './services/gemini';
import { AIInsight } from './types';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const data = await getAIInsight();
        setInsight(data);
      } catch (err) {
        console.error("Failed to fetch AI insights");
      } finally {
        setLoading(false);
      }
    };
    fetchInsight();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#030712] selection:bg-blue-500/30">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>

      {/* Navigation / Header */}
      <header className="relative z-10 w-full px-6 py-8 md:px-12 md:py-12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-4">
            {UI_STRINGS.header}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            {UI_STRINGS.subHeader}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow px-6 md:px-12 max-w-7xl mx-auto w-full mb-20">
        {/* AI Insight Section */}
        <section className="mb-16">
          <div className="glass p-6 md:p-8 rounded-3xl border-blue-500/20 bg-blue-500/5">
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div className="flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 block">AI Spotlight & Wisdom</span>
                {loading ? (
                  <div className="space-y-2 animate-pulse">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2"></div>
                  </div>
                ) : (
                  <>
                    <p className="text-xl md:text-2xl font-medium text-white mb-2 leading-snug">
                      "{insight?.quote}"
                    </p>
                    <p className="text-gray-400 italic">
                      💡 {insight?.advice}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>

        {/* Call to Action for GitHub */}
        <section className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Want to see more work?</p>
          <a
            href="https://github.com/Kyon9"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Follow on GitHub</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-10 md:px-12 border-t border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm">
          <p>{UI_STRINGS.footer}</p>
          <div className="flex space-x-6">
            <a href="https://github.com/Kyon9" className="hover:text-white transition-colors">Source</a>
            <a href="mailto:contact@tanshuai.xyz" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
