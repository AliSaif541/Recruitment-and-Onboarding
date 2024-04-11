import React from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import image from '../../images/hallway.jpg'
import TrainingComponentBox from "../../components/Onboarding/TrainingComponentBox";
import TrainingComponentHead from "../../components/Onboarding/TrainingComponentHead";
import '../../styles/Onboarding/TrainingModules.css';

const TrainingModules = ({ setCurrentModule }) => {
    const data = [
        { imageUrl: image, title: 'Company Policy' },
        { imageUrl: image, title: 'Software Engineering' },
        { imageUrl: image, title: 'Product Manager' },
        { imageUrl: image, title: 'Web Development' },
        { imageUrl: image, title: 'Marketing' },
        { imageUrl: image, title: 'HR' },
        { imageUrl: image, title: 'Finance' },
        { imageUrl: image, title: 'Sales' },
        // Add more data as needed
    ];

    return (
        <div className="Training-Modules-Container">
            <Header />
            <TrainingComponentHead />
            <h2 className="box-container-h2">Explore our diverse range of training modules!</h2>
            <div className="box-container">
                {data.map((item, index) => (
                    <div className="box">
                        <TrainingComponentBox data={item} setCurrentModule={setCurrentModule} index={index} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default TrainingModules;