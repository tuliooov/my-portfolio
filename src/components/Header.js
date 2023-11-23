import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

const ProfileLine = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="flex w-full flex-row justify-items-center gap-8">
        <div className="relative h-24 w-24 overflow-hidden rounded-full bg-slate-300">
          {prismic.isFilled.image(profilePicture) && (
            <PrismicNextImage
              field={profilePicture}
              fill={true}
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
        {/* </PrismicNextLink> */}
        {(prismic.isFilled.richText(name) ||
          prismic.isFilled.richText(description)) && (
          <div className="grid grid-cols-1 gap-0 text-center">
            {prismic.isFilled.richText(name) && (
              <Heading>
                <p className="text-md">
                  <PrismicText field={name} />
                </p>
              </Heading>
            )}
            {prismic.isFilled.richText(description) && (
              <p className="font-serif text-md italic leading-normal tracking-tight text-slate-500">
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        {/* <PrismicNextLink href="/" tabIndex="-1"> */}
        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
          {prismic.isFilled.image(profilePicture) && (
            <PrismicNextImage
              field={profilePicture}
              fill={true}
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
        {/* </PrismicNextLink> */}
        {(prismic.isFilled.richText(name) ||
          prismic.isFilled.richText(description)) && (
          <div className="grid grid-cols-1 gap-2 text-center">
            {prismic.isFilled.richText(name) && (
              <Heading>
                {/* <PrismicNextLink href="/"> */}
                <PrismicText field={name} />
                {/* </PrismicNextLink> */}
              </Heading>
            )}
            {prismic.isFilled.richText(description) && (
              <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
  profileLine = false,
}) => {
  return (
    <Bounded as="header">
      <div className="grid grid-cols-1 justify-items-center gap-20">
        <nav>
          <ul className="flex flex-wrap justify-center gap-10">
            <NavItem>
              <Link href="/">
                <PrismicText field={navigation.data.homepageLabel} />
              </Link>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismic.asText(item.label)}>
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withProfile &&
          (profileLine ? (
            <ProfileLine
              name={settings.data.name}
              description={settings.data.description}
              profilePicture={settings.data.profilePicture}
            />
          ) : (
            <Profile
              name={settings.data.name}
              description={settings.data.description}
              profilePicture={settings.data.profilePicture}
            />
          ))}
        {withDivider && <HorizontalDivider />}
      </div>
    </Bounded>
  );
};
