import './Custom.css'
import image2 from '../assets/image-2.jpg';
import image1 from '../assets/image-1.jpg';
import trainer3 from '../assets/trainer-3.jpg';


export default function Custom(){
    return(
    <div className="custom container">
        <div className="row">
            <div className="col-sm-4">
                <div className="box">
                    <img src={image2} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="col-sm-4">
                <div className="box">
                    <img src={image1} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="col-sm-4">
                <div className="box">
                    <img src={trainer3} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    </div>

    )
};