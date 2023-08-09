import { twMerge } from 'tailwind-merge';

const Button = (props) => {
  const { children, variant, className } = props;
  const color = {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500"
  }
  const style = twMerge('flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2'
    , color[variant]
    , className);

  return (
    <button {...props} className={style}>
      {children}
    </button>
  )
}
export default Button;