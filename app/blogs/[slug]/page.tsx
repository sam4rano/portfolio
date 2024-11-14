import { client, urlFor } from '@/app/api/sanity';
import Navbar from '@/app/Navbar';
import { Any, PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
    title,
    content,
    titleImage
  }[0]`
  const data = await client.fetch(query)
  return data;
}

interface simpleCard {
	title: string;
	content: Any;
	currentSlug: string;
	titleImage: string;
}

export default async function Page({ params }: { params: { slug: string } }) {

  const data: simpleCard = await getData(params.slug);
  console.log('data', data.content)

  if (!data) return <div>Loading...</div>

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center align-middle items-center py-8 gap-4'>
        <h1 className='text-center'>Welcome to Sam Oye blogs</h1>
		<div>
          <h2 className="font-bold text-3xl">{data.title}</h2>
		  {/* <h2 className="font-bold text-3xl">{data.content}</h2> */}
        </div>
		<Image
              src={urlFor(data.titleImage).url()}
              alt={data.title}
              width={300}
              height={300}
			  priority
            />
      </div>
	  <div className='max-w-4xl justify-center items-center align-middle mx-auto py-4 prose prose-blue prose-xl'>
		<PortableText value={data.content} />
	  </div>
    </>
  )
};
