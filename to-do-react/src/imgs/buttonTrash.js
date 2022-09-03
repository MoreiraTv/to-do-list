const buttonTrash = ({className, color}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12.4576" cy="12.4576" r="12.4576" fill={color ? color : "#BFBFBF"} className={className}/>
      <g clip-path="url(#clip0_10_18)" className={className}>
        <path
          d="M3.08147 10.2426L18.924 5.25184M10.6662 12.2069L11.9139 16.1676M13.8347 11.2088L15.0824 15.1694M4.66572 9.74354L17.3398 5.75092L19.6366 17.4092C19.7159 17.8104 19.6443 18.2267 19.4357 18.5784C19.2271 18.9301 18.8961 19.1925 18.5061 19.3153L11.4847 21.5272C11.0947 21.6501 10.673 21.6248 10.3005 21.4562C9.92798 21.2876 9.63075 20.9875 9.46573 20.6133L4.66572 9.74354ZM6.60346 6.6489C6.64598 6.33681 6.77637 6.04324 6.97941 5.80245C7.18245 5.56165 7.44977 5.38355 7.75019 5.28891L12.259 3.86853C12.5595 3.7737 12.8808 3.7663 13.1853 3.8472C13.4899 3.92811 13.7651 4.09397 13.979 4.32544L15.7555 6.25L6.24998 9.24447L6.60346 6.6489V6.6489Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_18">
          <rect
            width="19.9321"
            height="19.9321"
            fill="white"
            transform="translate(0 5.98894) rotate(-17.4857)"
            className={className}
          />
        </clipPath>
      </defs>
    </svg>
  );
};


export default buttonTrash;