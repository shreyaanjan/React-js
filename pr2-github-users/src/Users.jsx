import domtoimage from 'dom-to-image';
import { useEffect, useState, useRef } from "react"

const Users = () => {
    const captureRef = useRef(null);

    const defaultUser = "shreyaanjan"
    const [userName, setUserName] = useState(defaultUser);
    const [query, setQuery] = useState(defaultUser);
    const [userData, setUserData] = useState("");

    const handleCaptureClick = () => {

        if (captureRef.current) {
            domtoimage.toPng(captureRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'dom-image.png';
                    link.click();
                })
                .catch((error) => {
                    console.error('Error capturing image:', error);
                })
        }
    }


    useEffect(() => {
        if (!query) return;

        const getUser = async () => {
            const res = await fetch(`https://api.github.com/users/${query}`);
            const data = await res.json();
            setUserData(data);
            console.log(data);
        }
        getUser();

    }, [query])

    return (
        <div>
            <h2 className="text-center text-white text-2xl my-5">Github User Search</h2>
            <div className="container mx-auto flex justify-center items-center">
                <div className="relative w-2/5">
                    <input type="text" className="text-white w-full py-3 pr-24 pl-4 bg-[#1f2a48] rounded-lg focus:outline-none" placeholder="Search Github Username.." onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    />
                    <button type="button" className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 py-1 px-4 text-white rounded-lg" onClick={() => {
                        setQuery(userName);
                    }}>Search</button>
                </div>
            </div>
            <div className="container mx-auto flex justify-center items-center pt-6">
                <div className="bg-[#1f2a48] w-[610px] p-6 rounded-lg" ref={captureRef}>
                    <div className="flex justify-between">
                        <div className="flex gap-6">
                            <img src={userData.avatar_url} alt="avatar" className="border rounded-full w-20 h-20" />
                            <div>
                                <h2 className="text-white text-[22px]">{userData.name}</h2>
                                <p className="text-blue-400">{userData.login}</p>
                                <p className="pt-5 text-gray-300">{userData.bio || "This user has no Bio."}</p>
                            </div>
                        </div>
                        <p className='text-gray-300'>Joined {new Date(userData.created_at).toDateString()}</p>
                    </div>
                    <div className="bg-[#141c2f] rounded-lg p-3 mt-6 flex justify-around text-center">
                        <div>
                            <p className="text-gray-400 text-sm">Repos</p>
                            <p className="text-xl text-white font-bold">{userData.public_repos}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm font-mono">Followers</p>
                            <p className="text-xl text-white font-bold">{userData.followers}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Following</p>
                            <p className="text-xl text-white font-bold">{userData.following}</p>
                        </div>
                    </div>
                    <div className="flex justify-around mt-6 text-gray-300">
                        <p className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>{userData.location || "Not Available"}
                        </p>
                        <p className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                            </svg>{userData.twitter_username || "Not Available"}
                        </p>
                    </div>

                </div>

            </div>
            <div className="text-center mt-6">
                <button type="button" className="bg-blue-600 hover:bg-blue-700 w-40 py-2 px-4 text-white rounded-lg" onClick={handleCaptureClick}>Download</button>
            </div>
        </div>
    )
}

export default Users