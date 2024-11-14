import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../Navbar";

const page = () => {
  return (
    <div className="">
		<Navbar />
      <h2 className="text-center mt-10">My resume</h2>
      <div className="flex flex-col gap-4 justify-center items-center align-middle max-w-2xl w-full mx-auto mt-10">
        <Button asChild className="w-full mt-4 px-4">
          <Link href={"https://drive.google.com/file/d/1afJ3UTV9F81urq-FqK5cvepGl9ZYmpCe/view?usp=sharing"} target="_blank"
              rel="noopener noreferrer">ML Research</Link>
        </Button>
		<Button asChild className="w-full mt-4 px-4">
          <Link href={"https://drive.google.com/file/d/18cm4_mhhf7UZ3Ztq25YdncBHOAThrfz8/view?usp=sharing"} target="_blank"
              rel="noopener noreferrer">Software Engineer</Link>
        </Button>
		<Button asChild className="w-full mt-4 px-4">
          <Link href={"https://drive.google.com/file/d/1dwMbbr8yFLtfA4S7NCwXvEwK992npL12/view?usp=sharing"} target="_blank"
              rel="noopener noreferrer">IT SUPPORT CV</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
