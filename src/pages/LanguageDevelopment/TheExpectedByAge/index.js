import React from 'react';
import { Accordion, Image } from 'react-bootstrap';
import './index.css';
import quadroDeFonemas from '../../../assets/language-development/quadro-de-fonemas.png'

export default function TheExpectedByAge() {
    return (

        <div className="expected-by-age">
            <p className="text-title">O que é esperado por cada idade?</p>
            <div className="text-body">
                <p>
                    O desenvolvimento da criança é uma preocupação de mães e pais. Para entender o que não está de acordo com o esperado,
                    é preciso entender primeiro o que é comum no desenvolvimento.
                </p>
                <p>
                    Os marcos desenvolvimentais são parâmetros que indicam por idade o desenvolvimento de crianças típicas, ou seja,
                    sem alterações, Mas “cada criança tem o seu tempo’, certo?! Cuidado com essa afirmação! O ritmo individual de cada
                    criança influencia na forma que ela desenvolve a linguagem. Porém, existe uma idade adequada no
                    desenvolvimento típico (os marcos do desenvolvimento) que esperamos que a criança já consiga ter certas habilidades comunicativas.
                </p>
                <p>
                    Quando observado que a criança não atingiu essas expectativas, ela precisa ser avaliada, pois é um
                    indicativo que ela pode apresentar algum atraso ou transtorno de linguagem!
                    Quanto antes começar a intervenção melhor! Em caso de qualquer dúvida sobre a
                    comunicação não espere para procurar um fonoaudiólogo<sup>1</sup>.
                </p>
                <p>
                    Abaixo estamos apresentando alguns marcos do desenvolvimento da linguagem oral, de acordo com a literatura consultada<sup>2-4</sup>.
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
                                <li>Aproximadamente com um ano é esperado que surjam as primeiras palavras.</li>
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
                                <li>A criança produz frases negativas e interrogativas com “que” e “onde”.</li>
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
                <br />
                <p style={{ color: '#0588CB', fontWeight: 'bold' }}>Ordem de aquisição dos sons do português brasileiro</p>
                <p>
                    No desenvolvimento típico da linguagem é esperado que crianças cometam alguns erros, como omitir e trocar sons,
                    que são superados aos poucos conforme a idade aumenta. Isso acontece porque os sons da fala são
                    adquiridos de forma gradual até por volta dos 5 anos de idade,
                    quando a criança já possui e usa corretamente todos os sons da língua.
                </p>
                <p>
                    No entanto, nem todas as trocas de sons são esperadas e mesmo as que são comuns de
                    acontecerem não comprometem que a criança se  comunique de forma a ser compreendida por todos à sua volta<sup>5</sup>.
                </p>
                <p>
                    Assim, em caso de dúvida ou suspeita sobre a aquisição dos sons ou da linguagem de forma geral é importante que um fonoaudiólogo seja procurado.
                    Não existe idade mínima para a procura por esse profissional e quanto antes começar a intervenção melhor o prognóstico.
                </p>
                <p>
                    Abaixo, segue a ordem de aquisição dos sons no protuguês brasileiros<sup>5</sup> de forma simplificada e resumida.
                </p>
                <Image src={quadroDeFonemas} />
                <p>
                    Uma sugestão importante que possibilita a obtenção de informações sobre o desenvolvimento da criança,
                    não somente da linguagem e marcos no desenvolvimento,  mas sobre aspectos gerais do desenvolvimento,
                    aleitamento materno, cuidados com a criança, aspectos relacionados à nutrição, saúde bucal e de forma geral,
                    é a utilização da caderneta da criança, elaborada pelo Ministério da Saúde em 2020. Esta caderneta é um documento
                    importante que também devem ficar registradas as informações sobre atendimento às crianças nos serviços de saúde,
                    educação para o acompanhamento de crianças do nascimento aos 9 anos de idade.
                </p>
                <p>Acesse as Cadernetas da Criança:</p>
                <p>
                    <a target="_blank" rel="noreferrer" href="https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_crianca_menino_passaporte_cidadania_3ed.pdf">
                        <u style={{ color: '#0588CB' }}>
                            <b>🡥 Para Meninos: </b>https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_crianca_menino_passaporte_cidadania_3ed.pdf
                        </u>
                    </a>
                </p>
                <p>
                    <a target="_blank" rel="noreferrer" href="https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_crianca_menina_passaporte_cidadania_3ed.pdf">
                        <u style={{ color: '#0588CB' }}>
                            <b>🡥 Para Meninas: </b>https://bvsms.saude.gov.br/bvs/publicacoes/caderneta_crianca_menina_passaporte_cidadania_3ed.pdf
                        </u>
                    </a>
                </p>
                <br/>
                <hr style={{width: '50%'}}/>
                <div className="references">
                    <span> REFERÊNCIAS </span>
                    <span> 1 - Panes, ACS; Corrêa, CC; Maximino, LP. Checklist para identificação de crianças de risco para alterações de linguagem oral: nova proposta. Distúrb Comun, São Paulo 2018; 30(2): 278-287, </span>
                    <span> 2 - Mousinho R, Schimid, E; Mesquita, F; Santos, Gladis. Brincando com a linguagem: da língua oral à língua escrita desenvolvimento dos 03 aos 06 anos para pais e professores. Instituto ABC; 2018.  p. 9-13. </span>
                    <span> 3 - Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Ações Programáticas Estratégicas. Diretrizes de Atenção à Reabilitação da Pessoa com Transtornos do Espectro do Autismo (TEA). Brasília: Editora MS; 2014. </span>
                    <span> 4 - Zorzi JL, Hage SRV. PROC - Protocolo de observação comportamental: avaliação de linguagem e aspectos cognitivos infantis. 1a ed. São José dos Campos (SP): Pulso Editorial, 2004. </span>
                    <span> 5 - Ceron M et al.Ocorrência do desvio fonológico e de processos fonológicos em aquisição fonológica típica e atípica. CoDAS 2017;29(3):e20150306 </span>
                    <span> 6 - Lamprecht RR. et al. Aquisição fonológica do Português: perfil de desenvolvimento e subsídio para terapia. Porto Alegre: ARTMED, 2004. </span>
                </div>
            </div>
        </div>
    );
}