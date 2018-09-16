import React from 'react';
// You need to import react bcz the code will compile to the form react.createElement


const DoneStuff = (props) => {
    
        if(props.AllDone.length)
            return (props.AllDone.map((task,index) =>(<li>{task.name} <br/>{task.description}<input type="checkbox"
         onClick={() => props.utt(index)} checked /></li>))
            )
        else
           return <p>You have not finished anything! Get Your ass to work</p>
}



const NotDoneStuff = (props) => {
    if(props.ToDo && props.ToDo.length)
    return (
        props.ToDo.map((task,index) => (<li>{task.name} <br/>{task.description}<input type="checkbox"
            onClick={() =>props.tickTask(index) }/></li>))
    )
    else{
        return (<p>Nothing To Do! You're free!</p>)
    }
}

const listings = (props) =>{return ( 
    <div className="row">
        <div className="col">{console.log(props.tickTask)}
            <h1 class="d-flex justify-content-center">To-Do</h1>
                <div className="listings">
                    <ul>
                        <NotDoneStuff tickTask={props.tickTask} ToDo = {props.ToDo} />
                    </ul>
                </div>
        </div>
        <div className="col">
            <h1 class="d-flex justify-content-center">All Done!</h1>
                <ul>
                    <DoneStuff utt={props.utt} AllDone = {props.AllDone}/>
                </ul>
        </div>
    </div>
)}

export default listings;