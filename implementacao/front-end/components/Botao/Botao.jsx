import "./Botao.css"
const Botao = (props) => (
    <>
        <div className="card" style={{width: "180px"}}>
            <img src={props.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center">
                    <button>{props.texto}</button>
                </div>
        </div>
    </>
);

export default Botao;