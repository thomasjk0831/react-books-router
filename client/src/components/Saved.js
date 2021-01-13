import React from 'react'

function Saved(props) {
    return (
        <div>
            saved books:
            {
                props.saved.map(s => {
                    return <div>
                        <div>{s.title}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Saved
