import PrimaryButton from "./PrimaryButton";

const MemberShip = () => {
  return (
    <div className="border-2 border-[#EEE] rounded-xl mt-5 py-5 mx-8 px-10 min-h-screen">
      <h1 className="text-center font-bold text-3xl">Membership</h1>
      <h2 className="text-xl mt-4 mb-2">Current Plan</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#FC495F] to-[#FFC371] bg-size-200 text-white">
            <tr>
              <th className="p-3 rounded-l-lg">Membership</th>
              <th className="p-3">Payment Mode</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">End Date</th>
              <th className="p-3 rounded-r-lg">Status</th>
            </tr>
          </thead>
          <div className="lg:my-3 md:my-3"></div>
          <tbody className="bg-gray-100">
            <tr className="text-center">
              <td className="p-3 rounded-l-lg">
                <p>Trail</p>
              </td>
              <td className="p-3">
                <p>One Time</p>
              </td>
              <td className="p-3">
                <p>20/12/1996</p>
              </td>
              <td className="p-3">
                <p>31/12/1996</p>
              </td>
              <td className="p-3 rounded-r-lg">
                <PrimaryButton>Change Plan</PrimaryButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberShip;
