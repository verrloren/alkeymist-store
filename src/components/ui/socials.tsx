"use client";

import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export function Socials() {
  return (
    <>
      <GitHubLogoIcon className="size-5 cursor-pointer font-light text-neutral-600 transition-colors hover:text-neutral-800 dark:hover:text-neutral-500" />
      <TwitterLogoIcon className="size-5 cursor-pointer font-light text-neutral-600 transition-colors hover:text-neutral-800 dark:hover:text-neutral-500" />
      <InstagramLogoIcon className="size-5 cursor-pointer font-light text-neutral-600 transition-colors hover:text-neutral-800 dark:hover:text-neutral-500" />
      <DiscordLogoIcon className="size-5 cursor-pointer font-light text-neutral-600 transition-colors hover:text-neutral-800 dark:hover:text-neutral-500" />
			{/* <Image
			 	className="cursor-pointer hover:brightness-110 transition-all"
        src="/images/github_3d.png"
        width={30}
        height={30}
        alt="discord_icon"
      />
      <Image
				className="cursor-pointer hover:brightness-110 transition-all"
        src="/images/twitter_3d.png"
        width={30}
        height={30}
        alt="discord_icon"
      />
      <Image
				className="cursor-pointer hover:brightness-110 transition-all"
        src="/images/instagram_3d.png"
        width={30}
        height={30}
        alt="discord_icon"
      />
      <Image
				className="cursor-pointer hover:brightness-110 transition-all"
        src="/images/discord_3d.png"
        width={30}
        height={30}
        alt="discord_icon"
      /> */}
    </>
  );
}
