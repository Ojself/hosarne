import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";

export const Dropdown = ({ navs }) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          aria-label='Dropdown Menu'
          className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-kb_white bg-kb_dark rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
        >
          <MenuIcon
            className='w-6 h-6   text-kb_gray hover:text-kb_dark'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-kb_white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1'>
            <Menu.Item key='hjem'>
              {({ active }) => (
                <NavLink
                  to={`/`}
                  className={`${
                    active ? "bg-kb_blue text-kb_white" : "text-kb_gray"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm uppercase`}
                >
                  Hjem
                </NavLink>
              )}
            </Menu.Item>
            {navs.map((nav) => {
              const formattedNav = nav.split(" ")[0];
              return (
                <Menu.Item key={nav}>
                  {({ active }) => (
                    <NavLink
                      to={`/${formattedNav}`}
                      className={`${
                        active ? "bg-kb_blue text-kb_white" : "text-kb_gray"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm uppercase`}
                    >
                      {nav}
                    </NavLink>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
