const Social = ({ name, className }) => (
  <svg className={`icon ${className}`}>
    <use xlinkHref={`/images/icons/socials.svg#${name}`} />
  </svg>
)

export default Social
