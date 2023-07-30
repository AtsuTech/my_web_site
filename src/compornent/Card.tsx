import type { FC } from "react"

interface Props {
    num: number;
    title: string;
    sentence: string;
}

export const Card: FC<Props> = (props) => (
    <div className="w-96 h-28 border border-slate-400 rounded-lg">
        <h1 className="w-full text-2xl border-b-2 border-slate-400 pl-2">
           {props.num}:{props.title}
        </h1>
        <p>{props.sentence}</p>
    </div>

);