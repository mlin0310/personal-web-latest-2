import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ title, description, imageUrl, tags, link }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:rotate-[0.5deg]">
      {/* Image with overlay gradient on hover */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-yellow-600">{title}</h3>
        <p className="text-gray-600 mb-4 transition-all duration-500 group-hover:text-gray-800">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-gray-400 group-hover:text-gray-900 font-medium transition-all duration-300"
        >
          View Project
          <svg
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}