import React from 'react';

import { MDBIcon } from 'mdb-react-ui-kit';
import AccordionNavigationList from './accordionNavigationList';
import AccordionSideMenuList from './accordionSideMenuList';
import AccordionOptionsList from './accordionOptionsList';

class Accordion extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            
            chevronUpIcon: false
        }
    }

    promisedSetState = (newState: any) => {
        new Promise((resolve: any) => this.setState(newState, resolve));
    }

    render () {
        const { title, globalIcon } = this.props;
        

        return (
            <div className='accordion-container'>
                <h4 className='accordion-title' onClick={this.props.iconFunc}>
                    {title}
                    { globalIcon 
                        ? <MDBIcon fas icon="chevron-up" className='accordion-title-icon'/> 
                        : <MDBIcon fas icon="chevron-down" className='accordion-title-icon'/> 
                    }
                </h4>
                <div className='accordion-body'>
                    {title === "Navigation" ? <AccordionNavigationList /> : null}
                    {title === "Side Menu" ? <AccordionSideMenuList /> : null}
                    {title === "Options" ? <AccordionOptionsList /> : null}
                </div>
            </div>
        )
    }
}

export default Accordion;