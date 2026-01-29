import React, { useState, useEffect, useContext } from "react";
import ApplicationContext from "../../../resources/providers/ApplicationContext";

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
                        <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <a href={course.videoFile} className="text-blue-500 hover:underline">Watch Course</a>
                        </div>
                    ))
                }
            </div>
        }
    </div>
}

export default HomePage;