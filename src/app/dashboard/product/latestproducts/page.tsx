import axios from '../../../../axios/axios'
import AddLatestProduct from './LatestProduct'

const getLatestProducts = async () => {
    try {
        let result = await axios.get('/featured-product/latest-product/', {
            params: {
                is_admin: true
            }
        })
        if (result.data.success) {
            return result.data?.data?._id
        }
    } catch (ERR) {
        console.log(ERR)
    }
}

async function Page() {

    const id = await getLatestProducts()

    return (
        <div className='flex flex-col '>
            {
                id &&
                <AddLatestProduct id={id} />
            }
        </div >
    )
}

export default Page