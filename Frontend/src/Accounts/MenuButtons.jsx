import { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import axios from "axios";

function MenuButton(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center relative">
      {/* Three-dot button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <EllipsisVerticalIcon className="h-6 w-6 text-gray-700" />
      </button>

      {/* Dropdown menu */}
      {open && (
  <div className="ml-3 bg-white rounded-xl shadow-lg border-1 w-50">
    <button
      type="button"
      onClick={props.onClick}
      className="w-full text-left px-3 py-1 text-red-600 hover:bg-red-50 rounded-xl"
    >
      Delete this account
    </button>
  </div>
)}
    </div>

               
  );
}

export default MenuButton;