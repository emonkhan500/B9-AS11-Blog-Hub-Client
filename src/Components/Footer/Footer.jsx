import React from 'react';
import { Link } from 'react-router-dom';
import {CgFacebook} from "react-icons/cg";
import {BsLinkedin} from "react-icons/bs";

import { FaGithub } from 'react-icons/fa6';
import { BiLogoMicrosoft } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="px-4 mt-20  py-2 lg:py-6 divide-y bg-green-300 dark:bg-gray-100 dark:text-gray-800 w-full">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="flex justify-center lg:justify-start  lg:w-1/3">
		<Link> 
                <img className="w-10 md:w-16 h-10 md:h-14" src="https://i.ibb.co/j9Ns7tr8/Chat-GPT-Image-May-18-2025-10-05-21-PM.png" alt="" />
                </Link>
		</div>
		<div className="grid grid-cols-1 justify-center md:justify-normal text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 text-center lg:text-start">
			<div className="space-y-3">
				<h3 className=" text-xl font-semibold uppercase dark:text-gray-900">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-xl font-semibold dark:text-gray-900">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-900 text-xl font-semibold">Social media</div>
				<div className="flex  gap-[15px] text-black mt-1 md:mb-14 lg:mb-24">
        <a href='https://www.facebook.com/profile.php?id=100025282659899' className="text-[1.3rem] p-1.5 cursor-pointer rounded-full  text-[#424242] shadow-md">
            <CgFacebook/>
        </a>
        <a href='ttps://github.com/emonkhan500' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  text-[#424242] shadow-md">
        <FaGithub />
        </a>
        <a href='https://emon-khan-portfolio.netlify.app/' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  text-[#424242] shadow-md">
        <BiLogoMicrosoft />
        </a>
        <a href='https://www.linkedin.com/in/emon-khan-247498306/' className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  text-[#424242] shadow-md">
            <BsLinkedin/>
        </a>
    </div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-600 font-bold">© 2025 Company All rights reserved Under Blog Hub.</div>
</footer>
    );
};

export default Footer;