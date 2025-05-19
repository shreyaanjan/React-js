import { useEffect, useState } from "react"

const Quotes = () => {
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        getAQuote();
    }, [])

    const getAQuote = async () => {
        const URL = "https://dummyjson.com/quotes/random";

        const res = await fetch(URL);
        const data = await res.json();

        setQuote([...quote, data]);
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="text-center"> 
                    <button className="btn btn-primary my-3 w-25" onClick={getAQuote}>Get New Quote</button>
                </div>
                {
                    quote.map((item) => {
                        return <div className="col-4">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>{item.quote}</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">{item.author}</cite>
                                </figcaption>
                            </figure>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Quotes