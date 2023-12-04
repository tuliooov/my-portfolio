import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";
import { PrismicRichText } from "./PrismicRichText";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";

function SignUpForm({ settings }: any) {
  return (
    <div className="px-4 flex justify-center">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
          <div className="text-center font-serif tracking-tight text-slate-500">
            <PrismicRichText
              field={settings.data.newsletterDescription}
              components={{
                heading1: ({ children }: any) => (
                  <Heading as="h2" className="mb-4 last:mb-0">
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }: any) => (
                  <p className="mb-4 italic last:mb-0">{children}</p>
                ),
              }}
            />
          </div>
        )}
        <div className="flex flex-wrap gap-2 justify-center">
          <LinkButton href="https://github.com/tuliooov" icon={Github} circle target={'_blank'} />
          <LinkButton href="https://www.linkedin.com/in/marcotuliovaleriano/" icon={Linkedin} circle target={'_blank'} />
          <LinkButton href="https://www.instagram.com/_marcovaleriano/" icon={Instagram} circle target={'_blank'} />
          <LinkButton href="https://api.whatsapp.com/send/?phone=5537988031061&text&type=phone_number&app_absent=0" icon={MessageCircle} circle target={'_blank'} />
          {/* <div className="relative">
            <label>
              <span className="sr-only">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="your-name@example.com"
                required={true}
                className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div> */}
          {/* {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <p className="text-center text-xs tracking-tight text-slate-500">
              <PrismicText field={settings.data.newsletterDisclaimer} />
            </p>
          )} */}
        </div>
      </form>
    </div>
  );
}

export function Footer({ withSignUpForm = true, settings }: any) {
  return (
    <Bounded as="footer">
        <HorizontalDivider />
        {withSignUpForm && <SignUpForm settings={settings} />}
    </Bounded>
  );
}
