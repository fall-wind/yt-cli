import * as React from 'react'

import './index.styl'
interface IProps {

}

const Name: IProps = (props) => {
    return (
        <div className="Name-wrapper">{props.children}</div>
    )
}

export default Name
