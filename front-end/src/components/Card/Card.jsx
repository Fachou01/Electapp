const Card = ({ extendStyle, color, children }) => {

  const colorPalette = {
    red: "bg-red-600",
    green: "bg-green-600",
    blue: "bg-blue-600",
    gray: "bg-light-300",
    primary: "bg-primary-100",
    secondary: "bg-secondary-100"
  }
  return (
    <div className={`${colorPalette[color] ? colorPalette[color] : "bg-light-100"} ${extendStyle && extendStyle}`} >
      {children}
    </div>
  )
}
export default Card;