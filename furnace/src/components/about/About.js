import Card from "./Card";

function About() {
    const content = [
        {
            heading: "Technical Mastery",
            discription: `Our team of skilled professionals possesses a deep understanding
             and expertise in the latest technologies and programming languages. 
             We have honed our skills through years of hands-on experience and continuous
            learning, allowing us to tackle complex technical challenges with confidence.`
        },
        {
            heading: "Your Vision, Our Innovation",
            discription: ` We believe in pushing boundaries, exploring new possibilities,
             and challenging the status quo. Our team is driven by a shared passion for creating
              solutions that transform industries and empower businesses to thrive in the digital age. `
        },
        {
            heading: "On Time, Every Time",
            discription: `Our dedication to punctuality means that we understand the value of meeting 
            deadlines and honoring our clients' time. We meticulously plan and manage our projects,
             ensuring that each milestone and deliverable is completed within the agreed-upon timeframe. `
        },
        {
            heading: "Support that Goes the Extra Mile",
            discription: `We believe that exceptional customer service extends beyond just resolving issues
              it's about truly understanding our clients' needs and going above and beyond to exceed their expectations.
               Our dedicated support team is available round the clock to address any technical challenges, answer 
               inquiries promptly, and offer personalized assistance tailored to each client's unique requirements.`
        },
        {
            heading: "Professionalism Redefined",
            discription: `At Furnace Software Solutions, we embody the values of trustworthiness,
            professionalism, and ethical practices. Our commitment to trust means that our clients can rely
            on us to deliver exceptional results, maintain confidentiality, and always act with integrity.`
        },
        {
            heading: "From Chaos to Clarity",
            discription: `we specialize in guiding you on this journey, helping you navigate the intricate
             web of information and documentation. Our expert team diligently works to unravel complexities
              and bring order to your content, ensuring that it evolves from a state of confusion to one of absolute clarity.`
        },
    ]

    return (
      <>
      <div style={{color:'white', fontSize: '5vh', marginLeft:'3vw', marginTop:'3vh'}}>
        About Us
      </div>
        <div style={styles.gridLayout}>
            {content.map( (item,index) => (
            <Card item={item}/>
        ))}
        
      </div>
      </>
    );
  }
  
  export default About;

  const styles = {
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '1rem',
      placeItems:'center',
      margin:'1rem'
    }
  };