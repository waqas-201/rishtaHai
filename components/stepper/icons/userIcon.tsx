import React from "react";

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <circle cx="40" cy="40" r="40" fill="#FEF0E6" />
        <g filter="url(#filter0_d)">
            <path
                d="M39.8057 40.9698C44.1182 40.9698 47.6146 36.7233 47.6146 31.485C47.6146 26.2465 46.4667 22 39.8057 22C33.1447 22 31.9966 26.2465 31.9966 31.485C31.9966 36.7233 35.4929 40.9698 39.8057 40.9698Z"
                fill="#FBB884"
            />
            <g filter="url(#filter1_d)">
                <path d="M25.0983 55.482C25.096 55.1046 25.0937 55.3757 25.0983 55.482V55.482Z" fill="#FBB884" />
            </g>
            <g filter="url(#filter2_d)">
                <path d="M54.595 55.7017C54.6024 55.6143 54.5975 55.0951 54.595 55.7017V55.7017Z" fill="#FBB884" />
            </g>
            <path
                d="M54.5379 55.0693C54.3933 45.9439 53.2015 43.3437 44.0816 41.6978C44.0816 41.6978 42.7978 43.3336 39.8056 43.3336C36.8134 43.3336 35.5294 41.6978 35.5294 41.6978C26.509 43.3257 25.2448 45.8874 25.0785 54.7728C25.0649 55.4984 25.0586 55.5365 25.0562 55.4523C25.0567 55.6101 25.0574 55.902 25.0574 56.411C25.0574 56.411 27.2701 57.8807 39.8471 57.8807C52.4239 57.8807 54.5539 56.411 54.5539 56.411C54.5539 56.084 54.5541 55.8565 54.5544 55.7018C54.552 55.7539 54.5471 55.653 54.5379 55.0693Z"
                fill="#FBB884"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.7335 39.5566C35.7335 39.5566 35.943 39.9401 35.8129 41.3938C35.7857 41.6983 35.5295 41.6491 35.5295 41.6975C35.5295 42.6372 35.1494 44.5415 35.1494 44.5415L44.4382 44.1343C44.4382 44.1343 44.2648 41.7528 44.0816 41.6975C43.8984 41.6422 43.8984 41.3938 43.8984 41.3938C43.8984 41.3938 43.7625 40.1728 43.8984 39.5566C44.0343 38.9404 35.7335 39.5566 35.7335 39.5566Z"
                fill="#FBB884"
            />
        </g>
        <defs>
            <filter id="filter0_d" x="16.0562" y="19" width="43.543" height="49.8809" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-2" dy="4" />
                <feGaussianBlur stdDeviation="3.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.721569 0 0 0 0 0.517647 0 0 0 0.582874 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="filter1_d" x="19.0957" y="53.2881" width="8.00244" height="8.19385" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-2" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.737255 0 0 0 0 0.835294 0 0 0 0.333593 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <filter id="filter2_d" x="48.5952" y="53.4116" width="8.00391" height="8.29004" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-2" dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.737255 0 0 0 0 0.835294 0 0 0 0.333593 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
        </defs>
    </svg>
);

export default UserIcon;
