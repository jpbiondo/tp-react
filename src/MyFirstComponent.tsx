import { FC } from "react";

interface IPropsMyFirstComponent {
    text:string,
    color: string,
    fontSize: number,
}

export const MyFirstComponent:FC<IPropsMyFirstComponent> = ({text, color, fontSize}) => {
    return (
        <div style={{ color: `${color}`, fontSize: `${fontSize}rem` }}> <p>{text}</p></div>
    );
}