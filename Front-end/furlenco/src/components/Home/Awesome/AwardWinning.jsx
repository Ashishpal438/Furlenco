import React from 'react'
import './AwesomeFurniture.css'
import Radio from '@mui/material/Radio';
import { useNavigate } from 'react-router-dom';

export const AwardWinning = () => {

    const navigate = useNavigate()

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <div className='showContainer'>
            <div className='showContainerLeft'>
               {
                selectedValue === "a" ?  <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/hulk/home/pico_1.png" alt="img" /> : selectedValue === "b" ? <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/hulk/home/bounce.png" alt="img" /> : <img src="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/hulk/home/the_pod.png" alt="img" />
               }
                <div className='showContainerLeftDown'>
                    <div>
                        <Radio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            size="small"
                            value="a"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <span>Pico Range</span>
                    </div>
                    <div className='mid'>
                        <Radio
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            size="small"
                            value="b"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <span>Bounce</span>
                    </div>
                    <div>
                        <Radio
                            checked={selectedValue === 'c'}
                            onChange={handleChange}
                            size="small"
                            value="c"
                            name="radio-buttons"
                            inputProps={{ 'aria-label': 'C' }}
                        />
                        <span>The POD</span>
                    </div>
                </div>
            </div>

            <div className='showContainerright'>
                <h2>DESIGNED BY AN AWARD WINNING TEAM</h2>
                <p>Our designs are user inspired, and our furniture is uniquely designed by in-house experts to solve your day to day problems.</p>
                <p>Our designers ensure that all furniture is designed to the highest standards of quality and craftsmanship.</p>
                <button onClick={() => {navigate('/item')}} >Explore Products</button>
            </div>
        </div>
    )
}
