import { Card, Descriptions, Divider, Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import moment from 'moment'

interface SidebarProps {
    data: any;
}

export function InfoSatellite({ data }: SidebarProps) {
    if (data == null) {
        return <div></div>;
    }

    const launch_date = moment(data["Date of Launch"], "MM/DD/YYYY");
    const expected_life = parseInt(data["Expected Lifetime (Years)"]);
    const end_date = moment(launch_date).add(expected_life, 'year');

    const percentage_life = (moment().year() - launch_date.year()) / (end_date.year() - launch_date.year()) * 100;

    const marks: SliderMarks = {
        0: launch_date.format('DD/MM/YYYY'),
        100: end_date.format('DD/MM/YYYY')
    };

    return <div>
        <Card title={data["Official Name of Satellite"]} bordered={true}>
            <Descriptions column={1}>
                <Descriptions.Item label="COSPAR number">{data['COSPAR Number']}</Descriptions.Item>
                <Descriptions.Item label="Country">{data["Country of Operator/Owner"]}</Descriptions.Item>
                <Descriptions.Item label="Operator/Owner">{data["Operator/Owner"]}</Descriptions.Item>
            </Descriptions>

            <Divider />

            <Descriptions column={1} style={{marginTop: '1rem'}}>
                <Descriptions.Item label="Contractor">{data["Contractor"]}</Descriptions.Item>
                <Descriptions.Item label="Country">{data["Country of Contractor"]}</Descriptions.Item>
            </Descriptions>
        </Card>

        <Card title="Lifetime information" bordered={true} style={{marginTop: '1rem'}}>
            <Slider marks={marks} disabled={true} defaultValue={percentage_life} />
        </Card>

        <Card title="Launch information" /*extra={<a href="#">Go to place</a>}*/ bordered={true} style={{marginTop: '1rem'}}>
            <Descriptions column={1} style={{marginTop: '1rem'}}>
                <Descriptions.Item label="Launch site">{data["Launch Site"]}</Descriptions.Item>
                <Descriptions.Item label="Launch vehicle">{data["Launch Vehicle"]}</Descriptions.Item>
                <Descriptions.Item label="Launch mass (KG)">{data["Launch Mass (Kilograms)"]}</Descriptions.Item>
            </Descriptions>
        </Card>
    </div>
}
