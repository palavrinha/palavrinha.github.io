import React from 'react';
import './index.css';
import { Accordion, Image } from 'react-bootstrap';

const images = {
    contacao_de_historias: require('../../../assets/child-activities/0-2/contacao-de-historias.png')
}
export default function From0To2Years() {
    return (
        <div className="from-0-to-2-years">
            <h1 className="text-title">0 a 2 anos</h1>
            <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Brincando no espelho</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Espelhos são ótimos instrumentos para brincar com os nossos pequenos (a partir de 3 a 4 meses)! Você pode brincar com seu bebê na frente deles, nomeando partes do corpo, cantando músicas.. enfim, usar e abusar da criatividade! Os bebês costumam ficar muito entretidos em atividades desse tipo, você pode usar objetos também para tornar a atividade mais divertida e até mesmo colocar imagens no espelho e aproveitar para desenvolver mais habilidades!
                        </span>
                        <span>
                            Por exemplo, fixar no espelho imagens de expressões faciais de alegria, tristeza, raiva, e tentar imitá-las junto ao seu filho, ou estimular a cumprir ordens como dar tchau, mandar beijo e etc.
                        </span>
                        <span>
                            Com essa brincadeira, você incentivará a criança a ter percepção do “eu” e do outro, além de poder estimular o conhecimento de partes do corpo e outras habilidades dependendo de como escolher brincar.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Chocalho divertido</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            O chocalho é um clássico da infância e pode ser realizado facilmente com utensílios que temos em casa!
                            O importante é que seja um brinquedo bastante atrativo, por isso, abuse das cores e sons!
                            Existem várias formas de confeccioná-los,  sugerimos o uso de garrafas pet, no seu interior
                            podemos usar miçangas, grãos como feijão, arroz e pipoca. Por ser um brinquedo indicado para
                            bebês mais novos, cuidado com a decoração dele, peças pequenas, que podem se descolar
                            facilmente ou se soltar não são indicadas.
                        </span>
                        <span>
                            Esses são brinquedos divertidos, através deles podemos estimular habilidades de
                            percepção auditiva e atenção sustentada e compartilhada. Além disso, o chocalho
                            pode ser usado junto com uma música infantil. Cante, dance e faça muito barulho
                            junto com seu pequeno!
                        </span>
                        <span>
                            É importante lembrar que o brinquedo é apenas um instrumento.
                            A brincadeira se torna de fato estimulante dependendo da interação
                            entre o adulto e a criança. Por isso, explore o potencial da
                            brincadeira, além de ser um momento divertido com seu filho é
                            também um momento para desenvolver uma série de habilidades!
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. Contação de histórias</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Às vezes pensamos que as histórias devem ser contadas apenas
                            para crianças mais velhas, mas isso não é verdade! Contar
                            histórias é importante para todas as idades, assim como para
                            crianças mais novas. Livros infantis têm ótimos ensinamentos
                            que são dados de forma leve e descontraída.
                        </span>
                        <span>
                            Para crianças pequenas, conte histórias com frases curtas e
                            simples, a forma que conta, os gestos e a entoação que usa faz
                            toda diferença! Respeite a indicação dos livros infantis e
                            priorize aqueles com mais apelo sensorial, isto é, cores
                            vibrantes, altos contrastes, diferentes texturas e imagens
                            apelativas, deixe que a criança manuseie o livro!
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4. Combinando as formas</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Essa é uma brincadeira super simples de ser feita! Precisaremos
                            apenas de uma caixa de sapato e algumas figuras impressas
                            através dessa brincadeira, podemos estimular noções espaciais,
                            motricidade fina, vocabulário de cores e formas e coordenação
                            visuo-motora (olho-mão).
                        </span>
                        <span>
                            Para realizá-la precisaremos de uma caixa de sapatos. Desenhe
                            formas simples como círculos, triângulos, quadrados, coração,
                            estrela, losangos e retângulos em uma folha A4, recorte-as e
                            cole-as na tampa da caixa. Depois prepare cartas, também em
                            folha A4, com essas mesmas formas, você pode desenhá-las de
                            tamanhos e cores diferentes das imagens que estão coladas na
                            caixa de sapatos. Sugerimos que, se possível, essas cartas sejam
                            coladas em papelão, para que fiquem mais fáceis de manipular.
                            Na frente de cada imagem colada na tampa da caixa, deve ser
                            feita uma abertura de forma que seja suficiente que a criança
                            coloque a carta correspondente com a imagem colada.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>5. Brincadeiras sensoriais</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            As brincadeiras sensoriais tem como objetivo fazer com que a
                            criança explore diferentes texturas, o que é fundamental para o
                            desenvolvimento psicomotor do bebê!
                        </span>
                        <span>
                            Você pode fazê-las de diferentes formas, por exemplo, por tipos
                            de grãos como pipoca, milho, arroz e feijão, em um recipiente e
                            deixar que o bebê encoste os pés nesses grãos. Outra opção é a
                            confecção de tapetes sensoriais. Na sua confecção, você pode
                            abusar das texturas usando materiais que temos em casa mesmo,
                            como algodão, macarrão, papel alumínio amassado, grãos de feijão.
                            Neste caso, deve-se tomar muito cuidado para envolver
                            adequadamente os materiais para não correr o risco da criança
                            levar à boca.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>6. Caça ao tesouro</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Quase todo mundo já brincou de caça ao tesouro, recomendamos essa brincadeira para
                            crianças com idade mais próxima aos dois anos. A brincadeira tradicional acontece
                            por meio de pistas, que conduzem os jogadores ao tesouro.
                            Porém, sugerimos que ela ocorra de outra forma com crianças pequenininhas.
                        </span>
                        <span>
                            Combine com seu pequeno que você irá esconder um brinquedo na
                            casa, você pode, se preferir, limitar a brincadeira em um cômodo,
                            e dizer que escondeu o brinquedo na sala, por exemplo.
                            A criança em seguida deverá procurar o objeto escondido, a
                            brincadeira chega ao fim quando ela encontra seu brinquedo.
                            Essa atividade pode ser repetida várias vezes!
                        </span>
                        <span>
                            Que tal durante a realização dela você nomear onde a criança está
                            procurando seu brinquedo?! Assim você estará ajudando o seu
                            pequeno na compreensão de enunciados e  a expandir seu vocabulário.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>7. Cadê o brinquedo?</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Essa é uma brincadeira muito simples, dentro de uma caixa, ou em
                            cima da cama coloque uma série de objetos, podendo ser
                            brinquedos ou artefatos da casa. Você deve falar com seu bebê
                            “onde está o/a ….” e completar a frase com o nome de alguns dos
                            objetos dispostos na frente da criança. Ela então, deve procurar
                            esse objeto, dentre os vários outros que você selecionou e lhe
                            entregar. Não deixe de fazer uma festa e comemorar bastante com
                            seu pequeno quando ele achar o objeto correto!
                        </span>
                        <span>
                            Todas as sugestões de brincadeiras além de serem pensadas e
                            selecionadas com a preocupação no desenvolvimento da linguagem
                            também podem reforçar e criar laços e vínculos afetivos cada vez
                            mais profundos!
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>8. Quebra-cabeça</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Existem vários tipos de quebra cabeça, desde os mais simples até
                            aqueles com mais de 1000 peças. Para os nossos pequenos, são
                            indicados os mais simples. A nossa sugestão é um quebra cabeça
                            com 3 ou 4 peças grandes. Eles podem ser feitos com qualquer
                            imagem, como com personagens dos desenhos preferidos dos seus
                            pequenos e até mesmo fotos da família, basta imprimir a de sua
                            preferência.
                        </span>
                        <span>
                            Para que o quebra cabeça fique durinho, e assim mais fácil de
                            ser usado, podemos usar papelão, por exemplo, da tampa de
                            caixas de sapato. Cole a imagem que você selecionou na tampa da
                            caixa de papelão e com uma régua divida a imagem em quatro partes
                            iguais. Pronto, seu quebra cabeça está feito e pronto para
                            estimular o raciocínio lógico e atenção do seu pequeno!
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>9. Mestre mandou</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            O mestre mandou! Também muito conhecida, a brincadeira consiste
                            em seguir os comandos dados pelo chefe. Como a atividade é
                            proposta para crianças ainda muito novinhas, os comandos têm que
                            ser de acordo com aquilo que a criança já consegue realizar.
                            Algumas sugestões de comando para essa brincadeira:
                            “dá tchau”; ; “manda beijo”; “bata palmas”; “abraça a mamãe”.
                        </span>
                        <span>
                            Você pode executar a ação junto ao dar o comando para a criança, por exemplo,
                            logo após pedir para seu pequeno mandar beijo, mande um beijo, assim ela terá a
                            possibilidade de imitar a sua ação e compreender melhor o comando dado.
                            Frases simples como essa auxiliam a compreensão da criança e também aliado ao
                            uso de gestos na expansão de seu vocabulário.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>10. Caixa de correio</Accordion.Header>
                    <Accordion.Body className="child-activitie">
                        <p className="text-center">
                            <Image src={images.contacao_de_historias} />
                        </p>
                        <span>
                            Que tal fazermos nosso próprio correio em casa? Essa atividade
                            consiste em confeccionar cartinhas e pô-las dentro de uma caixa
                            de sapatos. A caixa é o nosso correio. As cartas podem ser para
                            a vovó, para o Papai Noel ou qualquer outra pessoa/personagem.
                            Instigue seu pequeno a desenhar coisas que ele sente, ou o que
                            quer falar com o remetente da carta.
                        </span>
                        <span>
                            Os desenhos nessa idade ainda são “rabiscos”, mas isso não
                            importa! Use tintas como guache e colas coloridas para aprimorar
                            ainda mais as cartinhas. Uma outra ideia é que no correio tenha
                            também cartas endereçadas para a criança, assim ela não vai
                            apenas oferecer cartas mas também receber! É uma linda
                            estratégia para trabalhar a afetividade e comunicação com os pequenos.
                        </span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}