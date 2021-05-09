import React from 'react';
interface SVGProps {
  width: number;
  height: number;
  color: string;
}
const Logo = ({width, height, color}: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
    <path
      fill={color}
      d="M472.303 57.688a7.501 7.501 0 10-9.859 11.309c67.274 58.655 28.914 168.481-52.619 168.133-24.939-.134-48.453-11.138-64.514-30.193-64.335-76.327-134.174-98.624-153.712-110.089-2.857-1.399-4.103-5.002-2.43-7.584 2.388-3.685-5.35.519 184.298-42.684 20.858-4.653 42.055-2.869 61.301 5.171a7.503 7.503 0 005.783-13.845c-22.125-9.241-46.454-11.307-70.352-5.968L189.266 72.33c-18.805 4.196-21.568 29.516-4.266 37.991 19.129 11.204 87.026 32.953 148.84 106.287 19.012 22.556 46.902 35.527 76.44 35.527 94.783-.004 139.85-126.59 62.023-194.447zM194.192 282.595a591.72 591.72 0 01-16.733-14.183c-10.811-9.575-33.91-26.725-61.606-58.726a7.5 7.5 0 00-10.581-.763 7.5 7.5 0 00-.763 10.581c14.626 16.898 32.556 35.854 80.203 74.717 26.626 21.713 39.204 54.991 33.645 89.019-12.488 76.444-104.11 102.735-163.432 54.901-28.801-23.223-43.451-59.02-39.191-95.757l22.52-194.194c.512-4.427 4.357-7.556 8.82-6.81 8.269 1.368 4.449 8.061 35.252 50.242a7.497 7.497 0 0010.481 1.634 7.499 7.499 0 001.634-10.481c-18.231-24.967-28.592-45.112-29.428-46.327-11.85-17.3-39.17-11.495-41.663 10.015L.829 340.656c-4.857 41.883 11.844 82.693 44.677 109.166 68.428 55.176 173.362 23.324 187.656-64.16 6.435-39.39-8.133-77.92-38.97-103.067zM424.799 327.073l-109.994-59.758c-15.59-8.468-32.979 6.718-27.167 23.404 3.295 11.51 22.703 53.875 25.665 118.19.627 13.62 4.78 26.794 12.011 38.099a7.5 7.5 0 0010.361 2.277 7.5 7.5 0 002.277-10.361c-5.898-9.222-9.149-19.552-9.663-30.704-3.078-66.82-23.238-111.073-26.484-122.434-1.309-3.756 2.255-7.227 5.835-5.288l109.995 59.758c47.147 25.616 48.433 91.634 4.527 118.603-18.782 11.568-41.677 12.098-61.246 1.421a7.503 7.503 0 00-7.185 13.171c24.276 13.246 53.74 13.086 78.502-3.221 52.281-34.872 48.22-112.923-7.434-143.157z"
    />
  </svg>
);

export { Logo };
