import { Head } from "$fresh/runtime.ts";
import { socialLinks } from "@/constants/index.ts";
import { Badge } from "@/components/Badge/index.tsx";
import { ColorsEnum } from "@/types/index.ts";
import { skills } from "../constants/data.ts";

export default function Home() {
  return (
    <html>
      <Head>
        <title>Shakhzod Ayibjonov</title>
      </Head>
      <div class="min-h-screen">
        <div class="py-10 lg:px-0 px-4 mx-auto max-w-screen-lg">
          <div class="flex flex-col">
            <h1 class="mt-4 font-bold text-5xl leading-none">
              <span>Shakhzod Ayibjonov</span>{" "}
              <i class="text-3xl text-secondary font-semibold">(Shaha)</i>
            </h1>
          </div>
          <span class="mt-2 block text-secondary text-xl font-medium">
            Software Engineer
          </span>
          <div class="flex flex-row items-center mt-4">
            {socialLinks.map(({ href, id, title, Icon }) => (
              <a href={href} key={id} class="mr-4">
                <Icon class="text-secondary hover:text-blue-900 dark:hover:text-white ease-linear duration-200 w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
          <p class="mt-4">
            Software Engineer with great potential towards being outstanding
            candidate in this field. Eager to learn latest technologies and
            confident about facing new challenges. Continuously work towards
            being professional.
          </p>
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
          <div class="mt-7 pt-5">
            <h2 class="text-4xl font-semibold mb-3">Experience</h2>
            <div class="flex flex-col mb-5">
              <div class="flex flex-col">
                <div className="flex items-center my-2 flex-wrap">
                  <Badge styleType={ColorsEnum.Blue}>
                    <a href="https://bictory.io/" target="_blank">
                      Bictory Finance
                    </a>
                  </Badge>
                  <span class="ml-0 sm:ml-2 font-medium">
                    Full-time · May, 2021 - Present
                  </span>
                </div>
                <span class="">
                  Bictory Finance is a financial technology company.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
}
