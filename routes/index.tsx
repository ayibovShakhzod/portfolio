import { Head } from "$fresh/runtime.ts";
import { socialLinks } from "@/constants/index.ts";
import { Badge } from "@/components/Badge/index.tsx";
import { ColorsEnum } from "@/types/index.ts";
import { skills } from "../constants/data.ts";
import { LinkIcon } from "@/components/Icons/LinkIcon.tsx";

export default function Home() {
  return (
    <html class="position-relative">
      <Head>
        <title>Shakhzod Ayibjonov, Shaha</title>
        <meta name="title" content="Shakhzod Ayibjonov, Shaha" />
        <meta name="description" content="Software Engineer with great potential towards being outstanding candidate in this field. Eager to learn latest technologies and confident about facing new challenges. Continuously work towards being professional." />
        <meta name="keywords" content="Shaha, Shakhzod, JavaScript, React, Uzbekistan, Software Engineer, Next.js, Ayibjonov, Frontend, Uzb, "/>
        <meta name="author" content="Shakhzod Ayibjonov"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shaha.deno.dev/" />
        <meta property="og:title" content="Shakhzod Ayibjonov, Shaha" />
        <meta property="og:description" content="Software Engineer with great potential towards being outstanding candidate in this field. Eager to learn latest technologies and confident about facing new challenges. Continuously work towards being professional." />
        <meta property="og:image" content="/banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shaha.deno.dev/" />
        <meta property="twitter:title" content="Shakhzod Ayibjonov, Shaha" />
        <meta property="twitter:description" content="Software Engineer with great potential towards being outstanding candidate in this field. Eager to learn latest technologies and confident about facing new challenges. Continuously work towards being professional." />
        <meta property="twitter:image" content="/banner.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </Head>
      <img class="figure" src="/figure.svg" />
      <div class="min-h-screen">
        <div class="py-10 lg:px-0 px-4 mx-auto max-w-screen-lg">
          <div class="flex flex-col">
            <h1 class="mt-4 font-bold text-5xl leading-none w-[85%]">
              <span>Shakhzod Ayibjonov</span>{" "}
              <i class="text-3xl text-secondary font-semibold">(Shaha)</i>
            </h1>
          </div>
          <span class="mt-2 block text-secondary text-xl font-medium">
            Software Engineer
          </span>
          <div class="flex flex-row items-center mt-4">
            {socialLinks.map(({ href, id, title, Icon }) => (
              <a href={href} key={id} target="_blank" class="mr-4">
                <Icon class="text-secondary hover:text-blue-900 dark:hover:text-white ease-linear duration-200 w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
          <p class="mt-4 w-[85%]">
            Software Engineer with great potential towards being outstanding
            candidate in this field. Eager to learn latest technologies and
            confident about facing new challenges. Continuously work towards
            being professional.
          </p>
          <div class="mt-7 pt-5">
            <h2 class="text-4xl font-semibold mb-3">Experience</h2>
            <div class="flex flex-col mb-5">
              <div class="flex flex-col">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Green}>
                    <a
                      href="http://roomster.com/"
                      target="_blank"
                      class="flex items-center"
                    >
                      Roomster
                      <LinkIcon class="ml-1" />
                    </a>
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-semibold">
                    Frontend Developer
                  </span>
                </div>
                <span class="font-medium">
                  Part-time · Jan, 2022 - Jan, 2023
                </span>
                <div class="mt-4">
                  <p>
                    Roomster company based on US which serves as platform for
                    finding roommates, and sharing rooms.
                  </p>
                  <ul class="flex flex-col gap-4 list-disc pl-5 mt-3">
                    <li>
                      Fixed bugs and added new features
                    </li>
                    <li>
                      Worked with legacy codebase
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col mt-7">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Yellow}>
                    <a
                      href="https://tieaprons.com/"
                      target="_blank"
                      class="flex items-center"
                    >
                      Tieaprons
                      <LinkIcon class="ml-1" />
                    </a>
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-semibold">
                    Frontend Developer
                  </span>
                </div>
                <span class="font-medium">
                  Part-time · Aug, 2021 - Jan, 2023
                </span>
                <div class="mt-4">
                  <p>
                    Platform between homecookers and users, helps people to
                    order, share amazing recipes and dishes
                  </p>
                  <ul class="flex flex-col gap-4 list-disc pl-5 mt-3">
                    <li>
                      Сontinued develop
                    </li>
                    <li>
                      Worked with legacy codebase.
                    </li>
                    <li>
                      Fixed bugs and added new features.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col mt-7">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Blue}>
                    <a
                      href="https://bictory.io/"
                      target="_blank"
                      class="flex items-center"
                    >
                      Bictory Finance
                      <LinkIcon class="ml-1" />
                    </a>
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-semibold">
                    Frontend Developer
                  </span>
                </div>
                <span class="font-medium">
                  Full-time · May, 2021 - Jan, 2023
                </span>
                <div class="mt-4">
                  <p>Bictory Finance is a financial technology company.</p>

                  <p>
                    Frontend engineer with 1.5+ years working for a blockchain
                    agnostic company specializing on React JS, Typescript and
                    Web3.
                  </p>
                  <ul class="flex flex-col gap-4 list-disc pl-5 mt-3">
                    <li>
                      Managed website development for 4 products i.e{" "}
                      <a
                        href="https://bictory.art/"
                        class="text-blue-500 italic"
                        target="_blank"
                      >
                        NFT Marketplace{" "}
                      </a>
                      + dashboard,{" "}
                      <a
                        href="https://app.ccd.domains/"
                        class="text-blue-500 italic"
                        target="_blank"
                      >
                        Domain Name Service{" "}
                      </a>
                      + dashboard,{" "}
                      <a
                        href="https://bictory.exchange/"
                        class="text-blue-500 italic"
                        target="_blank"
                      >
                        Centralized Exchange{" "}
                      </a>
                      + dashboard,{" "}
                      <a
                        href="https://bictory.io/"
                        class="text-blue-500 italic"
                        target="_blank"
                      >
                        Website
                      </a>, from the initial stage to the completion stage.
                    </li>
                    <li>
                      Has a great understanding of design patterns, web
                      architecture and Restful APIs.
                    </li>
                    <li>
                      Developed web apps using front end development tools such
                      as HTML, Javascript, Typescript, React, NextJS, CSS, Sass,
                      Web3.
                    </li>
                    <li>
                      Implemented improvements in web, mobile responsiveness and
                      functionality.
                    </li>
                    <li>Trained and mentored new front-end developers.</li>
                    <li>
                      Build beautiful user interface based on product usability,
                      customer experience, feedback from stakeholders, customers
                      and team.
                    </li>
                    <li>
                      Track record of operating independently, demonstrating
                      creativity, being detail oriented, and delivering results
                      in an organized manner.
                    </li>
                    <li>
                      Proficient skills in using Git version control and Build
                      systems.
                    </li>
                    <li>
                      Proficient skills in using design tools such as Figma and
                      Adobe.
                    </li>
                    <li>
                      Experience working with Agile environment and comfortable
                      using tools such as Jira and Confluence.
                    </li>
                    <li>
                      Enforces best practices to ensure production ready web
                      applications.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col mt-7">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Red}>
                    <a
                      href="https://anorbank.uz/"
                      target="_blank"
                      class="flex items-center"
                    >
                      Anor Bank
                      <LinkIcon class="ml-1" />
                    </a>
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-semibold">
                    Fullstack Developer
                  </span>
                </div>
                <span class="font-medium">
                  Full-time · Apr 2021 - May 2021
                </span>
              </div>
              <div class="flex flex-col mt-7">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Yellow}>
                    <a
                      href="https://silkroadexp.com/"
                      target="_blank"
                      class="flex items-center"
                    >
                      SilkroadExpress
                      <LinkIcon class="ml-1" />
                    </a>
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-semibold">
                    Frontend Developer
                  </span>
                </div>
                <span class="font-medium">
                  Full-time · Sep 2020
                </span>
              </div>
              <div class="flex flex-col mt-7">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Red}>
                    <a
                      href="https://arsenal-d.uz/"
                      target="_blank"
                      class="flex items-center"
                    >
                      Arsenal D
                      <LinkIcon class="ml-1" />
                    </a>
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-semibold">
                    Frontend Developer
                  </span>
                </div>
                <span class="font-medium">
                  Full-time · Dec 2019 - Feb 2020
                </span>
              </div>
              <div class="flex flex-col mt-7">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Blue}>
                    Cheburashka Enterprice
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-semibold">
                    Frontend Developer
                  </span>
                </div>
                <span class="font-medium">
                  Part-time · Nov 2018 - Mar 2019
                </span>
              </div>
            </div>
          </div>
          <div class="mt-7 pt-5">
            <h2 class="text-4xl font-semibold mb-3">Skills</h2>
            <div class="flex flex-col mb-5">
              {skills.map((item) => (
                <div className="flex my-4 gap-2 flex-wrap items-center">
                  <span class="font-semibold">
                    {item.title}:
                  </span>
                  <ul class="flex gap-3 italic flex-wrap">
                    {item.childrens.map((child) => <li>{child},</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
