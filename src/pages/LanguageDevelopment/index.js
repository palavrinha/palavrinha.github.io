import { Tab, Row, Col, Nav, Pagination, Accordion } from 'react-bootstrap';
import React from 'react';
import './index.css';
import { useState } from 'react';
import ChildCommunication from './ChildCommunication';

export default function LanguageDevelopment() {
    const tips = [
        '<b>Converse com a criança,</b> é importante que seja dado um tempo para sua resposta, seja ela verbal ou não! Propicie situações em que ela interaja com você ou outra pessoa e precise expressar-se, como por exemplo, contar seu dia, ou dizer seus desenhos preferidos.',
        'Ao brincar, ou conversar com a criança, se posicione de forma a manter contato visual mostre interesse pelo que ela fala, não a interrompa, não tente completar o que ela diz, <b>não fale ou responda por ela.</b>',
        '<b>Não corrija de forma hostil a criança</b> quando ela falar errado e fale corretamente com ela sem diminutivos. Repita o que ela disse, porém dando o modelo correto. É importante que o adulto mostre a forma apropriada de falar com crianças em aquisição de fala e linguagem. Se você está preocupado com como seu filho se comunica, perceba como é a sua comunicação com ele. As crianças aprendem a se expressar com os adultos, por isso, use amor, carinho e compreensão na sua fala, cuidado para não se expressar de forma violenta e rude com o seu pequeno, e ensinar, dessa forma, a ele se comunicar assim!',
        'Certifiquem-se se o teste da Orelhinha foi realizado!  Trata-se de um exame rápido e indolor. Sua realização permite diagnóstico e tratamento precocemente das alterações auditivas. A Lei Federal nº 12.303/2010 tornou obrigatória e gratuita a realização do exame. É recomendado que ele seja realizado na maternidade, antes da alta hospitalar, entre 24 e 48 horas após o nascimento, caso não exista essa possibilidade o teste pode ser realizado ainda no 1º mês de vida. Se detectado alguma alteração, o bebê deve refazê-lo dentro de 15 a 30 dias no máximo. Caso o resultado alterado persistir, o bebê deve ser encaminhado imediatamente a um serviço de Saúde Auditiva para confirmação do diagnóstico de deficiência auditiva e ter acesso a um programa de intervenção precoce para orientar a família acerca das possibilidades de tratamento e a realização da terapia fonoaudiológica. (CONSELHO FEDERAL DE FONOAUDIOLOGIA, 2011)',
        '<b>Contar histórias é uma excelente atividade para ser feita junto com seu filho!</b> Por meio da contação de histórias a criança entra em contato com o uso real da escrita, desperta o gosto pela leitura e desenvolve uma série de habilidades. Diferente do que parece a criança participa ativamente do momento da contação de história, a partir dela acontece a construção de valores morais, contribui para a compreensão do mundo, autoconhecimento, desperta emoções, criatividade, imaginação, desenvolvimento da consciência crítica e capacidade de resolução dos problemas. Além disso, essa atividade desenvolve funções cognitivas e linguísticas, uma vez que, aprimora organização, estimula atenção e a reter informações, facilita o estabelecimento da relação entre leitura e escrita e a linguagem oral, amplia o repertório de palavras da criança, melhora o desempenho de frases e textos, facilita o pensamento narrativo, estimula competências de reflexão da própria língua, de interpretar o texto e realizar relações contextuais. (MELO; DIAS; SAMPAIO; RÊGO, 2020;  FARIA et al, 2017.).',
        '<b>A amamentação é importante para o  desenvolvimento da fala e linguagem.</b> Os músculos que a criança usa no momento da amamentação são os mesmos que serão usados para ela falar, Assim, a amamentação age como uma forma de estimulação natural dessas estruturas, é através dela que há o desenvolvimento e crescimento harmonioso e funcional dos aspectos do crânio e da face. Além das questões estruturais, no momento da amamentação, a mãe acaricia o bebê, estabelece contato visual, conversa com seu filho, favorecendo assim, o desenvolvimento da linguagem e a construção de vínculo e afeto.(PEREIRA, 2005) Amamente seu filho(a)! Caso sinta dificuldades nesse processo procure ajuda profissional para te auxiliar a tornar essa seja uma linda experiência. O fonoaudiólogo é um profissional capacitado para te auxiliar nessa questão.',
        '<b>Que tal remover o hábito da chupeta ou nem oferecê-la para o seu filho?!</b> Ela apresenta vários prejuízos! As chupetas podem parecer inofensivas e até fofas, mas na realidade o seu uso pode trazer uma série de malefícios. Alguns bebês que fazem o uso dela tem a tendência a mamar menos tempo no peito, isso ocorre por conta da “confusão de bico”, ou seja, após ser exposta aos bicos artificiais o bebê fica com grande dificuldade ou até mesmo incapaz de realizar a sucção no seio materno. Além de prejudicar a amamentação, por conta desse hábito modificar a musculatura do rosto e boca, a mastigação, fala e o posicionamento dentário também são prejudicados. O uso de chupetas na infância são também indicadores de risco para vícios orais na fase adulta, como comer excessivamente e fumar. Devemos, no entanto, buscar entender o porquê ofertamos a chupeta para criança, exercitando dessa forma, a habilidade de olhar para além do sintoma. Às vezes essa escolha está relacionada ao desconforto, insegurança e pouca motivação para amamentar, ou até mesmo dificuldades encontradas nesse processo. Mãe, você não está sozinha, existem profissionais especializados que podem te ajudar no processo de amamentação e também para retirar a chupeta, como os fonoaudiólogos! Procure ajuda se necessário.',
        '<b>Momentos da rotina da criança são oportunidades para diálogo,</b> interações, criação de vínculo e afeto e estimulação do desenvolvimento do vocabulário. No banho, por exemplo, você pode nomear as partes do corpo. Na hora de guardar os brinquedos várias habilidades podem ser desenvolvidas como a de planejamento, execução e linguagem (separar por categorias e nomear os brinquedos). (MOUSINHO, SCHMID, MESQUITA, SANTOS, 2018)',
        '<b>Garanta que o teste da linguinha foi realizado!</b> É rápido, não dói, não tem contraindicações e é super importante! A língua presa, é uma alteração comum que muitas vezes passa despercebida, porém, ela causa restrição nos movimentos da língua prejudicando a amamentação, fala, mastigação e o ato de engolir. É lei desde 2014 (lei  nº 13.002) a obrigatoriedade da realização desse teste em todos os recém nascidos. O ideal é que o teste seja realizado ainda na maternidade, mas se isso não aconteceu, avise o pediatra na primeira consulta para que haja o encaminhamento para a realização do teste. Quanto antes for feito melhor! Sua realização é aconselhada até o primeiro mês de vida, a execução do teste com antecedência pode prevenir intercorrências na amamentação como a perda de peso e, principalmente, o desmame precoce. (MARTINELLI; MARCHESAN; GUSMÃO; BERRETIN-FELIX, 2014) Para saber mais visite o site https://www.testedalinguinha.com/ ',
        'Para crianças com autonomia motora, que já conseguem sentar e andar, <b>é recomendado que brincadeiras e atividades sejam realizadas no chão</b>, isso permite que ela explore o ambiente. Incentive a comunicação da criança junto a essa exploração, nomeie objetos, interaja com a criança, deixe ela sentir  diferentes texturas!',
        `
        Cuidado com o uso de smartphones, tablets, TVs e computadores. O uso precoce prolongado e excessivo de telas traz prejuízos à saúde em geral das crianças, gerando problemas de saúde mental, obesidade, transtornos do sono, atraso cognitivo e dificuldades socioemocionais. A  exposição às telas diminui o tempo de interação social e familiar, tendo como consequência atrasos no domínio da linguagem. Por mais que pareça que os programas assistidos em tablets, celulares e televisões dão estímulos linguísticos suficientes para as crianças, a interação delas com os pais é muito mais potente e capaz de estimular a comunicação. Nada substitui a interação entre o adulto e a criança! Um dos grandes desafios para a redução do tempo dos pequenos nas telas é o alto uso delas pelo país, o primeiro passo para ajudar seu filho é dando o exemplo! (NOBRE et. al., 2021;HADDERS-ALGRA, 2020) Usufruir das telas de forma consciente é fundamental, para isso, siga as recomendações da Sociedade Brasileira de pediatria (SBP):
        
        <br/>
        <br/>

        <ul>
            <li>Evitar a exposição de crianças menores de 2 anos às telas, mesmo que passivamente;</li>
            <li>Limitar o tempo de telas em no máximo 1 hora por dia com supervisão dos pais e cuidadores para crianças entre 2 e 5 anos;</li>
            <li>Crianças maiores, que tenham de 6 a 10 anos podem fazer uso de telas por até 2h, sempre com supervisão dos pais;</li>
            <li>Estimule que a criança use as telas em locais comuns da casa. Não permita que fiquem isolados com smartphones, computadores e tablets;</li>
            <li>Desconecte-se das telas por volta de 2 horas antes de dormir;</li>
            <li>Não faça uso de smartphones na hora das refeições;</li>
            <li>Oferecer alternativas de atividades longe das telas! Atividades ao ar livre e esporte são ótimas opções, mas não só! Visite o nosso site “brincadeiras” e descubra várias sugestões e possibilidades para atividades cheias de estímulos e longe das telinhas!</li>
        </ul>
        `
    ];

    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const changePage = (page) => setCurrentTipIndex(page);

    const [tabKey, setTabKey] = useState('comunicacao-infantil');

    return (
        <Tab.Container 
            id="left-tabs-example" 
            activeKey={tabKey}
            onSelect={(k) => setTabKey(k)}>
            <Row>
                <Col sm={3}>
                    <Nav className="flex-column left-tab-menu">
                        <h1>Desenvolvimento da Linguagem</h1>
                        <Nav.Item>
                            <Nav.Link eventKey="comunicacao-infantil" className="tab-button">Comunicação Infantil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="como-ajudar-a-crianca" className="tab-button">Como ajudar a criança?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="esperado-por-idade" className="tab-button">O esperado por idade</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sinais-de-alerta" className="tab-button">Sinais de alerta!</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className="text-area">
                        <Tab.Pane eventKey="comunicacao-infantil">
                            <ChildCommunication onTabChange={setTabKey}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="como-ajudar-a-crianca">
                            <div className="text-container-2 d-none">
                                <p className="text-title">Como auxiliar a criança em sua comunicação?</p>
                                <div className="text-body">
                                    <p dangerouslySetInnerHTML={{ __html: tips[currentTipIndex] }}></p>
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
                        <Tab.Pane eventKey="esperado-por-idade">
                            <div className="text-container-3 d-none">
                                <p className="text-title">O que é esperado por cada idade?</p>
                                <div className="text-body">
                                    <p>
                                        O desenvolvimento da criança é uma preocupação de mães e pais. Para entender o que não está de acordo com o esperado, é preciso entender primeiro o que é comum no desenvolvimento.
                                        Os marcos desenvolvimentais são parâmetros que indicam por idade o desenvolvimento de crianças típicas, ou seja, sem alterações.
                                        <b style={{ color: '#DE4E8D' }}> Mas “cada criança tem o seu tempo’, certo?!</b>
                                    </p>
                                    <p>
                                        <b style={{ color: '#038C3E' }}>Cuidado com essa afirmação!</b> O ritmo individual de cada criança influencia na forma que ela desenvolve a linguagem.
                                        Porém, <b style={{ color: '#F28F05' }}>existe uma idade adequada no desenvolvimento típico (os marcos do desenvolvimento)</b> que esperamos que a criança já consiga ter certas habilidades comunicativas. Quando observado que a criança não atingiu essas expectativas, ela precisa ser avaliada, pois é um indicativo que ela pode apresentar algum atraso ou transtorno de linguagem!
                                        Quanto antes começar a intervenção melhor! Em caso de qualquer dúvida sobre a comunicação não espere para procurar um fonoaudiólogo. (PANES; CORRÊA; MAXIMINO, 2018)
                                    </p>
                                    <p>
                                        <b style={{ color: '#F23229' }}>
                                            Confira o que é esperado da criança de acordo com sua idade:
                                        </b>
                                    </p>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>0 a 6 meses</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Quando recém nascido o bebê chora como consequência de dor e fome, ele se acalma com a voz da mãe e se assusta com sons altos. </li>
                                                    <li>Por volta dos 2 e 3 meses o choro do bebê se torna diferenciado, sendo assim, a partir do choro é possível perceber quando ele está com fome, dor ou até mesmo fazendo birra. Surgem vocalizações e sorrisos demonstrando prazer.</li>
                                                    <li>As vocalizações variam em tom, volume e duração.</li>
                                                    <li>Os bebês aos 3 meses já procuram de onde vêm os sons e prestam atenção a eles, respondendo quando alguém fala com ele através do olhar, sorriso e vocalizações e manifesta suas vontades apontando para os objetos e procura o olhar do cuidador, também já identificam a voz dos pais.</li>
                                                    <li>Antes dos  6 meses o bebê balbucia repetindo sílabas iguais (papapa), após essa idade o balbucio ocorre com a junção de sílabas diferentes (padama).</li>
                                                    <li>Em torno dos 6 meses de idade, é possível observar que a criança presta mais atenção às pessoas do que a objetos ou brinquedos.</li>
                                                    <li>Ao brincar, a criança explora o objeto agarrando ele com a mão, o sacudindo, jogando e batendo.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>7 a 12 meses</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>O bebê participa mais ativamente da comunicação por meio de movimentos corporais, risos e expressões faciais.</li>
                                                    <li>Já é capaz de imitar certos sons realizados pelos adultos.</li>
                                                    <li>Aponta para objetos para expressar suas vontades.</li>
                                                    <li>A partir dos 9 meses os comportamentos comunicativos são intencionais. O bebê atende ordens como “da tchau”, “bate palma” e "joga beijo”, dirige-se ao outro e participa de diálogos emitindo sons semelhantes ao de uma conversa, porém, sem significado.</li>
                                                    <li>A criança, nessa faixa etária, começa a atender quando chamada pelo nome.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>1 a 2 anos</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Aproximadamente com um ano a criança se comunica para expressar suas necessidades, nessa idade é esperado que surjam as primeiras palavras.</li>
                                                    <li>Por volta de 1 ano e 6 meses, espera-se que a criança comece a produzir frases com dois ou três elementos sem que esses tenham conectivos entre si  (por exemplo: o(s), a(s), de, em, para, por, com e etc), como na frase “dá bola”.</li>
                                                    <li>Compreende ordens simples e reconhece figuras e/ou objetos quando nomeados, por exemplo, quando perguntamos “Cadê o cachorro” ela aponta corretamente para o animal.</li>
                                                    <li>Na brincadeira, ela usa os brinquedos de acordo com a função verdadeira dele, por exemplo, ao brincar com um carrinho, atribuirá a ele a função de carro, mas ainda não consegue criar histórias mais elaboradas que envolva o carrinho e nem vai usá-lo para desempenhar outra função, por exemplo, fingir que ele é uma nave espacial, ou um carro voador vindo do futuro. Além disso, ela gosta de explorar e descobrir novas coisas, como cheiros, texturas, sons e movimentos  dos objetos.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>2 anos e 1 mês a 3 anos</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>A criança com essa idade forma frases simples com 3 ou 4 palavras e usa corretamente os pronomes eu, você, ele, ela, esse e meu.</li>
                                                    <li>A criança faz frases negativas e interrogativas com “que” e “onde”.</li>
                                                    <li>No que diz respeito a brincar, a criança já tem imaginação para criar histórias e usar objetos conforme a sua imaginação, por exemplo, ao brincar finge que um sapato é um carro. Ela brinca também imitando os adultos, como nas brincadeiras de casinha, professor e médico.</li>
                                                    <li>Consegue narrar situações concretas com o auxílio de perguntas feitas por adultos e mantém conversas curtas.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>3 anos e 1 mês a 4 anos</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Nessa idade a criança produz frases com 6 palavras.</li>
                                                    <li>Faz perguntas com “quem” e “qual”.</li>
                                                    <li>Usa corretamente os tempos verbais presente, passado e futuro composto (vai brincar), podendo ainda haver erros que serão superados gradativamente.</li>
                                                    <li>Utiliza o artigo fazendo a concordância correta (o/os/a/as). Ex: A menina / as bonecas/ o biscoito/ os carrinhos.</li>
                                                    <li>Sua capacidade de compreensão é maior do que a de expressão, assim ela compreende quase tudo que o adulto fala e ao falar se faz entender.</li>
                                                    <li>Compreende duas ordens que não estão relacionadas entre si, por exemplo, “escove os dentes e bote o casaco”.</li>
                                                    <li>Conta histórias com início meio e fim de forma reduzida, podem incluir na narrativa fatos não verdadeiros.</li>
                                                    <li>Faz frases negativas corretamente.</li>
                                                    <li>Gosta de cantar e brincar com palavras e sons.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>4 anos e 1 mês a 5 anos</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>A criança desta idade consegue formar frases com estruturas mais complexas que expressam condições e circunstâncias como: “se fizer sol eu vou brincar”, “eu vou brincar quando chegar em casa”</li>
                                                    <li>Seguem até 3 comandos diferentes, por exemplo, “escove o dente, calce o tênis e pegue a mochila”.</li>
                                                    <li>Em sua fala já estão presentes quase todos os sons da fala, porém, o /r/ fraco de “cara”, é adquirido em média com 4 anos e 2 meses, então é normal que as crianças cometam erros ao produzir palavras com esse som, por exemplo, ao falar “chora” podem produzir “chola” ou “choa”.</li>
                                                    <li>Até aos 5 anos as crianças adquirem palavras com encontros consonantais, por exemplo, “branco” e “plano”.</li>
                                                    <li>Fala corretamente, mas pode errar ainda alguns verbos irregulares pouco utilizados, como “ouço”, eu “ouvo” bem.</li>
                                                    <li>Narram histórias e recontam narrações de forma mais global, na ordem correta dos acontecimentos.</li>
                                                    <li>Gostam de brincar em grupo, de imitar personagens e brincar de faz-de-conta.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>5 anos e 1 mês a 6 anos</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>As crianças, nesta idade, formam frases complexas e possuem todos os sons da língua, portanto não é esperado mais trocas de sons na sua fala.</li>
                                                    <li>A criança tem fala fluente e coerente, assim, as histórias contadas ficam mais elaboradas e detalhadas.</li>
                                                    <li>Nessa idade, é esperado que identifiquem as letras do próprio nome e conheçam os números. Ao se relacionar com adultos ou outras crianças, mantém diálogos mais extensos e conversa com mais de uma pessoa ao mesmo tempo.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>6 a 9 anos</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Adquirem a partir dos 6 anos estruturas de piadas e adivinhações, porém, ainda é difícil para elas entender o significado implícito das frases, como as metáforas.</li>
                                                    <li>Aos 6 anos o processo de aquisição se estabiliza, o aprendizado de novas palavras depende do ambiente em que ela está inserida. Dessa forma, a criança está pronta para ser alfabetizada.</li>
                                                    <li>A criança conversa respeitando a hora adequada de falar, consegue mudar de assunto, e se autocorrigir e reestruturar a fala para se fazer entender.</li>
                                                    <li>São capazes de produzir frases na voz passiva, por exemplo, “o carteiro foi mordido pelo cachorro”.</li>
                                                    <li>Usa a linguagem dependendo do contexto e com quem está falando.</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}