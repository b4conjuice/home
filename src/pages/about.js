import Page from '@/components/page'
import Title from '@/components/title'

const About = () => (
  <Page title="about">
    <main className="flex flex-col flex-grow space-y-4">
      <Title>about</Title>
      <ul className="flex text-2xl text-center text-cobalt sm:text-3xl md:block">
        <li>
          <a
            className="font-semibold hover:underline"
            href="https://github.com/b4conjuice"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            className="font-semibold hover:underline"
            href="https://twitter.com/b4conjuice"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </li>
      </ul>
    </main>
  </Page>
)

export default About
