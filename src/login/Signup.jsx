
export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-100">
      <form action="POST">
        <div className="w-[380px] bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full  px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
            <p className="ml-30 mt-0.5">
              <i>
                Forgotten password,{" "}
                <button className="cursor-pointer text-red-700">
                  click here
                </button>
              </i>
            </p>
          </div>
          <div className="flex justify-between ">
            <button
              type="submit"
              className="w-20  bg-blue-800 text-white py-2 rounded-md cursor-pointer"
            >
              Login
            </button>
            <button
              type="submit"
              className="w-20 ml-20 bg-black text-white py-2 rounded-md cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
