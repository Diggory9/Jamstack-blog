import React from 'react';
import Link from 'next/link'

const Navbar =() =>{
    return(
        <div>
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap10 mx-auto font-medium py-4 text-black">
                    <Link className ="navbar__link relative" href = "#">Menu</Link>
                    <Link className ="navbar__link relative" href = "#">Product</Link>
                    <Link className ="navbar__link relative" href = "#">Contact</Link>
                    <Link className ="navbar__link relative" href = "#">About</Link>
                   
                </div>
            </div>
        </div>
    
    </div>
    ) 

};
export default Navbar;