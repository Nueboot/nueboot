// tslint:disable:max-line-length
import React from 'react';

export interface LogoProps {
  readonly color?: string;
}

const Logo = (props: LogoProps) => {
  const width = 105;
  const height = 19;
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.0664 17.5312L4.37109 7.60547V17.5312H0V0.46875H4.37109L10.0547 10.3828V0.46875H14.4141V17.5312H10.0664Z"
        transform="translate(0.390625 0.9375) scale(1)"
        fill="black"
      />
      <path
        d="M29.6902 11.4961C29.6902 12.8242 29.4167 13.9609 28.8698 14.9062C28.323 15.8438 27.5417 16.5547 26.5261 17.0391C25.5105 17.5234 24.3113 17.7656 22.9284 17.7656C21.5613 17.7656 20.362 17.5234 19.3308 17.0391C18.3073 16.5469 17.5105 15.832 16.9402 14.8945C16.3777 13.9492 16.0964 12.8164 16.0964 11.4961V0.46875H20.4909V11.4961C20.4909 12.457 20.6941 13.1562 21.1003 13.5938C21.5066 14.0234 22.1159 14.2383 22.9284 14.2383C23.7409 14.2383 24.3425 14.0234 24.7331 13.5938C25.1238 13.1562 25.3191 12.457 25.3191 11.4961V0.46875H29.6902V11.4961Z"
        transform="translate(0.390625 0.9375) scale(1)"
        fill="black"
      />
      <path
        d="M35.7905 4.00781V7.08984H42.1303V10.4883H35.7905V14.0039H43.3022V17.5312H34.185H31.4194V0.46875H35.7905H43.3491V4.00781H35.7905Z"
        transform="translate(0.390625 0.9375) scale(1)"
        fill="black"
      />
      <path
        d="M54.8752 8.89453C55.8048 9.12891 56.4845 9.57422 56.9142 10.2305C57.3439 10.8867 57.5588 11.625 57.5588 12.4453C57.5588 15.8359 55.383 17.5312 51.0314 17.5312H45.7814H44.1056V0.46875H50.3048C52.5002 0.46875 54.1994 0.871094 55.4025 1.67578C56.6056 2.47266 57.2072 3.65625 57.2072 5.22656C57.2072 6.0625 57.0236 6.80469 56.6564 7.45312C56.2892 8.10156 55.6955 8.58203 54.8752 8.89453ZM48.4767 4.00781V7.55859H50.2697C51.215 7.55859 51.8791 7.42578 52.2619 7.16016C52.6447 6.89453 52.8361 6.46484 52.8361 5.87109C52.8361 5.20703 52.6369 4.73047 52.2384 4.44141C51.84 4.15234 51.1955 4.00781 50.3048 4.00781H48.4767ZM51.0314 14.0039C51.7814 14.0039 52.3283 13.8516 52.672 13.5469C53.0236 13.2344 53.1994 12.8398 53.1994 12.3633C53.1994 11.1133 52.5353 10.4883 51.2072 10.4883H48.4767V14.0039H51.0314Z"
        transform="translate(0.390625 0.9375) scale(1)"
        fill="black"
      />
      <path
        d="M73.3047 9.08203C73.3047 10.793 72.9844 12.2891 72.3438 13.5703C71.7031 14.8438 70.8125 15.8242 69.6719 16.5117C68.5312 17.1914 67.2305 17.5312 65.7695 17.5312C64.2852 17.5312 62.9688 17.1914 61.8203 16.5117C60.6797 15.8242 59.7891 14.8438 59.1484 13.5703C58.5156 12.2891 58.1992 10.793 58.1992 9.08203V8.46094C58.1992 6.75 58.5156 5.25781 59.1484 3.98438C59.7891 2.70312 60.6797 1.71875 61.8203 1.03125C62.9609 0.34375 64.2695 0 65.7461 0C67.207 0 68.5078 0.34375 69.6484 1.03125C70.7969 1.71875 71.6914 2.70312 72.332 3.98438C72.9805 5.25781 73.3047 6.75 73.3047 8.46094V9.08203ZM68.8398 8.4375C68.8398 6.85938 68.5703 5.65625 68.0312 4.82812C67.5 3.99219 66.7383 3.57422 65.7461 3.57422C63.6914 3.57422 62.6641 5.19531 62.6641 8.4375V9.08203C62.6641 10.6602 62.9219 11.8711 63.4375 12.7148C63.9609 13.5508 64.7383 13.9688 65.7695 13.9688C66.7539 13.9688 67.5117 13.543 68.043 12.6914C68.5742 11.8398 68.8398 10.6367 68.8398 9.08203V8.4375Z"
        transform="translate(0.390625 0.9375) scale(1)"
        fill="black"
      />
      <path
        d="M89.4352 9.31641C89.4352 11.0273 89.1148 12.5234 88.4742 13.8047C87.8336 15.0781 86.943 16.0586 85.8023 16.7461C84.6617 17.4258 83.3609 17.7656 81.9 17.7656C80.4156 17.7656 79.0992 17.4258 77.9508 16.7461C76.8102 16.0586 75.9195 15.0781 75.2789 13.8047C74.6461 12.5234 74.3297 11.0273 74.3297 9.31641V8.69531C74.3297 6.98438 74.6461 5.49219 75.2789 4.21875C75.9195 2.9375 76.8102 1.95312 77.9508 1.26562C79.0914 0.578125 80.4 0.234375 81.8766 0.234375C83.3375 0.234375 84.6383 0.578125 85.7789 1.26562C86.9273 1.95312 87.8219 2.9375 88.4625 4.21875C89.1109 5.49219 89.4352 6.98438 89.4352 8.69531V9.31641ZM84.9703 8.67188C84.9703 7.09375 84.7008 5.89062 84.1617 5.0625C83.6305 4.22656 82.8688 3.80859 81.8766 3.80859C79.8219 3.80859 78.7945 5.42969 78.7945 8.67188V9.31641C78.7945 10.8945 79.0523 12.1055 79.568 12.9492C80.0914 13.7852 80.8688 14.2031 81.9 14.2031C82.8844 14.2031 83.6422 13.7773 84.1734 12.9258C84.7047 12.0742 84.9703 10.8711 84.9703 9.31641V8.67188Z"
        transform="translate(0.390625 0.9375) scale(1)"
        fill="black"
      />
      <path
        d="M104.049 4.00781H98.9634V17.5312H94.5806V4.00781H89.6236V0.46875H98.9634H104.049V4.00781Z"
        transform="translate(0.390625 0.9375) scale(1)"
        fill="black"
      />
    </svg>
  );
};

export default Logo;
