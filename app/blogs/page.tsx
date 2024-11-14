// import Navbar from "../Navbar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { client } from '../api/sanity';

// import Image from "next/image";
// import { simpleBlogCard } from "@/lib/type";

// async function getData() {

// 	const query = `*[_type == 'blog'] | order(_createdAt desc) {
// 		title,
// 		  smallDescription,
// 		  "currentSlug":slug.current,
//       titleImage
// 	  }`;

// 	  const data = await client.fetch(query);
// 	  return data;
// }

// const options = { next: { revalidate: 30 } };

// export default async function page (){
//   const data: simpleBlogCard = await getData();

//   console.log("data", data)
//   return (
//     <div>
//       <Navbar />
//       <h1>Welcome to blogs</h1>
//       <div>
//         {data.map((item, index) => (
//           <Card key={index}>{item}</Card>
//         ))}

//       </div>

//     </div>
//   );
// };

import Navbar from "../Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { client, urlFor } from "../api/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define the type for simpleBlogCard
type simpleBlogCard = {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string;
}[];

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await client.fetch(query);
  return data;
}

const options = { next: { revalidate: 30 } };

export default async function page() {
  const data: simpleBlogCard = await getData();

  // Use a unique identifier as the key prop
  return (
    <>
      <Navbar />
      <h1 className="text-center text-3xl font-bold m-4">My articles</h1>
      <div className="flex flex-row justify-center items-center align-middle gap-4 py-8">
        {data.map((item) => (
          <Card key={item.currentSlug}>
            <Image
              src={urlFor(item.titleImage).url()}
              alt={item.title}
              width={300}
              height={300}
            />
            <CardContent className="p-4">
              <CardTitle className="font-bold">{item.title}</CardTitle>
              <CardDescription>{item.smallDescription}</CardDescription>
              <Button asChild className="w-full mt-4 px-4">
                <Link href={`blogs/${item.currentSlug}`}>Read more</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
