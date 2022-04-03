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
                                        É {props.isMyth ? 'mito' : 'verdade'}!
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
            question: 'A comunicação da criança ocorre somente pela fala!',
            answer:
                <span>
                    A Comunicação não é sinônimo de fala, diferente do que muitos pensam, a criança não começa a se comunicar somente quando inicia a falar.
                    Sua comunicação ocorre muito antes disso! Inicialmente, ela se comunica através do choro, sorrisos, gargalhadas, gestos, apontamentos,
                    balbucio, expressões faciais e corporais e da experimentação de sons. Para só depois começar de fato a falar<sup>1</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 2,
            question: 'A amamentação contribui de forma positiva para o desenvolvimento da linguagem.',
            answer:
                <span>
                    A amamentação é importante para o  desenvolvimento da fala e linguagem.
                    Os músculos que a criança usa no momento da amamentação são os mesmos que serão usados para ela falar, assim, a
                    amamentação age como uma forma de estimulação natural dessas estruturas.
                    É através dela que há o desenvolvimento e crescimento harmonioso e funcional dos aspectos do crânio e da face.
                    Além das questões estruturais, no momento da amamentação, acontecem trocas entre a mãe e o bebê, estabelecimento de contato visual,
                    o que favorece o desenvolvimento da linguagem e a construção de vínculo e afeto<sup>2, 3</sup>.
                </span>,
            isMyth: false
        },
        {
            id: 3,
            question: 'O hábito de chupar dedo e/ou chupeta não causa prejuízos para as criança.',
            answer:
                <span>
                    As chupetas podem parecer inofensivas e até "fofas'', mas na realidade o seu uso pode trazer uma série
                    de malefícios. Alguns bebês que fazem o uso dela tem  tendência a mamar menos tempo no peito. Além de
                    prejudicar a amamentação, por conta desse hábito modificar a musculatura do rosto e boca, a mastigação,
                    fala, respiração e deglutição e o posicionamento dentário também podem ser prejudicados.
                    Ainda, o uso de chupetas na infância são indicadores de risco para vícios orais na fase adulta,
                    como comer excessivamente e fumar<sup>4, 5</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 4,
            question: 'É preciso esperar até os 5 anos para levar a criança ao fonoaudiólogo.',
            answer:
                <span>
                    De forma alguma! Não existe idade mínima para procurar por  um fonoaudiólogo.
                    O ideal é que os pais/cuidadores se mantenham atentos aos marcos do desenvolvimento infantil,
                    a sinais de dificuldades na fala, mastigação, aprendizagem (leitura e escrita),
                    interação social e na ocorrência de engasgos frequentes. Ao observarem alguma dessas alterações,
                    não importa a idade, deve ser procurado um fonoaudiólogo, quanto antes começar a intervenção
                    fonoaudiológica melhor!
                </span>,
            isMyth: true
        },
        {
            id: 5,
            question: 'A Fonoaudiologia só cuida da fala e da linguagem das crianças.',
            answer:
                <span>
                    A fonoaudiologia é uma profissão da área da saúde, responsável pela promoção da saúde,
                    prevenção, avaliação e diagnóstico, orientação, habilitação e reabilitação em todas as
                    fases da vida. Atualmente possui 14 áreas de atuação sendo elas: Audiologia, Linguagem,
                    Motricidade Orofacial, Saúde Coletiva, Voz, Disfagia, Fonoaudiologia Educacional, Gerontologia,
                    Fonoaudiologia Neurofuncional, Fonoaudiologia do Trabalho, Neuropsicologia, Fluência, Perícia
                    Fonoaudiológica e Fonoaudiologia Hospitalar<sup>6</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 6,
            question: 'O uso de telas, como celulares smartphones, tablets e televisões não prejudica a aprendizagem e o desenvolvimento da criança.',
            answer:
                <span>
                    As interações são fundamentais para o desenvolvimento da criança, portanto o tempo de exposição passiva de
                    crianças às telas, como a televisão, tem como possível consequência o atraso da linguagem e a dificuldade de
                    interação social. Assim, é importante seguir as recomendações da Sociedade Brasileira de Pediatria a respeito do
                    tempo adequado de exposição a telas, optar nos momentos de uso por atividades que promovam maior envolvimento da
                    criança e a presença de um adulto<sup>7</sup>.
                    Para saber mais visite o abaixo e leia o manual de orientação #MENOS TELAS #MAIS SAÚDE.
                    <br />
                    <br />
                    <a target="_blank" rel="noreferrer" href="https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ ">
                        <u>🡥 https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ </u>
                    </a>
                </span>,
            isMyth: true
        },
        {
            id: 7,
            question: 'Até dois anos não é recomendado o uso de telas por crianças.',
            answer:
                <span>
                    Nesse período da vida dos pequenos não é recomendado o contato com telas, seja de forma passiva ou ativa,
                    isto é, assistindo a vídeos no celular ou televisão ou interagindo em tablets e smartphones em jogos.
                    Essa é uma recomendação da sociedade brasileira de pediatria,
                    para saber mais visite o abaixo e leia o manual de orientação #MENOS TELAS #MAIS SAÚDE.
                    <br />
                    <br />
                    <a target="_blank" rel="noreferrer" href="https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ ">
                        <u>🡥 https://www.sbp.com.br/imprensa/detalhe/nid/menos-telas-mais-saude/ </u>
                    </a>
                </span>,
            isMyth: false
        },
        {
            id: 8,
            question: 'Algumas crianças não falam ou demoram a ler por preguiça.',
            answer:
                <span>
                    Existem muitos motivos para o atraso na fala, na leitura e escrita, mas nenhum deles é a preguiça!
                    A demora ou alterações na fala, leitura ou escrita podem ser justificadas por questões como
                    dificuldades nas habilidades cognitivas e/ou no processamento relacionado à linguagem, também
                    podem estar associadas a questões emocionais, familiares, psicopedagógicas e de estimulação e
                    na maioria das vezes a causa é um conjunto de todos esses fatores<sup>1</sup>.
                </span>,
            isMyth: true
        },
        {
            id: 9,
            question: 'A forma como adultos, mãe, pai ou cuidadores, falam com o bebê influência no desenvolvimento da linguagem.',
            answer:
                <span>
                    O que os pais falam e como os pais falam influenciam no desenvolvimento da comunicação da criança.
                    As interações observadas entre mãe/pai/cuidadores e os bebês possuem normalmente estrutura mais
                    simples, são repetitivas, com pausas mais longas e articulação dos sons mais exagerados.
                    Sendo assim, é uma fala simplificada e com um ritmo e entonação diferente da usual que pode
                    facilitar o desenvolvimento da linguagem. Portanto, recomenda-se que essa forma diferente de
                    falar seja usada com bebês e crianças mais novas até cerca de um ano e meio e dois
                    anos de idade<sup>8</sup>.
                </span>,
            isMyth: false
        },
        {
            id: 10,
            question: 'O afeto é fundamental para a aprendizagem.',
            answer:
                <span>
                    A afetividade está relacionada com os sentimentos de amor e afeição, através dessas emoções,
                    os bebês interagem com o mundo a sua volta, sendo portanto, indissociável e fundamental para o
                    desenvolvimento da cognição humana. Além disso, a afetividade no processo de aprendizagem permite
                    maior retenção de informações e motivação para se engajar no processo. Assim sendo, o afeto é uma
                    necessidade do ser humano, e também é impulsionador da inteligência humana! Aprender o que se gosta é
                    muito mais prazeroso<sup>9</sup>!
                </span>,
            isMyth: false
        },
        {
            id: 11,
            question: 'Devemos ser bem mais permissivos com a criança, visto as limitações que as crianças tiveram em momentos difíceis  para ela, como a pandemia.',
            answer:
                <span>
                    Sabemos que a vontade é de recompensar os pequenos por toda adversidade que eles passam,
                    mas isso não é saudável para eles! Não devemos educar nossos filhos sem que tenham limites,
                    já que a inserção de limites é  fundamental para que eles entendam sua posição e que possam
                    viver harmonicamente em sociedade. Impor limites é também um ato de amor!
                </span>,
            isMyth: true
        },
        {
            id: 12,
            question: 'Crianças que têm transtornos da comunicação como transtorno de linguagem e o Transtorno Fonológico são menos inteligentes quando comparadas a crianças com o desenvolvimento típico de linguagem.',
            answer:
                <span>
                    Transtornos de linguagem não estão associados à inteligência da criança! Se engana quem pensa que elas
                    são menos inteligentes do que aquelas que têm o desenvolvimento de linguagem dentro do esperado.
                    Na verdade, para o diagnóstico desses transtornos um dos critérios é ter o
                    QI (quoeficiente de inteligência) dentro da normalidade<sup>10</sup>.
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
                    <span>REFERÊNCIAS</span>
                    <span>1 - Prates, LPCS; Martins, VO. Distúrbios da fala e da linguagem na infância. Revista Médica de Minas Gerais 2011; 21(4 Supl 1): S54-S60.Nobre JNP et al. Fatores determinantes no tempo de tela de crianças na primeira infância. Ciência & Saúde Coletiva 2021; 26(3):1127-36.</span>
                    <span>2 - Casagrande L et al. Aleitamento natural e artificial e odesenvolvimento do sistema estomatogmático. Rev. Fac. Odontol. Porto Alegre, Porto Alegre 2008; 49(2):11-7.</span>
                    <span>3 - Medeiros AMC, Batista BG, Barreto IDC. Aleitamento materno e aspectos fonoaudiológicos: conhecimento e aceitação de mães de uma maternidade. Audiol Commun Res. 2015;20(3):183-90 183.</span>
                    <span>4 - Monguilhott LMT, Frazzon JS, Cherem VB. Hábitos De Sucção: Como e Quando Tratar Na Ótica Da Ortodontia X Fonoaudiologia. Rev. Dent. Press. Ortodon. Ortopedi Facia, Maringá  2003; 8(1): 95-104.</span>
                    <span>5 - Departamento Científico de Aleitamento Materno. Uso de chupeta em crianças amamentadas: prós e contras. Manual de Orientação - Sociedade Brasileira de Pediatria. Agosto de 2017.</span>
                    <span>6 - Crefono 2 Conselho Regional de Fonoaudiologia de São Paulo [homepage da internet]. Quais são as especialidades. 14 especialidades são reconhecidas hoje pelo Conselho Federal de Fonoaudiologia [acesso em 22 nov 2021]. Disponível em: https://www.fonosp.org.br/fonoaudiologia.</span>
                    <span>7 - Nobre, JNP et al. Fatores determinantes no tempo de tela de crianças na primeira infância. Ciência & Saúde Coletiva [online] 2021; 26(3): 1127-36.</span>
                    <span>8 - Beltrami MRF, Souza LAPR. O manhês e suas implicações para a constituição do sujeito na linguagem. Distúrb Comun, São Paulo, agosto, 2011 23(2): 143-152,</span>
                    <span>9 - Dias HKRD. Afetividade Entre Professor - Aluno No Processo De Aprendizagem Na Educação Infantil, Goiás. Trabalho De Conclusão De Curso [Departamento De Pedagogia Da Universidade Estadual De Goiás UEG] Unidade Universitária De Jussara-GO; 2021.</span>
                    <span>10 - AMERICAN PSYCHIATRIC ASSOCIATION. DSM - 5 – Manual Diagnóstico e Estatístico de Transtornos Mentais. Porto Alegre: Artmed, 2014.</span>
                </div>
            </center>
        </div>
    );
}