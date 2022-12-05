import { FunctionComponent } from "preact";

export interface SocialLinkModule {
  id: number;
  href: string;
  Icon: FunctionComponent | any;
  title: string;
}

export enum ColorsEnum {
  Blue = "blue",
  Red = "red",
  Yellow = "yellow",
  Green = "green",
}
