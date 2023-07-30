import type { FC } from "react"
import { Link } from 'react-router-dom';


interface Props {
    to: string;
    list: string;
}

const Li: FC<Props> = (props) =>{
    return(
        <li className="block w-full text-center p-10">
            <Link to={props.to}>{props.list}</Link>
        </li>
    );
}

export const Menu_list: FC = () =>{ 
    return(
        <ul className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-800 h-80 text-white">
            <Li to="/" list="home" />
            <Li to="/profile" list="Profile" />
        </ul>
    );

}

