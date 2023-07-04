import React, {useEffect, useState} from 'react';

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
            paddingBlock: '10vh',
        },
        text: {
            fontFamily: 'cursive',
            textAlign: 'center',
            fontSize: 'xx-large',
            verticalAlign: 'bottom',
            marginRight: '45px',
        },
        field: {
            // display: 'flex',
            // flexDirection: 'row',
            // placeContent: 'start',
            marginBottom: '1vh',
        },
        input: {
            marginLeft: '1vh',
            borderRadius: '25px',
            height: '40px',
            width: '60%',
            background: '-webkit-gradient(linear, center top, center bottom, color-stop(0%, #ccc), color-stop(100%, #fff))',
            paddingInline: '10px',
        },
        messageLabel: {
            fontFamily: 'cursive',
            textAlign: 'center',
            fontSize: 'xx-large',
        },
        message: {
            marginLeft: '1vh',
            borderRadius: '25px',
            height: '20vh',
            width: '50%',
            background: '-webkit-gradient(linear, center top, center bottom, color-stop(0%, #ccc), color-stop(100%, #fff))',
            verticalAlign: 'top',
            padding: '10px',
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
                        <div style={styles.formGroup}>
                            <div style={styles.field}>
                                <label style={styles.text}>Name: </label>
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
                                <label style={styles.text}>Email: </label>
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
                                <label style={styles.messageLabel}>Message: </label>
                                <textarea
                                    name="message"
                                    style={styles.message}
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div style={styles.submit}>
                            <button style={{cursor: 'pointer'}} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Hire;