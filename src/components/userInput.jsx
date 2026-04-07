import React from 'react'


const UserInput = ({val,setVal}) => {
    function handleChange(e){
        setVal(e.target.value)
    }
    return (
        <div>
            <input value={val} id="i1" type="text" onChange={handleChange} />
        </div>
    )
}

export default UserInput