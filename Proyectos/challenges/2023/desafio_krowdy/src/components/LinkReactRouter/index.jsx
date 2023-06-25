import { CustomLink } from "./styles";

export const LinkReactRouter = ({
  linkClass = "",
  to,
  text,
  color = "",
  background = "",
  icon = "",
  wrapLink = "",
  padding = "",
  borderRadius = ""
}) => {
  return (
    <div className={wrapLink}>
      <CustomLink
        className={linkClass}
        color={color}
        background={background}
        padding={padding}
        to={to}
        borderradius={borderRadius}
      >
        {icon} {text}
      </CustomLink>
    </div>
  );
};
