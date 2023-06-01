import { Menu, MenuProps, Button, Space, Row, Col } from "antd";
import { Header as AntHeader } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { BookOutlined, RocketOutlined, EnvironmentOutlined, QuestionOutlined } from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import {TimeBar} from './timebar'
import { RefObject, forwardRef, useImperativeHandle, useRef } from "react";
interface HeaderProps {
  currentDate: any;
  setCurrentDate: any;
  setTourOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type HeaderRefs = {
  twodViewRef: RefObject<HTMLInputElement>;
  threedViewRef: RefObject<HTMLInputElement>;
  restartTour: RefObject<HTMLButtonElement>;
  realTime: RefObject<HTMLButtonElement>;
}

const Header = forwardRef<HeaderRefs, HeaderProps>(({currentDate, setCurrentDate, setTourOpen}: HeaderProps, ref) => {
  const navigate = useNavigate();
  const twodViewRef = useRef<HTMLInputElement>(null);
  const threedViewRef = useRef<HTMLInputElement>(null);
  const restartTour = useRef<HTMLButtonElement>(null);
  const realTime = useRef<HTMLButtonElement>(null);

  const handleMenuClick = ({ key }: MenuInfo) => {
    if (key) navigate(key);
    else navigate("/");
  };

  useImperativeHandle(ref, () => ({
    twodViewRef: twodViewRef,
    threedViewRef: threedViewRef,
    restartTour: restartTour,
    realTime: realTime,
  }));

  const items: MenuProps["items"] = [
    {
      icon: <div>
        <div style={{
          position: 'absolute',
          width: '80%',
          height: '80%',
        }}
        ref={twodViewRef}
        ></div>
        <RocketOutlined/>
      </div>,
      key: "",
      label: "2D Satellites",
    },
    {
      icon: <div>
      <div style={{
        position: 'absolute',
        width: '80%',
        height: '80%',
      }}
      ref={threedViewRef}
      ></div>
      <RocketOutlined/>
    </div>,
      key: "three-d-view",
      label: "3D View",
    },
    {
      icon: <EnvironmentOutlined />,
      key: "launch-sites",
      label: "Launch Sites",
    },
    {
      icon: <BookOutlined />,
      key: "about-us",
      label: "About Us",
    }
  ];

  return (
    <AntHeader className="header">
      <Row justify={"space-between"} wrap={false}>
        <Col lg={16} md={15} sm={12} xs={4}>
          <Menu
            theme="dark"
            mode="horizontal"
            items={items}
            onClick={(e) => handleMenuClick(e)}
          />
      </Col>
      <Col lg={8} md={9} sm={12} xs={20}>
        <Row justify={"end"}>
          <Col span={23}>
            <TimeBar currentDate={currentDate} setCurrentDate={setCurrentDate} ref={realTime}/>
          </Col>
          <Col span={1}>
            <Button icon={<QuestionOutlined/>} ref={restartTour} onClick={() => setTourOpen(true)}/>
          </Col>
        </Row>
      </Col>
      </Row>
    </AntHeader>
  );
});

export { Header };
