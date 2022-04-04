import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './index.css';

export default function HowToHelpTheChild() {
    const history = useHistory();

    const previousTip = () => {
        if (currentTipIndex === 0) return;
        changePage(currentTipIndex - 1)
    };

    const nextTip = () => {
        if (currentTipIndex === (tips.length - 1)) return;
        changePage(currentTipIndex + 1)
    };

    const prevIcon = (
        <svg width="24" height="33" viewBox="0 0 48 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 5L10 32.5L44 60" stroke="#F28F05" strokeWidth="12" />
        </svg>
    )
    const nextIcon = (
        <svg width="24" height="33" viewBox="0 0 48 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 60L38 32.5L4 5" stroke="#F28F05" strokeWidth="12" />
        </svg>
    )

    const tips = [
        <div>Brinque com a criança e dê atenção a ela!! Sabemos que a rotina é corrida, mas é importante que você separe um tempo para brincar com seu filho! Através da brincadeira várias habilidades são estimuladas, como a cognição, memória, o raciocínio, a criatividade e a linguagem, além do vínculo afetivo criado entre pais e filhos<sup>1</sup>.</div>,
        <div>A qualidade do tempo é mais importante que a quantidade, desde que a interação com a criança/bebê seja frequente. Quando você estiver brincando com a criança esteja inteiro e presente para as trocas comunicativas e para aprofundamento dos vínculos e construção de afeto. Desfrute desse tempo junto com o seu pequeno<sup>2</sup>!</div>,
        <div>Interaja e converse com a criança, ela é um parceiro comunicativo. É importante que seja dado um tempo para sua resposta, seja ela verbal ou não! Propicie situações em que ela interaja com você ou outra pessoa e precise expressar-se, como por exemplo, contar seu dia, ou dizer seus desenhos preferidos<sup>3</sup>.</div>,
        <div>Não corrija de forma hostil a criança quando ela “falar errado”. Repita o que ela disse, porém dando o modelo correto. É importante que o adulto mostre a forma apropriada de falar com crianças em aquisição de fala e linguagem. Se você está preocupado com como seu filho se comunica, perceba como é a sua comunicação com ele!</div>,
        <div>Ao brincar, ou conversar com a criança, se posicione de forma a manter contato visual, na altura dela. Mostre interesse pelo o que seu filho(a) fala, não a interrompa, não tente completar o que ela diz, não fale ou responda por ela<sup>3</sup>.</div>,

        <div>
            <p>As crianças aprendem a se expressar com os adultos, por isso, seja afetuoso, use amor, carinho e compreensão na sua fala. Cuidado para não se expressar de forma violenta e rude com o seu pequeno, e ensinar  a ele  a se comunicar assim! Importante utilizar princípios da Comunicação não violenta (CVN) com os pequenos. Existem infantis que também abordam a CNV com crianças.  Indicamos o Projeto Ciranda do Ser, desenvolvido por Cristina Lobato  e o livro “Ciranda do Ser”, livro desenvolvido por Cristina que aborda a CNV para crianças<sup>4</sup>.</p>
            <a target="_blank" rel="noreferrer" href="https://cirandadoser.com/">
                🡥<u><b> Acesse:</b> https://cirandadoser.com/</u>
            </a>
        </div>,

        <div>Contar histórias é uma excelente atividade para ser feita junto com seu filho! Por  meio da contação de histórias a criança entra em contato com o uso real da escrita, desperta o gosto pela leitura e desenvolve uma série de habilidades. Diferente do que parece a criança participa ativamente do momento da contação de história, a partir dela acontece a construção de valores morais, contribui para a compreensão do mundo, autoconhecimento, despertar emoções, criatividade, imaginação, desenvolvimento da consciência crítica e capacidade de resolução dos problemas. Além disso, essa atividade desenvolve funções cognitivas e linguísticas, uma vez que, aprimora a organização, estimula atenção e a retenção de informações, facilita o estabelecimento da relação entre leitura e escrita e a linguagem oral. A contação de histórias também é importante porque favorece a ampliação do repertório de palavras da criança, melhora o desempenho de frases e textos, facilita o pensamento narrativo, estimula competências de reflexão da própria língua, de interpretar o texto e realizar relações contextuais<sup>5, 6</sup>.</div>,
        <div>Crianças pequenas com autonomia motora, que já conseguem sentar e andar, é recomendado que sejam realizadas brincadeiras e atividades  no chão, utilizando um tapete ou tatame. Isso permite que ela explore o ambiente. Incentive a comunicação da criança junto a essa exploração, nomeie objetos, interaja com a criança, deixe ela sentir  diferentes texturas!</div>,
        <div>Cuidado com o uso de smartphones, tablets, TVs e computadores! O uso precoce prolongado e excessivo de telas traz prejuízos à saúde em geral das crianças, gerando problemas de saúde mental, obesidade, transtornos do sono, atraso cognitivo e dificuldades socioemocionais. A  exposição às telas diminui o tempo de interação social e familiar, tendo como consequência atrasos no domínio da linguagem<sup>7, 8</sup>.</div>,
        <div>
            <p>Através das brincadeiras e do lúdico os bebês e as crianças pequenas se desenvolvem, por isso use jogos e brinquedos e faça brincadeiras indicadas para a faixa-etária de seu pequeno3. </p>
            <p>Acesse a sessão brincadeira de nosso site e confira sugestões de brincadeiras para crianças de 0 a 9 anos.</p>
            <span style={{ cursor: 'pointer' }} onClick={() => history.push('/fun-games')}>
                🡥<u><b> Acesse:</b> Brincadeiras</u>
            </span>
        </div>,
        <div>
            <p>
                Por mais que pareça que os programas assistidos em tablets, celulares e televisões dão estímulos linguísticos suficientes para as crianças, a interação delas com os pais é muito mais potente e capaz de estimular a comunicação. Nada substitui a interação entre o adulto e a criança! Um dos grandes desafios para a redução do tempo dos pequenos nas telas é o alto uso delas pelos pais, o primeiro passo para ajudar seu filho é dando o exemplo! Usufruir das telas de forma consciente é fundamental, para isso, siga as recomendações da Sociedade Brasileira de pediatria (SBP)<sup>9</sup>:
            </p>
            <ul className="list-tips">
                <li>Evitar a exposição de crianças menores de 2 anos às telas, mesmo que passivamente;</li>
                <li>Limitar o tempo de telas em no máximo 1 hora por dia com supervisão dos pais e cuidadores para crianças entre 2 e 5 anos;</li>
                <li>Crianças maiores, que tenham de 6 a 10 anos podem fazer uso de telas por até 2h, sempre com supervisão dos pais;</li>
                <li>Estimule que a criança use as telas em locais comuns da casa;</li>
                <li>Não permita que fiquem isolados com smartphones, computadores e tablets;</li>
                <li>Desconecte-se das telas por volta de 2 horas antes de dormir;</li>
                <li>Não faça uso de smartphones na hora das refeições;</li>
                <li>Oferecer alternativas de atividades longe das telas! Atividades ao ar livre e esporte são ótimas opções, mas não só!</li>
            </ul>
        </div>,
        <div>Certifiquem-se se o teste da Orelhinha foi realizado!  Trata-se de um exame rápido e indolor. Sua realização permite diagnóstico e tratamento precocemente das alterações auditivas. A Lei Federal nº 12.303/2010 tornou obrigatória e gratuita a realização do exame. É recomendado que ele seja realizado na maternidade, antes da alta hospitalar, entre 24 e 48 horas após o nascimento, caso não exista essa possibilidade o teste pode ser realizado ainda no 1º mês de vida. Se detectado alguma alteração, o bebê deve refazê-lo dentro de 15 a 30 dias no máximo. Caso o resultado alterado persistir, o bebê deve ser encaminhado imediatamente a um serviço de Saúde Auditiva para confirmação do diagnóstico de deficiência auditiva e ter acesso a um programa de intervenção precoce para orientar a família acerca das possibilidades de tratamento e a realização da terapia fonoaudiológica<sup>10</sup>.</div>,
        <div>
            <p>Garanta que o teste da linguinha foi realizado! É rápido, não dói, não tem contraindicações e é super importante! A “língua presa”, é uma alteração comum que muitas vezes passa despercebida, porém, ela causa restrição nos movimentos da língua prejudicando a amamentação, fala, mastigação e o ato de engolir. É lei desde 2014 (lei  nº 13.002) a obrigatoriedade da realização desse teste em todos os recém nascidos. O ideal é que o teste seja realizado ainda na maternidade, mas se isso não aconteceu, avise o pediatra na primeira consulta para que haja o encaminhamento para a realização do teste. Quanto antes for feito melhor! Sua realização é aconselhada até o primeiro mês de vida, a execução do teste com antecedência pode prevenir intercorrências na amamentação como a perda de peso e, principalmente, o desmame precoce<sup>11</sup>.</p>
            <a target="_blank" rel="noreferrer" href="https://www.testedalinguinha.com/">
                🡥<u><b> Acesse:</b> https://www.testedalinguinha.com/</u>
            </a>
        </div>
    ];

    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const changePage = (page) => setCurrentTipIndex(page);

    return (
        <section>
            <div className="container-child-help">
                <p className="text-title">Como auxiliar a criança em sua comunicação?</p>
                <p className="text-sub-title">
                    Você deve estar se perguntando, como posso auxiliar no desenvolvimento da linguagem e da comunicação e
                    fala de meu filho, familiar ou aluno? Então, pensando nisso, separamos algumas dicas que podem ser úteis.
                    É bom lembrar que sempre que você estiver desconfiada (o) de algum atraso ou transtorno de comunicação, linguagem ou fala, é
                    importante consultar um fonoaudiólogo.
                </p>
                <div className="text-body">
                    <span
                        className="prev-icon"
                        onClick={previousTip}>
                        {prevIcon}
                    </span>
                    <span
                        className="next-icon"
                        onClick={nextTip}>
                        {nextIcon}
                    </span>
                    {tips[currentTipIndex]}
                </div>
                <Pagination size="sm" className="pag-bar" style={{ marginTop: 10 }}>
                    <Pagination.Prev
                        onClick={() => {
                            changePage(currentTipIndex - 1)
                        }}
                        disabled={currentTipIndex === 0}
                    />
                    {tips.map((tip,idx) => {
                        return <Pagination.Item className="desktop-only" key={idx} onClick={(e) => { changePage(Number(e.target.text)) }}> {tips.indexOf(tip)} </Pagination.Item>
                    })}
                    <Pagination.Next
                        onClick={() => {
                            changePage(currentTipIndex + 1)
                        }}
                        disabled={currentTipIndex === tips.length - 1}
                    />
                </Pagination>
            </div>
            <div className="references">
                <span> REFERÊNCIAS </span>
                <span>1  - Santos, LG. A importância do brincar para o desenvolvimento cognitivo da criança na educação infantil pré-escolar sob a percepção de professores. Projeção e Docência. 2016;7(2): 23-34.</span>
                <span>2  - Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Diretrizes de estimulação precoce : crianças de zero a 3 anos com atraso no desenvolvimento neuropsicomotor Brasília: Editora MS; 2016.</span>
                <span>3  - Mousinho R, Schimid E, Mesquita F, Santos G. Brincando com a linguagem: da lingua oral à língua escrita desenvolvimento dos 03 aos 06 anos para pais e professores. São Paulo:Instituto ABCD. 2018 [Acesso em:04 jul 2021]. Disponível em:</span>
                <span>4  - Lobato, C. Ciranda do ser - 2ª edição. Petrópolis: Bem Cultural Editora, 2019.</span>
                <span>5  - Melo SA, Dias AM, Sampaio MLP, Rêgo RQ. A contação de história e seus contributos para a interação e desenvolvimento linguístico da criança. Olhares 2020; 8(3):1–18.</span>
                <span>6  - Faria IG, Flaviano SL, Guimarães MSB, Faleiro W. A influência da contação de histórias na Educação Infantil. Mediação, Pires do Rio. 2017;12(1): 30-48.</span>
                <span>7  - Nobre, JNP et al. Fatores determinantes no tempo de tela de crianças na primeira infância. Ciência & Saúde Coletiva [online] 2021; 26(3): 1127-36.</span>
                <span>8  - Hadders-Algra M. Interactive media use and early childhood development. J Pediatr Rio de Janeiro. 2020; 96: 273-5.</span>
                <span>9  - Lewis D, Taccollin, C. Grupo de Trabalho Saúde na Era Digital. #MENOS TELAS #MAIS SAÚDE. Manual de Orientação. Sociedade Brasileira de Pediatria. 2019.</span>
                <span>10 - Conselho Federal de Fonoaudiologia.Triagem Auditiva Neonatal Universal (TANU): Implantação com ética, técnica e responsabilidade. Filipeta.</span>
                <span>11 - Martinelli RLC, Marchesan IQ, Gusmão RJ, Berretin-Felix G. Cartilha do Teste da Linguinha: para mamar, falar e viver melhor. São José dos Campos, SP : Pulso Editorial, 201</span>
            </div>
        </section>
    );
}