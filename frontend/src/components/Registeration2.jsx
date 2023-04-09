import eva_lightleft from "../assets/images/eva_lightbgleft.png";
import eva_lightright from "../assets/images/eva_lightbgright.png";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Registration2() {
    const [numInputs, setNumInputs] = useState(1);
    const handleAddInput = () => {
        setNumInputs(numInputs + 1);
    };
    const navigate = useNavigate();
    const navigateToPreviousPage = () => {
        navigate('/Registration');
    };

    return (
        <div className="bg-[#24263B] pt-12 min-h-screen">
            <div>
                <img className="lg:float-left lg:w-auto lg:h-auto md:float-left md:w-40 md:h-auto float-left w-20 h-auto" src={eva_lightleft} alt="Registration eva" />
                <img className="lg:float-right lg:w-auto lg:h-auto md:float-right md:w-40 md:h-auto float-right w-20 h-auto" src={eva_lightright} alt="Registration eva" />
            </div>
            <div className="lg:text-6xl lg:pt-28 md:text-4xl md:pt-16 text-[#22C3FF] pt-12 text-center font-poppins font-bold text-3xl">REGISTER</div>
            <div className="lg:text-xl lg:pt-2 md:text-md md:pt-2 text-center text-[#ffffff] pt-2  font-poppins font-semibold">Team Details</div>

            <form className="lg:w-full md:w-full w-full">
                <div className="lg:mx-96 md:mx-48 mx-8">
                <div className="lg:w-full lg:pt-12 md:w-full md:items-center md-center md:pt-8 items-center pt-10 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-name">Team Name :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-team-name" type="text" placeholder="Enter your team name"></input>
                    </div>
                </div>

                <div className="lg:w-full lg:pt-8 md:w-full md:items-center md-center md:pt-6 items-center pt-6 place-content-center">
                    <div className="">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-email">Team Members :</label>
                    </div>
                    {[...Array(numInputs)].map((_, index) => (
                        <div className="pt-2">
                            <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 h-10 p-2" key={index} id="inline-team-member" type="text" placeholder="Enter teammate name" />
                        </div>
                    ))}
                    <div className="pt-2 text-white">
                    <button className="float-right text-lg hover:text-[#22C3FF]" type="button" onClick={handleAddInput}>Add +</button>
                    </div>
                </div>
                
                
                <div className="lg:w-full lg:pt-8 lg:pb-12 md:w-full md:items-center md-center md:pt-6 items-center pt-6 pb-8 place-content-center">
                    <div className="pb-2">
                        <label className="lg:text-2xl md:text-2xl text-sm text-white font-poppins font-semibold mb-1 pr-4" for="inline-name">Theme :</label>
                    </div>
                    <div className="">
                        <input className="w-full bg-[#23354E] appearance-none border-2 border-[#23354E] rounded text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-college-name" type="text" placeholder="Select theme"></input>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-center float-left">
                    <button onClick={navigateToPreviousPage} className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#ae40fe] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded text-sm" type="button">
                        Back
                    </button>
                    </div>
                </div>
                
                <div className="">
                    <div className="flex justify-center float-right">
                    <button className="lg:text-xl shadow bg-[#22C3FF] hover:bg-[#ae40fe] hover:text-white focus:shadow-outline focus:outline-none text-black font-bold py-2 px-2 rounded text-sm" type="button">
                        Submit
                    </button>
                    </div>
                </div>
                </div>

            </form>



        </div>
    );
}

export default Registration2;