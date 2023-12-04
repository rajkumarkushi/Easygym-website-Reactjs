import './Details.css';
import detailsimg from '../assets/details-img.png'

export default function details(){
    return(
        <>
        <div className="container details">
            <div className="row">
                <div className="col-sm-5">
                    <h6>There is No Tomorrow</h6>
                    <p>Physical fitness is to the human body what fine tuning is to an engine. It enables us to perform up to our potential. Fitness can be described as a condition that helps us look, feel and do our best. Physical fitness involves the performance of the heart and lungs, and the muscles of the body.<br/><br/>A gym is a place where people go to train and exercise, but also to unwind, socialize, and recharge. Therefore, a good gym is a facility that promotes physical activity, provides a safe, functional, and comfortable workout environment, and creates a pleasant and enjoyable atmosphere for recreation and socialization.</p>
                    <button className="btn">View More</button>
                </div>
                <div className="offset-sm-2 col-sm-5">
                    <img src={detailsimg} alt="" />
                </div>
            </div>
        </div>

        </>
    )
}