import React, {useEffect, useState} from 'react';
import './Connect.css';

function Hire() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 1000;
            setIsMobile(isMobile);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <>
            <div className="connectContainer" id='connect'>
                <div className="leftDiv">
                    <div>
                        {isMobile ? (
                            <h1 className="connectHeading">Connect with us!</h1>
                        ) : (
                            <>
                                <h1 className="connectHeading">Connect</h1>
                                <h1 className="connectHeading">with us!</h1>
                            </>
                        )}
                    </div>

                </div>
                <div className="rightDiv">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="field">
                                <label className="labelText">Name: </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input nameInput"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label className="labelText">Email: </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input emailInput"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label className="messageLabel">Message: </label>
                                <textarea
                                    name="message"
                                    className="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="submit">
                            <button className="submitButton" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Hire;