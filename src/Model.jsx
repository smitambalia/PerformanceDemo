
export default function Model({setIsOpenMode}) {
    
    return (
        <div className="model">
            <h2>
                Model
            </h2>
            <p>
                This is a model
            </p>
            <button onClick={() => setIsOpenMode(false)}>
                close
            </button>
        </div>
    )
}