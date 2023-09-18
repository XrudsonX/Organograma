import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (e)=>{
        props.aoAlterado(e.target.value);
    }
    return(
        <div className='CampoTexto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;