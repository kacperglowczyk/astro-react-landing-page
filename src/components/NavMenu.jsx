import { Menu, Transition, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const NavMenu = () => {
  return (
    <nav>
      <ul className="hidden lg:flex lg:space-x-7 lg:ml-14">
        <li>
          <Menu as="div" className="relative">
            <MenuButton className="hover:text-almost-black flex items-center">
              Features
              <img
                className="inline-block ml-1"
                src="images/icon-arrow-down.svg"
                alt="Icon arrow down"
              />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <MenuItems className="absolute right-0 mt-4 w-40 py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ isActive }) => (
                    <a
                      className={`block w-full text-left px-6 py-3 text-base text-gray-600 ${
                        isActive ? "bg-gray-100 text-gray-900" : ""
                      } data-[focus]:bg-gray-100`}
                      href="/todo-list"
                    >
                      <img
                        src="images/icon-todo.svg"
                        className="inline w-4 mr-3"
                        alt="Todo List Icon"
                      />
                      Todo list
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ isActive }) => (
                    <a
                      className={`block w-full text-left px-6 py-3 text-base text-gray-600 ${
                        isActive ? "bg-gray-100 text-gray-900" : ""
                      } data-[focus]:bg-gray-100`}
                      href="/calendar"
                    >
                      <img
                        src="images/icon-calendar.svg"
                        className="inline w-4 mr-3"
                        alt="Calendar Icon"
                      />
                      Calendar
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ isActive }) => (
                    <a
                      className={`block w-full text-left px-6 py-3 text-base text-gray-600 ${
                        isActive ? "bg-gray-100 text-gray-900" : ""
                      } data-[focus]:bg-gray-100`}
                      href="/reminders"
                    >
                      <img
                        src="images/icon-reminders.svg"
                        className="inline w-4 mr-3"
                        alt="Reminders Icon"
                      />
                      Reminders
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ isActive }) => (
                    <a
                      className={`block w-full text-left px-6 py-3 text-base text-gray-600 ${
                        isActive ? "bg-gray-100 text-gray-900" : ""
                      } data-[focus]:bg-gray-100`}
                      href="/planning"
                    >
                      <img
                        src="images/icon-planning.svg"
                        className="inline w-4 mr-3"
                        alt="Planning Icon"
                      />
                      Planning
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </li>
        <li>
          <Menu as="div" className="relative">
            <MenuButton className="hover:text-almost-black flex items-center">
              Company
              <img
                className="inline-block ml-1"
                src="images/icon-arrow-down.svg"
                alt="Icon arrow down"
              />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <MenuItems className="absolute left-0 mt-4 w-[8rem] py-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  {({ isActive }) => (
                    <a
                      className={`block w-full text-left px-6 py-3 text-base text-gray-600 ${
                        isActive ? "bg-gray-100 text-gray-900" : ""
                      } data-[focus]:bg-gray-100`}
                      href="/history"
                    >
                      History
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ isActive }) => (
                    <a
                      className={`block w-full text-left px-6 py-3 text-base text-gray-600 ${
                        isActive ? "bg-gray-100 text-gray-900" : ""
                      } data-[focus]:bg-gray-100`}
                      href="/our-team"
                    >
                      Our Team
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ isActive }) => (
                    <a
                      className={`block w-full text-left px-6 py-3 text-base text-gray-600 ${
                        isActive ? "bg-gray-100 text-gray-900" : ""
                      } data-[focus]:bg-gray-100`}
                      href="/blog"
                    >
                      Blog
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </li>
        <li className="cursor-pointer hover:text-almost-black">Careers</li>
        <li className="cursor-pointer hover:text-almost-black">About</li>
      </ul>
    </nav>
  );
};

export default NavMenu;
