import React from 'react';
import PixelArtImage from "./PixelArtImage";

import userImage from "../images/ryan.jpg"
import WallaceLogo from "./WallaceLogo";

const User = () => {
    return (
        <div className="user-info-wrapper">
            <div className="user-image-wrapper">
                <div className="image-border">
                    <PixelArtImage src={userImage} pixelSize={4} className="user-image"/>

                    <div className="corner top-left"></div>
                    <div className="corner top-right"></div>
                    <div className="corner bottom-left"></div>
                    <div className="corner bottom-right"></div>
                </div>

                <div className="corner top-right"></div>
                <div className="corner bottom-right"></div>
            </div>
            <div className="user-description-wrapper">
            <div className="desc">
                    <span>NEXUS 9 SRS</span>
                    <div className="box"></div>
                </div>
                <div className="sec-code">
                    <span>SEC CODE</span>
                    <span>25805-K-2973</span>
                </div>
                <div className="user-name">
                    <span>ブレードランナー</span>
                    <span>BLADE RUNNER</span>
                    <span>刀锋亚军</span>
                </div>
                <div className="wallace-logo-wrapper">
                    <WallaceLogo />
                </div>

                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
            </div>
        </div>
    );
};

export default User;