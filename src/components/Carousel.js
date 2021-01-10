import React from 'react';

import tv_2 from '../assets/Img/tv_2.png';
import bag_1 from '../assets/Img/bag_1.png';
import people_1 from '../assets/Img/people_1.png';
import Card from './Card';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            items: [
                {
                    id: 0,
                    title: 'TV -Show',
                    subTitle: 'The Show Details and Seasons Info.',
                    imgSrc: tv_2,
                    link: 'https://github.com/krishna-saparia/TV-Show-Express-Node-JS',
                    selected: false
                },
                {
                    id: 1,
                    title: 'To shop Grocery List',
                    subTitle: 'Create your own Grocery List for shopping..',
                    imgSrc: bag_1,
                    link: 'https://github.com/kanvisavani-discordbot/GroceryEJS',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Employee List',
                    subTitle: 'The Web App to create and update employee details.',
                    imgSrc: people_1,
                    link: 'https://github.com/krishna-saparia/Employee-List-Frontend', 
                    selected: false
                },
            ]
            
        }
    }

    handlecardClick = (id , card) => {

        console.log(id);
        // Split Operator
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;
            // if (items[id].selected){
            //     items[id].selected = false;
            // }
            // else{
            //     items[id].selected = false;
            // }
        items.forEach (item => {
            if(item.id !== id){
                item.selected = false;
            } 
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item = {item} click={(e => this.handlecardClick(item.id , e))} key = {item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className = "justify-content-around">
                    { this.makeItems(this.state.items) }
                </Row>
            </Container>
        );
    }
}

export default Carousel;