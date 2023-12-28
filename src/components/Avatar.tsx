import Image from "next/image";

export const SquareAvatar = () => {
  return (
    <Image
      src="https://source.unsplash.com/120x120/?portrait"
      className="rounded-lg w-32 h-32"
      alt="Avatar"
      width={400}
      height={400}
    />
  );
};
