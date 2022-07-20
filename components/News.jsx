import Link from "next/link"
import dateFormat from "dateformat"
import Image from "next/image"

export default function Example(props) {
  const posts = props.posts
  const frontpage = props.frontpage

  const title = props.displayTitle
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="relative  pb-20 px-4 sm:px-6  lg:pb-28 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {title ? (
          <div className="">
            <span className="block text-sm font-semibold uppercase tracking-wide text-golemblue">Blog</span>
            <h2 className="text-3xl mt-1 tracking-tight font-extrabold text-gray-900 sm:text-4xl">Latest News from Golem</h2>
            <p className="mt-3 max-w-2xl  text-xl text-slate-600 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
        ) : null}
        <div className="mt-12 max-w-lg lg:mx-auto grid gap-6 lg:grid-cols-3 md:grid-cols-2 md:max-w-full lg:max-w-none">
          {frontpage
            ? posts.posts.slice(0, 3).map((post, index) => (
                <Link key={post.title} href={"/" + post.slug}>
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105">
                    <div className=" h-48 w-full object-cover relative">
                      <Image
                        src={post.feature_image}
                        alt={post.title}
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRnICAABXRUJQVlA4WAoAAAAgAAAAJQAAEgAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCA0AAAAMAMAnQEqJgATAD9xrs1fO62qJSVrM3AuCWkAACfv517YAAD+7KlwNDQqvF+qJHYAQAAAAA=="
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        {post.tags.map((tag) => (
                          <p key={tag.id} className="text-sm font-medium text-indigo-600 inline-block mr-2">
                            #{tag.name}
                          </p>
                        ))}
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                          <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <span className="sr-only">{post.primary_author.name}</span>
                            {post.primary_author.profile_image ? (
                              <div className="h-10 w-10 relative">
                                <Image
                                  src={post.primary_author.profile_image}
                                  alt={post.primary_author.name}
                                  className=" rounded-full"
                                  placeholder="blur"
                                  blurDataURL="]97_5.og00M}~oj^ayfQofay02WB_1t79Ha$j[j[WBazM|j[t7WBWBogj[ayWCj[%Lj[IVayt6ogayWCofoft7ayM|j[%L"
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
                                  blurDataURL="]97_5.og00M}~oj^ayfQofay02WB_1t79Ha$j[j[WBazM|j[t7WBWBogj[ayWCj[%Lj[IVayt6ogayWCofoft7ayM|j[%L"
                                  layout="fill" // required
                                  objectFit="cover" // change to suit your needs
                                />
                              </div>
                            )}
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                              {post.primary_author.name}
                            </a>
                          </p>
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
                </Link>
              ))
            : posts.posts.slice(1).map((post) => (
                <Link key={post.title} href={"/" + post.slug}>
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 hover:scale-105">
                    <div className=" h-48 w-full object-cover relative">
                      <Image
                        src={post.feature_image}
                        alt={post.title}
                        placeholder="blur"
                        blurDataURL="data:image/webp;base64,UklGRnICAABXRUJQVlA4WAoAAAAgAAAAJQAAEgAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCA0AAAAMAMAnQEqJgATAD9xrs1fO62qJSVrM3AuCWkAACfv517YAAD+7KlwNDQqvF+qJHYAQAAAAA=="
                        layout="fill" // required
                        objectFit="cover" // change to suit your needs
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        {post.tags.map((tag) => (
                          <p key={tag.id} className="text-sm font-medium text-indigo-600 inline-block mr-2">
                            #{tag.name}
                          </p>
                        ))}
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                          <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <span className="sr-only">{post.primary_author.name}</span>
                            {post.primary_author.profile_image ? (
                              <div className="h-10 w-10 relative">
                                <Image
                                  src={post.primary_author.profile_image}
                                  alt={post.primary_author.name}
                                  className=" rounded-full"
                                  placeholder="blur"
                                  blurDataURL="]97_5.og00M}~oj^ayfQofay02WB_1t79Ha$j[j[WBazM|j[t7WBWBogj[ayWCj[%Lj[IVayt6ogayWCofoft7ayM|j[%L"
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
                                  blurDataURL="]97_5.og00M}~oj^ayfQofay02WB_1t79Ha$j[j[WBazM|j[t7WBWBogj[ayWCj[%Lj[IVayt6ogayWCofoft7ayM|j[%L"
                                  layout="fill" // required
                                  objectFit="cover" // change to suit your needs
                                />
                              </div>
                            )}
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                              {post.primary_author.name}
                            </a>
                          </p>
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
                </Link>
              ))}
        </div>
      </div>
    </div>
  )
}
