import React, {useEffect, useState} from 'react';
import './Hire.css';

function Hire() {

    const [isMobile, setIsMobile] = useState(false);
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 1200;
            setIsMobile(isMobile);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
        },
        leftDiv: {
            flex: 1,
            color: 'white',
            paddingBlockStart: isMobile ? '10vh' : '15vh',
        },
        rightDiv: {
            flex: 1,
            color: 'white',
            paddingInline: isMobile ? '10vh' : '5vh',
            paddingBlock: '10vh',
        },
        submitButton: {
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: hover ? '#000000' : '#ffffff',
            fontFamily: 'cursive',
            color: hover ? '#000000' : '#ffffff',
            height: '70px',
            width: '25vh',
            borderRadius: '20px',
            fontSize: 'xx-large',
            marginTop: '30px',
            cursor: hover ? 'pointer' : '',
            background: hover
                ? '-webkit-gradient(linear, center top, center bottom, color-stop(0%, #ccc), color-stop(100%, #fff))'
                : '-webkit-gradient(linear, center top, center bottom, color-stop(0%, #930505), color-stop(100%, #000000))',
        },
    };

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
            <div style={styles.container} id='hire'>
                <div style={styles.leftDiv}>
                    <div className="text">
                        {isMobile ? (
                            <h1 style={{ margin: 0, fontSize: "xxx-large" }}>Connect with us!</h1>
                        ) : (
                            <>
                                <h1 style={{ margin: 0, fontSize: "xxx-large" }}>Connect</h1>
                                <h1 style={{ margin: 0, fontSize: "xxx-large" }}>with us!</h1>
                            </>
                        )}
                    </div>

                </div>
                <div style={styles.rightDiv}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="field">
                                <label className="text">Name: </label>
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
                                <label className="text">Email: </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input nameInput"
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
                            <button style={styles.submitButton} type="submit" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Hire;