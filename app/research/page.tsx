import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Navbar from "../Navbar";

const ResearchPage = () => {
  const researchPapers = [
    {
      title: "MasakhaNER: Named entity recognition for African languages",
      authors:
        "DI Adelani, J Abbott, G Neubig, D D'souza, J Kreutzer, C Lignos, ...",
      publication:
        "Transactions of the Association for Computational Linguistics",
      year: 2021,
      
    },
    {
      title:
        "AfriWOZ: Corpus for Exploiting Cross-Lingual Transfer for Dialogue Generation in Low-Resource, African Languages",
      authors:
        "T Adewumi, M Adeyemi, A Anuoluwapo, B Peters, H Buzaaba, O Samuel, ...",
      publication:
        "2023 International Joint Conference on Neural Networks (IJCNN)",
      year: 2023,
     
    },
    {
      title:
        "The African Stopwords project: curating stopwords for African languages",
      authors: "C Emezue, H Nigatu, C Thinwa, H Zhou, S Muhammad, L Louis, ...",
      publication: "arXiv preprint arXiv:2304.12155",
     
    },
    {
      title:
        "AfriWOZ: Corpus for Exploiting Cross-Lingual Transferability for Generation of Dialogues in Low-Resource, African Languages",
      authors:
        "T Adewumi, M Adeyemi, A Anuoluwapo, B Peters, H Buzaaba, O Samuel, ...",
      publication: "arXiv preprint arXiv:2204.08083",
     
    },
    {
      title: "MasakhaNER: Named Entity Recognition for African Languages",
      authors:
        "D Ifeoluwa Adelani, J Abbott, G Neubig, D D'souza, J Kreutzer, C Lignos, ...",
      publication: "arXiv e-prints, arXiv: 2103.11811",
     
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 research-page">
		<Navbar />
      <h1 className="text-xl font-bold mb-4">Research Papers</h1>
      <ul className="list-none">
        {researchPapers.map((paper, index) => (
          <li key={index} className="mb-4 border-b pb-4">
            <h2>{paper.title}</h2>
            <p>Authors: {paper.authors}</p>
            <p>Publication: {paper.publication}</p>
            <p>Year: {paper.year}</p>
          </li>
        ))}
      </ul>
      <Button asChild className="w-full mt-4 px-4">
        <Link
          href={
            "https://scholar.google.com/citations?user=4_P2z5oAAAAJ&hl=en&oi=sra"
          }
        >
          Read more
        </Link>
      </Button>
    </div>
  );
};

export default ResearchPage;
