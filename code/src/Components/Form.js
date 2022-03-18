import React, {useState} from 'react'
import Summary from './Summary'
import FirstQuestion from './FirstQ'
import SecondQuestion from './SecondQ'
import ThirdAndFourthQuestion from './ThirdFourthQ'

const Form = () => {
    const [name, setName] = useState('')
    const [amountOfBands, setAmountOfBands] = useState(false)
    const [bands, setBands] = useState('Korn')
    const [shirtColor, setColor] = useState([])
    
    //State property to go to next question or back
    const [section, setSection] = useState(0)

    const nextSection = () => {setSection(section + 1)}
    const backSection = () => {setSection(section - 1)}
    const restart = () => {setSection(0)}


    // Arrays of objects in radio buttons and dropdown
    const arrayOfBandNumbers = ["0-1", "2-4", "5 or more"]          
    const bandOptions = ['Korn', 'Greta van Fleet', 'Red Hot Chili Peppers', 'Foo Fighters', 'Rammstein', ]

    const handleSubmit = (event) => {event.preventDefault()}


    //Removing or adding a color in the array from checked checkboxes
    const onCheckboxChange = (color) => {
        if (shirtColor.includes(color)) {
            const filteredShirtColor = shirtColor.filter(item => {
                return item !== color                     //If color is included it will remove it if clicked again
            })
            setColor(filteredShirtColor)
        } else {
            setColor([...shirtColor, color])
        }
    }

return (
        <section>

        <form onSubmit={handleSubmit}>
            {section === 0 && (
            <FirstQuestion 
            name={name} 
            setName={setName}
            nextSection={nextSection}
            
            />)}
            
            {section === 1 && (
            <SecondQuestion 
            setAmountOfBands={setAmountOfBands} 
            arrayOfBandNumbers={arrayOfBandNumbers}
            nextSection={nextSection}
            backSection={backSection}
            />)}
            
            {section === 2 && (
            <ThirdAndFourthQuestion 
            bandOptions={bandOptions} 
            setBands={setBands}
            shirtColor={shirtColor}
            setColor={setColor}
            onCheckboxChange={onCheckboxChange}
            nextSection={nextSection}
            backSection={backSection}
            />
            )}

        </form>   


            {section === 3 && (
            <Summary name = {name} 
            amountOfBands = {amountOfBands}
            bands = {bands}
            shirtColor={shirtColor}
            restart = {restart}
            />
            
            )}  
            
        </section>
    )
}

export default Form