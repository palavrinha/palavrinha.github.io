import './index.css';
import Header from '../../components/Header';

export default function NotFound() {

    return (
        <section>
            <Header />
            <div className="not-found">
                <h1 style={{textAlign:'center'}} className="not-found-message"> Ops... 🤔</h1>
                <h1 style={{textAlign:'center'}} className="not-found-message">❌ Página não encontrada ❌</h1><br/><br/>
            </div>
        </section>
    )
}