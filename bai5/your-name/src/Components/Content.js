import {useState,useEffect} from "react";

function Content(){
const [avatar,setAvatar] = useState()

    useEffect(() =>{
        //cleanup function
        return () =>{
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
const handleChangeAva = (e) =>{
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file) 
    // console.log(URL.createObjectURL(file))
}
    return(
        <div>
            <input type='file' onChange={handleChangeAva}/>
            {avatar && (<img src={avatar.preview} alt="" width='80' height='100' />)}
        </div>
    )
}

export default Content;