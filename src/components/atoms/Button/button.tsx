import "./button.css";

interface ComponentProps {
  children?: any;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, onClick, className }: ComponentProps): JSX.Element {
  // const classes = useStyles();
  return (
    <>
      <button onClick={onClick} className={className} type="button">
        {children}
      </button>
      <p />
    </>
  );
}

Button.defaultProps = {
  children: "button",
  className: "btn",
  onClick: false,
};

Button.whyDidYouRender = true;
export default Button;
