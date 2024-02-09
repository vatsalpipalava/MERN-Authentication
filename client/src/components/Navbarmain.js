import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

export default function Navbarmain() {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if a token exists in storage
        // const token = sessionStorage.getItem("token");
        const tokenDataString = localStorage.getItem('token');

        if (tokenDataString) {
            // Parse tokenData JSON string to an object
            const tokenData = JSON.parse(tokenDataString);

            // Check if the token has expired
            const now = new Date().getTime();
            if (now > tokenData.expirationDate) {
                // Token has expired, remove it from localStorage
                localStorage.removeItem('token');
            } else {
                // Token is still valid, you can use it
                // const token = tokenData.token;
                // console.log("Token:", token);
                setIsLoggedIn(true);
            }
        }

    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        // sessionStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate('/');
    };

    const menuItems = [
        "Profile",
        "Features",
        "Customers",
        "Analytics",
    ];

    return (
        <div className="mt-6">
            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <Link className="font-bold text-inherit" href="/">
                            AUTH
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <Link className="font-bold text-inherit" href="/">
                            AUTH
                        </Link>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/profile">
                            Profile
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    {isLoggedIn ? (
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger>
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    {/* <p className="font-semibold">{userInfo.name}</p> */}
                                </DropdownItem>
                                <DropdownItem key="settings" href="/profile">
                                    My Settings
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                    ) : (
                        <>
                            <NavbarItem className="hidden lg:flex">
                                <Link href="/login">Login</Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Button as={Link} color="warning" href="/register" variant="flat">
                                    Sign Up
                                </Button>
                            </NavbarItem>
                        </>
                    )}
                </NavbarContent>

                <NavbarMenu className="mt-4">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href={index === 0 ? "/profile" : "#"}
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </Navbar>
        </div>
    );
}
