import React from 'react';
import {Modal, Button} from 'react-bootstrap';


function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                 <Button> <a href={item.link1}>{item.icon1}</a> </Button>
                                                                         
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p></p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
