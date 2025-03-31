import React, { PropsWithChildren, ReactChild, ReactChildren } from "react";
import styles from "./card.module.css";


interface CardProp{
    children: ReactChild | ReactChildren
}
const Card = ({children} : CardProp) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
};

export default Card;