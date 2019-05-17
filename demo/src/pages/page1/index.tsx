import * as React from 'react'

import './index.styl'
interface IProps {
    attr1: string;
}

const Page1: React.FC<IProps> = (props) => {
    return (
        <div className="Page1-wrapper">l am page111</div>
    )
}

export default Page1
