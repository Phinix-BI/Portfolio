import { Triangle } from 'react-loader-spinner';

// eslint-disable-next-line no-unused-vars
const Loader = props => {
  return (
    <div className='justify-center flex items-center h-screen'>
    <Triangle
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>
  )
}


export default Loader