import React from "react";

import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";


export const Cookies = (props) => {
    return (
        <>
            <Drawer
                open={props.isOpen}
                onClose={props.toggleDrawer}
                direction="bottom"
            >
                <div>Hello World</div>
            </Drawer>
        </>
    );
};
