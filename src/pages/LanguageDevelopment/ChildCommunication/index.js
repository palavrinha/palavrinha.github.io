import { Accordion, Image } from 'react-bootstrap';
import React from 'react';
import './index.css';
import desenvolvimentoAuditivoDaCrianca from '../../../assets/language-development/desenvolvimento-auditivo-da-criança-1.png'

export default function ChildCommunication(props) {
    return (
        <div className="text-container">
            <h1 className="text-title">Comunicação Infantil</h1>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Linguagem oral</Accordion.Header>
                    <Accordion.Body>
                        <span>
                            <i>Uma grande preocupação de pais e/ou familiares de crianças é: Quando as crianças  começarão a falar?</i>
                        </span>
                        <span>
                            De fato, a fala é um marco importante no desenvolvimento infantil,
                            mas o que muitas vezes não percebemos é como a criança se comunica!
                            Existe um processo até a criança começar a falar,
                            há um caminho a ser percorrido.
                            É importante observar a comunicação da criança com outras pessoas,
                            sejam elas adultos ou também crianças, além da comunicação dos adultos com elas!
                        </span>
                        <span>
                            Através da comunicação transmitimos mensagens para outras pessoas,
                            expressamos ideias, pensamentos e nossa forma de ver e sentir o mundo.
                            A fala, com certeza é uma forma de se comunicar,
                            mas antes das tão esperadas primeiras palavras o bebê
                            já percebe muito dos sons a sua volta e se expressa!
                        </span>
                        <span>
                            Alguns estudos envolvendo pesquisas psicolinguísticas <sup>1_3</sup> já
                            evidenciaram que bebês desde muito pequenos já apresentam
                            capacidades para perceber e até mesmo processar os sons da fala e
                            sons que são expostos no ambiente em que vivem  e essa percepção e
                            processamento é crucial para a aquisição da linguagem, ou seja,
                            para a aquisição da língua de sua comunidade linguística.
                        </span>
                        <span>
                            Alguns estudos em psicolinguística indicam que bebês já com 1 a 4 meses
                            conseguem reconhecer a mesma vogal em diferentes ritmos e faladas por
                            diferentes pessoas<sup>4</sup> e dos 6 a 8 meses, bebês são capazes de utilizar
                            informações prosódicas para diferenciar palavras que fazem parte de sua língua
                            nativa de palavras que não fazem parte<sup>5</sup>. Aos 9 meses os bebês parecem indicar
                            um conjunto de pistas (prosódicas, rítmicas e distribucionais) que são úteis
                            para reconhecer o início e o final de frases (sentenças)<sup>6</sup>.
                        </span>
                        <span>
                            Há também estudos com base linguística realizados no
                            Brasil sobre o processamento de bebês e crianças. Em um desses trabalhos<sup>7,8</sup> foi verificado
                            que bebês de 9 a 12 meses são capazes de perceber no
                            final dos verbos (nos afixos verbais), alterações fônicas (alterações nos fonemas) que afetam o
                            padrão silábico do português. Essa percepção é considerada importante para a segmentação da
                            fala pelo bebê e para a aquisição de sua língua.
                        </span>
                        <span>
                            Aliás, todas essas informações são úteis para a criança segmentar a fala e adquirir a
                            língua de sua comunidade linguística!! Interessante, né?
                            É isso mesmo, muito antes de a criança falar, ela já percebe e processa
                            muitas informações linguísticas relevantes.
                        </span>
                        <span>
                            Para mais informações sobre estas pesquisas consulte:
                            <br />
                            <br />
                            <a target="_blank" rel="noreferrer" href="https://www.maxwell.vrac.pucrio.br/colecao.php?strSecao=resultado&nrSeq=32959@1">🡥 <u><b> A tese de Bagetti:</b>  https://www.maxwell.vrac.pucrio.br/colecao.php?strSecao=resultado&nrSeq=32959@1</u></a>
                            <br />
                            <br />
                            <a target="_blank" rel="noreferrer" href="https://www.lapal.letras.puc-rio.br">🡥 <u><b> Os trabalhos do LAPAL</b>  https://www.lapal.letras.puc-rio.br</u></a>
                        </span>
                        <span>
                            Então, também sabemos que até o primeiro ano de vida, que é quando espera-se que surjam as palavras, a criança já interage com os adultos,
                            pelo movimento dos braços, choro, sequência de sons, risos e olhares.
                            Essas habilidades são precursoras das habilidades de diálogo. Antes de se expressar verbalmente o
                            bebê já compreende os contextos comunicativos que estão inseridos<sup>9</sup>. A partir dos 9 meses o
                            bebê já possui intenção comunicativa, usando gestos e sons aleatórios para expressar
                            seus desejos e aos 11 meses essa intenção fica mais perceptível com o
                            surgimento do gesto de apontar<sup>10</sup>.
                        </span>
                        <span>
                            Nós nos comunicamos de forma complexa e única e tudo isso graças à linguagem!
                            Ela é uma das funções mais nobres do ser humano, por meio dela é mediada a comunicação, a linguagem é a
                            responsável pela nossa habilidade de captar, processar, organizar, receber e transmitir mensagens.
                            Podemos dividi-la em um conceito amplo, isto é, relacionado com as interações sociais e a capacidade de
                            expressão de pensamentos e ideias, e em um conceito estrito relacionado à aquisição da língua materna<sup>11</sup>. Por se tratar
                            de uma habilidade altamente complexa, o desenvolvimento da linguagem está relacionado com diversos aspectos
                            como os fatores maturacionais (aspectos neurobiológicos, sensoriais e perceptuais),
                            fatores ambientais (estímulos verbais, interações com o ambiente e social), e fatores cognitivos (memória e atenção).<sup>12,13</sup>
                        </span>
                        <span>
                            A linguagem é adquirida de forma natural e espontânea pela interação entre a capacidade
                            neurobiológica com os processos sociais vivenciados pela criança<sup>14</sup>. É com a
                            família que ocorrem as primeiras trocas comunicativas no período de aprendizagem da linguagem.
                            Quanto mais a criança conversar e ser exposta a situações de interação, mais ela compreende a
                            linguagem e as regras da sua língua. Os primeiros anos de vida são essenciais para o desenvolvimento da linguagem e da fala.
                            Na sua aquisição há influência de vários fatores, como o contexto social, familiar, histórico gestacional, capacidades cognitivas,
                            biológicas, emocionais e auditivas<sup>15</sup>.
                        </span>
                        <span>
                            Dentre os fatores primordiais para a aquisição e desenvolvimento da linguagem de forma
                            adequada destaca-se a audição. Por meio dela o bebê se habitua com a língua materna,
                            cujo é exposta desde o nascimento. Assim, ele adquire os sons da fala e os organiza em
                            palavras e frases conforme as regras da língua<sup>15</sup>. Desde dentro do útero, por volta da 26ª semana de gravidez,
                            o bebê já consegue ouvir ruídos externos. No entanto, após o nascimento a habilidade auditiva
                            continua a evoluir em razão da estimulação sonora<sup>16</sup>.
                        </span>
                        <span>
                            Em casos de perda auditiva, dependendo do tipo e do grau da perda e tempo de
                            demora do diagnóstico, a criança poderá ter grandes impactos no desenvolvimento.
                            Uma vez que, se o bebê até os três anos não receber estimulação de linguagem consistente,
                            nunca terá seu pleno potencial de desenvolvimento linguístico alcançado<sup>17,18</sup>.
                            O Conselho Regional de Fonoaudiologia  - 6ª Região, elaborou o material abaixo sobre o desenvolvimento
                            auditivo da criança, que descreve os principais marcos da audição.
                        </span>
                        <span>
                            Confira:
                        </span>
                        <span>
                            <Image src={desenvolvimentoAuditivoDaCrianca} />
                        </span>
                        <span>
                            É sempre importante acompanhar o desenvolvimento da criança, principalmente nos primeiros anos de vida.
                            A Caderneta de Saúde da Criança (CSC) é um documento interessante para acompanhar o
                            desenvolvimento da criança do nascimento aos 9 anos de idade.
                        </span>
                        <span>
                            <a target="_blank" rel="noreferrer" href="https://www.saude.pr.gov.br/Pagina/Marcos-do-Desenvolvimento">🡥 <u><b> Acesse:</b> https://www.saude.pr.gov.br/Pagina/Marcos-do-Desenvolvimento</u></a>
                        </span>
                        <span>
                            Também sugerimos o site “Enciclopédia da criança” para informações sobre o
                            desenvolvimento infantil e sobre brincadeiras.
                        </span>
                        <span>
                            <a target="_blank" rel="noreferrer" href="https://www.enciclopedia-crianca.com/">🡥 <u><b> Acesse:</b> https://www.enciclopedia-crianca.com/</u></a>
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Linguagem escrita</Accordion.Header>
                    <Accordion.Body>
                        <span>
                            Se engana quem pensa que a linguagem se resume apenas a fala. Ela é uma só e pode se apresentar de diferentes formas: falada e/ou escrita.
                            Apesar das semelhanças entre a linguagem oral e a linguagem escrita elas são adquiridas de formas diferentes.
                            A aquisição da fala/linguagem oral ocorre de forma natural, por outro lado, a aprendizagem da língua escrita depende do ensino formal que,
                            normalmente, acontece na escola<sup>19</sup>.
                        </span>
                        <span>
                            A linguagem escrita permite interação social causando mudanças no meio e nas pessoas.
                            O tempo todo estamos rodeados pela leitura e escrita, seja por um bilhete ou para usar as mais diversas
                            tecnologias cada vez mais comuns no nosso dia a dia. A linguagem escrita é muito mais que um conteúdo
                            prendido na escola, as habilidades de leitura e escrita são essenciais para estarmos inserido na nossa sociedade atual<sup>20</sup>.
                        </span>
                        <span>
                            Antes do 1º ano escolar, a criança já teve uma série de experiências e desenvolveu habilidades e
                            técnicas que permitem a alfabetização. Você já teve contato com uma criança que fez rabiscos pela folha e disse ter escrito algo?
                            Isso acontece muito! Esse registro, nada mais é que uma tentativa de imitar a escrita do adulto. Durante o desenvolvimento, a criança
                            percebe que desenhar e escrever são diferentes, e começa a se aventurar com as letras, mesmo sem saber de fato escrever<sup>20</sup>.
                        </span>
                        <span>
                            Em um primeiro momento, as crianças tentam representar a fala e escrevem conforme falamos, por isso, ocorrem vários erros ortográficos.
                            Depois, se dão conta de que por mais que existam semelhanças a escrita e a fala são independentes.
                            Com o maior contato com a leitura e escrita, elas se apropriam das regras que regem a
                            escrita e superam os erros causados por escrever do mesmo jeito que falamos<sup>21</sup>!
                        </span>
                        <span>
                            Já deu para perceber que a linguagem oral é muito importante para a alfabetização, não é mesmo?!
                            Damos o nome de consciência fonológica (CF) a habilidade de pensarmos, refletirmos, julgarmos e manipularmos os sons da nossa língua.
                            Ela é fundamental para aquisição da leitura e escrita, pois é através dela que a criança entende nosso o sistema alfabético de escrita.
                            Dividimos a CF em níveis: o da sílaba, de rimas e aliteração (palavras que iniciam com o mesmo som) e o do fonema<sup>22</sup>.
                        </span>
                        <span>
                            Para escrevermos, além da consciência fonológica,  é necessário que uma série de habilidades neuropsicológicas estejam trabalhando juntas!
                            A atenção, por exemplo, é fundamental para a aprendizagem, ela é a “porta de entrada” para todas outras funções da cognição humana.
                            Não menos importante, a memória desempenha função de armazenamento, recuperação e codificação, sendo primordial para a comunicação.
                            Outras habilidades muito recrutadas para ler e escrever são as que compõem as Funções Executivas,
                            compreendidas por um conjunto de processos cognitivos que permitem alcançar um objetivo previamente estabelecido<sup>23</sup>.
                        </span>
                        <span>
                            Ao ingressar no 1º ano espera-se que a criança já possua as habilidades linguísticas e
                            cognitivas adequadas para a leitura e escrita, dando início a mais um desafio: a apropriação de um sistema com novas
                            regras e que requer a integração de novas habilidades com as já adquiridas<sup>24</sup>.
                        </span>
                        <span>
                            Uma criança que já sabe ler e escrever se apropria do sistema alfabético de escrita da língua,
                            se dá conta da diferença entre a fala e escrita, lê e escreve textos com autonomia,
                            consegue produzir e compreender narrativas consistentes que atendem a diferentes propósitos.
                            A aquisição da linguagem escrita é complexa, por isso, o ciclo de alfabetização ocorre nas séries iniciais do
                            ensino fundamental e tem o tempo estimado de 3 anos<sup>25</sup>.
                        </span>
                        <span>
                            Vivemos em uma sociedade em que ler e escrever é fundamental para estarmos inseridos.
                            Durante todo o tempo temos contato com textos, mesmo quando não estamos fazendo uma redação ou lendo um livro.
                            Para pegarmos um ônibus, fazermos compras, escolhermos o que comer em uma lanchonete ou restaurante estamos em contato com o mundo escrito.
                        </span>
                        <span>
                            Assim, a leitura e escrita vai muito além da alfabetização, isto é,
                            período em que o sujeito está aprendendo a ler e escrever. As crianças antes mesmo da
                            alfabetização já tem contato com a leitura e escrita em uso social, sendo portanto letradas<sup>26</sup>!
                            Assim, desde pequenininhas é importante que elas tenham contato com livros e histórias para que já sejam
                            parte da nossa cultura letrada, além de desenvolver afeto pelo hábito da leitura<sup>27</sup>.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Alterações no percurso de aquisição da linguagem oral e escrita</Accordion.Header>
                    <Accordion.Body>
                        <span>
                            Algumas crianças podem apresentar alterações na aquisição da linguagem oral e linguagem escrita
                            justificadas ou não por questões no desenvolvimento, como perda auditiva, deficiência intelectual,
                            distúrbio neurológicos ou déficits estruturais. Essas alterações aparecem no início da infância e podem gerar
                            grandes prejuízos na vida dos pequenos, impactando suas relações com outras pessoas,
                            dificuldades em se integrar em diferentes contextos sociais e grandes dificuldades acadêmicas<sup>28</sup>.
                        </span>
                        <span>
                            Existem algumas alterações que podem ser consideradas transitórias, como por exemplo atrasos simples de linguagem ou
                            dificuldades de aprendizagem. Mesmo suspeitando dessas alterações, a família deve procurar um(a) fonoaudiólogo(a) para avaliação e acompanhamento.
                            Existem, outras alterações que ocorrem durante a vida do indivíduo, sendo consideradas permanentes.
                            Neste caso também é imprescindível um olhar e uma avaliação de um profissional que trabalhe com linguagem infantil
                            qualquer tipo de alteração precisa de atenção, o quanto antes o (a)
                            fonoaudiólogo(a( for procurado melhor o prognóstico da criança, isto é, melhor sua evolução!
                        </span>
                        <span>
                            O fonoaudiólogo é o profissional adequado para avaliar, diagnosticar e intervir em qualquer desordem da comunicação.
                            A linguagem é fundamental para nossa vida em sociedade, por meio dela nos comunicamos, fazemos amigos,
                            estudamos, trabalhamos… enfim, temos todas as interações sociais!
                        </span>
                        <span>
                            Dificuldades na aquisição da linguagem podem impactar no estabelecimento de relações, na aprendizagem da leitura e escrita e
                            serem indicativos de outras questões mais globais do desenvolvimento. Não se engane e não espere!
                            Existem parâmetros de referência relacionados ao desenvolvimento de linguagem, cada criança tem seu tempo dentro desses parâmetros.
                        </span>
                        <span>
                            Não deixe de visitar em nosso site as sessões abaixo e, se surgir alguma dúvida, procure um fonoaudiólogo!
                        </span>
                        <span>
                            <div className="tab-link" onClick={() => props.onTabChange('the-expected-by-age')}>🡥 <u>O que é esperado por idade no desenvolvimento da linguagem oral?</u></div>
                        </span>
                        <span>
                            <div className="tab-link" onClick={() => props.onTabChange('alert-signs')}>🡥 <u>Principais sinais de alerta</u></div>
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="references">
                <span>
                    <i> REFERÊNCIAS </i>
                </span>
                <span>
                    <i> 1 - Morgan JL, Demuth K. Signal to syntax: An overview. In J.L. Morgan K, Demuth (Eds), Signal to syntax: Bootstrapping from speech to grammar in early acquisition, pp. 1–22. Mahwah, NJ: Lawrence Erlbaum Associates Inc., 1996.</i>
                </span>
                <span>
                    <i> 2 - Hohne EA, Jusczyk PW. Two-month-old infants' sensitivity to allophonic differences. Percept Psychophys. 1994 Dec;56(6):613-23. </i>
                </span>
                <span>
                    <i> 3 - Jusczyk PW. The discovery of spoken language. Cambridge, Mass: The MIT Press, 1997. </i>
                </span>
                <span>
                    <i> 4 - Jusczyk PW, Pisoni DB, Mullennix J. Some consequences of stimulus variability on speech processing by 2-month-old infants. Cognition. 1992 Jun;43(3):253-91. </i>
                </span>
                <span>
                    <i> 5 - Kent RD, Miolo, G. Habilidades fonéticas no primeiro ano de vida. In: Fletcher, P., MacWhinney, B. (eds). Compêndio da linguagem da criança. Porto Alegre: Artes Médicas, 1997. </i>
                </span>
                <span>
                    <i> 6 - Morgan JL, Saffran JR. Emerging integration of sequential and suprasegmental information in preverbal speech segmentation. Child Dev. 1995 Aug;66(4):911-36. </i>
                </span>
                <span>
                    <i> 7 - Bagetti T. Um estudo experimental do processamento na interface fônica e da análise sintática inicial: o papel de elementos funcionais na aquisição da linguagem. Rio de Janeiro. Tese (Doutorado em Estudos da Linguagem) - Programa de Pós-graduação em Letras, Pontifícia Universidade Católica do Rio de Janeiro; 2009. </i>
                </span>
                <span>
                    <i> 8 - Bagetti T, Correa LMS. The early recognition of verb affixes: evidence from Portuguese. In: Danis, N.; Mesh, K.; Sung, H. (Ed.). BUCLD 35 Online Proceedings Supplement, 2011. </i>
                </span>
                <span>
                    <i> 9 - Zorzi JL, Hage SRV. PROC - Protocolo de observação comportamental: avaliação de linguagem e aspectos cognitivos infantis. 1a ed. São José dos Campos (SP): Pulso Editorial; 2004 </i>
                </span>
                <span>
                    <i> 10 - Badin, Katia. Manual de Observação da Comunicação Social. CREFONO1. 2019. </i>
                </span>
                <span>
                    <i> 11 - Corrêa LM, organizador. Aquisição da Linguagem e problemas do desenvolvimento linguístico. Rio de Janeiro: Editora PUC-Rio; 2006. </i>
                </span>
                <span>
                    <i> 12 - Hage SRV, Pinheiro LAC. Desenvolvimento típico de linguagem e a importância para a identificação de suas alterações na infância. In: Tratado de linguagem: perspectivas contemporâneas. Ribeirão Preto: Book Toy; 2017. </i>
                </span>
                <span>
                    <i> 13 - Deliberato D. Linguagem, interação e comunicação: competências para o desenvolvimento da criança com deficiência não oralizada. In: Nunes LROP, Schirmer. Salas abertas: formação de professores e práticas pedagógicas em comunicação alternativa e ampliada nas salas de recurso multifuncionais [online]. Rio de Janeiro: EDUERJ; 2017. p. 299-310. </i>
                </span>
                <span>
                    <i> 14 - Borges LC, Salomão NMR. Aquisição da Linguagem: Considerações da Perspectiva da Interação Social  Psicologia: Reflexão e Crítica, 2003, 16(2), pp. 327-336 </i>
                </span>
                <span>
                    <i> 15 - Prates, LPCS; Martins, VO. Distúrbios da fala e da linguagem na infância. Revista Médica de Minas Gerais 2011; 21(4 Supl 1): S54-S60. </i>
                </span>
                <span>
                    <i> 16 - Northern J, Downs, MP. Audição na infância. 5. ed. Rio de Janeiro: Guanabara Koogan, 2005. </i>
                </span>
                <span>
                    <i> 17 - Moretti CAM; Ribas A. Desenvolvimento de linguagem e sua relação com a perda auditiva. Tuiuti: Ciência e Cultura. Curitiba. 2016;52:83-95. </i>
                </span>
                <span>
                    <i> 18 - Sobreira ACO, Capo BM, Santos TS, Gil D. Desenvolvimento de fala e linguagem na deficiência auditiva: relato de dois casos. Rev. CEFAC. 2015 Jan-Fev; 17(1):308-317 </i>
                </span>
                <span>
                    <i> 19 - Mousinho, R. Desenvolvimento da Leitura e Escrita e seus Transtornos. In: Goldfeld, M. Fundamentos em Lingugem. Rio de Janeiro: Guanabara Koogan, 2003. p. 39 - 60. </i>
                </span>
                <span>
                    <i> 20 - Bordignon LHC, Paim MM. O Processo De Aquisição Da Escrita Pela Criança: Dialogando Com Alexander Romanovich Luria In: 12º EDUCARE Congresso Nacional de Educação, 2015. PR, Curitiba: Pontifícia Universidade Católica do Paraná. </i>
                </span>
                <span>
                    <i> 21 - Zorzi JL. Alterações ortográficas nos transtornos de aprendizagem. In Maluf, M.I. (org.). Aprendizagem: tramas do conhecimento, do saber e da subjetividade. Rio de Janeiro: Vozes; São Paulo: ABPp, 2006. p. 144-162. </i>
                </span>
                <span>
                    <i> 22 - Sordi, C.Alfabetização e Consciência fonológica: considerações teóricas sobre sua relação com o sistema alfabético. Ens. Tecnol. R.2017; 1(1):.33-45. </i>
                </span>
                <span>
                    <i> 23 - Pagliarin KC, Pereira N, Gonçalves HA, Fonseca RP. Linguagem, Atenção, Memórias e Funções Executivas: Interfaces à Luz da Neuropsicologia e Implicações para a Prática Clínica. In: Lamôica DAC, Britto DBO.Tratado de Linguagem: perspectivas contemporâneas: BookToy, 2017. p. 137-149. </i>
                </span>
                <span>
                    <i> 24 - Germano DG, Pinheiro FH, Cunha VLO. Avaliação e intervenção das habilidades metalinguísticas. In: Capelline SA, Germano GD, Cunha VLO. TRANSTORNOS DE APRENDIZAGEM E TRANSTORNOS DE ATENÇÃO (da avaliação à intervenção).  São José dos Campos: Editora Pulso, 2010, p. 35 - 48. </i>
                </span>
                <span>
                    <i> 25 - Brasil. Ministério da educação. Secretaria de alfabetização. PNA política nacional de alfabetização/secretaria de alfabetização. – Brasília: MEC, SEALF, 2019. 54 p. </i>
                </span>
                <span>
                    <i> 26 - Soares, M. Alfabetização: a questão dos métodos. São Paulo: Contexto, 2017. </i>
                </span>
                <span>
                    <i> 27 - Gabriel, R . Letramento, Alfabetização E Literacia: Um Olhar A Partir Da Ciência Da Leitura. Revista Prâksis. 2017; 2(14): 76-88. </i>
                </span>
                <span>
                    <i> 28 - AMERICAN PSYCHIATRIC ASSOCIATION. DSM - 5 – Manual Diagnóstico e Estatístico de Transtornos Mentais. Porto Alegre: Artmed, 2014. </i>
                </span>
            </div>
        </div>
    );
}