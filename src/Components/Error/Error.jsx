import error from '../../../public/error.json'

import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <div>
            <section className="flex items-center  min-h-screen  dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto mb-8">
		<div className="text-center">
		<Lottie animationData={error} className=" h-[280px] md:h-[300px] lg:h-[600px]" />
			
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			 <Link to='/' className="font-semibold rounded dark:bg-violet-600 dark:text-gray-50"><button className='px-8 py-3  bg-gradient-to-r from-green-500 to-green-600'>Back to homepage</button></Link>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Error;