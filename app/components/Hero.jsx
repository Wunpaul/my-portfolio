import Link from "next/link";

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24 pb-12 relative z-10">
            <div className="space-y-4">
                {/* A nice font-mono class here gives it a subtle developer touch */}
                <p className="text-blue-600 font-mono tracking-wide text-lg md:text-xl">
                    Hi, my name is
                </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mt-4">
                Johnpaul Owino.
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-700 tracking-tight mt-4">
                I build things for the web.
            </h2>

            <p className="max-w-2xl text-slate-700 text-lg md:text-xl leading-relaxed mt-8">
                I am a software developer based in Kenya specializing in building 
                exceptional digital experiences. Currently, I'm focused on building 
                fintech solutions like <span className="text-blue-600 font-semibold">Smart-Chama</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-10">
                <Link
                  href="/#work"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-600/10 transition-colors"
                >
                    Check out my work
                </Link>
                <Link
                  href="mailto:johnpaulowino889@gmail.com"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
                >
                    Contact Me
                </Link>
            </div>
        </section>
    );
};

export default Hero;