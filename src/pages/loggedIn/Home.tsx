import React, { useState, useEffect, useContext } from "react";
import ApplicationContext from "../../../resources/providers/ApplicationContext";
import VideoTile from "../../widgets/VideoTile";

const HomePage: React.FC = () => {
    const applicationContext = useContext(ApplicationContext);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        document.title = "Home"
        getCourses();
    }, [])

    const getCourses = async () => {
        setLoading(true);
        await applicationContext!.getCourses();
        setLoading(false);
    }

    return <div className="flex flex-center whitespace-normal p-4">
        {
            loading ? <div>Loading courses...</div> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    applicationContext!.courses.map((course, index) => (
                        <div key={index}><VideoTile video={course} /></div>
                    ))
                }
            </div>
        }
    </div>
}

export default HomePage;