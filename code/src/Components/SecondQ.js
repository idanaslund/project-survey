import React from 'react'

const SecondQuestion = ({ setAmountOfBands, arrayOfBandNumbers, nextSection, backSection }) => {
    
    return (
        <article>
            
                <div className="text-group">
                    <h2>How many different bands do you listen to in one week?</h2>

                    {arrayOfBandNumbers.map(amountOfBands => (
                        <div className="radio-options">
                        <label key={amountOfBands} className="radio-label">
                            <input className="radios"
                                type="radio" 
                                name="age" 
                                onChange={event =>setAmountOfBands(event.target.value)} 
                                defaultChecked={arrayOfBandNumbers === amountOfBands} 
                                value={amountOfBands}
                            />
                            {amountOfBands}
                        </label>
                        </div>
                        ))}
                    </div>

                    <div className="btn-group">
                        <button className="next-btn"
                        onClick= {nextSection}
                        >
                        Next question</button>

                        <button className="back-btn" 
                        onClick= {backSection}
                        >
                        Go back</button>
                    </div>
            </article>
        
    )

}

export default SecondQuestion