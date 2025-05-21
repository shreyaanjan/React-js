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
            <h2 className="text-center my-5">Github Users Profile</h2>
            <div className="container mx-auto">
                <input type="text" className="border border-indigo-800" onChange={(e)=>{
                    setUserName(e.target.value);
                }}/>
                <button type="button" className="bg-indigo-400 py-1 px-4 text-white rounded mx-3" onClick={()=>{
                    setQuery(userName);
                }}>Click</button>
            </div>

            <div>
                <h2>{userData.name}</h2>
                <img src={userData.avatar_url} alt="" width={100} />
            </div>
        </div>
    )
}

export default Users