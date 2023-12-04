import './Teams.css';
import team1 from '../assets/team-1.jpg'
import team2 from '../assets/team-2.webp'
import team3 from '../assets/team-3.avif'


export default function teams(){
    return(
        <>
        <section>
            <div className="teams container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={team1} className="img-fluid" alt="" />
                            <div className="content">
                                <h6>Easy Gym Team</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={team2} className="img-fluid" alt="" />
                            <div className="content">
                                <h6>Easy Gym Team</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="box">
                            <img src={team3} className="img-fluid" alt="" />
                            <div className="content">
                                <h6>Easy Gym Team</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

