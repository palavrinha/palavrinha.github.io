import React from 'react';
import './index.css';
import { Accordion, Image } from 'react-bootstrap';

const images = {
    contacao_de_historias: require('../../../assets/child-activities/0-2/contacao-de-historias.png')
}
export default function From2To5Years() {
    return (
        <div className="from-2-to-5-years">
            <h1 className="text-title">2 a 5 anos</h1>
            <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Caixa misteriosa</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Esse é um ótimo recurso e pode ser usado também de várias formas! Que tal brincar com a curiosidade do seu filho?! É justamente o
                            que essa brincadeira propõe. Nela usamos uma caixa, que pode ser decorada especialmente para essa finalidade, ou podemos usar apenas
                            uma caixa comum, desde que ela não seja transparente.
                        </span>
                        <span>
                            Essa brincadeira funciona da seguinte forma: dentro de uma caixa opaca, você deverá por uma série de brinquedos e objetos.
                            A criança não deve saber o que está dentro da caixa, aos poucos junto com seu pequeno, os brinquedos serão retirados.
                        </span>
                        <span>
                            A brincadeira tem várias possibilidades!. A primeira é perguntar sobre a cor, função, características  e pedir para que ela
                            nomeie o objeto que está sendo retirado da caixa!
                        </span>
                        <span>
                            Você pode também narrar uma história para a criança a partir da retirada dos objetos da caixa. Vale ressaltar que crianças
                            mais novas têm o tempo de atenção mais reduzido, por isso, ao usar a segunda sugestão com crianças de 2 ou 3 anos conte
                            histórias mais curtas e objetivas. Além disso, abuse de diferentes entonações, expressões faciais para manter o interesse da criança.
                        </span>
                        <span>
                            Uma outra forma de brincar é a de construir uma história a partir da retirada dos objetos da caixa misteriosa.
                            Recomendamos que essa modalidade seja realizada a partir dos 4 anos.  Conforme você retira objetos peça para que a
                            criança conte uma história que deve conter os elementos inusitados tirados de dentro da caixa de forma coerente dentro
                            da narração! É uma brincadeira divertida que vai precisar da atenção e criatividade do seu pequeno além de exercitar e
                            muito a flexibilidade mental!
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Árvore genealógica</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Selecione fotos dos familiares próximos que a criança tenha ou não  contato, por exemplo os pais, avós, tios e primos.
                            Ela consiste em reconhecer os parentes pelas fotografias e depois confeccionar uma árvore genealógica em folha A4. Para isso o
                            ideal é que as fotos tenham sido impressas, assim assim você junto com seu filho pode desenhar, fazer colagens de revistas, miçangas,
                            fitas, flores e etc.
                        </span>
                        <span>
                            A partir da confecção dessa árvore você poderá explicar as relações familiares. Depois de pronta a árvore genealógica
                            pode virar um lindo quadro e ser exposto em algum lugar da casa.
                        </span>
                        <span>
                            Com essa brincadeira é estimulado vocabulário, atenção compartilhada, memória, desenvolvimento motor fino (colagem),
                            pertencimento e a afetividade com os membros da família.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Teatro de dedoches ou fantoches</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Próximo aos dois anos, a criança começa a desenvolver brincadeiras mais elaboradas, como aquelas que imitam as
                            atividades dos adultos. Surgem a partir dessa faixa etária as brincadeiras de faz de conta, elas são muito importantes
                            para o desenvolvimento da linguagem já que estão relacionadas a nossa capacidade de abstração. Por isso, estimule essas brincadeiras!
                        </span>
                        <span>
                            Com os dedoches e/ou fantoches, por exemplo, temos a possibilidade de criar várias histórias. Que tal criar um
                            teatrinho junto com seu filho? Vocês podem usar personagens de filmes e desenhos que eles gostem e brincar recriando a
                            história original ou criando novas situações e desfechos inéditos! Podem ser usados dedoches e fantoches já prontos ou
                            confeccioná-los com materiais recicláveis que temos em casa, como caixa de leite, meia, papéis, luvas e etc.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Bolhas de sabão</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            As bolhas de sabão são fascinantes para as crianças e até mesmo para nós adultos, não é mesmo? Elas são muito
                            fáceis de fazer e super divertido de brincar! Brincando com elas junto do seu pequeno você estará estimulando a
                            habilidade de atenção compartilhada, que é muito importante para a aprendizagem e desenvolvimento da linguagem.
                            Além de ter momentos muito divertidos!
                        </span>
                        <span>
                            Nessa brincadeira, podem ser compradas a solução já pronta com o recipiente próprio para fazer as bolhas,
                            ou fazer a solução em casa (basta misturar um pouco de água com detergente de cozinha). O soprador pode ser
                            feito com arame, assim, você pode fazer diferentes formas além da convencional em círculo, por exemplo, de coração.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Massinha caseira</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            A massinha é super divertida e dá para ser usada de vários jeitos e por muitas idades, como forma de
                            exploração sensorial, criação de bonecos, cenários, usando moldes e o que mais a imaginação permitir.
                            Além da criatividade, a massinha também ajuda a criança a desenvolver a habilidade motora fina, ou seja,
                            coordenação de mão e pulso. Você sabia que podemos fazer massinha em casa?! É super simples e com ingredientes
                            comuns de existirem nas nossas cozinhas.
                        </span>
                        <span>
                            Para fazê-la usamos farinha, sal, água, óleo e para dar cor você pode usar sucos industrializados em pó, pó de
                            gelatina ou anilina colorida. Caso opte pela última opção, a cor da sua massinha ficará mais forte e vibrante.
                            Na receita do site abaixo, moinho globo, é usado a anilina comestível, você pode trocar, como dito anteriormente,
                            pelo suco em pó ou gelatina, se for da sua preferência. Veja a receita completa no site:
                        </span>
                        <br/>
                        <a target="_blank" rel="noreferrer" href="https://moinhoglobo.com.br/receitas/como-fazer-massinha-de-modelar-especial-de-dia-das-criancas/">
                            <u>🡥 https://moinhoglobo.com.br/receitas/como-fazer-massinha-de-modelar-especial-de-dia-das-criancas/</u>
                        </a>
                        <span>
                            A massinha é um mundo de possibilidades, com ela pode ser criado infinitas brincadeiras, deixe sua
                            criatividade guiar e esteja disposto entrar no mundo da imaginação junto com seu pequeno. Certeza que
                            serão momentos maravilhosos! Uma sugestão é que usem a massinha para criar histórias e cenários para a brincadeira!
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>6. Boliche com garrafa pet</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Boliche é sempre uma atividade divertida, as crianças também adoram! Podemos aliar ao boliche desafios
                            quando caem os pinos, e assim tornar ainda mais proveitoso o momento de diversão. Essa é uma atividade que
                            ajudará a criança a desenvolver equilíbrio, noção espacial, percepção visual e atenção. Sugerimos que sejam
                            utilizados 5 pinos feitos de garrafa pet, de preferência de 600 ml, preenchidos como um punhado de arroz/feijão/milho ou
                            água para impedir que elas caiam facilmente com o vento.
                        </span>
                        <span>
                            Para crianças pequenas de até 3 anos, podemos pintar as garrafas pets e pedir para que ela nomeie a
                            cor assim que o pino for atingido e cair.
                        </span>
                        <span>
                            Com crianças mais velhas a partir dos 4 anos, podemos colar imagens embaixo da garrafa e realizar
                            atividades com rima. Por exemplo, se colarmos, na parte inferior da garrafa, uma imagem de um presente,
                            a criança ao acertar esse pino deverá dizer uma palavra que rima com presente, como contente e sorridente.
                            A rima faz parte de uma habilidade metalinguística, que permite pensar sobre a própria linguagem e é fundamental
                            para a aquisição, posteriormente, da leitura e escrita.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>7. Contação de histórias</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Contar histórias para uma criança é ótimo para o seu desenvolvimento da linguagem. O contato com os
                            livros desde novas desperta e insere a criança na cultura letrada, o que aumenta  seu interesse pela
                            aprendizagem da leitura e escrita.
                        </span>
                        <span>
                            Que tal deixar que seu filho escolha os livros junto com você!? Não deixe de conferir a faixa
                            etária indicada. Uma dica na hora da seleção dos livros é que seja escolhido aqueles que contenham
                            imagens, pois elas ajudam a criança a compreender melhor a narrativa. Durante a contação da história,
                            você pode realizar perguntas para criança sobre as impressões dela sobre o enredo e também fazer comentários e
                            inferências sobre a história.
                        </span>
                        <span>
                            A contação de histórias por si só já é uma ótima atividade. Mas que tal, se você brincar de
                            criar um novo final para uma história que você e seu filho já conhecem? Vocês podem até criar novas
                            ilustrações baseadas nos novos rumos que decidiram para a história! Essa brincadeira pode ter variações,
                            pode ser inventado um novo início ou meio da história.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>8. Adedanha</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            A adedanha que sugerimos não necessita de papel e caneta! Os jogadores vão sortear uma letra. É de costume que a
                            letra seja escolhida utilizando as mãos. Cada jogador deverá pôr com os dedos uma numeração, um jogador deverá
                            associar o número total apresentado por todos os participantes e a letra do alfabeto correspondente. Por exemplo,
                            em uma partida com dois jogadores, se o primeiro jogador por dois dedos e o outro apenas um, o total contabilizado é 3,
                            assim,  a terceira letra do alfabeto é “C”.
                        </span>
                        <span>
                            A partir da letra sorteada, as crianças deverão em ordem dizer palavras que começam com essa letra.
                            Por exemplo, se a letra escolhida for “C” as crianças poderão evocar palavras como: "carrapato”, “casa”,
                            “carro”, “coelho” entre outras. A brincadeira pode acabar até que se esgotem as possibilidades de palavras com aquela letra,
                            depois outra letra deverá ser sorteada.
                        </span>
                        <span>
                            Esta brincadeira  pode ser dificultada, se achar que está muito fácil! Para desafiar ainda mais
                            as crianças podemos além de sortear a letra com qual as palavras devem se iniciar, podemos restringir
                            o campo semântico, por exemplo “animais”, “comidas” e “filmes”. Essa é uma brincadeira simples que permite
                            estimular habilidades de pensar sobre a própria língua, recuperação rápida de palavras, além da capacidade de
                            dividir palavras em campos conceituais.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>9. Dado com rimas</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Para realizar essa brincadeira estamos disponibilizando um arquivo com um molde de um dado para impressão.
                            Basta imprimir e colar! No dado, você deve desenhar algo em cada face, o objetivo do jogo é que a criança produza uma
                            palavra que rime com o desenho da face sorteada. Sugestão para você desenhar: nariz, calor, gato, sol, dedo, bola.
                        </span>
                        <span>
                            Antes de começar a brincadeira, no entanto, certifique-se  que a criança conheça os desenhos de todas as faces.
                            Se não os conhecer, nomeie cada um e ajude-a durante a execução da brincadeira. Também é importante que seja explicado o
                            que é rima (palavras que terminam com o mesmo som, por exemplo, “caneca” e “meleca”).
                        </span>
                        <span>
                            A brincadeira pode ter várias rodadas, caso caia a mesma face para cima mais de uma vez não tem problema!
                            A criança deverá dizer uma nova rima com a palavra, não vale repetir a que já foi dita anteriormente.
                            A rima é uma das habilidades que precede e ajuda no processo de alfabetização.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>10. Dado com caretas</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Assim como na atividade anterior, oferecemos para essa brincadeira um arquivo para impressão.
                            Mas dessa vez, o objetivo não é produzir rimas, e sim trabalhar o reconhecimento de emoções e a linguagem não verbal.
                            Em cada face do dado desenhe uma careta, cada uma expressando algum sentimento. Assim que sorteada uma face do dado a criança
                            deverá reproduzir aquela careta. Você pode perguntar a ela qual o sentimento que aquela careta expressa, e perguntar para ela o que
                            a faz se sentir dessa forma, por exemplo, o que faz ela ficar brava.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}