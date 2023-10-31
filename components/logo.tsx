import LogoImage from "@logos/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Logo = () => {
  return (
    <Link href="/" className="overflow-hidden" prefetch={false}>
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            src={LogoImage}
            alt="logo"
            className="rounded-full filter invert dark:invert-0"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
