import {FC, useState } from "react"



export const Form :FC = () =>{

    const [title,setTitle] = useState<string>("");

    const handleinput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        
        setTitle(e.target.value);
        console.log(title);
    }

    return(
        <>
        <form action="">
            <input 
            type="text" 
            name="title" 
            className="w-96 border border-slate-400 rounded-lg"
            onChange={handleinput}/>
        </form>
        </>
    );

}




