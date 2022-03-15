import Router from 'next/router'

export default function Button(props){

    return(
        <button onClick={() => Router.push(props.href) } className="ui right labeled icon button">
         <i className="right arrow icon" />
            {props.title}
        </button>
    )
}