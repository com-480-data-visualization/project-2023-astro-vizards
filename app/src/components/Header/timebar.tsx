import { DatePicker, TimePicker, Button } from "antd";
import { useEffect, useMemo, useState } from "react";

// import moment from "moment";
import dayjs from 'dayjs';

const INTERVAL_SECONDS = 1;

export function TimeBar({currentDate, setCurrentDate} : any) {
    const [realtime, setRealtime] = useState<boolean>(false);
    // const [idInterval, setIdInterval] = useState<NodeJS.Timer>();

    // const intervalFunc = () => {
    //     setCurrentDate(currentDate.add(INTERVAL_SECONDS, 'second'));
    //     console.dir(currentDate);
    // }

    useEffect(() => {
        if (realtime) {
            const timeout = setTimeout(() => {
                setCurrentDate(currentDate.add(INTERVAL_SECONDS, 'second'));
            }, INTERVAL_SECONDS * 1000);
            return () => clearTimeout(timeout);
        }
    }, [currentDate]);

    const clickButton = (e : any) => {
        const new_state = !realtime;
        setRealtime(new_state);

        if (new_state) {
            setCurrentDate(dayjs());
        }

        // if (new_state) {
        //     const interval = setInterval(intervalFunc, INTERVAL_SECONDS * 1000);
        //     setIdInterval(interval);
        // } else {
        //     clearInterval(idInterval);
        // }
    };

    const onChange = (date : dayjs.Dayjs|null, dateString: string) => {
        if (date !== null) {
            setCurrentDate(date);
        }
    }

    return <div>
        <DatePicker format="DD-MM-YYYY HH:mm:ss" 
                    showTime={true} 
                    defaultValue={dayjs()} 
                    showNow={true}
                    value={currentDate}
                    onChange={ onChange }
        />
        <Button style={{marginLeft : '0.5rem'}} 
                onClick={clickButton}
                type={(!realtime) ? 'default' : 'primary'}
        > {(!realtime) ? 'Realtime' : 'Realtime ON'} </Button>
    </div>
}
