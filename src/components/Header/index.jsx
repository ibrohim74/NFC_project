import React from "react";
import { useState } from "react";
import { Img, Text } from "components";
import { handleSectionNavigation } from "utils";

const Header = (props) => {
  // state hook to store the navbar open or close status
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the navbar view
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row items-center justify-center max-w-[1080px] w-full">
          <div className="flex flex-col h-[29px] md:h-auto items-center justify-start px-[10px]">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtRubikMedium24"
            >
              LOGO(NFC PROJECT)
            </Text>
          </div>
          <ul className="flex flex-1 sm:flex-col flex-row gap-14 h-full items-center justify-center w-full common-row-list mdCstm:hidden">
            {" "}
            {/* Add sm:hidden here to hide the list on small screens */}
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
                onClick={() => handleSectionNavigation("block1")}
              >
                <Text size="txtRubikRegular16">Product</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
                onClick={() => handleSectionNavigation("block2")}
              >
                <Text size="txtRubikRegular16">Features</Text>
              </a>
            </li>
            {/* <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
              >
                <Text size="txtRubikRegular16">Applications</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="text-base text-black-900 tracking-[0.16px]"
              >
                <Text size="txtRubikRegular16">Contacts</Text>
              </a>
            </li> */}
          </ul>

          <div className="flex flex-row gap-7 h-7 md:h-auto items-center justify-end mdCstm:hidden">
            {" "}
            {/* Add sm:hidden here to hide the icons on small screens */}
            <div className="flex flex-row h-7 md:h-auto items-center justify-start sm:pr-5 pr-6">
              <Img
                className="h-full w-6"
                src="images/img_globe.svg"
                alt="globe"
              />
              <Text
                className="text-base text-black-900 w-auto"
                size="txtMontserratRomanMedium16"
              >
                Uzb
              </Text>
            </div>
            <Img className="h-full w-4" src="images/img_user.svg" alt="user" />
            <Img
              className="h-full w-[18px]"
              src="images/img_cart.svg"
              alt="cart"
            />
          </div>
          {/* burger icon to show or hide the navbar */}
          <div className="hidden mdCstm:flex" onClick={toggleNavbar}>
            {/* SVG element for the burger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* conditional rendering of the icon based on isOpen state */}
              {isOpen ? (
                // X icon when isOpen is true
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // burger icon when isOpen is false
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </div>
          {isOpen ? (
            <div className="flex flex-row items-center justify-center max-w-[1080px] w-full">
              <ul className="flex flex-1 sm:flex-col flex-row gap-14 h-full items-center justify-center w-full common-row-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-black-900 tracking-[0.16px]"
                    onClick={() => handleSectionNavigation("block1")}
                  >
                    <Text size="txtRubikRegular16">Product</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-black-900 tracking-[0.16px]"
                    onClick={() => handleSectionNavigation("block2")}
                  >
                    <Text size="txtRubikRegular16">Features</Text>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

// SECOND VERSION. IT FUNCTIONS BUT THERE ARE SOME ISSUES
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Img, Text } from "components";
// import { handleSectionNavigation } from "utils";

// const Header = (props) => {
//   // state hook to store the navbar open or close status
//   const [isOpen, setIsOpen] = useState(false);

//   // function to toggle the navbar view
//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* add props.className here */}
//       <header className={`${props.className}`}>
//         <div className="flex flex-row items-center justify-center max-w-[1080px] w-full">
//           <div className="flex flex-col h-[29px] md:h-auto items-center justify-start">
//             <Text
//               className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
//               size="txtRubikMedium24"
//             >
//               LOGO(NFC PROJECT)
//             </Text>
//           </div>
//           {/* burger icon to show or hide the navbar */}
//           <div className="hidden sm:flex" onClick={toggleNavbar}>
//             {/* SVG element for the burger icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {/* conditional rendering of the icon based on isOpen state */}
//               {isOpen ? (
//                 // X icon when isOpen is true
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 // burger icon when isOpen is false
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </div>
//           {/* navbar menu that changes its layout based on screen width */}
//           <ul
//             className={`${
//               isOpen ? "flex" : "hidden"
//             } flex-1 sm:flex-col flex-row gap-14 h-full  items-center justify-center w-full common-row-list`}
//           >
//             <li>
//               <NavLink
//                 to="/"
//                 className="text-base text-black-900 tracking-[0.16px]"
//                 onClick={() => handleSectionNavigation("block1")}
//               >
//                 <Text size="txtRubikRegular16">ProductS</Text>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/features"
//                 className="text-base text-black-900 tracking-[0.16px]"
//                 onClick={() => handleSectionNavigation("block2")}
//               >
//                 <Text size="txtRubikRegular16">FeaturesS</Text>
//               </NavLink>
//             </li>
//           </ul>
//           {/* navbar menu that shows only on medium and large screens */}
//           <ul className="sm:hidden flex md:flex flex-row gap-14 h-full items-center justify-center w-full common-row-list">
//             <li>
//               <NavLink
//                 to="/"
//                 className="text-base text-black-900 tracking-[0.16px]"
//                 onClick={() => handleSectionNavigation("block1")}
//               >
//                 <Text size="txtRubikRegular16">ProductL</Text>
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/features"
//                 className="text-base text-black-900 tracking-[0.16px]"
//                 onClick={() => handleSectionNavigation("block2")}
//               >
//                 <Text size="txtRubikRegular16">FeaturesL</Text>
//               </NavLink>
//             </li>
//           </ul>
//           <div className="flex flex-row gap-7 h-7 md:h-auto items-center justify-end">
//             <div className="flex flex-row h-7 md:h-auto items-center justify-start sm:pr-5 pr-6">
//               <Img
//                 className="h-full w-6"
//                 src="images/img_globe.svg"
//                 alt="globe"
//               />
//               <Text
//                 className="text-base text-black-900 w-auto"
//                 size="txtMontserratRomanMedium16"
//               >
//                 Uzb
//               </Text>
//             </div>
//             <Img className="h-full w-4" src="images/img_user.svg" alt="user" />
//             <Img
//               className="h-full w-[18px]"
//               src="images/img_cart.svg"
//               alt="cart"
//             />
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// Header.defaultProps = {};

// export default Header;

// FIRST DEFAULT VERSION
// import React from "react";

// import { Img, Text } from "components";
// import { handleSectionNavigation } from "utils";

// const Header = (props) => {
//   return (
//     <>
//       <header className={props.className}>
//         <div className="flex flex-row items-center justify-center max-w-[1080px] w-full">
//           <div className="flex flex-col h-[29px] md:h-auto items-center justify-start">
//             <Text
//               className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
//               size="txtRubikMedium24"
//             >
//               LOGO(NFC PROJECT)
//             </Text>
//           </div>
//           <ul className="flex flex-1 sm:flex-col flex-row gap-14 h-full md:hidden items-center justify-center w-full common-row-list">
//             <li>
//               <a
//                 href="javascript:"
//                 className="text-base text-black-900 tracking-[0.16px]"
//                 onClick={() => handleSectionNavigation("block1")}
//               >
//                 <Text size="txtRubikRegular16">Product</Text>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:"
//                 className="text-base text-black-900 tracking-[0.16px]"
//                 onClick={() => handleSectionNavigation("block2")}
//               >
//                 <Text size="txtRubikRegular16">Features</Text>
//               </a>
//             </li>
//             {/* <li>
//               <a
//                 href="javascript:"
//                 className="text-base text-black-900 tracking-[0.16px]"
//               >
//                 <Text size="txtRubikRegular16">Applications</Text>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:"
//                 className="text-base text-black-900 tracking-[0.16px]"
//               >
//                 <Text size="txtRubikRegular16">Contacts</Text>
//               </a>
//             </li> */}
//           </ul>
//           <div className="flex flex-row gap-7 h-7 md:h-auto items-center justify-end">
//             <div className="flex flex-row h-7 md:h-auto items-center justify-start sm:pr-5 pr-6">
//               <Img
//                 className="h-full w-6"
//                 src="images/img_globe.svg"
//                 alt="globe"
//               />
//               <Text
//                 className="text-base text-black-900 w-auto"
//                 size="txtMontserratRomanMedium16"
//               >
//                 Uzb
//               </Text>
//             </div>
//             <Img className="h-full w-4" src="images/img_user.svg" alt="user" />
//             <Img
//               className="h-full w-[18px]"
//               src="images/img_cart.svg"
//               alt="cart"
//             />
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// Header.defaultProps = {};

// export default Header;
