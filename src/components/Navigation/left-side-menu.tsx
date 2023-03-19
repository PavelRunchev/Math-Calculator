import React, { Component } from 'react';

import logo from '../../public/logo.png';
import Accordion from './accordion';
import { AccordionShow, AccordionHide } from '../../services/accordion';

import {
    MDBIcon,
    MDBCardImage,
    MDBRipple 
} from 'mdb-react-ui-kit';

class LeftSideMenu extends Component<any, any> {
    constructor(props: Object) {
        super(props);

        this.state = {
            isClickAccordionNav: false,
            isClickAccordionSideMenu: false,
            isClickAccordionOptions: false,
            titleIconNav: false,
            titleIconSideMenu: false,
            titleIconOptions: false
        }
    }

    getAllDOMAccordions = () => {
        const allAccordions: NodeListOf<HTMLElement> =  document.querySelectorAll('.accordion-container')!;
        return allAccordions;
    }
    
    isClickNavigation = (ev: any) => {
        this.setState({ 
            isClickAccordionNav: !this.state.isClickAccordionNav,
            isClickAccordionSideMenu: false,
            isClickAccordionOptions: false,
            titleIconNav: true,
            titleIconSideMenu: false,
            titleIconOptions: false
        });

        this.showHideAccordion(this.getAllDOMAccordions()[0], 'Navigation');
    }

    isClickSideMenu = () => {
        this.setState({ 
            isClickAccordionNav: false,
            isClickAccordionSideMenu: !this.state.isClickAccordionSideMenu,
            isClickAccordionOptions: false,
            titleIconNav: false,
            titleIconSideMenu: true,
            titleIconOptions: false
        });

        this.showHideAccordion(this.getAllDOMAccordions()[1], 'SideMenu');
    }

    isClickOptions = () => {
        this.setState({ 
            isClickAccordionNav: false,
            isClickAccordionSideMenu: false,
            isClickAccordionOptions: !this.state.isClickAccordionOptions,
            titleIconNav: false,
            titleIconSideMenu: false,
            titleIconOptions: true 
        });

        this.showHideAccordion(this.getAllDOMAccordions()[2], 'Options');
    }

   

    showHideAccordion =  (el: HTMLElement, currentAccordion: string) => {
        const body: HTMLElement = el.querySelector('.accordion-body')!;
       
        new Promise((resolve: any) => {
            let allAccordions: NodeListOf<HTMLElement> = document
                .querySelectorAll('.container-accordions > .accordion-container > .accordion-body');

            allAccordions.forEach(el => {
                if(el.style.height === '330px') AccordionHide(el);  
            });

            resolve();
        }).then(() => {
            let acc;
            if(currentAccordion === 'Navigation') acc = this.state.isClickAccordionNav;
            else if(currentAccordion === 'SideMenu') acc = this.state.isClickAccordionSideMenu;
            else if(currentAccordion === 'Options') acc = this.state.isClickAccordionOptions;
            console.log(acc);
            if(acc) {
                

                AccordionShow(body)
            } else {
                this.setState({ 
                    isClickAccordionNav: false,
                    isClickAccordionSideMenu: false,
                    isClickAccordionOptions: false,
                    titleIconNav: false,
                    titleIconSideMenu: false,
                    titleIconOptions: false 
                });
                AccordionHide(body);
            }
        });
    }

    render() {
        const titleTerm = { title: "Navigation", globalIcon: this.state.titleIconNav, iconFunc: this.isClickNavigation };
        const titleTerm1 = { title: "Side Menu", globalIcon: this.state.titleIconSideMenu, iconFunc: this.isClickSideMenu };
        const titleTerm2 = { title: "Options", globalIcon: this.state.titleIconOptions, iconFunc: this.isClickOptions };
       
        return (
            <div className='left-side-menu-container text-light'>
                <MDBCardImage className='left-side-menu-logo' src={logo} fluid alt='logo' />
                <h3 className='mx-auto left-side-menu-title'>Math Calculator</h3>
                <div className='under-line'></div>
    
                <div className='my-5 container-accordions'>
                    <Accordion {...titleTerm}/>
                    <br />
                    <Accordion {...titleTerm1}/>
                    <br />
                    <Accordion {...titleTerm2}/>
                    
                </div>
    
                <div className='under-line mb-3'></div>

                <div>
                    You can now focus your console experience by customizing your navigation
                </div>
    
                <div className='hide-side-menu-icon-container'>
                    <span>Hide Menu </span>
                    <MDBRipple rippleTag='span'>
                        <MDBIcon fas icon="chevron-circle-left" 
                            className='chevron-circle-left' 
                            onClick={this.props.funcHideLeftMenu}
                        />
                    </MDBRipple>
                  
                </div>
                
            </div>
        )
    }
}

export default LeftSideMenu;
