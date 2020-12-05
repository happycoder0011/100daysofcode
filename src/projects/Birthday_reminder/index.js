import React,{useState} from 'react';
import data from './data';
import List from './List';
import './birthday.css'

export default function Birthday() {
    
   const [people,setPeople] = useState(data);
    return (
        <main>
            <section className='container'>
                <h3> Birthdays Today</h3>
                <List people={people}/>
                <button onClick={() => {setPeople([])}}>Clear all</button>
            </section>
        </main>
    )
}
