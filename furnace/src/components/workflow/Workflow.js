import Flow from '../../asset/images/workFlow.png';
import Client from '../../asset/images/client.png';
import Relation from '../../asset/images/relation.png';
import Planning from '../../asset/images/planning.png';
import Development from '../../asset/images/development.png';

function Workflow() {
    const Images=[
        {
            image:Client,
        },
        {
            image:Client,
        },
        {
            image:Planning,
        },
        {
            image:Development,
        },
        {
            image:Client,
        },
        {
            image:Relation,
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
            <div style={{ display:'flex',height: '360vh', }}>
                
                <div style={{ flex:'1', display:'flex',flexDirection: 'column'}}>
                    {Images.map( (item,index) => (
                        <div style={{ flex:'1', maxHeight:'100%'}}>
                            <img src={item.image} alt={index} style={styles.image} />
                        </div>
                    ))}
                </div>

                {/* <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                    {Images.map((item, index) => (
                        <div key={index} style={{ flex: '1', display: 'flex', alignItems: 'stretch' }}>
                            <img src={item.image} alt={index} style={{ ...styles.image, objectFit: 'cover' }} />
                        </div>
                    ))}
                </div> */}

                <div style={{ flex:'1', display: 'flex', justifyContent: 'center' }}>
                    <img src={Flow} alt="Flow" style={styles.flow} />
                </div>

                <div style={{ flex:'3', display:'flex',flexDirection: 'column'}}>
                {Discription.map( (item,index) => (
                        <div style={{ flex:'1' , fontFamily: 'cursive',
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
        maxHeight: '100%',

    },
}
