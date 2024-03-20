import Image from "next/image";
import logoIcon from "@/public/images/logo.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sticky top-0 left-0 right-0 h-14 bg-white drop-shadow">
        <Image
          priority
          src={logoIcon}
          alt="logo"
          className="h-14 w-14 pl-5 py-2.5"
        />
      </div>
      {children}
    </div>
  );
}
