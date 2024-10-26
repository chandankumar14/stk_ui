import Image from "next/image"
const image1 = require("../../../public/saree/banarsi/AKP (1).jpg")
const image2 = require("../../../public/saree/chanderi/AKP (4).jpg")
const image3 = require("../../../public/saree/Gadwal/AKP (1).jpg")
export default function BanarasiSaree() {
    return (
        <>
            <div className="p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg bg-gray-100">
                <h2 className="text-3xl  text-black mb-20 px-10">Banarasi Saree</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <div
                        className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
                        <div className="bg-gray-50 h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                            <Image src={image1} alt=""
                                width={500}
                                height={500}
                                className="h-full w-full object-contain"
                            />
                        </div>

                    </div>

                    <div
                        className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
                        <div className="bg-gray-50  h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                            <Image src={image2} alt=""
                                width={500}
                                height={500}
                                className="h-full w-full object-contain"
                            />
                        </div>

                    </div>

                    <div
                        className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
                        <div className="bg-gray-50 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
                            <Image src={image3} alt=""
                                width={500}
                                height={500}
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}