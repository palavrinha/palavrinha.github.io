import { Tab, Row, Col, Nav, Pagination } from 'react-bootstrap';
import React from 'react';
import Header from '../../components/Header';
import './index.css';
import { useState } from 'react';

export default function LanguageDevelopment() {
    const tips = [
        'Converse com a criança, é importante que seja dado um tempo para sua resposta, seja ela verbal ou não! Propicie situações em que ela interaja com você ou outra pessoa e precise expressar-se, como por exemplo, contar seu dia, ou dizer seus desenhos preferidos.',
        'Ao brincar, ou conversar com a criança, se posicione de forma a manter contato visual com ela e mostre interesse pelo que a criança fala, não a interrompa, não tente completar o que ela diz, não fale/responda por ela.',
        'Na hora da brincadeira, reserve um tempo pra estar com a criança de forma integral e esteja presente e desfrute desse momento junto com o seu pequeno',
        'Não corrija de forma hostil a criança quando ela falar errado e fale corretamente com ela sem diminutivos. Repita o que ela disse, porém dando o modelo correto. É importante que o adulto mostre a forma apropriada de falar com crianças em aquisição de fala. Se você está preocupado com como seu filho se comunica, perceba como é a sua comunicação com ele. As crianças aprendem a se expressar com os adultos, por isso, use amor, carinho e compreensão na sua fala, cuidado para não se expressar de forma violenta e rude com o seu pequeno, e ensinar, dessa forma, a ele se comunicar assim!',
        'Certifiquem-se se o teste da Orelhinha foi realizado!  Trata-se de um exame rápido e indolor. Sua realização permite diagnóstico e tratamento precocemente das alterações auditivas. A Lei Federal nº 12.303/2010 tornou obrigatória e gratuita a realização do exame. É recomendado que ele seja realizado na maternidade, antes da alta hospitalar, entre 24 e 48 horas após o nascimento, caso não exista essa possibilidade o teste pode ser realizado ainda no 1º mês de vida. Se detectado alguma alteração, o bebê deve refazê-lo dentro de 15 a 30 dias no máximo. Caso o resultado alterado persistir, o bebê deve ser encaminhado imediatamente a um serviço de Saúde Auditiva para confirmação do diagnóstico de deficiência auditiva e ter acesso a um programa de intervenção precoce para orientar a família acerca das possibilidades de tratamento e a realização da terapia fonoaudiológica. (CONSELHO FEDERAL DE FONOAUDIOLOGIA, 2011)',
        'Contar histórias é uma excelente atividade! Além de envolver, encantar, ensinar e despertar o gosto pela leitura, essa prática ainda tem o potencial de desenvolver várias habilidades. Através das histórias a criança pode ampliar seu vocabulário e aprimorar sua capacidade comunicativa! Diferente do que parece a criança participa ativamente do momento da contação de história, a partir dela acontece a construção de valores morais, atribuição de significados àquilo que ouve, elaboração do modo de interagir com o mundo e desenvolvimento da consciência crítica (MELO; DIAS; SAMPAIO; RÊGO, 2020).',
        'Sabemos que a rotina é corrida, mas é importante que você separe um tempo para brincar com seu filho! Através da brincadeira várias habilidades são estimuladas, como a cognição, memória, o raciocínio, a criatividade e a linguagem, além do vínculo afetivo criado entre pais e filhos. (SANTOS, 2016) Nesse quesito, a qualidade do tempo é mais importante que a quantidade, quando você estiver brincando com a criança esteja inteiro e presente para as trocas comunicativas e para aprofundamento dos vínculos e construção de afeto.',
        'A amamentação é importante para o  desenvolvimento da fala e linguagem. Os músculos que a criança usa no momento da amamentação são os mesmos que serão usados para ela falar, Assim, a amamentação age como uma forma de estimulação natural dessas estruturas, é através dela que há o desenvolvimento e crescimento harmonioso e funcional dos aspectos do crânio e da face. A madeira, por vez, cumpre a função apenas de alimentar, pois o bebê não precisa se esforçar como no seio da mãe, sendo assim, os estímulos para o desenvolvimento das estruturas craniofaciais não são eficientes. Além das questões estruturais, no momento da amamentação, a mãe acaricia o bebê, estabelece contato visual, conversa com seu filho favorecendo o desenvolvimento da linguagem e a construção de vínculo e afeto. (PEREIRA, 2005)',
        'Que tal tirar ou nem oferecer chupeta para o seu filho?! Ela apresenta vários prejuízos! As chupetas podem parecer inofensivas e até fofas, mas na realidade o seu uso pode trazer uma série de malefícios. A Bebês que fazendo o uso dela tem a tendência a mamar menos tempo no peito, isso ocorre por conta da “confusão de bico”, ou seja, após ser exposta aos bicos artificiais o bebê fica com grande dificuldade ou até mesmo incapaz de realizar a sucção no seio materno. Além de prejudicar a amamentação, por conta desse hábito modificar a musculatura do rosto e boca, a mastigação, fala e o posicionamento dentário também são prejudicados.O uso de chupetas na infância são também indicadores de risco para vícios orais na fase adulta, como comer excessivamente e fumar. Devemos, no entanto, buscar entender o porquê ofertamos a chupeta exercitando a habilidade de olhar para além do sintoma. Às vezes essa escolha está relacionada ao desconforto, insegurança e pouca motivação para amamentar, ou até mesmo dificuldades encontradas nesse processo. Mãe, você não está sozinha, existem profissionais especializados que podem te ajudar no processo de amamentação e também para retirar a chupeta, como os fonoaudiólogos! Procure ajuda se necessário.',
        'Momentos da rotina da criança são oportunidades para diálogo, interações, criação de vínculo e afeto e estimulação do desenvolvimento do vocabulário. No banho, por exemplo, você pode nomear as partes do corpo. Na hora de guardar os brinquedos várias habilidades podem ser desenvolvidas como a de planejamento, execução e linguagem (separar por categorias e nomear os brinquedos). (MOUSINHO, SCHMID, MESQUITA, SANTOS, 2018).',
        'Garanta que o teste da linguinha foi realizado! É rápido, não dói, não tem contraindicações e é super importante! A língua presa, é uma alteração comum que muitas vezes passa despercebida.  Durante a gestação, uma parte do tecido que prende a língua na boca deveria ser absorvida, quando isso não ocorre há restrição nos movimentos da língua prejudicando a amamentação, fala, mastigação e o ato de engolir. É lei desde 2014 (lei  nº 13.002) a obrigatoriedade da realização desse teste em todos os recém nascidos. O ideal é que o teste seja realizado ainda na maternidade, mas se isso não aconteceu, avise o pediatra na primeira consulta para que haja o encaminhamento para a realização do teste. Quanto antes for realizado melhor! Sua realização é aconselhada até o primeiro mês de vida. Se for constatada a língua presa deverá ser realizado o “pique na língua” com um médico ou dentista para a correção desta alteração. A realização do teste com antecedência pode prevenir intercorrências na amamentação como a perda de peso e, principalmente, o desmame precoce. (MARTINELLI; MARCHESAN; GUSMÃO; BERRETIN-FELIX, 2014) Para saber mais visite o site https://www.testedalinguinha.com/',
        'Crianças com autonomia motora, que já conseguem sentar e andar, é recomendado que brincadeiras e atividades sejam realizadas atividades no chão, isso permite que ela explore o ambiente. Incentive a comunicação da criança junto a essa exploração, nomeie objetos, interaja com a criança, deixe ela sentir  diferentes texturas!',
        'Cuidado com o uso de smartphones, tablets, TVs e computadores. O uso precoce prolongado e excessivo de telas traz prejuízos à saúde em geral das crianças. A  exposição às telas diminui o tempo de interação social e familiar, tendo como consequência atrasos no domínio da linguagem. Por mais que pareça que os programas assistidos em tablets, celulares e televisões dão estímulos linguísticos suficientes para as crianças, a interação delas com os pais é muito mais potente e capaz de estimular a comunicação. As mídias não desempenham este papel, portanto, nada substitui a interação entre o adulto e a criança. As telas apresentam risco para o desenvolvimento infantil como um todo, gerando problemas de saúde mental, obesidade, transtornos do sono, atraso cognitivo e dificuldades socioemocionais. Um dos grandes desafios para a redução do tempo dos pequenos nas telas é o alto uso delas pelo país, o primeiro passo para ajudar seu filho é dando o exemplo! (NOBRE et. al., 2021;HADDERS-ALGRA, 2020)Usufruir das telas de forma consciente é fundamental, para isso, siga as recomendações da Sociedade Brasileira de pediatria (SBP):'
    ];

    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const changePage = function (page) {
        setCurrentTipIndex(page)
    }

    return (
        <>
            <Header />
            <Tab.Container id="left-tabs-example" defaultActiveKey="idx-1">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column left-tab-menu" >
                            <Nav.Item>
                                <Nav.Link eventKey="idx-1" className="tab-button">Comunicação Infantil</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="idx-2" className="tab-button">Mas afinal, o que é a linguagem?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="idx-3" className="tab-button">Principais Passos</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content className="text-area">
                            <Tab.Pane eventKey="idx-1" className="text-container">
                                <p className="text-title">Comunicação Infantil</p>
                                <div className="text-body">
                                    <p>Uma grande preocupação de quem convive com crianças é: Quando elas começarão a falar?</p>
                                    <p>De fato, a fala é um marco importante no desenvolvimento infantil, mas o que muitas vezes não percebemos é como a criança se comunica!</p>
                                    <p>Através da comunicação transmitimos mensagens para outras pessoas. A fala, com certeza é uma forma de se comunicar, mas antes das tão esperadas primeiras palavras o bebê já se expressa! Até o primeiro ano de vida, que é quando espera-se que surjam as palavras, a criança já interage com os adultos, pelo movimento dos braços, choro, sequência de sons, risos e olhares. Essas habilidades pré-verbais são precursoras das habilidades de diálogo, antes de se expressar verbalmente o bebê já compreende os contextos comunicativos. (ZORZI, HAGE, 2004)</p>
                                    <p>A forma como falamos com o bebê, isto é, a entonação e as pausas que usamos dão pistas a respeito da linguagem. É por meio da análise dos sons da fala que mais tarde será possível compreender palavras e as estruturas das frases. Ao nascer ele é capaz de discriminar todos os sons, e à medida em que cresce essa habilidade se restringe a língua materna. Assim, suas competências linguísticas vão se desenvolvendo ao passar do tempo a ponto de que aos 9 meses de idade já é possível integrar informações e compreender a organização da língua, por isso, a partir dessa idade começam as trocas efetivas entre o bebe e o adulto. (BAGETTI, 2009)</p>
                                    <p>Já parou para pensar sobre a nossa capacidade de se comunicar por uma língua? Juntamos sons de modo a formarem unidades sonoras com significado, as palavras, e  formamos frases nunca antes faladas e mesmo assim aqueles que estão ao nosso redor nos entendem! Nos comunicamos de forma tão complexa e única e tudo isso graças à linguagem!</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="idx-2" className="text-container">
                                <p className="text-title">Mas afinal, o que é a linguagem?</p>
                                <div className="text-body">
                                    <p>A linguagem é uma das funções mais nobres do ser humano, por meio dela é mediada a comunicação, ela é a responsável pela nossa habilidade de captar, processar, organizar, receber e transmitir mensagens. Podemos dividi-la em um conceito amplo, isto é, relacionado com as interações sociais e a capacidade de expressão de pensamentos e ideias, e em um conceito estrito relacionado à aquisição da língua materna.  Por se tratar de uma habilidade altamente complexa, o desenvolvimento da linguagem está relacionado com diversos aspectos como fatores maturacionais (aspectos neurobiológicos, sensoriais e perceptuais), fatores ambientais (estímulos verbais, interações com o ambiente e social), e fatores cognitivos (memória e atenção). (CORRÊA, 2006; PAGLIARIN, PEREIRA, GONÇALVES, FONSECA, 2017; DELIBERATO, 2017).</p>
                                    <p>Ela é adquirida de forma natural e espontânea pela interação entre a capacidade neurobiológica com os processos sociais vivenciados pela criança (BORGES, SALOMÃO, 2003). É com a família que ocorrem as primeiras trocas comunicativas no período de aprendizagem da linguagem. Quanto mais a criança conversar e ser exposta a situações de interação, mais ela compreende a linguagem e as regras da sua língua. Os primeiros anos de vida são essenciais para o desenvolvimento da linguagem e da fala. Na sua aquisição há influência de vários fatores, como o contexto social, familiar, histórico gestacional, capacidades cognitivas, biológicas, emocionais e auditivas. (PRATES; MARTINS, 2011)</p>
                                    <p>Para o desenvolvimento da linguagem a audição é primordial e decisiva. Desde dentro do útero, por volta da 26ª semana de gravidez, já é possível ouvir os ruídos externos, porém, ainda depois do nascimento essa habilidade continua a evoluir. Em casos de perda auditiva, se não diagnosticada precocemente, a criança terá grandes impactos no desenvolvimento, visto que se o bebê até os três anos não receber estimulação de linguagem consistente nunca terá seu pleno potencial de desenvolvimento linguístico alcançado (MORETTI; RIBAS, 2016).</p>
                                    <p className="text-center">Para saber mais sobre o desenvolvimento auditivo acesse: <Nav.Link>https://www.fonoaudiologia.org.br/comunicacao/desenvolvimento-da-linguagem-e-auditivo-da-crianca/</Nav.Link></p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="idx-3">
                                <div className="text-container">
                                    <p className="text-title">Principais passos</p>
                                    <div className="text-body">
                                        <p>{tips[currentTipIndex]}</p>
                                    </div>
                                    <Pagination size="sm" className="pag-bar">
                                        <Pagination.Prev
                                            onClick={() => {
                                                changePage(currentTipIndex - 1)
                                            }}
                                            disabled={currentTipIndex === 0}
                                        />
                                        {tips.map(tip => {
                                            return <Pagination.Item className="desktop-only" key={tip} onClick={(e) => { changePage(Number(e.target.text)) }}> {tips.indexOf(tip)} </Pagination.Item>
                                        })}
                                        <Pagination.Next
                                            onClick={() => {
                                                changePage(currentTipIndex + 1)
                                            }}
                                            disabled={currentTipIndex === tips.length - 1}
                                        />
                                    </Pagination>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}