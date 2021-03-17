import React from "react";
import Common from "./Common";
const imge="https://www.brandbucket.com/sites/default/files/logo_uploads/85230/large_lopum_0.png";
const About = () => {

    return (
        <>
            <Common name="Welcome to about page" imgsrc={imge} visit="/contact" btname="Contact Now" />
        </>
    );
}
export default About;