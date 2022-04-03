import React from 'react';
import './index.css';

export default function AboutChildActivities() {
    return (
        <div className="about-child-activities">
            <h1 className="text-title">Sobre o brincar</h1>
            <span>
                Brincar é coisa muito séria! Por meio da brincadeira, a criança aprende a lidar com traumas,
                ansiedade, estresse, controlar seus impulsos, resolver conflitos, cumprir regras e administrar o tempo e a lidar com frustrações.
                Além disso, o brincar é de extrema importância para desenvolver competências como a criatividade, habilidades motoras,
                memória e a linguagem<sup>1-3</sup>. Seu filho, antes de entrar no mundo escolar precisa brincar, correr, pular, recortar,
                dançar e pintar. Pais engajados no processo da brincadeira  possibilitam o desenvolvimento para criança, além de aumentar o
                contato e fortalecer o vínculo com seu filho<sup>4</sup>.
            </span>
            <span>
                Sugerimos nesta sessão algumas brincadeiras para serem desenvolvidas de acordo com a idade do seu pequeno. 
                São brincadeiras simples, de baixo (quando envolvem materiais que normalmente temos em casa) ou nenhum custo que podem ser 
                muito divertidas e ricas para estimular o desenvolvimento do seu filho(a) e melhorar a relação entre vocês.
            </span>
            <hr/>
            <div className="references">
                <span>REFERÊNCIAS</span>
                <span>1 - Brites L. Brincar é fundamental. Como entender o neurodesenvolvimento e resgatar a importância do brincar na primeira infância. São Paulo: Editora Gente;2020. p. 72-81.</span>
                <span>2 - Teixeira, CCS. A Importância da Brincadeira no Desenvolvimento Cognitivo Infantil. Id on Line Rev. Psic 2017; 10(33):94-102.</span>
                <span>3 - Graber et al. Uma rápida revisão do impacto da quarentena e de ambientes restritos nas brincadeiras infantis e o papel da brincadeira na saúde das crianças. Child Care Health Dev 2021; 47(2): 143–53.</span>
                <span>4 - Santos, IS et al. Avaliação da motricidade fina, global e do equilíbrio em escolares de Água Doce, SC. Brazilian Journal of Development 2021 jan; 7(1):p.4931-41.</span>
            </div>
        </div>
    );
}