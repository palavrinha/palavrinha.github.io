import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './index.css';

const MythOrTruthButton = (props) => {
    const [answered, setAnswered] = useState(false);
    const [answer, setAnswer] = useState(null);

    const mythButton = useRef(null);
    const truthButton = useRef(null);

    const rightIcon = <FontAwesomeIcon icon={faCircleCheck} color="#00f55e" size='2x' />
    const wrongIcon = <FontAwesomeIcon icon={faXmarkCircle} color="red" size='2x' />

    const choose = (isMyth) => {
        setTimeout(function () {
            if (answered) return;

            setAnswered(true);
            setAnswer(isMyth);

            if (isMyth) {
                if (isMyth === props.isMyth) {
                    mythButton.current.className = "button btn btn-success";
                }
                else {
                    mythButton.current.className = "button btn btn-danger";
                }
            }
            else {
                if (isMyth === props.isMyth) {
                    truthButton.current.className = "button btn btn-success";
                }
                else {
                    truthButton.current.className = "button btn btn-danger";
                }
            }
        }, 150);
    }

    return (
        <div className="myth-or-truth-question">
            <div>
                <h3>{props.id} - {props.question}</h3>
                <div className="flex-box" style={{ flexDirection: 'column' }}>
                    <Button
                        className="button"
                        ref={mythButton}
                        variant={'outline-secondary'}
                        disabled={answered}
                        onClick={() => choose(true)}>
                        Mito
                        {answered && (props.isMyth ? rightIcon : wrongIcon)}
                    </Button>
                    <Button
                        className="button"
                        ref={truthButton}
                        variant={'outline-secondary'}
                        disabled={answered}
                        onClick={() => choose(false)}>
                        Verdade
                        {answered && (props.isMyth ? wrongIcon : rightIcon)}
                    </Button>
                </div>
                <div>
                    {
                        answer !== null &&
                        (
                            answer === props.isMyth
                                ?
                                <div style={{ paddingTop: 20, width: 800 }}>
                                    <span style={{ color: '#00f55e', fontWeight: 'bold' }}>
                                        Muito bem!
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        {props.answer}
                                    </span>
                                </div>
                                :
                                <div style={{ paddingTop: 20, width: 800 }}>
                                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                                        ?? {props.isMyth ? 'mito' : 'verdade'}!
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        {props.answer}
                                    </span>
                                </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default function MythsOrTruths() {
    const questions = [
        {
            id: 1,
            question: 'A comunica????o da crian??a ocorre somente pela fala!',
            answer:
                <span>
                    A Comunica????o n??o ?? sin??nimo de fala, diferente do que muitos pensam, a crian??a n??o come??a a se comunicar somente quando inicia a falar.
                    Sua comunica????o ocorre muito antes disso! Inicialmente, ela se comunica atrav??s do choro, sorrisos, gargalhadas, gestos, apontamentos,
                    balbucio, express??es faciais e corporais e da experimenta????o de sons. Para s?? depois come??ar de fato a falar<sup>1</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 2,
            question: 'A amamenta????o contribui de forma positiva para o desenvolvimento da linguagem.',
            answer:
                <span>
                    A amamenta????o ?? importante para o  desenvolvimento da fala e linguagem.
                    Os m??sculos que a crian??a usa no momento da amamenta????o s??o os mesmos que ser??o usados para ela falar, assim, a
                    amamenta????o age como uma forma de estimula????o natural dessas estruturas.
                    ?? atrav??s dela que h?? o desenvolvimento e crescimento harmonioso e funcional dos aspectos do cr??nio e da face.
                    Al??m das quest??es estruturais, no momento da amamenta????o, acontecem trocas entre a m??e e o beb??, estabelecimento de contato visual,
                    o que favorece o desenvolvimento da linguagem e a constru????o de v??nculo e afeto<sup>2, 3</sup>.
                </span>,
            isMyth: false
        },
        {
            id: 3,
            question: 'O h??bito de chupar dedo e/ou chupeta n??o causa preju??zos para as crian??a.',
            answer:
                <span>
                    As chupetas podem parecer inofensivas e at?? "fofas'', mas na realidade o seu uso pode trazer uma s??rie
                    de malef??cios. Alguns beb??s que fazem o uso dela tem  tend??ncia a mamar menos tempo no peito. Al??m de
                    prejudicar a amamenta????o, por conta desse h??bito modificar a musculatura do rosto e boca, a mastiga????o,
                    fala, respira????o e degluti????o e o posicionamento dent??rio tamb??m podem ser prejudicados.
                    Ainda, o uso de chupetas na inf??ncia s??o indicadores de risco para v??cios orais na fase adulta,
                    como comer excessivamente e fumar<sup>4, 5</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 4,
            question: '?? preciso esperar at?? os 5 anos para levar a crian??a ao fonoaudi??logo.',
            answer:
                <span>
                    De forma alguma! N??o existe idade m??nima para procurar por  um fonoaudi??logo.
                    O ideal ?? que os pais/cuidadores se mantenham atentos aos marcos do desenvolvimento infantil,
                    a sinais de dificuldades na fala, mastiga????o, aprendizagem (leitura e escrita),
                    intera????o social e na ocorr??ncia de engasgos frequentes. Ao observarem alguma dessas altera????es,
                    n??o importa a idade, deve ser procurado um fonoaudi??logo, quanto antes come??ar a interven????o
                    fonoaudiol??gica melhor!
                </span>,
            isMyth: true
        },
        {
            id: 5,
            question: 'A Fonoaudiologia s?? cuida da fala e da linguagem das crian??as.',
            answer:
                <span>
                    A fonoaudiologia ?? uma profiss??o da ??rea da sa??de, respons??vel pela promo????o da sa??de,
                    preven????o, avalia????o e diagn??stico, orienta????o, habilita????o e reabilita????o em todas as
                    fases da vida. Atualmente possui 14 ??reas de atua????o sendo elas: Audiologia, Linguagem,
                    Motricidade Orofacial, Sa??de Coletiva, Voz, Disfagia, Fonoaudiologia Educacional, Gerontologia,
                    Fonoaudiologia Neurofuncional, Fonoaudiologia do Trabalho, Neuropsicologia, Flu??ncia, Per??cia
                    Fonoaudiol??gica e Fonoaudiologia Hospitalar<sup>6</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 6,
            question: 'O uso de telas, como celulares smartphones, tablets e televis??es n??o prejudica a aprendizagem e o desenvolvimento da crian??a.',
            answer:
                <span>
                    As intera????es s??o fundamentais para o desenvolvimento da crian??a, portanto o tempo de exposi????o passiva de
                    crian??as ??s telas, como a televis??o, tem como poss??vel consequ??ncia o atraso da linguagem e a dificuldade de
                    intera????o social. Assim, ?? importante seguir as recomenda????es da Sociedade Brasileira de Pediatria a respeito do
                    tempo adequado de exposi????o a telas, optar nos momentos de uso por atividades que promovam maior envolvimento da
                    crian??a e a presen??a de um adulto<sup>7</sup>.
                    Para saber mais visite o abaixo e leia o manual de orienta????o #MENOS TELAS #MAIS SA??DE.
                    <br />
                    <br />
                    <a target="_blank" rel="noreferrer" href="https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ ">
                        <u>???? https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ </u>
                    </a>
                </span>,
            isMyth: true
        },
        {
            id: 7,
            question: 'At?? dois anos n??o ?? recomendado o uso de telas por crian??as.',
            answer:
                <span>
                    Nesse per??odo da vida dos pequenos n??o ?? recomendado o contato com telas, seja de forma passiva ou ativa,
                    isto ??, assistindo a v??deos no celular ou televis??o ou interagindo em tablets e smartphones em jogos.
                    Essa ?? uma recomenda????o da sociedade brasileira de pediatria,
                    para saber mais visite o abaixo e leia o manual de orienta????o #MENOS TELAS #MAIS SA??DE.
                    <br />
                    <br />
                    <a target="_blank" rel="noreferrer" href="https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ ">
                        <u>???? https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ </u>
                    </a>
                </span>,
            isMyth: false
        },
        {
            id: 8,
            question: 'Algumas crian??as n??o falam ou demoram a ler por pregui??a.',
            answer:
                <span>
                    Existem muitos motivos para o atraso na fala, na leitura e escrita, mas nenhum deles ?? a pregui??a!
                    A demora ou altera????es na fala, leitura ou escrita podem ser justificadas por quest??es como
                    dificuldades nas habilidades cognitivas e/ou no processamento relacionado ?? linguagem, tamb??m
                    podem estar associadas a quest??es emocionais, familiares, psicopedag??gicas e de estimula????o e
                    na maioria das vezes a causa ?? um conjunto de todos esses fatores<sup>1</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 9,
            question: 'A forma como adultos, m??e, pai ou cuidadores, falam com o beb?? influ??ncia no desenvolvimento da linguagem.',
            answer:
                <span>
                    O que os pais falam e como os pais falam influenciam no desenvolvimento da comunica????o da crian??a.
                    As intera????es observadas entre m??e/pai/cuidadores e os beb??s possuem normalmente estrutura mais
                    simples, s??o repetitivas, com pausas mais longas e articula????o dos sons mais exagerados.
                    Sendo assim, ?? uma fala simplificada e com um ritmo e entona????o diferente da usual que pode
                    facilitar o desenvolvimento da linguagem. Portanto, recomenda-se que essa forma diferente de
                    falar seja usada com beb??s e crian??as mais novas at?? cerca de um ano e meio e dois
                    anos de idade<sup>8</sup>.
                </span>,
            isMyth: false
        },
        {
            id: 10,
            question: 'O afeto ?? fundamental para a aprendizagem.',
            answer:
                <span>
                    A afetividade est?? relacionada com os sentimentos de amor e afei????o, atrav??s dessas emo????es,
                    os beb??s interagem com o mundo a sua volta, sendo portanto, indissoci??vel e fundamental para o
                    desenvolvimento da cogni????o humana. Al??m disso, a afetividade no processo de aprendizagem permite
                    maior reten????o de informa????es e motiva????o para se engajar no processo. Assim sendo, o afeto ?? uma
                    necessidade do ser humano, e tamb??m ?? impulsionador da intelig??ncia humana! Aprender o que se gosta ??
                    muito mais prazeroso<sup>9</sup>!
                </span>,
            isMyth: false
        },
        {
            id: 11,
            question: 'Devemos ser bem mais permissivos com a crian??a, visto as limita????es que as crian??as tiveram em momentos dif??ceis  para ela, como a pandemia.',
            answer:
                <span>
                    Sabemos que a vontade ?? de recompensar os pequenos por toda adversidade que eles passam,
                    mas isso n??o ?? saud??vel para eles! N??o devemos educar nossos filhos sem que tenham limites,
                    j?? que a inser????o de limites ??  fundamental para que eles entendam sua posi????o e que possam
                    viver harmonicamente em sociedade. Impor limites ?? tamb??m um ato de amor!
                </span>,
            isMyth: true
        },
        {
            id: 12,
            question: 'Crian??as que t??m transtornos da comunica????o como transtorno de linguagem e o Transtorno Fonol??gico s??o menos inteligentes quando comparadas a crian??as com o desenvolvimento t??pico de linguagem.',
            answer:
                <span>
                    Transtornos de linguagem n??o est??o associados ?? intelig??ncia da crian??a! Se engana quem pensa que elas
                    s??o menos inteligentes do que aquelas que t??m o desenvolvimento de linguagem dentro do esperado.
                    Na verdade, para o diagn??stico desses transtornos um dos crit??rios ?? ter o
                    QI (quoeficiente de intelig??ncia) dentro da normalidade<sup>10</sup>.
                </span>,
            isMyth: true
        },
    ]
    return (
        <div className="myth-or-truth">
            <h1 className="text-title">Mitos e Verdades</h1>
            {questions.map(question => <MythOrTruthButton key={question.id} {...question} />)}

            <center>
                <div className="references">
                    <hr />
                    <span>REFER??NCIAS</span>
                    <span>1 - Prates, LPCS; Martins, VO. Dist??rbios da fala e da linguagem na inf??ncia. Revista M??dica de Minas Gerais 2011; 21(4 Supl 1): S54-S60.Nobre JNP et al. Fatores determinantes no tempo de tela de crian??as na primeira inf??ncia. Ci??ncia & Sa??de Coletiva 2021; 26(3):1127-36.</span>
                    <span>2 - Casagrande L et al. Aleitamento natural e artificial e odesenvolvimento do sistema estomatogm??tico. Rev. Fac. Odontol. Porto Alegre, Porto Alegre 2008; 49(2):11-7.</span>
                    <span>3 - Medeiros AMC, Batista BG, Barreto IDC. Aleitamento materno e aspectos fonoaudiol??gicos: conhecimento e aceita????o de m??es de uma maternidade. Audiol Commun Res. 2015;20(3):183-90 183.</span>
                    <span>4 - Monguilhott LMT, Frazzon JS, Cherem VB. H??bitos De Suc????o: Como e Quando Tratar Na ??tica Da Ortodontia X Fonoaudiologia. Rev. Dent. Press. Ortodon. Ortopedi Facia, Maring??  2003; 8(1): 95-104.</span>
                    <span>5 - Departamento Cient??fico de Aleitamento Materno. Uso de chupeta em crian??as amamentadas: pr??s e contras. Manual de Orienta????o - Sociedade Brasileira de Pediatria. Agosto de 2017.</span>
                    <span>6 - Crefono 2 Conselho Regional de Fonoaudiologia de S??o Paulo [homepage da internet]. Quais s??o as especialidades. 14 especialidades s??o reconhecidas hoje pelo Conselho Federal de Fonoaudiologia [acesso em 22 nov 2021]. Dispon??vel em: https://www.fonosp.org.br/fonoaudiologia.</span>
                    <span>7 - Nobre, JNP et al. Fatores determinantes no tempo de tela de crian??as na primeira inf??ncia. Ci??ncia & Sa??de Coletiva [online] 2021; 26(3): 1127-36.</span>
                    <span>8 - Beltrami MRF, Souza LAPR. O manh??s e suas implica????es para a constitui????o do sujeito na linguagem. Dist??rb Comun, S??o Paulo, agosto, 2011 23(2): 143-152,</span>
                    <span>9 - Dias HKRD. Afetividade Entre Professor - Aluno No Processo De Aprendizagem Na Educa????o Infantil, Goi??s. Trabalho De Conclus??o De Curso [Departamento De Pedagogia Da Universidade Estadual De Goi??s UEG] Unidade Universit??ria De Jussara-GO; 2021.</span>
                    <span>10 - AMERICAN PSYCHIATRIC ASSOCIATION. DSM - 5 ??? Manual Diagn??stico e Estat??stico de Transtornos Mentais. Porto Alegre: Artmed, 2014.</span>
                </div>
            </center>
        </div>
    );
}