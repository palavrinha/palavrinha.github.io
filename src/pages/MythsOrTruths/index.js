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
            question: 'Pé grande existe existe existe existe existe existe existe existe?',
            answer: 'O Pé-grande (em inglês: Bigfoot; ou Sasquatch, termo derivado do halkomelem, idioma do grupo linguístico salishe, do sudoeste da Columbia Britânica) é descrito como um grande símio que vive nas regiões selvagens e remotas dos Estados Unidos e Canadá. Alega-se que seja um animal aparentado com o Iéti tibetano (o "Abominável Homem das Neves").[1][2][3][4][5][6]Em 2007, foi organizada uma expedição em busca de provas ou até mesmo do próprio Pé-grande.[7] Mas nada foi encontrado.Em 15 de agosto de 2008, dois caçadores norte-americanos foram à mídia dizendo ter em suas mãos o corpo congelado do famoso Bigfoot. Porém, após a análise do "corpo", foi descoberto que o suposto cadáver do monstro não passava de uma fantasia de macaco congelada. Em defesa, os dois caçadores disseram ter sido enganados e comprado o corpo de dois outros caçadores por um preço "inacreditavelmente baixo", mas decidiram levar a farsa adiante.[8][9]',
            isMyth: true
        },
        {
            id: 2,
            question: 'Ursos existem?',
            answer: 'Os Ursos (latim científico: Ursidae) constituem uma família de mamíferos plantígrados, da ordem Carnivora, geralmente de grande porte, contendo os ursos e os pandas. Embora classificado como urso, e logo após, como procionídeo, junto com o panda-vermelho (atualmente classificado em sua própria família, Ailuridae), o panda-gigante foi recolocado dentro da família dos ursídeos devido às novas pesquisas genéticas. Algumas características comuns dos ursos são pelagem espessa, rabo curto, o olfato desenvolvido e as garras não retráteis. Os ursídeos são geralmente animais omnívoros, mas se alimentam principalmente de carne.',
            isMyth: false
        },
    ]
    return (
        <div className="myth-or-truth">
            <h1 className="text-title">Mitos e Verdades</h1>
            {questions.map(question => <MythOrTruthButton key={question.id} {...question} />)}
        </div>
    );
}