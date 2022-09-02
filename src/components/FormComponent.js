import { useState } from "react"

export const FormComponent = ()=> {

    const [input, setInput] = useState([
        {email: '', }
    ])
    
    const tambahEmail = (e)=>{
        e.preventDefault();
        setInput([...input, {email: ''}])
    }
    const submitForm = (e)=>{
        e.preventDefault()
        input.forEach((el, index)=>{
            let data = [...input]
            if(el.status !== true){
                data[index].submittedStatus = true
                setInput(data)
            }else{
                data[index].submittedStatus = false
                setInput(data)
            }
        })
        console.log(input)
    }
    const handleChange = (e, index)=>{
        let data = [...input]
        data[index][e.target.name] = e.target.value
        if(data[index][e.target.name].length > 5){
            data[index].status = false
        }else if(data[index][e.target.name].length <= 5){
            data[index].status = true
        }
        setInput(data)
    }
    return(
        <>
            <form className={`flex gap-1 flex-col items-center`}>

                {input.map((el, index)=>{
                    return (
                        <>
                        <label>
                        <span className="mr-2">email</span>
                        <input name="email" onChange={(e)=> handleChange(e, index)} className="bg-indigo-500 rounded-md p-1" type="email"></input>
                        <br></br>
                        {el.submittedStatus && <span className="text-red-600">email error</span>}
                        </label>
                        </>
                    )
                })}
                <button className="bg-orange-500" onClick={ (e)=> tambahEmail(e)}> tambah email</button>
                <button onClick={(e)=> submitForm(e)} className="bg-orange-500">submit</button>
            </form>
        </>
    )
}