import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts
                </p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">Company</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+92-304-771-9831</li>
                    <li>raohussayn@gmail.com</li>                    
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2025@ kapra-dukan.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
