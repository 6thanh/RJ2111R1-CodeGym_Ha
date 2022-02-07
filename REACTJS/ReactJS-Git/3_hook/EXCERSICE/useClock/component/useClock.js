import {
    useState,
    useEffect
} from "react";

const useClock = () => {
    const locale = 'vn';
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updatTime = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return () => {
            clearInterval(updatTime);
        }
    }, [])

    let day = time.toLocaleDateString(locale, {
        weekday: 'long'
    });
    let times = time.toLocaleDateString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    return {
        day,
        times
    }

}

export default useClock;