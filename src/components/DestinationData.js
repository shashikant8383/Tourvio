import React from "react";
import "./DestinationStyles.css";

function DestinationData(props) {
    return (
        <div className={props.className}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>
            <div className="image">
                <img alt="" src="https://wallpapercave.com/wp/wp9095334.jpg" />
                <img alt="" src="https://4kwallpapers.com/images/wallpapers/river-water-stream-scenic-landscape-mountains-starry-sky-5120x2880-1831.jpg" />
            </div>
        </div>
    );
}

export default DestinationData;
