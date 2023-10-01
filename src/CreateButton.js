import './CreateButton.css'

function CreateButton() {
    return (
        <div className="custom-button-container">
            <button className='custom-button'
                onClick={(event)=>{
                    console.log(`precionaste muy fuerte el boton`);
                    console.log(event)
                    console.log(event.target)
                    
                }}
            >Crear</button>
        </div >
    )
}

export { CreateButton }