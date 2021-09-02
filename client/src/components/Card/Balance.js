import './works.scss'
import arrow from "../../img/arrow.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import { useState } from "react";
export default function Balance() {
const [currentSlide, setCurrentSlide] = useState(0)
    const data =[
        {
            id: "1",
            // icon: {GitHubIcon},
            title: "Life Manager",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing" ,
            img: "https://i1.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2017/03/Operations-Manager.jpg?fit=740%2C516&ssl=1",
         },
         {
        id: "2",
        // icon: {GitHubIcon},
        title: "MERN Restaurant Website",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing" ,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34qSmH7p3itrhdczeCXBko-etbvkjyHmG1Q&usqp=CAU",
        },
            
        {
    id: "3",
    // icon: {GitHubIcon},
    title: "Delivry App Clone",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing" ,
    img: "http://www.restaurantconsultingfirm.com/blog/wp-content/uploads/2016/09/Food-Delivery-App.jpg",
        },
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2)
        : setCurrentSlide(currentSlide<data.length-1 ? currentSlide +1 : 0);
    }

    return (
        <div className="works" id="works">
            <h1 className="title">Coming soon</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) =>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                        <div className="leftContainer">
                            {/* <div className="imgContainer"> */}
                            <GitHubIcon className="imgContainer" />
                            {/* </div> */}
                            <h2>{d.title}</h2>
                            <p>
                                {d.desc}
                            </p>
                            {/* <span>Projects</span> */}
                        </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                    
                </div>))}
            </div>
            <img src={arrow} className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src={arrow} className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}