import { DatePicker, TimePicker, Button } from "antd";
import { RefObject, forwardRef, useEffect, useMemo, useState } from "react";

// import moment from "moment";
import dayjs from 'dayjs';

const INTERVAL_SECONDS = 1;

function TimeBarFunction({currentDate, setCurrentDate} : any, ref: RefObject<HTMLButtonElement>) {
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

    return <div style={{display: 'flex', justifyContent: "flex-end", alignItems: "center", height: "100%", flexWrap: "nowrap"}}>
        <DatePicker format="DD-MM-YYYY HH:mm:ss" 
                    showTime={true} 
                    defaultValue={dayjs()} 
                    showNow={true}
                    value={currentDate}
                    onChange={ onChange }
        />
        <Button style={{marginLeft : '0.5rem'}} 
                onClick={clickButton}
                ref={ref}
                type={(!realtime) ? 'default' : 'primary'}
        > {(!realtime) ? 'Realtime' : 'Realtime ON'} </Button>
    </div>
}

export const TimeBar = forwardRef<HTMLButtonElement, any>((props, ref) => TimeBarFunction(props, ref as RefObject<HTMLButtonElement>));
