import { useState } from 'react';
import { Transition } from '@headlessui/react';

const Sidebar = ({ open, setOpen }) => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <>
      <Transition show={open}>
        {/* Backdrop */}
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />
        </Transition.Child>

        {/* Slide-in sidebar from right */}
        <Transition.Child
          enter="transition-transform ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 w-64 bg-white p-6 z-50 shadow-lg">
            {/* Close Icon */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setOpen(false)}>
                <img src="images/icon-close-menu.svg" alt="Close Menu" />
              </button>
            </div>

            <nav>
              <ul className="space-y-4">
                {/* Features Dropdown */}
                <li>
                  <button
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    className="hover:text-almost-black flex items-center w-full justify-between"
                  >
                    Features
                    <img
                      className={`ml-1 transform transition-transform ${
                        featuresOpen ? 'rotate-180' : ''
                      }`}
                      src="images/icon-arrow-down.svg"
                      alt="Icon arrow down"
                    />
                  </button>
                  <Transition
                    show={featuresOpen}
                    enter="transition-max-height ease-in-out duration-300"
                    enterFrom="max-h-0"
                    enterTo="max-h-screen"
                    leave="transition-max-height ease-in-out duration-300"
                    leaveFrom="max-h-screen"
                    leaveTo="max-h-0"
                    className="overflow-hidden"
                  >
                    <ul className="mt-2 space-y-2 pl-4">
                      <li>
                        <a href="/todo-list" onClick={() => setOpen(false)}>
                          <img
                            src="images/icon-todo.svg"
                            className="inline w-4 mr-3"
                            alt="Todo List Icon"
                          />
                          Todo list
                        </a>
                      </li>
                      <li>
                        <a href="/calendar" onClick={() => setOpen(false)}>
                          <img
                            src="images/icon-calendar.svg"
                            className="inline w-4 mr-3"
                            alt="Calendar Icon"
                          />
                          Calendar
                        </a>
                      </li>
                      <li>
                        <a href="/reminders" onClick={() => setOpen(false)}>
                          <img
                            src="images/icon-reminders.svg"
                            className="inline w-4 mr-3"
                            alt="Reminders Icon"
                          />
                          Reminders
                        </a>
                      </li>
                      <li>
                        <a href="/planning" onClick={() => setOpen(false)}>
                          <img
                            src="images/icon-planning.svg"
                            className="inline w-4 mr-3"
                            alt="Planning Icon"
                          />
                          Planning
                        </a>
                      </li>
                    </ul>
                  </Transition>
                </li>

                {/* Company Dropdown */}
                <li>
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="hover:text-almost-black flex items-center w-full justify-between"
                  >
                    Company
                    <img
                      className={`ml-1 transform transition-transform ${
                        companyOpen ? 'rotate-180' : ''
                      }`}
                      src="images/icon-arrow-down.svg"
                      alt="Icon arrow down"
                    />
                  </button>
                  <Transition
                    show={companyOpen}
                    enter="transition-max-height ease-in-out duration-300"
                    enterFrom="max-h-0"
                    enterTo="max-h-screen"
                    leave="transition-max-height ease-in-out duration-300"
                    leaveFrom="max-h-screen"
                    leaveTo="max-h-0"
                    className="overflow-hidden"
                  >
                    <ul className="mt-2 space-y-2 pl-4">
                      <li>
                        <a href="/history" onClick={() => setOpen(false)}>
                          History
                        </a>
                      </li>
                      <li>
                        <a href="/our-team" onClick={() => setOpen(false)}>
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a href="/blog" onClick={() => setOpen(false)}>
                          Blog
                        </a>
                      </li>
                    </ul>
                  </Transition>
                </li>

                <li>
                  <a href="/careers" onClick={() => setOpen(false)}>
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={() => setOpen(false)}>
                    About
                  </a>
                </li>

                {/* Login and Register Buttons */}
                <li className="mt-4">
                  <div className="hover-text-almost-black cursor-pointer text-center">Login</div>
                </li>
                <li>
                  <button className="border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2 w-full">
                    Register
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};

export default Sidebar;
