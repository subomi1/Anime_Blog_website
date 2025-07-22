import image from '../assets/image.jpg';
export default function Hero() {
    return(
        <div className="hero flex w-full h-80 items-center bg-amber-50">
            <div className="w-1/2 bg-amber-400 flex justify-center h-full items-center">
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit eos placeat culpa totam, molestias esse tempora quaerat magni voluptas non rem saepe qui vel corporis harum doloribus, voluptatum ipsa sit?</h1>
            </div>
            <div className="w-1/2 bg-amber-400 h-full">
                <img src={image} alt=""  className='object-cover w-full h-full object-center'/>
            </div>
        </div>
    );
}