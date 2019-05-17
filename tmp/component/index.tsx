import * as React from 'react'

import './index.${cssName}'
interface IProps {
    attr1: string;
}

const ${Component}: React.FC<IProps> = (props) => {
    return (
        <div className="${Component}-wrapper">{props.children}</div>
    )
}

export default ${Component}
