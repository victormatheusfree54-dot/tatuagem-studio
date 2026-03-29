import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-raleway relative selection:bg-[#FF2D78] selection:text-white">
      {/* CSS Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-skull-emoji bg-butterfly-emoji px-4">
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
            <span className="neon-purple block transform -skew-x-6">BARBTATTOO</span>
            <span className="neon-pink block transform skew-x-6">& PIERCING</span>
          </h1>
          <p className="font-playfair text-xl md:text-3xl neon-gold uppercase tracking-[0.3em] font-bold mt-8">
            ARTE NA PELE. EXPRESSÃO DA ALMA.
          </p>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
          <span className="text-3xl">👇</span>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <h2 className="font-playfair text-5xl md:text-7xl neon-purple uppercase mb-24 animate-on-scroll">
          NOSSOS SERVIÇOS
        </h2>
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-8">
          <div className="flex-1 border-l-4 border-[#9B30FF] pl-8 py-4 animate-on-scroll md:mt-0 relative group">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💉</div>
            <h3 className="font-playfair text-4xl neon-purple mb-6 uppercase">TATUAGEM</h3>
            <p className="font-raleway text-xl text-gray-300 leading-relaxed">
              Do realismo ao blackwork, transformamos suas ideias em marcas eternas. Precisão cirúrgica e arte autoral para quem não aceita o comum.
            </p>
          </div>
          
          <div className="flex-1 border-l-4 border-[#FF2D78] pl-8 py-4 animate-on-scroll md:mt-24 relative group">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💎</div>
            <h3 className="font-playfair text-4xl neon-pink mb-6 uppercase">PIERCING</h3>
            <p className="font-raleway text-xl text-gray-300 leading-relaxed">
              Joalheria de luxo e aplicação técnica. Foco total em biossegurança, utilizando titânio grau implante e ouro 18k para uma cicatrização perfeita.
            </p>
          </div>
          
          <div className="flex-1 border-l-4 border-[#FFD700] pl-8 py-4 animate-on-scroll md:mt-48 relative group">
            <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🗣️</div>
            <h3 className="font-playfair text-4xl neon-gold mb-6 uppercase">CONSULTORIA</h3>
            <p className="font-raleway text-xl text-gray-300 leading-relaxed">
              Projetos exclusivos e acompanhamento pós-procedimento. Desenhamos a arte respeitando a fluidez e a anatomia do seu corpo.
            </p>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-32 px-6 md:px-12 relative z-10 bg-[#0f0f0f] border-y border-[#222]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-5xl md:text-7xl neon-pink uppercase mb-24 text-right animate-on-scroll">
            O NOSSO RITUAL
          </h2>

          <div className="flex flex-col gap-24">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-on-scroll ml-0">
              <div className="text-8xl md:text-9xl drop-shadow-2xl">🏳️‍🌈</div>
              <div className="max-w-2xl">
                <h3 className="font-playfair text-4xl md:text-5xl neon-purple uppercase mb-4">LGBTQ+ SEGURO</h3>
                <p className="font-raleway text-2xl text-gray-400 leading-relaxed">
                  Ambiente de respeito absoluto. Aqui, sua identidade é celebrada e protegida durante todo o processo criativo.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-on-scroll md:ml-24">
              <div className="text-8xl md:text-9xl drop-shadow-2xl">💉</div>
              <div className="max-w-2xl">
                <h3 className="font-playfair text-4xl md:text-5xl neon-pink uppercase mb-4">MATERIAIS CERTIFICADOS</h3>
                <p className="font-raleway text-2xl text-gray-400 leading-relaxed">
                  Rigor farmacêutico na biossegurança. Descartáveis de última geração e pigmentos premium aprovados pela ANVISA.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-on-scroll md:ml-48">
              <div className="text-8xl md:text-9xl drop-shadow-2xl">🎨</div>
              <div className="max-w-2xl">
                <h3 className="font-playfair text-4xl md:text-5xl neon-gold uppercase mb-4">ARTISTAS ESPECIALIZADOS</h3>
                <p className="font-raleway text-2xl text-gray-400 leading-relaxed">
                  Curadoria de talentos com anos de experiência. Dominamos diversos estilos para entregar a melhor versão da sua visão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
        <div className="relative animate-on-scroll inline-block w-full max-w-4xl">
          {/* Brutalist decorative borders */}
          <div className="absolute -inset-6 border-4 border-[#9B30FF] opacity-30 transform rotate-2 pointer-events-none"></div>
          <div className="absolute -inset-6 border-4 border-[#FF2D78] opacity-30 transform -rotate-2 pointer-events-none"></div>
          
          <div className="bg-[#050505] p-12 md:p-24 relative z-10 border-2 border-[#1a1a1a]">
            <div className="text-7xl mb-10">📍</div>
            <h2 className="font-playfair text-5xl md:text-7xl neon-purple uppercase mb-12">
              ONDE A ARTE ACONTECE
            </h2>
            <p className="font-raleway text-3xl md:text-5xl text-white font-black tracking-widest leading-tight">
              R. DOM PEDRO I 42<br/>
              <span className="neon-pink mt-4 block">SANTA CRUZ RJ</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222] py-12 text-center relative z-10 bg-[#050505]">
        <h2 className="font-playfair text-2xl neon-gold uppercase tracking-widest mb-4">
          BARBTATTOO & PIERCING | SANTA CRUZ RJ
        </h2>
        <p className="font-raleway text-gray-600 text-sm uppercase tracking-widest">
          © 2026. Todos os direitos reservados.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5521966363125" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl pulse-whatsapp hover:scale-110 transition-transform duration-300"
        aria-label="Agendar via WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
