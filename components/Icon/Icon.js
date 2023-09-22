const Icon = (props) => (
  <svg className={`icon icon-${props.icon}`}>
    <use xlinkHref={`${props.url}#${props.icon}`} />
  </svg>
)

export default Icon
