import Card from './Card.jsx'

const App = () => {

    let arr = [
        {
            image: "https://vetic.in/blog/wp-content/uploads/2023/07/2-1.jpg",
            name: "Dog",
            desc: "Welcome to Doggu World !",
            color:"primary",
            link: "https://www.google.com/search?q=chiztzu+images&sca_esv=66d96e265adf1945&rlz=1C1RXQR_enIN1109IN1109&udm=2&biw=1920&bih=911&ei=1BofaKSSIfqMseMP0eC2gAg&ved=0ahUKEwikzJb5yZiNAxV6RmwGHVGwDYAQ4dUDCBE&uact=5&oq=chiztzu+images&gs_lp=EgNpbWciDmNoaXp0enUgaW1hZ2VzSKEZUABY9RRwAXgAkAEAmAG7AaABpAiqAQMwLji4AQPIAQD4AQGYAgSgApwFwgIGEAAYBxgewgIIEAAYBRgHGB6YAwCSBwUwLjMuMaAHxxayBwUwLjMuMbgHnAU&sclient=img",
        },
        {
            image: "https://media.istockphoto.com/id/1256987005/photo/bottlenose-dolphin-tursiops-truncatus-adult-leaping.jpg?s=612x612&w=0&k=20&c=yKR1kGJ5oV3ewr6dYaYaXC4p_zIGRDTOJT6U-uRQSew=",
            name: "Dolphin",
            desc: "Welcome to Dolphin World !",
            color:"success",
            link: "https://www.google.com/search?q=dolphin+images&sca_esv=66d96e265adf1945&rlz=1C1RXQR_enIN1109IN1109&udm=2&biw=1920&bih=911&ei=RhwfaJydN_rLseMP86rq2Aw&ved=0ahUKEwic2OOpy5iNAxX6ZWwGHXOVGssQ4dUDCBE&uact=5&oq=dolphin+images&gs_lp=EgNpbWciDmRvbHBoaW4gaW1hZ2VzMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIFEAAYgAQyBhAAGAcYHkj6DFAAWOYIcAB4AJABAJgBowGgAaEHqgEDMC43uAEDyAEA-AEBmAIGoAKqBpgDAJIHAzAuNqAHiCiyBwMwLja4B6oG&sclient=img",
        },
        {
            image: "https://www.shutterstock.com/image-photo/baby-panda-sleeping-on-tree-600nw-2549360951.jpg",
            name: "Panda",
            color:"warning",
            desc: "Welcome to Panda World !",
            link: "https://www.google.com/search?q=panda+images&sca_esv=66d96e265adf1945&rlz=1C1RXQR_enIN1109IN1109&udm=2&biw=1920&bih=911&ei=8BkfaM_tA7L6g8UP8KmpgAQ&ved=0ahUKEwjPpZ2MyZiNAxUy_aACHfBUCkAQ4dUDCBE&uact=5&oq=panda+images&gs_lp=EgNpbWciDHBhbmRhIGltYWdlczIIEAAYgAQYsQMyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBRAAGIAEMgoQABiABBhDGIoFMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB5I6gpQAFi9B3AAeACQAQCYAaEBoAH9BKoBAzAuNbgBA8gBAPgBAZgCBaACnAWYAwCSBwMwLjWgB4UasgcDMC41uAecBQ&sclient=img"
        }
    ]

    return (
        <div>
            <div className="container">
                <div className="row gy-4 my-5">
                    {arr.map((item) => {
                        return <Card name={item.name} desc={item.desc} color={item.color} img={item.image} link={item.link} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default App;