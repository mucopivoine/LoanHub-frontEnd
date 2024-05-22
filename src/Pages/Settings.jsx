

const Settings = () => {
  return (
    <div className="p-4 w-[50%] ml-[30%]">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <div className="space-y-6">
        {/* Profile Settings */}
        <section className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Profile Settings</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter new password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Loan Preferences */}
        <section className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Loan Preferences</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Preferred Loan Amount</label>
              <input
                type="number"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter preferred loan amount"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Repayment Period</label>
              <select className="w-full mt-1 p-2 border rounded-md">
                <option>6 months</option>
                <option>12 months</option>
                <option>24 months</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Interest Rate</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Current interest rate"
                readOnly
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Notification Settings */}
        <section className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Notification Settings</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email Notifications</label>
              <input
                type="checkbox"
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">SMS Notifications</label>
              <input
                type="checkbox"
                className="mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Security Settings */}
        <section className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Security Settings</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Two-Factor Authentication
              </label>
              <input
                type="checkbox"
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                className="w-full mt-1 p-2 border rounded-md"
                placeholder="Enter session timeout"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Changes
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Settings;
