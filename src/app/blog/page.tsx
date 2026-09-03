// src/app/blog/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';
import { Search, ChevronRight, Clock, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Vocal', 'Kathak', 'Guitar', 'Classical Music', 'Instruments'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-roboto">
      {/* Hero Banner */}
      <section className="relative bg-[#0A101C] text-white py-16 lg:py-20 border-b border-gold-500/20">
        <div className="container-site relative z-10">
          <div className="flex items-center gap-2 text-sm text-[#D4952B] font-medium mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">Blog</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-poppins text-white tracking-tight mb-4">
            Performing Arts & <span className="text-[#D4952B]">Music Insights</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Expert articles, practice guides, raaga theory, and dance heritage news written by Tansen senior faculty.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-site">
          <div className="bg-gradient-to-r from-orange-50/50 to-amber-50/50 rounded-3xl p-6 md:p-8 border border-orange-100 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="bg-[#D4952B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                Featured Article
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mb-4 hover:text-[#D4952B] transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#D4952B]" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4952B]" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 bg-[#D4952B] hover:bg-[#b8842b] text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors shadow-md"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Blog Grid */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container-site">
          {/* Search & Tag filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Tag className="w-4 h-4 text-[#D4952B] hidden sm:block flex-shrink-0" />
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedTag === t
                      ? 'bg-[#D4952B] text-white shadow'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-xs focus:outline-none focus:border-[#D4952B]"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#D4952B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold font-poppins text-gray-900 group-hover:text-[#D4952B] transition-colors mb-2 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#D4952B] font-bold text-xs hover:underline mt-auto"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
