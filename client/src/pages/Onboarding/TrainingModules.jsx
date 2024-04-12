import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import image from '../../images/hallway.jpg'
import TrainingComponentBox from "../../components/Onboarding/TrainingComponentBox";
import TrainingComponentHead from "../../components/Onboarding/TrainingComponentHead";
import '../../styles/Onboarding/TrainingModules.css';

const TrainingModules = ({ setCurrentModule }) => {
    const [moduleData, setModuleData] = useState([]);
    // [
    //     { imageUrl: image, title: 'Company Policy' },
    //     { imageUrl: image, title: 'Software Engineering' },
    //     { imageUrl: image, title: 'Product Manager' },
    //     { imageUrl: image, title: 'Web Development' },
    //     { imageUrl: image, title: 'Marketing' },
    //     { imageUrl: image, title: 'HR' },
    //     { imageUrl: image, title: 'Finance' },
    //     { imageUrl: image, title: 'Sales' },
    //     // Add more data as needed
    // ];

    useEffect(() => {
        const fetchVideoData = async () => {
          try {
            const response = await axios.get('http://localhost:9000/api/training');
            setModuleData(response.data);
            // setLoading(false);
          } catch (error) {
            console.error('Error fetching training modules:', error);
            // setLoading(false);
          }
        };
        fetchVideoData();

    }, []);

    const description="Welcome to our comprehensive training modules designed to kickstart your journey with us! Dive into our diverse range of modules covering everything from company culture and policies to job-specific tasks and industry insights."

    return (
        <div className="Training-Modules-Container">
            <Header />
            <TrainingComponentHead title={"Training Modules"} description={description}  />
            <h2 className="box-container-h2">Explore our diverse range of training modules!</h2>
            <div className="box-container">
                {moduleData.map((item, index) => (
                    <div className="box">
                        <TrainingComponentBox _id={item._id} name={item.name} Description={item.Description} imageURL={item.imageURL} setCurrentModule={setCurrentModule} index={index} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default TrainingModules;