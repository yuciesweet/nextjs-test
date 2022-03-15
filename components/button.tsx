import Router from 'next/router'
import { ReactNode } from 'react'

type Props={
    href: string
    title: string
}

export default function Button(props:Props){
    return(
        <button onClick={() => Router.push(props.href) } className="ui right labeled icon button">
         <i className="right arrow icon" />
            {props.title}
        </button>
    )
}