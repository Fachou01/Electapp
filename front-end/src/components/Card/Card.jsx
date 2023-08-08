const Card = ({ extendStyle, color, children }) => {

  const colorPalette = {
    red: "bg-red-600",
    green: "bg-green-600",
    blue: "bg-blue-600"
  }
  return (
    <div className={`${colorPalette[color] ? colorPalette[color] : "bg-white"} ${extendStyle && extendStyle}`} >
      {children}
    </div>
  )
}
export default Card;