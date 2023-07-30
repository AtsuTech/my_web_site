// 型のインポート
import { FC,useState } from "react"
import { Link } from 'react-router-dom';
import { Menu } from "./parts/Menu";

// 実際の使用例
export const NavBar: FC = () => {

    const[toggle,setToggle] = useState<boolean>(false);
    
    const clickToggle = () =>{
        setToggle(true);
    }


    return (
        <div className="w-full static">
            <header className="flex w-full pr-2">
                <h1 className="w-full pl-2 text-4xl shadow-lg">Atsu_Tech</h1>
                <Menu />
            </header>
        </div>
    )

}