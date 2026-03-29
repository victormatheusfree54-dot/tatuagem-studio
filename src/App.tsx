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
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Decorative Background Emojis */}
        <div className="absolute top-[-5%] left-[-15%] text-[60vw] leading-none opacity-[0.03] -rotate-[20deg] grayscale transition-all duration-700 hover:opacity-10 hover:scale-105 hover:grayscale-0 hover:drop-shadow-[0_0_60px_rgba(155,48,255,0.8)] z-0 select-none cursor-default" role="img" aria-label="Caveira decorativa">
          💀
        </div>
        <div className="absolute bottom-[10%] right-[-10%] text-[50vw] leading-none opacity-[0.03] rotate-[25deg] grayscale transition-all duration-700 hover:opacity-10 hover:scale-105 hover:grayscale-0 hover:drop-shadow-[0_0_60px_rgba(255,45,120,0.8)] z-0 select-none cursor-default" role="img" aria-label="Borboleta decorativa">
          🦋
        </div>

        <div className="relative z-10 text-center flex flex-col items-center animate-on-scroll">
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
            <span className="neon-purple block transform -skew-x-6">BARBTATTOO</span>
            <span className="neon-pink block transform skew-x-6">& PIERCING</span>
          </h1>
          <p className="font-playfair text-sm sm:text-xl md:text-3xl neon-gold uppercase tracking-[0.3em] font-bold mt-8">
            ARTE NA PELE. EXPRESSÃO DA ALMA.
          </p>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 animate-on-scroll" style={{ transitionDelay: '500ms' }} role="img" aria-label="Rolar para baixo">
          <span className="text-3xl">👇</span>
        </div>
      </header>

      <main>
        {/* Services Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <h2 className="font-playfair text-5xl md:text-7xl neon-purple uppercase mb-16 md:mb-24 text-center md:text-left animate-on-scroll">
          NOSSOS SERVIÇOS
        </h2>
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-8">
          <div className="flex-1 border-t-4 md:border-t-0 md:border-l-4 border-[#9B30FF] p-6 md:p-8 animate-on-scroll md:mt-0 relative group text-center md:text-left hover:scale-105 hover:bg-[#0d0d0d] hover:shadow-[0_0_40px_rgba(155,48,255,0.2)] hover:z-20 transition-all duration-300 cursor-default" style={{ transitionDelay: '100ms' }}>
            <div className="text-6xl md:text-7xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label="Ícone de Tatuagem">💉</div>
            <h3 className="font-playfair text-3xl md:text-4xl neon-purple mb-4 md:mb-6 uppercase">TATUAGEM</h3>
            <p className="font-raleway text-lg md:text-xl text-gray-300 leading-relaxed">
              Do realismo ao blackwork, transformamos suas ideias em marcas eternas. Precisão cirúrgica e arte autoral para quem não aceita o comum.
            </p>
          </div>
          
          <div className="flex-1 border-t-4 md:border-t-0 md:border-l-4 border-[#FF2D78] p-6 md:p-8 animate-on-scroll md:mt-24 relative group text-center md:text-left hover:scale-105 hover:bg-[#0d0d0d] hover:shadow-[0_0_40px_rgba(255,45,120,0.2)] hover:z-20 transition-all duration-300 cursor-default" style={{ transitionDelay: '300ms' }}>
            <div className="text-6xl md:text-7xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label="Ícone de Piercing">💎</div>
            <h3 className="font-playfair text-3xl md:text-4xl neon-pink mb-4 md:mb-6 uppercase">PIERCING</h3>
            <p className="font-raleway text-lg md:text-xl text-gray-300 leading-relaxed">
              Joalheria de luxo e aplicação técnica. Foco total em biossegurança, utilizando titânio grau implante e ouro 18k para uma cicatrização perfeita.
            </p>
          </div>
          
          <div className="flex-1 border-t-4 md:border-t-0 md:border-l-4 border-[#FFD700] p-6 md:p-8 animate-on-scroll md:mt-48 relative group text-center md:text-left hover:scale-105 hover:bg-[#0d0d0d] hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] hover:z-20 transition-all duration-300 cursor-default" style={{ transitionDelay: '500ms' }}>
            <div className="text-6xl md:text-7xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300" role="img" aria-label="Ícone de Consultoria">🗣️</div>
            <h3 className="font-playfair text-3xl md:text-4xl neon-gold mb-4 md:mb-6 uppercase">CONSULTORIA</h3>
            <p className="font-raleway text-lg md:text-xl text-gray-300 leading-relaxed">
              Projetos exclusivos e acompanhamento pós-procedimento. Desenhamos a arte respeitando a fluidez e a anatomia do seu corpo.
            </p>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative z-10 bg-[#0f0f0f] border-y border-[#222]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-5xl md:text-7xl neon-pink uppercase mb-16 md:mb-24 text-center md:text-right animate-on-scroll">
            O NOSSO RITUAL
          </h2>

          <div className="flex flex-col gap-20 md:gap-24">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 animate-on-scroll ml-0 text-center md:text-left" style={{ transitionDelay: '100ms' }}>
              <div className="text-7xl md:text-9xl drop-shadow-2xl" role="img" aria-label="Ícone LGBTQ+ Seguro">🏳️‍🌈</div>
              <div className="max-w-2xl">
                <h3 className="font-playfair text-3xl md:text-5xl neon-purple uppercase mb-3 md:mb-4">LGBTQ+ SEGURO</h3>
                <p className="font-raleway text-lg md:text-2xl text-gray-400 leading-relaxed">
                  Ambiente de respeito absoluto. Aqui, sua identidade é celebrada e protegida durante todo o processo criativo.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 animate-on-scroll md:ml-24 text-center md:text-left" style={{ transitionDelay: '300ms' }}>
              <div className="text-7xl md:text-9xl drop-shadow-2xl" role="img" aria-label="Ícone Materiais Certificados">💉</div>
              <div className="max-w-2xl">
                <h3 className="font-playfair text-3xl md:text-5xl neon-pink uppercase mb-3 md:mb-4">MATERIAIS CERTIFICADOS</h3>
                <p className="font-raleway text-lg md:text-2xl text-gray-400 leading-relaxed">
                  Rigor farmacêutico na biossegurança. Descartáveis de última geração e pigmentos premium aprovados pela ANVISA.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8 animate-on-scroll md:ml-48 text-center md:text-left" style={{ transitionDelay: '500ms' }}>
              <div className="text-7xl md:text-9xl drop-shadow-2xl" role="img" aria-label="Ícone Artistas Especializados">🎨</div>
              <div className="max-w-2xl">
                <h3 className="font-playfair text-3xl md:text-5xl neon-gold uppercase mb-3 md:mb-4">ARTISTAS ESPECIALIZADOS</h3>
                <p className="font-raleway text-lg md:text-2xl text-gray-400 leading-relaxed">
                  Curadoria de talentos com anos de experiência. Dominamos diversos estilos para entregar a melhor versão da sua visão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 md:py-40 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
        <div className="relative animate-on-scroll inline-block w-full max-w-4xl">
          {/* Brutalist decorative borders */}
          <div className="absolute -inset-4 md:-inset-6 border-4 border-[#9B30FF] opacity-30 transform rotate-2 pointer-events-none"></div>
          <div className="absolute -inset-4 md:-inset-6 border-4 border-[#FF2D78] opacity-30 transform -rotate-2 pointer-events-none"></div>
          
          <div className="bg-[#050505] p-8 md:p-24 relative z-10 border-2 border-[#1a1a1a]">
            <div className="text-5xl md:text-7xl mb-6 md:mb-10" role="img" aria-label="Ícone de Localização">📍</div>
            <h2 className="font-playfair text-3xl md:text-7xl neon-purple uppercase mb-6 md:mb-12">
              ONDE A ARTE ACONTECE
            </h2>
            <p className="font-raleway text-xl md:text-5xl text-white font-black tracking-widest leading-tight">
              R. DOM PEDRO I 42<br/>
              <span className="neon-pink mt-4 block">SANTA CRUZ RJ</span>
            </p>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] py-12 px-4 text-center relative z-10 bg-[#050505] animate-on-scroll">
        <h2 className="font-playfair text-lg md:text-2xl neon-gold uppercase tracking-widest mb-4">
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
