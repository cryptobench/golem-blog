export default function Footer() {
  return (
    <section className="bg-white z-10 pb-20 relative border-t">
      <div className="pt-24 mx-auto max-w-7xl px-4 sm:px-6  w-full ">
        <div className="grid grid-cols-12 lg:gap-x-10 gap-x-0">
          <div className="lg:col-span-4 col-span-12 text-center lg:text-left mb-10 lg:mb-0">
            <h4 className="text-golemblue  text-2xl  font-semibold">Golem Network</h4>
            <div className="mt-4 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p className="text-base mb-2font-medium text-gray-900">Sign up to our newsletter.</p>
              <form action="#" method="POST" className="mt-3 sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base mb-2text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base mb-2font-medium rounded-md text-white bg-black shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our
                <a href="#" className="font-medium ml-1 text-gray-900 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12 grid grid-cols-12 text-center lg:text-left  gap-y-10">
            <div className="lg:col-span-3 col-span-6">
              <p className="text-base mb-2">Products</p>
              <a className="text-gray-500 text-sm leading-7 block ">Platform</a>
              <a className="text-gray-500 text-sm leading-6 block ">Become a provider</a>
              <a className="text-gray-500 text-sm leading-6 block ">Stats</a>
              <a className="text-gray-500 text-sm leading-6 block ">Graphene</a>
              <a className="text-gray-500 text-sm leading-6 block ">Clay Golem</a>
              <a className="text-gray-500 text-sm leading-6 block ">Golem Unlimited</a>
            </div>
            <div className="lg:col-span-3 col-span-6 ">
              <p className="text-base mb-2">Developers</p>
              <a className="text-gray-500 text-sm leading-6 block  ">SDK</a>
              <a className="text-gray-500 text-sm leading-6 block ">Requestor Docs</a>
              <p className="text-gray-500 text-sm leading-6 block  ">Test Harness</p>
              <p className="text-gray-500 text-sm leading-6 block  ">Github</p>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <p className="text-base mb-2">Community</p>
              <a className="text-gray-500 text-sm leading-6 block  ">Featured Projects</a>
              <a className="text-gray-500 text-sm leading-6 block ">Awesome Golem</a>
              <p className="text-gray-500 text-sm leading-6 block  ">GLM Rewards</p>
              <p className="text-gray-500 text-sm leading-6 block  ">Upcoming Events</p>
              <p className="text-gray-500 text-sm leading-6 block  ">Blog</p>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <p className="text-base mb-2">GLM</p>
              <a className="text-gray-500 text-sm leading-6 block  ">About the token</a>
              <a className="text-gray-500 text-sm leading-6 block ">Migration</a>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <p className="text-base mb-2">Resources</p>
              <a className="text-gray-500 text-sm leading-6 block  ">Privacy Policy</a>
              <a className="text-gray-500 text-sm leading-6 block ">UiG</a>
              <p className="text-gray-500 text-sm leading-6 block  ">Disclaimer</p>
              <p className="text-gray-500 text-sm leading-6 block  ">Whitepaper</p>
              <p className="text-gray-500 text-sm leading-6 block  ">Brand Assets</p>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <p className="text-base mb-2">About</p>
              <a className="text-gray-500 text-sm leading-6 block  ">Overview</a>
              <a className="text-gray-500 text-sm leading-6 block ">Team</a>
              <p className="text-gray-500 text-sm leading-6 block  ">Contact</p>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <p className="text-base mb-2">Get Started</p>
              <a className="text-gray-500 text-sm leading-6 block  ">Provider Tutorial</a>
              <a className="text-gray-500 text-sm leading-6 block ">Requestor Tutorial</a>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <p className="text-base mb-2">Socials</p>
              <a className="text-gray-500 text-sm leading-6 block  ">Discord</a>
              <a className="text-gray-500 text-sm leading-6 block ">Twitter</a>
              <p className="text-gray-500 text-sm leading-6 block  ">Telegram</p>
            </div>
          </div>
          <div className="col-span-12 border-t mt-10"></div>
          <div className="col-span-12 grid grid-cols-12 py-12 gap-y-2 lg:gap-y-0">
            <div className="lg:col-span-3 col-span-12 text-gray-700 text-center lg:text-left">© 2022 Golem Factory Gmbh.</div>
            <div className="lg:col-span-6 col-span-12 grid grid-cols-12 text-center">
              <div className="lg:col-span-4 col-span-12">Brand Policy</div>
              <div className="lg:col-span-4 col-span-12">Privacy Policy</div>
              <div className="lg:col-span-4 col-span-12">Terms of Service</div>
            </div>
            <div className="text-center col-span-12 lg:col-span-1 lg:text-right">Logos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
