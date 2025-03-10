const InstructionPage = () => {
  return (
    <div className="font-poppins flex w-full justify-center">
      <div className="no-scrollbar flex h-[calc(100vh-20vh)] w-[90%] flex-col overflow-y-scroll">
        <div className="flex items-center justify-between border-b pb-2">
          <h1 className="text-5xl font-medium">Special Instructions</h1>
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 p-5">
            <span className="text-3xl font-semibold">1</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-10">
            <img
              src="/espresso.png"
              alt=""
              className="h-44 w-44 rounded-full object-contain"
            />
            <h2 className="text-[1.75rem] font-bold">Espresso</h2>
          </div>
          <select
            name=""
            id=""
            className="h-[60px] w-[280px] rounded-lg px-5 text-lg text-gray-600 shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]"
          >
            <option>Process</option>
            <option value="new-order">New Order</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="border-b py-5">
          <h2 className="text-2xl font-semibold">Customize</h2>
          <span>Whole Milk</span>
          <br />
          <span>Vanilla</span>
        </div>
        <div className="border-b py-5">
          <span>Item - 2</span>
          <br />
          <span>Time - 15min</span>
        </div>
        <div className="py-5">
          <h2 className="text-2xl font-semibold">Instructions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            harum assumenda vel mollitia sapiente quidem quam in aliquam
            ratione, temporibus atque ipsa unde esse similique eligendi
            provident! Et, dolore nemo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InstructionPage
