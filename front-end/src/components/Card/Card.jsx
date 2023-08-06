const Card = ({ color, children }) => {

  const colorPalette = {
    red: "bg-red-600",
    green: "bg-green-600",
    blue: "bg-blue-600"
  }
  return (
    <div className={`border rounded-lg shadow p-4 ${colorPalette[color] ? colorPalette[color] : "bg-white"}`}>
      {children}
    </div>
  )
}
export default Card;