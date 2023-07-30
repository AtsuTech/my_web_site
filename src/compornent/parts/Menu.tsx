import { Menu_list } from "./Menu_list";
import { FC,useState } from "react"

//メニューバー
const Var: FC = () =>{
    return(
        <span className="block w-full mt-2 h-0.5 bg-slate-800"></span>
    );
}


// ハンバーガーメニュー
export const Menu: FC = (props:any) => {

    const[toggle,setToggle] = useState<Boolean>(false);

    return (
        <div className="w-8" onClick={() => setToggle(true)}>
        
            <Var />
            <Var />
            <Var />
            <div className="text-xs text-center">Menu</div>

            {toggle ? <Menu_list />:<div></div>}
        </div>
    )

}