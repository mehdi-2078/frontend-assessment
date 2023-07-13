import "./button.css";

export const Button = ({ children }) => {
  return <button className="bg-blue-600 text-white py-2.5 rounded-lg">{children}</button>;
};

export default Button;
