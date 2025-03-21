import React from "react";

export default function IndexPage() {

  // const [dashboardDetails, setDashboardDetails] = useState<any>()

  // const getDashboardDetails = async () => {
  //   try {
  //     let result = await axios.post('dashboard')
  //     if (result.data.success) {
  //       setDashboardDetails(result.data.data)
  //     }
  //   } catch (ERR) {
  //     console.log(ERR)
  //   }
  // }

  // useEffect(() => {
  //   getDashboardDetails()
  // }, [])

  return (
    <div className="w-full  ">
      <title>Dashboard - digicom</title>
      <div className="card my-4">
        <span>Mr. Digicom</span>
      </div>
      {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="card flex-col flex">
          <label className="font-bold">
            Blogs
          </label>
          <label className="w-full text-4xl my-4 text-center">
            {dashboardDetails?.blogCount}
          </label>
        </div>
        <div className="card flex-col flex">
          <label className="font-bold">Contacts</label>
          <label className="w-full text-4xl my-4 text-center">
            {dashboardDetails?.contactCount}
          </label>
        </div>
        <div className="card flex-col flex">
          <label className="font-bold">Events</label>
          <label className="w-full text-4xl my-4 text-center">
            {dashboardDetails?.eventCount}
          </label>
        </div>
        <div className="card flex-col flex">
          <label className="font-bold">Testimonials</label>
          <label className="w-full text-4xl my-4 text-center">
            {dashboardDetails?.testimonialCount}
          </label>
        </div>
      </div>


      <div className="card my-4 md:w-fit">
        <label className="p-1 font-bold">Latest Events</label>
        <div>
          <table className="w-full border-collapse table-auto text-left">
            <thead className="border-b">
              <th className="px-6 py-4  text-xs font-semibold uppercase overflow-hidden text-gray-900 bg-primaryBlue-2">Name</th>
              <th className="px-6 py-4  text-xs font-semibold uppercase overflow-hidden text-gray-900 bg-primaryBlue-2">From</th>
              <th className="px-6 py-4  text-xs font-semibold uppercase overflow-hidden text-gray-900 bg-primaryBlue-2">To</th>
            </thead>
            <tbody>
              {
                dashboardDetails?.eventList?.map((value: any, index: any) => (
                  <>
                    <tr className='bg-white  '>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">{value?.title}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">{dayjs(value?.startDate).format('D MMMM, YYYY')}</td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">{dayjs(value?.endDate).format('D MMMM, YYYY')}</td>
                    </tr>
                  </>
                ))
              }
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}
