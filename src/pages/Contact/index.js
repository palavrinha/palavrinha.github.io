import React, { useState } from 'react';
import Header from '../../components/Header';
import './index.css';
import { Button, Spinner } from 'react-bootstrap';
import { send } from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

export default function Contact() {
    const [cookies, setCookie] = useCookies(["dolc"]);

    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const canSendEmail = () => {
        if(cookies.dolc === undefined){
            setCookie('dolc', new Date().getTime());
            return true;
        } 
        else {
            const lastContactDate = new Date(Number(cookies.dolc));

            const today = new Date();
            const sevenDaysBack = new Date();
            sevenDaysBack.setDate(today.getDate() - 7);

            if(sevenDaysBack > lastContactDate) return true;
        }
        return false;
    }

    const sendEmail = async (e) => {
        try {
            e.preventDefault();

            setLoading(true);

            const payload = {
                from_name: name,
                from_email: email,
                message
            };

            const params = [
                process.env.REACT_APP_EMAIL_ID_SERVICE,
                process.env.REACT_APP_EMAIL_ID_TEMPLATE,
                payload,
                process.env.REACT_APP_EMAIL_ID_USER,
            ];

            if(canSendEmail()){
                const response = await send(...params);
                if (response.status === 200) {
                    toast.success("Sucesso! Contato enviado.")
                }
                else {
                    throw new Error("Ocorreu um erro, tente novamente mais tarde");
                }
            }
            else {
                toast.info("Você já nos contatou nos últimos 7 dias, espere para nos contatar novamente!");
            }
        }
        catch (err) {
            toast.error(err.message)
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Header />
            <section className="contact">
                <ToastContainer />
                <h1 className="title">Contato</h1>
                <div className="subtitle">
                    <h4>Caso queira saber mais sobre o Palavrinha, tirar dúvidas ou compartilhar conosco alguma informação bacana, envie-nos uma mensagem.</h4>
                </div>
                <form style={{marginTop: 20}} onSubmit={sendEmail}>
                    <div className="input-div d-flex">
                        <div className="input-div">
                            <h5>Seu nome:</h5>
                            <input
                                placeholder="Insira aqui seu nome..."
                                required
                                minLength={3}
                                style={{ width: 250 }}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-div">
                            <h5>Seu e-mail:</h5>
                            <input
                                placeholder="Insira aqui seu endereço de mail..."
                                required
                                type="email"
                                style={{ width: 350 }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-div" style={{ marginTop: 10 }}>
                        <h5>Sua mensagem:</h5>
                        <textarea
                            placeholder="Digite aqui a sua mensagem..."
                            rows={12}
                            required
                            minLength={3}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="primary"
                            className="button"
                            type="submit"
                            disabled={isLoading}
                            style={{marginTop: 20}}
                        >
                            {
                                !isLoading ?
                                    <>
                                        <span style={{visibility: 'hidden'}}><Spinner animation="border" size="sm" /></span>
                                        <span style={{marginRight: 15}}>Enviar</span>
                                    </>
                                    :
                                    <>
                                    <span>
                                        <Spinner animation="border" size="sm" /></span>
                                        <span style={{marginRight: 15}}>Enviar</span>
                                    </>
                            }

                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}