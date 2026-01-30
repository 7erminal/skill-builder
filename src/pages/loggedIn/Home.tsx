import React, { useState, useEffect, useContext } from "react";
import ApplicationContext from "../../../resources/providers/ApplicationContext";
import VideoTile from "../../widgets/VideoTile";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const HomePage: React.FC = () => {
    const applicationContext = useContext(ApplicationContext);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        document.title = "Home"
        getCourses();
        getCategories();
    }, [])

    const getCategories = async () => {
        setLoading(true);
        await applicationContext!.fetchCategories();
        setLoading(false);
    }

    const getCourses = async () => {
        setLoading(true);
        await applicationContext!.getCourses();
        setLoading(false);
    }

    return <div className="flex flex-col whitespace-normal p-4">
        <div className="rounded-4xl bg-linear-to-r from-purple-500 to-pink-500 text-white p-6 mb-6 w-full text-center min-h-50">
            <h2 className="text-3xl font-bold mb-2">Welcome to SkillBuilder!</h2>
            <p className="text-lg">Empowering you with job-ready digital skills through hands-on learning and real-world projects.</p>
        </div> 

        <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 mt-10">Categories</h3>
        {
            applicationContext?.categories.length === 0 ? <div>No categories found.</div> :
            <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {
                    applicationContext!.categories.map((category, index) => (
                        <SwiperSlide key={index}>
                        <div  className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center my-4">
                            <div className="text-sm mb-4">{category.name}</div>
                        </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        }
        </section>
        <h3 className="text-2xl font-semibold mb-4 mt-10">Available Courses</h3>
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