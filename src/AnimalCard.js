import cow from './Assets/svg/cow.svg'
import bird from './Assets/svg/bird.svg'
import cat from './Assets/svg/cat.svg'
import dog from './Assets/svg/dog.svg'
import horse from './Assets/svg/horse.svg'
import gator from './Assets/svg/gator.svg'
import heart from './Assets/svg/heart.svg'

const svgMap = {
  bird,
  cow,
  cat,
  dog,
  horse,
  gator  
};

function AnimalCard({type,index}){
    return (
        <div>
            <div className="column">
             <img alt="animal" src={svgMap[type]}/>        
            </div>
        </div>
    );
}
export default AnimalCard;