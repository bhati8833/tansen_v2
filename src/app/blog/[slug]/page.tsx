// src/app/blog/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import { ChevronRight, Clock, User, Calendar, Tag, ArrowLeft } from 'lucide-react';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Tansen Sangeet Mahavidyalaya Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto">
      {/* Hero Header */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20">
        <div className="container-site relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/blog" className="hover:underline">Blog</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 line-clamp-1">{post.title}</span>
          </div>

          <span className="bg-[#D4952B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
            {post.category}
          </span>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-poppins text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#D4952B]" />
              <span>By <strong className="text-white">{post.author}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D4952B]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4952B]" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white flex-grow">
        <div className="container-site max-w-4xl mx-auto">
          {/* Cover Image */}
          <div className="relative h-80 md:h-[450px] w-full rounded-3xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Body Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-roboto space-y-6 prose-headings:font-poppins prose-headings:text-gray-900 prose-h3:text-xl prose-h3:font-bold prose-h3:text-[#0A101C] prose-h3:mt-8 prose-h3:mb-3 prose-p:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[#D4952B]" />
              <span className="text-xs font-semibold text-gray-500 uppercase">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#D4952B] font-bold text-sm hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
          </div>

          {/* Author Box */}
          <div className="mt-8 p-6 bg-orange-50/60 rounded-2xl border border-orange-100 flex items-center gap-4">
            <div className="w-14 h-14 bg-[#D4952B] text-white font-bold text-xl rounded-full flex items-center justify-center font-poppins flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 font-poppins text-base">{post.author}</h4>
              <p className="text-xs text-gray-600">Senior Faculty & Resident Cultural Researcher at Tansen Sangeet Mahavidyalaya.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
