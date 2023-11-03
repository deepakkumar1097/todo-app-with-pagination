import React from "react";

export default function Header() {
  return (
    <div className="header-container flex flex-col items-center">
      <h1 className="text-4xl subpixel-antialiased font-medium text-center">
        {" "}
        Todo with Pagination
      </h1>
      <p className="my-4 w-full lg:w-[60%] antialiased text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        consectetur molestias dolore veniam amet hic asperiores at eligendi?
        Dolore, aliquam.
      </p>
    </div>
  );
}
