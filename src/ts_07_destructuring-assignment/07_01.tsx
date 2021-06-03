import React from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string; name?: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model:string}
}

export const ManComponent: React.FC<PropsType> = (props) => {
    //const {title, man: {name}, ...restProps} = props //второй вариант
    //const{car: {model}} = restProps
    const {title} = props
    const {name} = props.man
    const {model} = props.car

    return (
        <div>
            <h1>
                {title}
            </h1>
            <hr/>
            <div>
                {name}
            </div>
            <hr/>
            <div>
                {model}
            </div>
        </div>
    )
}

/*
export const ManComponent: React.FC<PropsType> = ( {title, man: {name}, ...props} ) => { // вариант вложить деструкт сразы в параметры,
                                                                                 //но при этом надо вызывать рест рператор,
                                                                                 //иначе остальные свойства не будут доступны внутри обьекта
    return (
        <div>
            <h1>
                {title}
            </h1>
            <hr/>
            <div>
                {name}
            </div>
            <hr/>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}*/
