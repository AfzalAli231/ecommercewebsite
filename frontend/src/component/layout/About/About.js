import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://localhost:3000/about";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://scontent.fkhi28-1.fna.fbcdn.net/v/t39.30808-1/271796827_983020202304888_386635119596381027_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFXb0DG5W-ozM8ZmseUzSdCgiW0glDM4GGCJbSCUMzgYQE310iAqPjSvPUxm2mbwIQrOQgjjZvN6TbqFREjXyiv&_nc_ohc=xUUz_IzIlesAX_7DtxI&_nc_ht=scontent.fkhi28-1.fna&oh=00_AfDuBadfw77tOYYsulee8G9RcXp3wKoy-CKEFvA4UWmurw&oe=63DE572D"
              alt="Founder"
            />
            <Typography>Afzal Ali</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is a sample wesbite made by @AfzalAli231.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="#" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="#" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
