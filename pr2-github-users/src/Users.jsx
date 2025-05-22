import domtoimage from 'dom-to-image';
import { useEffect, useState, useRef } from "react"

const Users = () => {
    const captureRef = useRef(null);

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
                });
        }
    }
    const defaultUser = "shreyaanjan"
    const [userName, setUserName] = useState(defaultUser);
    const [query, setQuery] = useState(defaultUser);
    const [userData, setUserData] = useState("");

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
                    <button type="button" className="absolute top-2 right-2 bg-blue-600 py-1 px-4 text-white rounded-lg" onClick={() => {
                        setQuery(userName);
                    }}>Search</button>
                </div>
            </div>
            <div className="container mx-auto flex justify-center items-center pt-6">
                <div className="bg-[#1f2a48] w-[500px] p-6 rounded-lg" ref={captureRef}>
                    <div className="flex justify-between">
                        <div className="flex gap-6">
                            <img src={userData.avatar_url} alt="avatar" className="border rounded-full w-20 h-20" />
                            <div>
                                <h2 className="text-white text-[22px]">{userData.name}</h2>
                                <p className="text-blue-400">{userData.login}</p>
                                <p className="pt-5 text-gray-300">{userData.bio || "This user has no Bio."}</p>
                            </div>
                        </div>
                        <p>Joined {new Date(userData.created_at).toDateString()}</p>
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
                        <p className="flex gap-2"><i class="bi bi-geo-alt-fill"></i>{userData.location || "Not Available"}</p>
                        <p className="flex gap-2"><i class="bi bi-twitter"></i>{userData.twitter_username || "Not Available"}</p>
                    </div>
                    <div className="text-center mt-3">
                        <button type="button" className="bg-blue-600 w-70 py-1 px-4 text-white rounded-lg" onClick={handleCaptureClick}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users