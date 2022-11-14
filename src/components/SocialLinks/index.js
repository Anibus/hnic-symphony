import React from 'react';
import { Link, HStack, Box } from '@chakra-ui/react';
import { navItems } from './constants';

const socialLinkItems = navItems.filter(item => item.categories.includes('social'));

function Icon({ name, className, size }) {
    let iconContent = null;
    switch (name) {
        case 'Twitter':
            iconContent = (
                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                >
                    <path
                        className="symphonyFill"
                        d="M256 0a256 256 0 110 512 256 256 0 010-512zm-45 392c113 0 175-94 175-175v-8c12-9 22-20 31-32-11 5-23 8-36 10 13-8 23-20 27-34-11 7-25 12-39 15a62 62 0 00-105 56c-51-3-96-27-126-65a62 62 0 0019 83c-10-1-20-3-28-8v1c0 30 21 54 49 60a61 61 0 01-27 1c7 25 30 42 57 43a124 124 0 01-91 25c27 18 59 28 94 28z"
                    />
                </svg>
            );
            break;
        case 'Youtube':
            iconContent = (
                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                >
                    <path
                        className="symphonyFill"
                        d="M256 0a256 256 0 110 512 256 256 0 010-512zm153 179c-3-14-14-25-28-28-25-7-125-7-125-7s-100 0-125 7c-14 3-25 14-28 28-7 25-7 77-7 77s0 52 7 77c3 14 14 25 28 28 25 7 125 7 125 7s100 0 125-7c14-3 25-14 28-28 7-25 7-77 7-77s0-52-7-77zM224 304v-96l83 48-83 48z"
                    />
                </svg>
            );
            break;
        case 'Discord':
            iconContent = (
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="256" cy="256" r="256" className="symphonyFill" />
                    <path
                        d="M372 169s-33-26-72-29l-4 7c36 8 52 21 69 36-29-15-58-29-109-29s-80 14-109 29c17-15 37-29 69-36l-3-7c-42 3-73 29-73 29s-37 54-44 160c38 43 95 43 95 43l12-16c-21-7-43-19-63-42 23 18 59 37 116 37s93-19 117-37c-20 23-43 35-63 42l12 16s57 0 94-43c-6-106-44-160-44-160zM209 300c-14 0-26-13-26-29s12-30 26-30 25 13 25 30-11 29-25 29zm94 0c-14 0-25-13-25-29s11-30 25-30 26 13 26 30-12 29-26 29z"
                        fill="#FFF"
                    />
                </svg>
            );
            break;
        case 'Github':
            iconContent = (
                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                >
                    <path
                        className="symphonyFill"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                </svg>
            );
            break;
        case 'Blog':
            iconContent = (
                <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                >
                    <path
                        className="symphonyFill"
                        d="M511 256a255 255 0 10-255 255c141 0 255-114 255-255zm-229 0c0 63-51 114-113 114S56 319 56 256s51-114 113-114 113 51 113 114zm123 0c0 59-25 107-56 107s-56-48-56-107 25-107 56-107 56 48 56 107zm51 0c0 53-9 96-20 96s-20-43-20-96 9-96 20-96 20 43 20 96z"
                    />
                </svg>
            );
            break;
        default:
    }
    return (
        <Box background="#fff" w={size || '25px'} h={size || '25px'} borderRadius="100%">
            <Box className="socialIcon">{iconContent}</Box>
        </Box>
    );
}

function SocialLinks({ size, spacing, ...rest }) {
    return (
        <HStack spacing={spacing || 10} {...rest}>
            {socialLinkItems.map(item => (
                <Link href={item.url} key={item.url} target="_blank" rel="noopenner noreferrrer">
                    <Icon name={item.name} className="socialIcon" size={size || 30} />
                </Link>
            ))}
        </HStack>
    );
}

export default SocialLinks;
