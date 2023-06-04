import "./about-us.scss";
import React, { useEffect } from 'react';
import { Typography, Divider, Avatar, Space, Row, Col} from "antd";

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
          real-time data from various sources. We allow users to see the satellites orbiting the Earth on 2D and 3D maps, 
          and also view the altitude, speed and other relevant information for the satellite of their choice.
        </Paragraph>
      </div>

      <div className="data">
        <Title level={2}>About the Data</Title>
        <Divider />
        <Paragraph>Our dataset contains information about the satellites currently in the Earth's orbit. We obtain this dataset by joining two sources of data:
        <ul>
          <li>  A dataset gathered from <a href="https://celestrak.org/NORAD/elements/table.php?GROUP=active&FORMAT=tle">NORAD</a> that contains a unique reference number and name for each satellite, and also its orbit information in TLE format. This information enables us to compute the coordinates of a satellite at any time instant.</li>
          <li>  A <a href="https://www.kaggle.com/datasets/ucsusa/active-satellites"> Kaggle Dataset </a> containing additional information on the satellites such as:
            <ul>
              <li> The country and organization operating the satellite</li>
              <li> Users of the satellite (Government, commercial etc.)</li>
              <li> Purpose of use (Communications, observation etc.)</li>
            </ul>
          </li>
        </ul>
        </Paragraph>   
      </div>

      <div className="team">
        <Title level={2}>About the Team</Title>
        <Divider />
        <Row>
          <Col span={8}>
            <Space direction="vertical" align="center">
              <Avatar size={120} src="./miguel.jpg" />
              <div className="member-info">
                <Title level={4}>Miguel Crespo</Title>
                <Paragraph>Ph.D @ Realistic Graphics Lab (EPFL) Working on inverse graphics and physically based rendering.</Paragraph>
              </div>
            </Space>
            </Col>
            <Col span={8}>
            <Space direction="vertical" align="center">
              <Avatar size={120} src="./can.jpg" />
              <div className="member-info">
                <Title level={4}>Can Kirimca</Title>
                <Paragraph>MSc. in CS @ EPFL | BSc. in CS @ Bilkent University</Paragraph>
              </div>
            </Space>
            </Col>
            <Col span={8}>
            <Space direction="vertical" align="center">
              <Avatar size={120} src="./aybars.webp" />
              <div className="member-info">
                <Title level={4}>Aybars Yazici</Title>
                <Paragraph>MSc. in CS @ EPFL | BSc in CS and EE @ Sabanci University</Paragraph>
              </div>
            </Space>
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
