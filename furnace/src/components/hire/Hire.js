import React, {useEffect, useState} from 'react';
import { Row, Col } from 'react-simple-flex-grid';

function Hire() {

    const [isMobile, setIsMobile] = useState(false);

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
            paddingBlock: isMobile ? '10vh' : '15vh',
        },
        rightDiv: {
            flex: 1,
            color: 'white',
            paddingInline: isMobile ? '10vh' : '5vh',
            paddingBlock: isMobile ? '10vh' : '10vh',
        },
        text: {
            fontFamily: 'cursive',
            textAlign: 'center',
            fontSize: 'xx-large'
        },
        field: {
            // display: 'flex',
            // flexDirection: 'row',
            // placeContent: 'start',
            // marginBottom: '1vh',
        },
        input: {
            marginLeft: '1vh',
            borderRadius: '25px',
            height: '40px',
            width: '60%',
        },
        message: {
            marginLeft: '1vh',
            borderRadius: '25px',
            height: '20vh',
            width: '50%'
        },
        formGroup: {

        },
        submit: {
            textAlign: 'center',
        }
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
            <div style={styles.container}>
                <div style={styles.leftDiv}>
                    <div style={styles.text}>
                        <h1 style={{margin : 0, fontSize: "xxx-large"}}>Connect</h1>
                        <h1 style={{margin : 0, fontSize: "xxx-large"}}>with us!</h1>
                    </div>
                </div>
                <div style={styles.rightDiv}>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.formGroup}>
                            <div style={styles.field}>
                                <div style={styles.text}>Name: </div>
                                <input
                                    type="text"
                                    name="name"
                                    style={styles.input}
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div style={styles.field}>
                                <div style={styles.text}>Email: </div>
                                <input
                                    type="email"
                                    name="email"
                                    style={styles.input}
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div style={styles.field}>
                                <div style={styles.text}>Message: </div>
                                <textarea
                                    name="message"
                                    style={styles.message}
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div style={styles.submit}>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Hire;