import axios from 'axios';
import '../Styles/List.css';
import Card from './Card'

const List = ({pokelist}) => {

    return (
        <section className='list'>
            {
                pokelist.map(currPokemon => (
                    < Card 
                        name = {currPokemon.name}
                        pokeinfo={currPokemon.url} 
                    />
                ))
            }
        </section>
    )
}


export default List;

