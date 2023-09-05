/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";

import { Dialog } from "@headlessui/react";
// import { MenuIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Product", href: "/" },
  { name: "Features", href: "/" },
  { name: "Marketplace", href: "/" },
  { name: "Company", href: "/" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="bg-gray-100">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* Replace with your logo */}
              <img className="h-8 w-auto" src="../favicon.ico" alt="logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          {/* Dialog content */}
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Your main content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* Textarea and conversion buttons */}
          <textarea
            className="w-full px-2 border border-blue-400 border-2 rounded h-40 focus:outline-none focus:border-blue-800"
            placeholder="Enter text"
            value={text}
            onChange={handleOnChange}
          ></textarea>

          <button
            type="button"
            onClick={handleUpClick}
            className="inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          >
            Click Me To UpperCase
          </button>
          <button
            type="button"
            onClick={handleDownClick}
            className="inline-block rounded bg-blue-500 px-6 ml-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          >
            Click Me To LowerCase
          </button>

          {/* Word count and character count */}
          <div className="container mt-4">
            <h3>Summary</h3>
            <p>
              {text.split(" ").length} Words {text.length} Characters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//   /* <>
// import { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import Login from "./Login";

// import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   PhoneIcon,
//   PlayCircleIcon,
// } from "@heroicons/react/20/solid";

// const products = [
//   {
//     name: "Analytics",
//     description: "Get a better understanding of your traffic",
//     href: "/",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers",
//     href: "/",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers’ data will be safe and secure",
//     href: "/",
//     icon: FingerPrintIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools",
//     href: "/",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Automations",
//     description: "Build strategic funnels that will convert",
//     href: "/",
//     icon: ArrowPathIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch demo", href: "/", icon: PlayCircleIcon },
//   { name: "Contact sales", href: "/", icon: PhoneIcon },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Nav() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white">
//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
//         aria-label="Global"
//       >
//         <div className="flex lg:flex-1 flex items-center gap-x-1 text-sm font-bold leading-6 text-blue-400">
//           <Link to="/" className="-m-1.5 p-1.5 flex">
//             <span className="sr-only">Your Company</span>
//             <img className="h-12  w-auto" src="m 2.png" alt="logo" />
//           </Link>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>

//         <Popover.Group className="hidden lg:flex lg:gap-x-12">
//           <Link
//             to="/"
//             className="text-sm font-semibold leading-6 text-gray-900"
//           >
//             Features
//           </Link>
//           <Link
//             to="/contact"
//             className="text-sm font-semibold leading-6 text-gray-900"
//           >
//             Contact Us
//           </Link>
//           <Popover className="relative">
//             <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//               Product
//               <ChevronDownIcon
//                 className="h-5 w-5 flex-none text-gray-400"
//                 aria-hidden="true"
//               />
//             </Popover.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                 <div className="p-4">
//                   <div className="mt-2 space-y-2">
//                     {products.map((item) => (
//                       <div
//                         key={item.name}
//                         className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
//                       >
//                         <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                           <item.icon
//                             className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
//                             aria-hidden="true"
//                           />
//                         </div>
//                         <div className="flex-auto">
//                           <Link
//                             to={item.href}
//                             className="block font-semibold text-gray-900"
//                           >
//                             {item.name}
//                             <span className="absolute inset-0" />
//                           </Link>
//                           <p className="mt-1 text-gray-600">
//                             {item.description}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                     {callsToAction.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.href}
//                         className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                       >
//                         <item.icon
//                           className="h-5 w-5 flex-none text-gray-400"
//                           aria-hidden="true"
//                         />
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </Popover>

//           <Link
//             to="/About"
//             className="text-sm font-semibold leading-6 text-gray-900"
//           >
//             About Us
//           </Link>
//         </Popover.Group>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <Link to="/login" onClick={Login}>
//             <button
//               className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-8 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
//                           after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
//             >
//               <span className="hidden sm:flex relative z-[5]">
//                 Log in <span aria-hidden="true">&rarr;</span>
//               </span>
//               <span className="flex sm:hidden relative z-[5]">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </Link>
//         </div>
//       </nav>
//       <Dialog
//         as="div"
//         className="lg:hidden"
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//       >
//         <div className="fixed inset-0 z-10" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <Link to="/" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img className="h-12 w-auto" src="m 2.png" alt="logo" />
//             </Link>
//             <button
//               type="button"
//               className="-m-2.5 shadow flex rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Link
//                   to="/"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Features
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Contact Us
//                 </Link>
//                 <Disclosure as="div" className="-mx-3">
//                   {({ open }) => (
//                     <>
//                       <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                         Product
//                         <ChevronDownIcon
//                           className={classNames(
//                             open ? "rotate-180" : "",
//                             "h-5 w-5 flex-none"
//                           )}
//                           aria-hidden="true"
//                         />
//                       </Disclosure.Button>
//                       <Disclosure.Panel className="mt-2 space-y-2">
//                         {[...products, ...callsToAction].map((item) => (
//                           <Disclosure.Button
//                             key={item.name}
//                             as="a"
//                             to={item.href}
//                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </Disclosure.Button>
//                         ))}
//                       </Disclosure.Panel>
//                     </>
//                   )}
//                 </Disclosure>

//                 <Link
//                   to="/About"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   About Us
//                 </Link>
//               </div>
//               <div className="py-6">
//                 <Link to="/login" onClick={Login}>
//                   <button
//                     className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-8 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
//                           after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
//                   >
//                     <span className="hidden sm:flex relative z-[5]">
//                       Log in <span aria-hidden="true">&rarr;</span>
//                     </span>
//                     <span className="flex sm:hidden relative z-[5]">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="w-5 h-5"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </header>
//   );
// }
// </> */
//
