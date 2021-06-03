import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + e.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Ihor</textarea>
            <input onChange={onAgeChanged} type={'number'}/>
            <button name='search' onClick={search}>search</button>
        </div>
    )
}