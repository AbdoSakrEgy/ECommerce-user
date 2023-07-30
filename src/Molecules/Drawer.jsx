import React from "react";
import { Icon } from "@iconify/react";

export default function Drawer() {
  return (
    <>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
          <Icon htmlFor="my-drawer-4" icon="ci:shopping-bag-02" width="40" />
          </label>

        </div>
        <div className="drawer-side">
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
          <label htmlFor="my-drawer-4" className="drawer-overlay">close</label>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
