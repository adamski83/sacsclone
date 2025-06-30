import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
	return (
		<div className="w-full flex flex-col h-auto sm:h-a justify-center bg-orange-900">
			<div className="flex flex-col sm:flex-row sm:my-3 justify-center sm:justify-between items-center mt-4 sm:mt-0">
				<div className="flex flex-col sm:flex-row gap-2 ml-3.5 mr-3.5 mt-5 ">
					<button className="btn btn-outline hover:bg-yellow-500">
						<Phone className="mr-2" />
						<span className="hidden sm:inline">+1234567890</span>
					</button>
					<button className="btn btn-outline hover:bg-yellow-500">
						<Mail className="mr-2" />
						info@boki.com
					</button>
				</div>
				<div className="flex gap-2 mt-5">
					<Link href="https://www.instagram.com/" target="_blank">
						<FaInstagram size="2em" className="p-1 m-1 hover:text-yellow-500" />
					</Link>
					<Link href="https://www.facebook.com/" target="_blank">
						<CiFacebook size="2em" className="p-1 m-1 hover:text-yellow-500" />
					</Link>
					<Link href="https://www.linkedin.com/" target="_blank">
						<CiLinkedin size="2em" className="p-1 m-1 hover:text-yellow-500" />
					</Link>
				</div>
			</div>
		</div>
	);
}
