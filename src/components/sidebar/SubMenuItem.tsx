export const SubMenuItem = ({ name }: { name: string }) => {
  return (
    <>
      <div className="text-left text-sm w-4/5 mx-auto text-gray-400 font-semibold hover:text-black">
        <h1 className="cursor-pointer items-center pl-8 py-2 my-1 hover:bg-blue-200 rounded-md">
          {name}
        </h1>
      </div>
    </>
  );
};
