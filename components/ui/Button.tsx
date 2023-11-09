type ButtonProps = {
  title: string;
  variant?: string;
};

function Button({ title, variant }: ButtonProps) {
  return <button className={`${variant} text-[15px] cursor-pointer`}>{title}</button>;
}

export default Button;
