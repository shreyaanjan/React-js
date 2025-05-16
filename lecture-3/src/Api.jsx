import React, { useEffect, useState } from 'react'

const Api = () => {
    const [count, setCount] = useState(0);
    const [imgURL, setImg] = useState("");
    useEffect(() => {
        const URL = "https://dog.ceo/api/breeds/image/random";

        fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((res) => {

                setImg(res.message)
            })
    }, [count])
    return (
        <div>
            {imgURL == "" ? <div class="spinner-border text-primary" role="status">
            </div> :
                <img src={imgURL} alt="dog" width={"250px"} />
            }
            <button className='btn btn-primary m-3' onClick={() => {
                return setCount(count + 1);
            }}>click</button>

        </div>
    )
}

export default Api