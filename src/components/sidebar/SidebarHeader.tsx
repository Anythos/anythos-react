export function SidebarHeader() {
  return (
    <>
      <div className="flex flex-col items-center mt-6 mb-3">
        {/*TODO:(Optional) Photo Upload Functionality*/}
        <img
          className="object-cover w-20 h-20 rounded-full items-center text-white"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="Photo"
        />
        <h4 className="mx-2 mt-4 mb-5 font-medium text-sm text-gray-400 hover:underline">
          Name Surname
        </h4>
      </div>
    </>
  );
}
