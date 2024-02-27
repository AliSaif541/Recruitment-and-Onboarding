import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function JobDescription(key) {
    console.log(key);
    return (
        <div>
            <Header />
        </div>
    );
}

export default JobDescription;