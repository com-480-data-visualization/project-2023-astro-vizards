import ts from "typescript";
import "./launch-sites.scss";
import * as Plot from '@observablehq/plot';
import { useRef, useEffect, useState } from "react";
import {Slider, Space, Layout, Typography, Row, Col, Popover } from 'antd';
import * as d3 from 'd3';
const { Header, Footer, Content, Sider } = Layout;
const { Title, Paragraph } = Typography;



export const LaunchSites = () => {
  //const ref = useRef(null);
  const ref = useRef(null);
  const [land, setLand] = useState();
  const [sites, setSites] = useState();
  const [longitude, setLongitude] = useState(0);

  const [satHeader, setSatHeader] = useState("Click on a dot to see the launch site details");
  const [latInfo, setLatInfo] = useState(" ");
  const [longInfo, setLongInfo] = useState(" ");
  const [countInfo, setCountInfo] = useState(" ");
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popX, setPopX] = useState(0);
  const [popY, setPopY] = useState(0);
  const popHeight = window.innerHeight/10;



  const satelliteInfo = (
    <div className="info"> 
      <Title level={5} >{satHeader}</Title>
      <Paragraph>Latitude: {latInfo}</Paragraph>
      <Paragraph>Longitude: {longInfo}</Paragraph>
      <Paragraph>Number of Satellites Launched: {countInfo}</Paragraph>
    </div>
  );

  const fetchData = async () =>{
    const land_json = await fetch ("land.geojson").then(response => response.json());
    const sites_json = await fetch ("launch_counts_by_site.json").then(response => response.json());
    setLand(land_json);
    setSites(sites_json);
  }

  

  const onSliderChange = (value: any) => {
    if (isNaN(value)) {
      return;
    }
    setLongitude(value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!ref || !ref.current || land === undefined || sites === undefined) return;

    const earthPlot = Plot.plot({
      projection: {type: "orthographic", rotate: [-longitude, -30]},
      style: "overflow: visible;", // allow dots to escape
      
      marks: [
        Plot.frame({fill:"#F5F5F5", stroke: "#F5F5F5"}),
        Plot.geo(land, {fill: "grey", fillOpacity: 0.7}),
        Plot.sphere(),
        on(Plot.dot(sites, {x: "longitude", y: "latitude", r: "count", stroke: "red", fill: "red", fillOpacity: 0.2}), {
          // @ts-ignore
          mouseenter: function (event) {
            d3.select(event.target).style("cursor", "pointer");
            const r: number = +d3.select(event.target).attr("r");
            d3.select(event.target).attr("r", r*2)
            d3.select(event.target).attr('fill-opacity', 0.6);

            
            const p = d3.pointer(event, this);
            const plotElement = document.querySelector(".plot");
            
            if(plotElement != null){
              setPopX(event.clientX - plotElement.getBoundingClientRect().left - plotElement.getBoundingClientRect().width/2);//  - plotElement.getBoundingClientRect().width/2);
              setPopY(event.clientY - 2*popHeight - 20);// - (-plotElement.getBoundingClientRect().top + plotElement.getBoundingClientRect().height/2) - r - 50);
            }
            setPopoverVisible(true);
            //console.log("Mouse enter triggered");
          },
          // @ts-ignore
          mouseout: function (event) {
            d3.select(event.target).style("cursor", "default");
            const r: number = +d3.select(event.target).attr("r");
            d3.select(event.target).attr("r", r/2)
            d3.select(event.target).attr('fill-opacity', 0.2);
            setPopoverVisible(false);
            //console.log("Mouse leave triggered");
          }
        }
        )
      ]
    })

    // @ts-ignore
    function on(mark, listeners = {}){
      const render = mark.render ;
      mark.render = function () {    
        const g = render.apply(this, arguments);
        const r = d3.select(g).selectChildren();
        const sites = this.data;
        for (const [type, callback] of Object.entries(listeners)) {
          r.on(type, function (event, k) {
            //to eliminate type errors
            const i: number = k as number;
            const p = d3.pointer(event, g);
            setSatHeader(sites[i].name);
            setLatInfo(sites[i].latitude);
            setCountInfo(sites[i].count);
            setLongInfo(sites[i].longitude);
            // @ts-ignore
            callback(event);
          });
        }
        return g;
      }
      return mark;
    }

    // @ts-ignore
    ref.current.append(earthPlot);
    return () => earthPlot.remove();
  }, [land, sites, longitude]);

  return (
    <div>
      <Popover 
        content={satelliteInfo} 
        open={popoverVisible} 
        align={{offset: [popX, popY]}} 
        overlayStyle={{
          height: popHeight
        }}
      >
      <Row>
        <div className="description">
          <Title level={3} >Launch Sites of the Satellites</Title>
          <Paragraph>
            The map shows the launch sites of the satellites. 
            The size of the dots represents the number of satellites launched from that site. 
            The map can be rotated using the slider below.
          </Paragraph>
        </div>
      </Row>  
      <Row>
        <div className="plot">     
          <Slider
                  min={-180}
                  max={180}
                  onChange={onSliderChange}
                  value={typeof longitude === 'number' ? longitude : 0}
          />  
          <div >
              <Content className="plotInner" ref={ref}> </Content>
          </div>  
        </div>  
      </Row>  
      </Popover>
    </div>  
  );
}

export default LaunchSites;