import { AuroraBackground } from '@/components/ui/aurora-background';
import Image from 'next/image';
import { Link } from '@/components/ui/link';
import avatar from '@/images/avatar.jpg';
import teaching1 from '@/images/teaching1.jpeg';
import teaching2 from '@/images/teaching2.jpeg';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <header className="mx-auto flex max-w-screen-lg items-center justify-between px-8 pb-14 pt-20">
        <Image
          src={avatar}
          alt="João Vitor"
          className="h-32 w-32 rounded-full border-8 border-white shadow-lg sm:h-40 sm:w-40"
        />
      </header>

      <main className="pb-20">
        <div className="prose dark:prose-invert prose-a:underline-offset-4 prose-p:my-3 prose-sky mx-auto max-w-screen-lg px-8">
          <h1>João Vitor &ldquo;John&rdquo; de Oliveira</h1>
          <WhoAmISection />
          <WhatIAmExcitedAboutSection />
          <OpenSourceWorkSection />
          <ProjectsIAmProudSection />
          <LetsBuildTogether />
        </div>
      </main>
    </>
  );
}

function WhoAmISection() {
  return (
    <section>
      <h2>Who am I?</h2>
      <p>
        My name is João Vitor and I’m a 25 years old software engineer based in
        Brazil (UTC-3).
      </p>
      <p>
        I was planning on becoming a Graphic Designer after high school but I
        was introduced to software development and fell in love with it.
      </p>
      <p>
        I graduated on Computer Science and focused my career on frontend
        development since it was the closest thing I had to a drawing board.
      </p>
      <p>
        You can probably tell that a Design Engineer position at Tailwind UI is
        what I would describe as a “dream job”.
      </p>
      <p>
        Having a keen eye for details and thinking outside the box is what sets
        me apart from other developers.
      </p>
    </section>
  );
}

function WhatIAmExcitedAboutSection() {
  return (
    <section>
      <h2>What am I excited about?</h2>
      <p>
        I like building beautifully designed applications, but what really
        excites me is building tools for other people to use (dotfiles, zsh
        plugins, pipelines, CLIs, etc.).
      </p>

      <h3>New technologies</h3>
      <p>
        Keeping up-to-date with the latest technologies, watching conferences
        (can’t wait for Svelte Summit and React Conf.) and trying new things is
        a big part of why I love being a software engineer.
      </p>
      <h4>Fun fact</h4>
      <p>I’m learning Rust to build fast and reliable developer tools.</p>
      <p>
        That was something I decided to do because there is a movement in the
        JavaScript tooling ecosystem to use Rust (Vite, SWC, Tailwind v4 and
        many more).
      </p>
      <p>
        Since I want to build my own tools and contribute to existing projects,
        I figured it would be a good choice.
      </p>

      <h3>Design Systems</h3>
      <p>
        Creating Design Systems (literally every company I worked for asked me
        to build one) is one of my favorites projects to work on.
      </p>
      <p>
        Designing the components, the API, making it easy to use and yet
        extendable, is something I could spend weeks working without getting
        tired.
      </p>
      <p>
        Once I heard that Tailwind UI was building Catalyst, it got me very
        excited and I would love to help build the next components.
      </p>

      <h3>Teaching</h3>
      <p>
        Since college I knew that teaching was going to be a important part of
        my career.
      </p>
      <p>
        Sharing my knowledge with others and seeing them grow is a fulfilling
        opportunity.
      </p>
      <p>
        Here’s some photos of me teaching React to the interns from my previous
        company:
      </p>
      <p>
        You can check the full course I prepared in this Notion page:{' '}
        <Link
          href="https://workshop-react.notion.site/Workshop-React-e7f288c0f79f4ad789280e12b7f90d20"
          external
        >
          Workshop React
        </Link>
        .
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="not-prose relative flex flex-col overflow-hidden rounded shadow-lg">
          <Image
            src={teaching1}
            alt="Teaching React to interns"
            className="aspect-[4/3] object-cover"
          />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black py-6 text-center font-medium text-white">
            #01 - That’s me pointing to the screen.
          </p>
        </div>
        <div className="not-prose relative flex flex-col overflow-hidden rounded shadow-lg">
          <Image
            src={teaching2}
            alt="Teaching React to interns"
            className="aspect-[4/3] object-cover object-left"
          />
          <p className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black py-6 text-center font-medium text-white">
            #02 - That’s me on the left and my fellow interns.
          </p>
        </div>
      </div>
    </section>
  );
}

function OpenSourceWorkSection() {
  return (
    <section>
      <h2>Open-Source Contributions</h2>
      <p>
        I try to help the projects I use daily with bug fixes, reports, or just
        fixing the docs.
      </p>

      <h3>Radix UI</h3>
      <p>Issues with the Toast component:</p>
      <ul>
        <li>
          <Link
            href="https://github.com/radix-ui/primitives/issues/2233"
            external
          >
            Toast doesn’t dismiss because of... Issue #2233
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/radix-ui/primitives/pull/2236"
            external
          >
            [Toast] Fix duration value during... Pull #2236
          </Link>
        </li>
      </ul>

      <p>Add missing property documentation:</p>
      <ul>
        <li>
          <Link href="https://github.com/radix-ui/website/pull/654" external>
            Add onSwipeCancel prop documentation to &lt;Toast.Root /&gt; Pull
            #654
          </Link>
        </li>
      </ul>

      <h3>Hyper Terminal</h3>
      <p>Created a plugin to sync Hyper’s colors with the OS appearance:</p>
      <ul>
        <li>
          <Link
            href="https://github.com/vercel/hyper/issues/7857#issuecomment-2018305665"
            external
          >
            Hyper Plugin Sync Color Scheme
          </Link>
        </li>
      </ul>
      <h3>Nextra</h3>
      <p>
        Fixed the internationalization of one of its components (toggle
        light/dark):
      </p>
      <ul>
        <li>
          <Link href="https://github.com/shuding/nextra/pull/1768" external>
            Use config.useOptions text as the... Pull #1768
          </Link>
        </li>
      </ul>
    </section>
  );
}

function ProjectsIAmProudSection() {
  return (
    <section>
      <h2>Projects I am proud of</h2>
      <h3>Blog</h3>
      <p>
        I don’t write much but I try to share the things I’m learning on Dev.to:
      </p>
      <ul>
        <li>
          <Link href="https://dev.to/jvzaniolo/php-in-2024-3l17" external>
            Learning PHP in 2024
          </Link>
        </li>
        <li>
          <Link
            href="https://dev.to/jvzaniolo/the-ultimate-guide-to-state-management-with-react-3p6n"
            external
          >
            State Management with React
          </Link>
        </li>
        <li>
          <Link
            href="https://dev.to/jvzaniolo/how-to-actually-use-eslint-prettier-3fm8"
            external
          >
            How to actually use ESLint + Prettier
          </Link>
        </li>
      </ul>

      <h3>International experience</h3>
      <p>
        I worked for an international client called{' '}
        <Link href="https://www.backcountry.com/" external>
          Backcountry
        </Link>{' '}
        for almost two years.
      </p>
      <p>
        I was part of the Purchase team. We handled the cart, checkout and
        payment experiences of the e-commerce website.
      </p>
      <p>Here’s some of the feedback I received during my time there:</p>
      <div>
        <h4>Irene Sánchez</h4>
        <p>Lead Frontend Developer</p>
        <blockquote>
          Proud of João for finding new ways to improve the team (referring to
          GitHub comments/feedback/follow up work)
        </blockquote>

        <h4>Megan Deppen</h4>
        <p>Product Manager</p>
        <blockquote>
          João Vitor has learned a ton in this time at Backcountry and I’ve seen
          him frow into a forward-thinking, proactive, helpful developer. His
          positive attitude and enthusiasm for the team has helped build the
          great culture we had on the Purchase Team. Though he is early on in
          his career, he’ll be valued at any organization once he learns the lay
          of the land.
        </blockquote>
      </div>

      <h3>Part of the community</h3>
      <h4>Rocketseat</h4>
      <p>
        <Link href="https://rocketseat.com.br/" external>
          Rocketseat
        </Link>{' '}
        is one of the biggest platforms for learning software development in
        Brazil.
      </p>
      <p>
        That’s where I started learning React, React Native and Node.js, and I
        got very fun of the work they did and I wanted to participate.
      </p>
      <p>
        I was selected to join a group of alumnis called{' '}
        <Link href="https://www.instagram.com/spacesquad.oficial/" external>
          Space Squad
        </Link>
        , where I would help newcomers with their assignments and questions, and
        participate on future project discussions.
      </p>
      <p>
        One of those projects was the{' '}
        <Link href="https://www.rocketseat.com.br/eventos/nlw" external>
          Next Level Week
        </Link>{' '}
        event, where I helped put together an online and free event where
        developers would learn how to build a web site, a mobile application and
        a server, using JavaScript, React, React Native and Node.js, during the
        week.
      </p>
    </section>
  );
}

function LetsBuildTogether() {
  return (
    <section>
      <h2>Let’s build together!</h2>
      <p>
        If you like what you see here, send me a message! I would love to keep
        in touch.
      </p>

      <p>Consider following me on my social media:</p>

      <ul>
        <li>
          <Link href="https://twitter.com/jvzaniolo" external>
            X (Twitter)
          </Link>
        </li>
        <li>
          <Link href="https://github.com/jvzaniolo" external>
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/jvzaniolo" external>
            LinkedIn
          </Link>
        </li>
      </ul>
    </section>
  );
}
