import * as React from 'react'

import './index.${cssName}'
interface IProps {

}

const ${Component}: IProps = (props) => {
    return (
        <div className="${Component}-wrapper">{props.children}</div>
    )
}

export default ${Component}
