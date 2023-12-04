import './Pricing.css'

export default function pricing(){

    return(
        <>
        <div className="pricing container">
            <div className="row">
                <div className="col-sm-4 ">
                    <div className="box ">
                        <h6>Basic</h6>
                        <h5>$101</h5>
                        <p>The Basic Pricing charges in our Fitness center is given above,u can enjoy few services through this basic Pricing plan </p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
                <div className="col-sm-4 mid">
                    <div className="box active">
                        <h6>Advance</h6>
                        <h5>$201</h5>
                        <p>Advanced Pricing charges of our Fitness center is Given above,through this advanced services u can enjoy many feaures and sevices in our Fitness center.</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="box">
                        <h6>Premium</h6>
                        <h5>$301</h5>
                        <p>Our most Customers prefer premium plan to get unlimited services and othere facilities in our Fitness Center </p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}