import Image from "next/image";
import david from '../assets/david.png'
export const SquareAvatar = () => {
  return (
    <Image
      src={david}
      alt="Avatar"
      width={400}
      height={500}
    />
  );
};
