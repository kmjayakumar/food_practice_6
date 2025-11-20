import React from "react";
import {createRoot} from "react-dom/client";


/**
 * head
 *  left side logo
 *  right side menu items
 * 
 * body
 *  search
 *  filter
 *  resCard
 *      reslogo
 *      name
 *      cuisines
 *      ratings
 *      price
 * Footer
 */

const div = document.getElementById("root");
const root = createRoot(div);

const Head = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p>
                    <img src="https://img.freepik.com/premium-vector/online-food-order-logo-icon_61778-45.jpg?w=1480" 
                    className="w-40"
                    alt="img"></img>
                </p>
                
            </div>
            <div className="flex gap-6 justify-between">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <span className="flex w-3 h-3 me-3 bg-green rounded-full">Online</span>
                        <span className="flex w-3 h-3 me-3 bg-indigo rounded-full">Online</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    
}

root.render(<Head/>);