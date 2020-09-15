import Page from '@/components/page'
import db from '@/lib/db'
import sanitize from '@/lib/sanitize'

const Home = ({ markdown }) => (
  <Page>
    <main className="flex flex-col flex-grow space-y-4">
      <article
        className="flex-grow p-4 mx-4 my-4 prose bg-white rounded-lg shadow md:mx-auto lg:px-8 lg:py-4 lg:prose-xl md:container lg:max-w-3xl dark:bg-cb-dark-blue"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </main>
    <footer className="pb-4 text-2xl text-center text-gray-100 lg:pt-4 bg-cobalt dark:bg-cb-dark-blue sm:text-3xl">
      <div className="lg:container lg:mx-auto lg:max-w-3xl">
        <div>
          built{' '}
          <a
            className="font-semibold hover:underline text-cb-yellow"
            href="https://with-bacon.niel.to"
            target="_blank"
            rel="noopener noreferrer"
          >
            with bacon{' '}
            <span role="img" aria-label="bacon">
              🥓
            </span>
          </a>
        </div>
        <ul className="flex justify-center space-x-4 text-xl">
          <li>
            <a
              className="hover:underline text-cb-pink"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              next.js
            </a>
          </li>
          <li>
            <a
              className="hover:underline text-cb-pink"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              tailwind.css
            </a>
          </li>
          <li>
            <a
              className="hover:underline text-cb-pink"
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </Page>
)

export const getStaticProps = async () => {
  const id = process.env.NOTE_ID
  const doc = await db.collection('notes').doc(id).get()
  const { markdown } = { id: doc.id, ...doc.data() }
  return {
    props: {
      markdown: sanitize(markdown),
    },
    revalidate: 1,
  }
}

export default Home
