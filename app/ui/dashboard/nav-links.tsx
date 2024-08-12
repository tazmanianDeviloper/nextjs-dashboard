'use client';

import {DocumentDuplicateIcon, HomeIcon, UserGroupIcon,} from '@heroicons/react/24/outline';
import Link from "next/link";
import React from "react";
import styled, {ThemeProvider} from "styled-components";
import {usePathname} from "next/navigation";

// Define styled components
const StyledDiv = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8%;
    background-color: ${(props) => props.theme.isActive ? 'blue' : 'burlywood'};
    color: ${(props) => props.theme.isActive ? 'yellow' : 'inherit'};
`;

const StyledIcon=styled.svg`
    width: 24%;
    height: 24%;
`;

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {
        name: 'Home',
        href: '/dashboard',
        icon: HomeIcon,
    },
    {
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'Customers',
        href: '/dashboard/customers',
        icon: UserGroupIcon
    },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {
                links.map((link) =>
                    <StyledDiv key={link.name}>
                        <ThemeProvider theme={{isActive: pathname===link.href}}>
                            <StyledLink href={link.href}>
                                <StyledIcon as={link.icon}/>
                                <span>{link.name}</span>
                            </StyledLink>
                        </ThemeProvider>
                    </StyledDiv>
                )
            }
        </>
    );
}
