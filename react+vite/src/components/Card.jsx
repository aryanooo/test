import  styles from '../components/feature.module.css';        
import React from 'react';  

function Card(props){
    return(
        <div className={styles.main}>
        <div className={styles.feature}>
            <h1>{props.title}</h1>
            <p>{props.surname}</p>
        </div>
        </div>
    );
}

export default Card;



//  import React from 'react';