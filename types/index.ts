import { FunctionComponent, JSX } from "preact";

export interface SocialLinkModule {
  id: number;
  href: string;
  Icon: FunctionComponent;
  title: string;
}

export enum ColorsEnum {
  Blue = "blue",
  Red = "red",
  Yellow = "yellow",
  Green = "green",
}
