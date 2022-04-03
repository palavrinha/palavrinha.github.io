import React from 'react';
import './index.css';

export default function AlertSigns(props) {
    return (
        <div className="alert-signs">
            <p className="text-title">Sinais de Alerta</p>
            <div className="text-body">
                <p>
                    Afinal, quando devemos nos preocupar a respeito do desenvolvimento infantil? Existem parâmetros sobre o que é
                    esperado no desenvolvimento da linguagem de acordo com a idade do bebê/criança.
                </p>
                <div onClick={() => props.onTabChange('the-expected-by-age')} className="tab-link">
                    🡥
                    <u>
                        <b> Consulte: </b>  O que é esperado por idade no desenvolvimento da linguagem oral?
                    </u>
                </div>
                <br />
                <p>
                    Quando percebido que a criança não corresponde a essas expectativas do desenvolvimento é importante que um
                    fonoaudiólogo seja procurado para uma avaliação. Separamos alguns dos principais sinais de alerta que merecem nossa atenção,
                    pois a presença dessas manifestações podem indicar alterações da fala, comunicação e/ou linguagem.
                </p>
                <p>
                    No mais, é importante ressaltar que esses são apenas sinais de alerta, e a identificação deles não significa necessariamente a
                    existência de transtorno de linguagem oral e/ou aprendizagem. Caso a leitura desses tópicos gere alguma dúvida sobre o desenvolvimento do seu pequeno,
                    mantenha a calma e procure uma fonoaudióloga ou um fonoaudiólogo. É só através de avaliações com um(a) profissional
                    qualificado(a) que um diagnóstico pode ser dado de maneira ética e responsável!
                </p>
                <p style={{ color: '#DE4E8D', fontWeight: 'bold' }}>
                    Alguns sinais de alerta são<sup>1-3</sup>:
                </p>
                <ul className="alert-signs-list">
                    <li>A criança não responde a sons, ruídos e vozes do ambiente ou apresenta incômodo incomum com sons altos;</li>
                    <li>Crianças que não atendem quando chamadas pelo próprio nome depois dos 6 meses de idade;</li>
                    <li>Bebês de 6 meses que não apresentam balbucio tendendo a ser crianças mais silenciosas;</li>
                    <li>A criança no período anterior às primeiras palavras não aponta ou tenta usar o gesto como suporte da comunicação;</li>
                    <li>O bebê por volta dos 3 meses não apresenta choros indistintos que se diferenciam, por exemplo, quando a criança está com sono, fome ou dor;</li>
                    <li>Até 1 ano não imita gestos convencionais como abanar para dar tchau e mandar beijos;</li>
                    <li>Por volta dos 6 meses de idade não apresenta interesse pelo meio e nem pelas pessoas, demonstrando baixa atenção nelas. Tem maior fascínio pelos objetos do que interesse por pessoas;</li>
                    <li>Antes de 1 ano ainda não apresentam gestos como forma de comunicação, como por exemplo, estender os braços para pedir colo;</li>
                    <li>Até 1 ano e 6 meses a criança não aponta e/ou mostra algo de seu interesse para o adulto, esse gesto, normalmente, é acompanhado pela realização de contato visual e vocalizações e sorrisos;</li>
                    <li>Ignora ou apresenta pouca resposta quando falam com ela e realiza pouca interação social. Confira O que é esperado por idade no desenvolvimento da linguagem oral?</li>
                    <li>Não começa interações e tem pouco interesse em continuar a comunicação. Fazem pouco contato visual e apresentam dificuldade em sustentar o olhar;</li>
                    <li>Apresentam dificuldade significativa em engajar-se em brincadeiras propícias para sua idade;</li>
                    <li>Ausência de fala na idade esperada, por exemplo, entre 12 a 18 meses a criança ainda não está falando nenhuma palavra e parece não interagir com as pessoas;</li>
                    <li>Não mostra, partilha, ou pede objetos, não compartilha atenção em um mesmo objeto junto com outra pessoa, mais ou menos dos 12 aos 18 meses. Por exemplo, se o adulto tentar brincar com um brinquedo junto com a criança ela não irá focar sua atenção no brinquedo, assim como não terá a iniciativa de começar a brincadeira;</li>
                    <li>A criança perde habilidades que já tinham sido adquiridas, como o balbucio,  fala, gestos de apontar, contato visual ou sorriso social;</li>
                    <li>O bebê ou  a criança apresenta irritabilidade no colo, não aceita bem toques e durante amamentação há poucas trocas entre a mãe e bebê;</li>
                    <li>Dificuldades para se comunicar e expressar suas vontades através da linguagem oral, mesmo já falando ou produzindo frases;</li>
                    <li>Fala incompreensível aos quatro anos (com muitas trocas de sons) e substituições de sons na fala, as quais estão presentes após os 4 anos;</li>
                    <li>Quando a criança já está falando, apresenta a ordem das palavras alterada.</li>
                </ul>
                <p style={{ color: '#DE4E8D', fontWeight: 'bold', marginTop: 50 }}>
                    Sinais de alerta referentes à linguagem escrita:
                </p>
                <p>
                    Além dos sinais de alerta relativos à comunicação oral, devemos ficar atentos também ao desenvolvimento e aquisição da linguagem escrita.
                    Caso perceba algum desses sinais no seu filho(a) converse com a escola e não hesite em procurar um fonoaudiólogo para uma avaliação.
                    Abaixo estão alguns dos sinais de alerta para as dificuldades de aprendizado<sup>4,5</sup>!
                </p>
                <ul className="alert-signs-list">
                    <li>Criança que apresentou um atraso no desenvolvimento da linguagem ou comunicação;</li>
                    <li>Diagnóstico de Transtorno fonológico;</li>
                    <li>Dificuldade para aprender e se lembrar das letras;</li>
                    <li>Produção escrita e a leitura são incompreensíveis;</li>
                    <li>Dificuldade para ser alfabetizada;</li>
                    <li>Confunde letras que se diferem apenas pelas orientações espaciais, por exemplo, p e q, b e d;</li>
                    <li>Faz confusão com para grafar letras que têm sons parecidos: /g/ e /j/; /d/ e /t/ e /b/ e /p/;</li>
                    <li>Inverte sílabas ou letras ao escrever;</li>
                    <li>Faz substituição por palavras parecidas na escrita, como trocar contribuiu por construiu;</li>
                    <li>Omite ou adiciona letras ou sílabas na redação, por exemplo: caneta → caeta; computador → comnputador;</li>
                    <li>Dificuldade em se expressar por textos escritos, organizar e produzir redações;</li>
                    <li>Leitura lenta, imprecisa, realizada com esforço e sem entonação adequada;</li>
                    <li>Quando lê frequentemente tenta adivinhar as palavras do texto (troca por palavras parecidas);</li>
                    <li>Apresenta dificuldade na soletração;</li>
                    <li>Dificuldade para compreender o texto após leitura;</li>
                    <li>Dificuldade para aprender novos idiomas;</li>
                </ul>
                <div className="references">
                    <span>REFERÊNCIAS</span>
                    <span>1 - Panes ACS, Corrêa CC, Maximino LP. Checklist para identificação de crianças de risco para alterações de linguagem oral: nova proposta. Distúrbios da Comunicação[online]. 2018; 30(2):278-87.</span>
                    <span>2 - Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Ações Programáticas Estratégicas. Diretrizes de Atenção à Reabilitação da Pessoa com Transtornos do Espectro do Autismo (TEA). Brasília: Editora MS; 2014.</span>
                    <span>3 - Sociedade Brasileira de Pediatria Departamento Científico de Pediatria do Desenvolvimento e Comportamento Transtorno do Espectro Autista. Manual de Orientação. 2019.</span>
                    <span>4 - Rotta NT, Ohlweiler L, Riesgo RS. Transtornos da aprendizagem : abordagem neurobiológica e Multidisciplinar. 2.ed. Porto Alegre : Artmed, 2016.</span>
                    <span>5 - Mousinho, R. Transtorno específico de aprendizagem - Dislexia. In: Marchesan IQ, Silva HJ, Tomé MC. Tratado das Especialidades em Fonoaudiologia.São Paulo: ROCA, 2016.</span>
                </div>
            </div>
        </div>
    );
}