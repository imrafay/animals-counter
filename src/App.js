import '../node_modules/bulma/css/bulma.css';
import { useState } from 'react';
import AnimalCard from './AnimalCard';

function getRandomAnimal(){
    const animals = ['cow','dog','cat','horse','gator','bird'];
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
}

function App()
{
    const [animals, setanimals] = useState([])

    const addAnimalClick = () => {
        setanimals([...animals,getRandomAnimal()]);
    };

    const animalList = animals.map((animal,index)=>{
       return <AnimalCard type={animal} key={index}/>
    });

    return (<div>
        <section className="section">
            <div className="columns">
            <button onClick={addAnimalClick} className='button' onClic>Add Animal</button>     
            </div>
            </section>
         <section className="section">
            <div className="columns">
                
                    {animalList}
                </div>
            </section>
    </div>);
}

export default App