import {  GridColDef } from '@mui/x-data-grid'
import * as React from 'react'
import './add.scss'

type Props ={
    slug:string,
    columns:GridColDef[],
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
}


const Add = (props:Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        // ad new item
        //axios.post(`/api/${slug}s/{}`)
    }
  return (
    <div className='add'>
        <div className="modal">
            <div className="close" onClick={()=>props.setOpen(false)}>X</div>
             <h2>Add new {props.slug}</h2>
            <form onSubmit={handleSubmit} >
                {props.columns
                .filter((item)=> item.field !== "id" && item.field !== "img")
                .map((column)=> (
                    <div className="item">
                        <label> {column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add