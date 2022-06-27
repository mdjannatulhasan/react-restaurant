import React from "react";
import ButtonPrimary from "../../Buttons/ButtonPrimary";

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,.4),rgba(0,0,0,.4)),url("images/hero-bg.webp")',
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="container">
                <div className="lg:pb-36 lg:pt-48 pt-36 pb-24 text-center text-white">
                    <p className="text-[13px] font-[900] tracking-widest">ENJOY YOUR HEALTHY DELICIOUS MEAL</p>
                    <h1 className="lg:text-7xl font-bold text-5xl hero-title mt-5 mb-8">Treat Yourself</h1>
                    <p className="text-xl font-semibold max-w-2xl mx-auto mb-8">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ButtonPrimary href="/home" additionalClass="">
                        Explore more
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Home;
