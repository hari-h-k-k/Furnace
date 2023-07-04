import Flow from '../../asset/images/workFlow.png';
import Pic from '../../asset/images/carbonFiber.png';

function Workflow() {
    const Images=[
        {
            image:Pic,
        },
        {
            image:Pic,
        },
        {
            image:Pic,
        },
        {
            image:Pic,
        },
        {
            image:Pic,
        },
        {
            image:Pic,
        }
    ];
    const Discription=[
        {
            heading:"Steps",
            text:`we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`
        },
        {
            heading:"Steps",
            text:`we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`
        },
        {
            heading:"Steps",
            text:`we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`
        },
        {
            heading:"Steps",
            text:`we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`
        },
        {
            heading:"Steps",
            text:`we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`
        },
        {
            heading:"Steps",
            text:`we specialize in guiding you on this journey, helping you navigate the intricate
            web of information and documentation. Our expert team diligently works to unravel complexities
             and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`
        }

    ]
    return (
        <>
            <div style={{ color: 'white', fontSize: '5vh', marginLeft: '3vw', marginTop: '3vh', marginBottom: '3vh' }}>
                Workflow
            </div>
            <div style={{ display:'flex' }}>
                <div style={{ flex:'3', display:'flex',flexDirection: 'column'}}>
                    {Images.map( (item,index) => (
                        <div style={{ flex:'1' , padding:'20vh'}}>
                            <img src={item.image} alt={index} style={styles.image} />
                        </div>
                    ))}
                </div>

                <div style={{ flex:'1', display: 'flex', justifyContent: 'center' }}>
                    <img src={Flow} alt="Flow" style={styles.flow} />
                </div>

                <div style={{ flex:'3', display:'flex',flexDirection: 'column'}}>
                {Discription.map( (item,index) => (
                        <div style={{ flex:'1' , padding:'20vh', fontFamily: 'cursive',
                        fontSize: '16px',
                        color: 'white',
                        textAlign:'center'}}>
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Workflow;

const styles = {
    flow: {
        width: '100%',
        height: '100%',

    },
    image: {
        width: '100%',
        height: '100%',

    },
}
