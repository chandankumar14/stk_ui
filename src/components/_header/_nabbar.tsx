"use client"
import React from "react";
import { Navbar, Collapse, Typography, IconButton, } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import _MainMenuList from "./_main_menu_list";
export default function _NaveMegaMenuWithHover() {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-lg px-4 py-2 z-0 fixed"
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            placeholder="">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                    placeholder=""
                >
                    Material Tailwind
                </Typography>
                <div className="hidden lg:block">
                    <_MainMenuList />
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                    placeholder=""
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <_MainMenuList />
            </Collapse>
        </Navbar>
    );
}