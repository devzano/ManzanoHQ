// src/constants/images.ts
import type { StaticImageData } from "next/image";

import Logo from "../../public/images/logo/logoMain.png";
import LogoAlt from "../../public/images/logo/logoMainAlt.png";
import LogoInvertAlpha from "../../public/images/logo/logoInvertAlpha.png";
import HomeIcon from "../../public/images/devLogos/home_icon.png";
import PrivacyPolicy from "../../public/images/devLogos/privacyPolicy.png";
import Terms from "../../public/images/devLogos/termsConditions.png";

import MPSLogo from "../../public/images/mps/mpsLogo.png";
import MPSIcon from "../../public/images/mps/mpsIcon.png";
import MPSPlaceholderNoBG from "../../public/images/mps/placeholderNoBG.png";

import NextJS from "../../public/images/devLogos/nextjs.png";
import Supabase from "../../public/images/devLogos/supabase.png";
import Stripe from "../../public/images/devLogos/stripe.png";
import Expo from "../../public/images/devLogos/expo.png";
import Xcode from "../../public/images/devLogos/xcode.png";
import VSCode from "../../public/images/devLogos/visualstudio.png";

type Img = StaticImageData;

const AppImages = {
  logo: Logo as Img,
  logoAlt: LogoAlt as Img,
  logoInvertAlpha: LogoInvertAlpha as Img,
  home: HomeIcon as Img,
  privacyPolicy: PrivacyPolicy as Img,
  termsConditions: Terms as Img,

  mpsLogo: MPSLogo as Img,
  mpsIcon: MPSIcon as Img,
  mpsPHNBG: MPSPlaceholderNoBG as Img,

  nextJS: NextJS as Img,
  supabase: Supabase as Img,
  stripe: Stripe as Img,
  expo: Expo as Img,
  xcode: Xcode as Img,
  vsCode: VSCode as Img,
} as const;

export default AppImages;