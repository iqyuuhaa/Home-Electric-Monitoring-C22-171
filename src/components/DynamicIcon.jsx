import * as Icons from "react-icons/fa";

const DynamicFaIcon = ({ name }) => {
    const IconComponent = Icons[name];
  
    if (!IconComponent) { // Return a default one
      return <Icons.FaBeer />;
    }
  
    return <IconComponent />;
};

export {
    DynamicFaIcon
}