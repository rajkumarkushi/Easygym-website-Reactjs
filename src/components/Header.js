import './Header.css';
import headerimg from '../assets/header-img.avif'

export default function Header(){

    return(

<section>
    <div className="header">
        <div>
            <div className="img">
                <img src={headerimg} alt="" />
            </div>
            <div className="Overlay"></div>
        </div>
        <div className="content">
            <h6>Build Your Fitness World <br/> By Building Your Body</h6>
            <button className="btn">
            Join Now
           </button> 
        </div>
        
    </div>
</section>


    )
}
