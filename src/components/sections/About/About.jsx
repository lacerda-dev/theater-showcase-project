/*import React from "react";
import element from "../../../assets/brand/favicon.png";
import background from "../../../assets/backgrounds/fundo-teatral.png";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";
import "./About.css";
import { TextCard } from "../../shared/TextCard/TextCard";

export const About = () => {
  return (
    <div className="about-container">
      <img src={background} className="background-image" />
      <SectionTitle title="Quem somos nós?" />
      <span className="row"></span>
      <h2 className="sub-title">A busca pela Arte</h2>

      <TextCard element={element}>
        <h3 className="title-card">Nossa História</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugit,
          aspernatur itaque repudiandae eligendi ab eos vitae facere explicabo
          libero error aperiam tempora magni eum molestias veniam voluptatem
          dignissimos reiciendis!
        </p>

        <div className="about-numbers">
          <div>
            <strong>+15</strong>
            <span> anos</span>
          </div>
          <div>
            <strong>+3000</strong>
            <span> crianças</span>
          </div>
          <div>
            <strong>+120</strong>
            <span> Espetáculos</span>
          </div>
        </div>
      </TextCard>
    </div>
  );
};

// Onde cada história encontra sua voz.
// Transformando vidas através do teatro.
// Aqui, o protagonismo é de cada aluno.

// A Companhia Sempre em Cena acredita que o teatro é uma poderosa ferramenta para o desenvolvimento humano. Por meio dos jogos teatrais, criamos um ambiente acolhedor onde crianças e adolescentes descobrem novas formas de se expressar, desenvolvem confiança, fortalecem amizades e aprendem enquanto se divertem.

// Nossa companhia nasceu da certeza de que o teatro transforma vidas. Mais do que decorar textos ou subir ao palco, nossos alunos aprendem a ouvir, falar, trabalhar em equipe, respeitar diferenças e acreditar em si mesmos.

// Somos uma companhia apaixonada por transformar o teatro em uma ferramenta de desenvolvimento. Nossa proposta vai além da técnica: queremos formar pessoas mais criativas, comunicativas, seguras e preparadas para os desafios da vida.

// Na Companhia Sempre em Cena, acreditamos que o teatro ensina muito mais do que atuar. Ele ajuda crianças e adolescentes a desenvolverem confiança, comunicação, criatividade, inteligência emocional e relações saudáveis, sempre em um ambiente seguro, acolhedor e cheio de possibilidades.
 */

import React from "react";
import "./About.css";
import background from "../../../assets/brand/favicon.png";
import { SectionTitle } from "../../shared/SectionTitle/SectionTitle";

export const About = () => {
  return (
    <section id="about" className="about-container">
      <img src={background} alt="" className="about-background" />

      <SectionTitle title="Quem somos nós?" />

      <span className="about-row"></span>

      <p className="about-quote">"Desenvolvimento, expressão e confiança"</p>

      <div className="about-content">
        <p>
          A Companhia Sempre em Cena acredita que o teatro é muito mais do que
          subir ao palco. É um espaço onde crianças e adolescentes desenvolvem
          confiança, criatividade, comunicação e aprendem a enxergar o mundo
          através de novas perspectivas.
        </p>

        <p>
          Mais do que formar atores, buscamos formar pessoas. Criamos um
          ambiente acolhedor, seguro e inspirador, onde cada aluno encontra
          liberdade para se expressar, descobrir seu potencial e construir
          relações baseadas no respeito, na colaboração e na arte.
        </p>
      </div>

      <div className="about-stats">
        <div className="stat">
          <strong>+9</strong>
          <span>anos de história</span>
        </div>

        <div className="stat">
          <strong>+3000</strong>
          <span>alunos impactados</span>
        </div>

        <div className="stat">
          <strong>+120</strong>
          <span>espetáculos realizados</span>
        </div>
      </div>
    </section>
  );
};
