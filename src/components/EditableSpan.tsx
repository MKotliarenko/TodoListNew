import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType ={
    title:string
    callBack:(title:string)=>void
}

export const EditableSpan = (props:EditableSpanPropsType) => {
    const [edit, setEdit]=useState(false)
    let [newTitle,setNewTitle] = useState(props.title)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onDoubleClickHandler =()=>{
        setEdit(true)
    }
    const onBluerHandler =() =>{
        props.callBack(newTitle)
        setEdit(false)
    }

    return (
        edit
            ?<input value={newTitle} autoFocus={true} onBlur={onBluerHandler} onChange = {onChangeHandler}
            />
            :<span onDoubleClick={onDoubleClickHandler}>{props.title}</span>

    );
};

export default EditableSpan;