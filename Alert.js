import React from 'react'

export default function Alert(props) {
    // const Capitalize = (word) => {
    //     const s = word.toLowerCase;
    //     return s.charAt(0).toUpperCase + s.slice(1);
    // }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{(props.alert.type)}</strong>:{props.alert.msg}
            </div>
            
    )
}

