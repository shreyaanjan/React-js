import { useEffect, useState } from "react"

const Users = () => {
    const [userName, setUserName] = useState("");
    const [query, setQuery] = useState("");
    const [userData, setUserData] = useState("");

    useEffect(()=>{
        if(!query) return;

        const getUser = async ()=>{
            const res = await fetch(`https://api.github.com/users/${query}`);
            const data = await res.json();
            setUserData(data);
            console.log(data);
        }
        getUser();

    },[query])

    return (
        <div>
            <h2 className="text-center text-white text-2xl font-mono my-5">Github User Search</h2>
            <div className="container mx-auto flex justify-center items-center">
                <input type="text" className=" text-white w-1/2 py-2 bg-[#1f2a48] rounded-lg" placeholder="Search Github Username.." onChange={(e)=>{
                    setUserName(e.target.value);
                }}/>
                <button type="button" className="bg-blue-600 py-2.5 px-5 text-white rounded mx-3" onClick={()=>{
                    setQuery(userName);
                }}>Search</button>
            </div>  

            <div>
                <h2>{userData.name}</h2>
                <img src={userData.avatar_url} alt="" width={100} />
            </div>
        </div>
    )
}

export default Users