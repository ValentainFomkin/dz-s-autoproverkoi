import React from 'react'
import s from './Message.module.css'
import {Message0Type} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: Message0Type

}


// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <img
                id={'hw1-avatar-' + props.message.id}
                // создаёт студент
                src={props.message.user.avatar}
                className={s.avatar}
                //
            />

            <div className={s.angle}/>

            <div className={s.content}>
                <div id={'hw1-name-' + props.message.id} className={s.name}>
                    {/*создаёт студент*/}
                    {props.message.user.name}
                    {/**/}
                </div>
                <pre id={'hw1-text-' + props.message.id} className={s.text}>
                        {/*создаёт студент*/}
                    {props.message.message.text}
                    {/**/}
                    </pre>
                <div id={'hw1-time-' + props.message.id} className={s.time}>
                    {/*создаёт студент*/}
                    {props.message.message.time}
                    {/**/}
                </div>
            </div>
        </div>
    )
}

export default Message
