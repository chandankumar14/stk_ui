"use client"
import React from "react";
import { Typography, List, ListItem } from "@material-tailwind/react";
import _ServicesListMenu from "./_services";
import _IndustriesListMenu from "./_Industries";

export default function _MainMenuList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            placeholder="">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                placeholder=""
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4"
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                    placeholder="">Home</ListItem>
            </Typography>
            <_ServicesListMenu />
            <_IndustriesListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                placeholder=""
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4"
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                    placeholder="">About Us</ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                placeholder=""
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4"
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                    placeholder="">Our Values</ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                placeholder=""
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4"
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                    placeholder="">Portfolio</ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                placeholder=""
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4"
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}
                    placeholder="">
                    Contact Us
                </ListItem>
            </Typography>
        </List>
    );
}
