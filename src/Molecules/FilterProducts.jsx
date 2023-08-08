import React from "react";

export default function FilterProducts({ setSelectedCategory }) {
  return (
    <>
      <main className="flex flex-col md:flex-row justify-center items-center gap-2 pt-14 pb-10">
        <section
          onClick={() => {
            setSelectedCategory(null);
          }}
          className="rounded-md border p-5 w-full md:w-auto text-center transition duration-150 hover:cursor-pointer hover:bg-base-200"
        >
          All
        </section>
        <section
          onClick={() => {
            setSelectedCategory("men's clothing");
          }}
          className="rounded-md border p-5 w-full md:w-auto text-center transition duration-150 hover:cursor-pointer hover:bg-base-200"
        >
          men's clothing
        </section>
        <section
          onClick={() => {
            setSelectedCategory("women's clothing");
          }}
          className="rounded-md border p-5 w-full md:w-auto text-center transition duration-150 hover:cursor-pointer hover:bg-base-200"
        >
          women's clothing
        </section>
        <section
          onClick={() => {
            setSelectedCategory("jewelery");
          }}
          className="rounded-md border p-5 w-full md:w-auto text-center transition duration-150 hover:cursor-pointer hover:bg-base-200"
        >
          jewelery
        </section>
        <section
          onClick={() => {
            setSelectedCategory("electronics");
          }}
          className="rounded-md border p-5 w-full md:w-auto text-center transition duration-150 hover:cursor-pointer hover:bg-base-200"
        >
          electronics
        </section>
      </main>
    </>
  );
}
