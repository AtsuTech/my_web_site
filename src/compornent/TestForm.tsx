import { useState,FC } from "react";



export const TestForm :FC =()=> {

    interface Value {
        num: number;
        title: string;
        sentence: string;
    }


    const[value,setValue] = useState<Value>({
        num: 0,
        title: "",
        sentence: "",
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValue({...value,[e.target.name]: e.target.value });
        //console.log(value);
    }

    const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setValue({...value,[e.target.name]: e.target.value });
        console.log(value);
    }

    const formSubmit = (e:any) =>{
        e.preventDefault();
        alert(value.num + '\n' + value.title + '\n' + value.sentence);

    }

    return(
        <form className="w-96 ml-auto mr-auto mt-10 p-5 border border-slate-400 rounded-lg" onSubmit={formSubmit}>
            <h1 className="text-4xl text-blue-600">Typescriptのフォーム</h1>

            <div>No:</div>
            <input 
                type="number" 
                name="num" 
                className="block w-full border border-slate-400 rounded-lg"
                onChange={handleInput} 
            />

            <div>タイトル</div>
            <input 
                type="text" 
                name="title" 
                className="block w-full border border-slate-400 rounded-lg"
                onChange={handleInput} 
            />

            <div>本文</div>
            <textarea 
                name="sentence" 
                className="block w-full border border-slate-400 rounded-lg"
                onChange={handleTextArea} 
            ></textarea>

            <button 
                type="submit" 
                className="block mt-10 bg-gray-800 w-full h-10 text-white ml-auto mr-auto rounded-lg shadow-lg font-medium text-1xl"
            >
                送信
            </button>

        </form>
    );
}

