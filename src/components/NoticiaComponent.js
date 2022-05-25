import React,{useEffect, useState} from 'react';

export const NoticiaComponent = (props) => {

    const {title} = props;
    const [numberId,setNumberId] = useState(0);
    //const [flag,setFlag] = useState(true);
    /*const [values,setValues] = useState({
      flag:true,
      numberId:0
    });*/

    const incrementValue = () => {
      setNumberId(numberId + 1);
    };

    const decrementValue = () => {
      setNumberId(numberId - 1);
    };

    

    return (
        <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{title} - {numberId}</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <button onClick={incrementValue}>This is a link</button>
              <button onClick={decrementValue}>This is a link</button>
            </div>
          </div>
        </div>
      </div>
    );
};