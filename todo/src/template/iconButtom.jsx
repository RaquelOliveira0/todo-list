import React from 'react'
import If from './if'

export default props => (
<If teste={!props.hide}>
        <button className={"btn btn-"+ props.styles}
         onClick={props.onClick}>
         <i className={"fa fa-"+props.icon}></i>
         </button>
    </If>
)

