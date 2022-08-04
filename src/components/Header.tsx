import Icon from "./Icon";
import { List, X } from "phosphor-react";

interface sidebarProps {
  open: boolean;
  setOpen: Function;
}

function Header(props: sidebarProps) {
  return (
    <div className="w-full bg-gray-700 flex md:justify-center justify-around text-center items-center py-5 border-b-2 border-gray-500">
      <Icon />

      {props.open ? (
        <X
          onClick={() => {
            props.setOpen(!props.open);
          }}
          size={40}
          className="md:hidden text-red-600"
        />
      ) : (
        <List
          onClick={() => {
            props.setOpen(!props.open);
          }}
          size={40}
          className="md:hidden text-green-500"
        />
      )}
    </div>
  );
}

export default Header;
