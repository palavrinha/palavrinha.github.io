import React from 'react';
import './index.css';
import { Accordion, Button, Image } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const content = {
    livro_das_emocoes:      require('../../../assets/child-activities/6-9/livro_das_emocoes.jpg'),
    boliche_das_silabas:    require('../../../assets/child-activities/6-9/boliche_das_silabas.jpg'),
    'origami_come_come':    'S-H6ut8QzJE',
    brincando_com_baloes:   require('../../../assets/child-activities/6-9/brincando_com_baloes.jpg'),
    dado_da_improvisacao:   require('../../../assets/child-activities/6-9/dado_da_improvisacao.jpg'),
    telefone_sem_fio:       require('../../../assets/child-activities/6-9/telefone_sem_fio.jpg'),
    descobrindo_as_silabas: require('../../../assets/child-activities/6-9/descobrindo_as_silabas.jpg'),
    mudando_a_historia:     require('../../../assets/child-activities/6-9/mudando_a_historia.jpg'),
    molde_de_dado:          require('../../../assets/child-activities/6-9/Molde de dado.pdf'),
}

export default function From2To5Years() {
    return (
        <div className="from-6-to-9-years">
            <h1 className="text-title">6 a 9 anos</h1>
            <Accordion defaultActiveKey={['8']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Livro das emoções</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={content['livro_das_emocoes']} />
                        </p>
                        <span>
                            Essa é uma brincadeira que pode ter resultados encantadores, por meio dessa brincadeira é possível trabalhar a percepção e comunicação de seus
                            sentimentos! O adulto deverá escolher algumas palavras, sugere-se que sejam palavras que representem algum sentimento, como: amor, felicidade,
                            tristeza, raiva, solidão e carinho. Por meio de colagens, desenhos, frases, trechos de música e o que mais a imaginação da criança mandar, ela
                            irá expressar o que cada uma das palavras escolhidas significa para ela.
                        </span>
                        <span>
                            Durante a execução da tarefa o adulto poderá mediar e auxiliar na execução fazendo perguntas do tipo “o que é amor pra você?”, “quando
                            falamos amor em quem você pensa?”, “o que te deixa triste?”, “me conta algo que aconteceu que te deixa feliz”. O ideal é que cada folha seja
                            separada para uma palavra. O objetivo é criar um livro, portanto, as folhas devem ser grampeadas ao final. Não se esqueça de decorar junto com a
                            criança uma capa bem bonita para o livro das emoções! Use e abuse de revistas e jornais para colagem, giz de cera, lápis de cor, hidrocores,
                            tintas e colas.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Boliche das sílabas</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={content['boliche_das_silabas']} />
                        </p>
                        <span>
                            Já sugerimos a brincadeira de boliche para as crianças mais novas. Boliche é sempre divertido, não é mesmo? A nossa sugestão para essa faixa etária
                            é um pouco diferente…
                        </span>
                        <span>
                            As garrafas pets são os pinos do boliche, e elas deverão ser dispostas de forma triangular no qual ficam três garrafas atrás, duas no meio e
                            uma posicionada na frente. Em cada garrafa deverá ter um desenho/imagem. Exemplo de imagens: casa, mapa, carro, vaso, chama, fogo. cama, lona,
                            bolo, bola, lobo, folha, gato, chave.
                        </span>
                        <span>
                            Ao jogar a bola nas garrafas numa distância de um metro, a palavra que estiver colada na garrafa que foi derrubada terá que ter suas sílabas
                            invertidas pela criança, por exemplo, se a palavra for “boca” a criança deverá dizer “cabo”, as palavras utilizadas na brincadeira deverão ser
                            dissílabas (ter apenas duas sílabas).
                        </span>
                        <span>
                            Por meio dessa brincadeira, estimulamos a tarefa de transposição silábica de consciência fonológica, habilidade, que permite refletir sobre a
                            estrutura da língua, e que é muito importante para a aquisição da leitura e escrita.
                        </span>
                        <span>
                            As garrafas poderão ser embaralhadas conforme o decorrer do jogo para que todas palavras sejam usadas e poderá ser trocado os papéis das
                            garrafas para que novas palavras sejam incluídas.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Origami Come-come</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">

                            <iframe
                                width="800px"
                                height="370"
                                title={'origami_come_come'}
                                src={
                                    "https://youtube.com/embed/" +
                                    content['origami_come_come'] +
                                    "?mute=1"
                                }>
                            </iframe>
                        </p>
                        <span>
                            Habilidades trabalhadas: tarefas de consciência fonológica: síntese, segmentação, identificação, produção, exclusão e transposição.
                        </span>
                        <span>
                            Materiais: folha de papel e canetinha.
                        </span>
                        <span>
                            Você conhece o origami “come come”? É muito fácil de fazer e também muito divertido de brincar.  O vídeo do canal Mundo de Kaboo acima
                            explica como executar a dobradura. No vídeo, é dada uma sugestão bem legal de como transformá-lo num jogo.
                        </span>
                        <span>
                            Outra sugestão de jogo com o origami é que ao invés de colocarmos cores, dividirmos os espaços relacionados a cada número com perguntas.
                            Assim, quando a criança escolher um número, no seu interior haverá uma pergunta.
                        </span>
                        <span>
                            As perguntas foram pensadas a partir de habilidades metalinguísticas, isto é, de reflexão da própria língua que são fundamentais para a
                            aquisição da leitura e escrita. As perguntas sugeridas são:
                        </span>
                        <ul>
                            <li>Se tirar a primeira sílaba de “mofada” qual palavra é formada?</li>
                            <li>Qual palavra começa com o som igual ao de “caneta”?</li>
                            <li>Quais dessas palavras rimam: casa, abajur e brasa?</li>
                            <li>Diga quatro palavras que comece com a sílaba “vá”</li>
                            <li>Diga três palavras que rime com “calor”</li>
                            <li>As sílabas ca-der-no formam juntas qual palavra?</li>
                            <li>Qual palavra é formada de seu inverter as sílabas de “bolo”</li>
                            <li>Separe as sílabas de “escola”</li>
                        </ul>
                        <span>
                            A partir desse origami podem ser criados uma série de jogos!
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Brincando com balões</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={content['brincando_com_baloes']} />
                        </p>
                        <span>
                            Para realizar essa brincadeira precisamos de balões de festa.  As bolas deverão ser enchidas e coladas com fita adesiva na parede ou no chão.
                            A criança deverá escolher uma bola para estourar com um palito de dente. Dentro de cada balão terá um papel com uma atividade, quando a bola for
                            esgotada a atividade deverá ser realizada.
                        </span>
                        <span>
                            Essa é uma forma divertida de estimular que a criança adquira habilidades metalinguísticas que são importantes para a alfabetização.
                            Sugere-se as seguintes atividades:
                        </span>
                        <ul>
                            <li>Cantar uma música com a palavra “amor”;</li>
                            <li>Falar todo o alfabeto em ordem correta;</li>
                            <li>Dizer três palavras que rimem com “sorte”;</li>
                            <li>Diga o trava língua: A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã. Nem a rã arranha a aranha;</li>
                            <li>Memorize a sequência numérica 48974 e diga ela sem o apoio do papel;</li>
                            <li>Divide palavra “televisão” em sílabas;</li>
                            <li>Diga seis palavras que comecem com o som de “m”;</li>
                            <li>Carrapato rima com quais palavras: sandália, abajur, sapato, lago e campeonato;</li>
                            <li>Guar- da – na – po. Essas sílabas formam que palavra?</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Dado da improvisação</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={content['dado_da_improvisacao']} />
                        </p>
                        <span>
                            Essa brincadeira consiste em um desafio de improvisação. Para que ela seja realizada é preciso que seja usado o molde disponibilizado abaixo.
                            A brincadeira estimula as habilidades de interação social a partir do lançamento dos dados.
                        </span>
                        <span>
                            No primeiro dado, você vai desenhar ou colar imagens de de contextos sociais (padaria, aniversário, shopping, escola, consultório médico e loja).
                            No segundo, você deve escrever uma letra que representa um som.
                        </span>
                        <span>
                            Essa brincadeira deve ocorrer em duplas ou em grupo, as crianças deverão encenar como se estivessem em uma conversa no ambiente sorteado pelo
                            primeiro dado, a partir de então elas deverão interagir entre si, porém, cada frase deverá ser iniciada com o som resultado do lançamento do
                            segundo dado.
                        </span>
                        <br />
                        <br />
                        <br />
                        <Button style={{ fontWeight: 'bold', backgroundColor: '#DE4E8D', border: 0 }} href={content['molde_de_dado']} target="_blank" rel="noreferrer">
                            <FaDownload color="white" /> Baixar molde de dado
                        </Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>6. Telefone sem fio</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={content['telefone_sem_fio']} />
                        </p>
                        <span>
                            Essa é uma versão da brincadeira tradicional do telefone sem fio, ideal para ser realizada com grupos de crianças. Nesta brincadeira elas deverão
                            estar posicionadas uma do lado da outra. A criança da ponta de fila deverá falar uma palavra de sua escolha no ouvido do colega ao seu lado de modo
                            que só ele escute, dessa forma, o colega deverá dizer no ouvido do outro amigo ao seu lado uma palavra que rime com a que foi dita anteriormente para
                            ele.
                        </span>
                        <span>
                            Ao acabar a brincadeira pode ser reiniciada, porém, dessa vez, ao invés de rima, as crianças deverão dizer palavras que comecem com o mesmo som da
                            última palavra dita, por exemplo, se foi dito “vaso” no seu ouvido, você poderá dizer “visão”, “vagalume”, “veículo” ou “vulcão” no ouvido do seu
                            amigo.
                        </span>
                        <span>
                            Essa brincadeira estimula a habilidade de aliteração, e assim como as outras habilidades metalinguísticas ajudam no processo de alfabetização.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>7. Descobrindo as sílabas</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={content['descobrindo_as_silabas']} />
                        </p>
                        <span>
                            Essa brincadeira é muito simples e criativa! Para fazê-la basta um recipiente com água e papel toalha. Divida o papel em faixas e dobre-o ao meio.
                            Escreva em uma metade dobrada com canetinhas algumas sílabas, por exemplo:  “CA”; “SO”; “RA”; “TA”. O legal é que a atividade seja realizada com
                            várias sílabas.
                        </span>
                        <span>
                            Disponha os papéis dobrados de forma que a criança não consiga ler a sílaba no seu interior. Em uma travessa com água pela metade,peça para
                            que ela bote o papel no recipiente. Assim que o papel entrar em contato com a água, a sílaba escrita ficará à mostra.
                        </span>
                        <span>
                            A brincadeira consiste em desafiar a criança a falar o máximo de palavras que conseguir com a sílaba que será revelada, trabalhando,
                            dessa forma, a manipulação de sílabas, o que é uma habilidade importante para o sucesso no processo de alfabetização.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>8. Mudando a história</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={content['mudando_a_historia']} />
                        </p>
                        <span>
                            Que tal mudar uma história que você já conhece? Isso mesmo, essa é uma forma de estimular a narrativa e a criatividade dos seus pequenos.
                            Essa brincadeira funciona da seguinte forma: a partir do lançamento de um dado (disponível para download) a criança deverá mudar elementos
                            da história.
                        </span>
                        <span>
                            Em cada face do dado, você deverá escrever: personagem principal, cenário, início, meio, fim e tempo (passado, futuro e presente).
                            Assim, a partir da escolha de uma história de sua preferência, e do sorteio da face do dado a criança poderá brincar e ser desafiada a
                            reinventar uma história.
                        </span>
                        <br />
                        <br />
                        <br />
                        <Button style={{ fontWeight: 'bold', backgroundColor: '#DE4E8D', border: 0 }} href={content['molde_de_dado']} target="_blank" rel="noreferrer">
                            <FaDownload color="white" /> Baixar molde de dado
                        </Button>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8" style={{ marginTop: '80px', marginBottom: '80px' }}>
                    <Accordion.Header>Dica</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <span>
                            Por fim, separamos para vocês uma dica incrível de material pensando no processo de alfabetização que ocorre justamente nessa idade.
                            O “Conte com a fono! Histórias e atividades para crianças em fase de alfabetização” é um guia informativo disponível gratuitamente
                            com o objetivo de estimular habilidades importantes para o desenvolvimento da linguagem escrita. Baixe a versão em e-book acessando o
                            link a seguir:
                            <a target="_blank" rel="noreferrer" href="http://petfonoaudiologia.fob.usp.br/conte-com-a-fono/">
                                <u>🡥 http://petfonoaudiologia.fob.usp.br/conte-com-a-fono/</u>
                            </a>
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}