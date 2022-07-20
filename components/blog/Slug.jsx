import styles from "./Slug.module.css"
import dateFormat from "dateformat"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Example(props) {
  const post = props.post
  console.log(post)
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} key="title" />
        <meta name="description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.feature_image} />
        <link rel="canonical" href={"golem-network.vercel.app/blog/" + post.slug} />

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.feature_image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@golemproject" />
        <meta name="twitter:creator" content="@golemproject" />

        <meta property="og:site_name" content="Golem Network Blog" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta name="robots" content="index, follow" />

        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:publisher" content="https://www.facebook.com/golemproject/" />
        <meta property="article:modified_time" content={post.updated_at} />
        <meta property="article:author" content={post.primary_author.name} />
        <meta property="article:section" content="HTML" />
        {post.tags.map((tag) => (
          <meta key={tag.id} property="article:tag" content={tag.name} />
        ))}

        <meta name="HandheldFriendly" content="True"></meta>
      </Head>

      <div className="bg-white relative mt-4 mb-10">
        <div className="grid grid-cols-12 mx-auto max-w-7xl px-4 sm:px-6 ">
          <article className={styles.blogpost}>
            <div className={styles.title}>
              <div className="col-span-12">
                <div className="grid text-center">
                  <div className="tags text-center text-golemblue">
                    {post.tags.map((tag) => (
                      <a key={tag.id} className="hover:underline text-sm inline-block mr-1">
                        #{tag.name}
                      </a>
                    ))}
                  </div>
                  <h1 className="text-9xl font-semibold text-black">{post.title}</h1>
                  <p className="mt-3 text-gray-500">{post.excerpt}</p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a>
                        <span className="sr-only">{post.primary_author.name}</span>
                        {post.primary_author.profile_image ? (
                          <div className="h-10 w-10 relative">
                            <Image
                              src={post.primary_author.profile_image}
                              alt={post.primary_author.name}
                              className=" rounded-full"
                              placeholder="blur"
                              blurDataURL="data:image/webp;base64,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"
                              layout="fill" // required
                              objectFit="cover" // change to suit your needs
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-10 relative">
                            <Image
                              src="https://blog.golemproject.net/content/images/2019/02/logo-golem-5.png"
                              alt={post.primary_author.name}
                              className="rounded-full"
                              placeholder="blur"
                              blurDataURL="data:image/webp;base64,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"
                              layout="fill" // required
                              objectFit="cover" // change to suit your needs
                            />
                          </div>
                        )}
                      </a>
                    </div>
                    <div className="ml-3">
                      <Link href="#">
                        <span className="text-sm block font-medium text-gray-900">
                          <a href="#" className="hover:underline text-left block text-sm">
                            {post.primary_author.name}
                          </a>
                        </span>
                      </Link>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.published_at}>
                          {post.date}
                          {dateFormat(post.date, "dS mmm, yyyy")}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.reading_time} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="mb-10 rounded-lg" alt={post.title} src={post.feature_image}></img>

            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </article>
        </div>
      </div>
    </>
  )
}
