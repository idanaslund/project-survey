import React from 'react'

const FourthQuestion = ({musicType, onCheckboxChange, nextSection, backSection}) => {

return (

    <article>
        <div className="text-group">
            <h2>What type of music do you generally listen to?</h2>

                <div className="checkbox-options">
                    <label htmlFor="thegoodkind" 
                    key="thegoodkind"
                    id="thegoodkind" >
                        <input className="checkboxes"
                        type="checkbox" 
                        name="thegoodkind" 
                        checked={musicType.includes('the good kind')}
                        onChange={() =>onCheckboxChange('the good kind')}/>
                   The good kind</label>
                </div>

                <div className="checkbox-options">
                    <label htmlFor="pop" 
                    key="pop"
                    id="pop">
                        <input className="checkboxes"
                        type="checkbox" 
                        name="pop"
                        checked={musicType.includes('pop')}
                        onChange={() => onCheckboxChange('pop')}/>
                    Pop</label>
                </div>

                <div className="checkbox-options">
                    <label htmlFor="electronic" 
                    key="electronic"
                    id="electronic">
                        <input className="checkboxes"
                        type="checkbox" 
                        name="electronic"
                        checked={musicType.includes('electronic')}
                        onChange={() => onCheckboxChange('electronic')}/>
                    Electronic</label>
                </div>
            </div>

                <div className="btn-group">
                    <button className="next-btn"
                    onClick= {nextSection}>
                    Submit answers
                    </button>

                    <button className="back-btn"
                    onClick= {backSection}
                    >
                    Go back</button>
                </div>
    </article>
)}

export default FourthQuestion