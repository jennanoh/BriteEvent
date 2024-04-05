import React from 'react';
import { Container, Image} from 'react-bootstrap';

const Banner = () => {
    return (
        <Container fluid className="px-0">
            <section>
                {/* div holding image banner set to relative position so 
                "Find your next event" div can sit on top of image */}
                <div className="position-relative"> 
                {/* Different images for smaller screens with display controls to hide
                 and unhide depending on breakpoint */}
                    <div className="d-md-none px-0">
                        <Image src='/images/home-banner-mobile.png' alt='banner-mobile-image' fluid />
                    </div>
                    <div className="d-none d-md-block">
                        <Image src='/images/home-banner-image.png' alt='banner-image' fluid />
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Banner;