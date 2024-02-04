import React,{useState, useEffect} from "react";


function Counter(){
    const [time, setTime] = useState(new Date())
    
    useState(()=>{
       const intervalFuntion = setInterval(() =>{
            setTime(new Date())
       }, 1000);

       return () => clearInterval(intervalFuntion)

    }, [])

    function formatTime(){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${hours} : ${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (<>
        <div className="clock-container">
            <span className="clock" > {formatTime()} </span>
        </div>
    </>);
}

export default Counter;