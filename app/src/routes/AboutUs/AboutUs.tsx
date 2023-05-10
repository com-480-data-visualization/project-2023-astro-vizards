import "./about-us.scss";
import React, { useEffect } from 'react';
import { Typography, Divider, Avatar } from "antd";

const { Title, Paragraph } = Typography;

export const AboutUs = () => {
  return (
    <div className="about-us">
      
      <div className="about">
        <Title level={2}>About Us</Title>
        <Divider />
        <Paragraph>
          This website has been designed by three EPFL students as part of the Data Visualization (COM-480) Course. 
          As the number of satellites orbiting the Earth continues to increase, tracking their movements and positions 
          has become further important. Our satellite position visualization project aims to provide a dynamic and 
          interactive way for our users to visualize the current positions of these objects in space by leveraging 
          real-time data from various sources. We allow users to see the altitude, speed and other 
          relevant information for the satellite of their choice.
        </Paragraph>
      </div>
      <div className="data">
        <Title level={2}>About the Data</Title>
        <Divider />
        <Paragraph>
        Our data contains information about satellites currently in orbit, that we join together from two sources. First, 
        we utilize the available information from a <a href="https://www.kaggle.com/datasets/ucsusa/active-satellites"> Kaggle Dataset </a>   
        that contains general information about them, including the reference number that uniquely identifies the satellite.
        We also use information about the orbits of the satellites that we obtain from <a href="https://celestrak.org/NORAD/elements/table.php?GROUP=active&FORMAT=tle">NORAD</a>
         in TLE (Two-line element set) format.
               
        </Paragraph>
      </div>
      <div className="team">
        <Title level={2}>About the Team</Title>
        <Divider />
        <div className="members-container">
          <div className="members">
            <div className="member">
              <Avatar size={120} src="./pic1.jpg" />
              <div className="member-info">
                <Title level={4}>Miguel Crespo Castaño</Title>
                <Paragraph>...</Paragraph>
              </div>
            </div>
            <div className="member">
              <Avatar size={120} src="./pic2.jpg" />
              <div className="member-info">
                <Title level={4}>Can Kirimca</Title>
                <Paragraph>...</Paragraph>
              </div>
            </div>
            <div className="member">
              <Avatar size={120} src="./pic3.jpg" />
              <div className="member-info">
                <Title level={4}>Aybars Yazici</Title>
                <Paragraph>...</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default AboutUs;