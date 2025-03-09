import Image from "next/image";
import homeImage from '../public/image-laptop.jpg'

export default function Page() {
    return (
        <Image
            src={homeImage}
            alt="Pic"
        />
    );
}