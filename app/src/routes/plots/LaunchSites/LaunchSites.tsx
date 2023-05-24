import ts from "typescript";
import "./launch-sites.scss";
import * as Plot from '@observablehq/plot';
import { useRef, useEffect, useState } from "react";
import {Slider, Space, Layout, Typography, Row, Col } from 'antd';
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
        Plot.geo(land, {fill: "grey", fillOpacity: 0.2}),
        Plot.sphere(),
        on(Plot.dot(sites, {x: "longitude", y: "latitude", r: "count", stroke: "red", fill: "red", fillOpacity: 0.2}), {
          // @ts-ignore
          pointerenter: function (event) {
            d3.select(event.target).style("cursor", "pointer");
            const r: number = +d3.select(event.target).attr("r");
            d3.select(event.target).attr("r", r*2)
            d3.select(event.target).attr('fill-opacity', 0.6);
          },
          // @ts-ignore
          pointerleave: function (event) {
            d3.select(event.target).style("cursor", "default");
            const r: number = +d3.select(event.target).attr("r");
            d3.select(event.target).attr("r", r/2)
            d3.select(event.target).attr('fill-opacity', 0.2);
          }
        }
        ),
      ]
    })

    // @ts-ignore
    function on(mark, listeners = {}){
      const render = mark.render;
      mark.render = function () {    
        const g = render.apply(this, arguments);
        const r = d3.select(g).selectChildren();
        const sites = this.data;
        for (const [type, callback] of Object.entries(listeners)) {
          r.on(type, function (event, i) {
            const p = d3.pointer(event, g);
            // @ts-ignore
            setSatHeader(sites[i].name);
            // @ts-ignore
            setLatInfo(sites[i].latitude);
            // @ts-ignore
            setCountInfo(sites[i].count);
            // @ts-ignore
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
      <Col span={18}>
        <div className="plot">     
          <Slider
                  min={-180}
                  max={180}
                  onChange={onSliderChange}
                  value={typeof longitude === 'number' ? longitude : 0}
          />  
          <Content ref={ref}> </Content>
        </div>  
      </Col>
      <Col span={6}>
        <div className="info"> 
            <Title level={5} >{satHeader}</Title>
            <Paragraph>Latitude: {latInfo}</Paragraph>
            <Paragraph>Longitude: {longInfo}</Paragraph>
            <Paragraph>Number of Satellites Launched: {countInfo}</Paragraph>
        </div>
        </Col>
      </Row>  
    </div>  
  );
}

export default LaunchSites;