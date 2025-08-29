// REACT IMPORTS
import { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";

// HOOKS
import { useLanguage, useScreenDimensions, useTranslation } from "../../hooks";

// COMPONENTS
import { AnimatedHeading } from "../shared";

// ASSETS
import Separator from "../../assets/images/shared/separator.svg";
import LinkIcon from "../../assets/images/about/link.svg";
import AesMember from "../../assets/images/about/aes-member.png";
import WifMember from "../../assets/images/about/wif-member.png";
import WamMember from "../../assets/images/about/wam-member.png";
import BmiMember from "../../assets/images/about/bmi-member.png";
import Mich from "../../assets/images/about/mich.webm";
import Shana from "../../assets/images/about/shana.webm";
import { aboutTeamMembers } from "../../data/about";
import { AboutCreatorReadMore } from "./AboutCreatorReadMore";

export const AboutCreators = (): ReactElement => {
  const { siteLanguage } = useLanguage();
  const { translate } = useTranslation();
  const { isDesktop, isPhone, isTablet } = useScreenDimensions();
  const { michelle, shana } = aboutTeamMembers;
  const creatorsText = siteLanguage === "en" ? "Creators" : "Creadoras";

  const getMemberImage = (image: string, alt: string) => (
    <Image
      fluid
      alt={alt}
      src={image}
      className={`scale transition d-block m-auto ${
        isPhone ? "w-40 mb-4" : "shanelle-creator-member-image"
      }`}
    />
  );

  const renderMemberImages = () => (
    <div
      className={`d-flex flex-row justify-content-center gap-${
        isPhone ? "1" : "5"
      } mb-${isPhone ? "2" : "5"} ${isPhone || isTablet ? "flex-wrap" : ""}`}
    >
      {getMemberImage(AesMember, "AES Member")}
      {getMemberImage(WifMember, "WIF Member")}
      {getMemberImage(WamMember, "WAM Member")}
      {getMemberImage(BmiMember, "BMI Member")}
    </div>
  );

  return (
    <div className="position-relative">
      <div
        className={`${
          isDesktop ? "shanelle-container" : ""
        } position-relative mb-${
          isPhone ? "2" : "5"
        } animate__animated animate__fadeIn animate__delay-1s`}
      >
        <div
          className={`${
            isDesktop ? "shanelle-inner-container p-5" : "p-0"
          } shanelle-creator-container`}
        >
          {isDesktop ? (
            <AnimatedHeading
              className={"position-absolute ps-3 pe-3"}
              Heading="h1"
              text={creatorsText}
            />
          ) : (
            <div
              className={`d-flex align-items-center mb-${isPhone ? "3" : "5"}`}
            >
              <AnimatedHeading
                className="me-4"
                Heading="h1"
                text={creatorsText}
              />
              {!isPhone && (
                <Image
                  alt="Separator"
                  className="flex-grow-1 w-50"
                  fluid
                  src={Separator}
                />
              )}
            </div>
          )}
          <video playsInline autoPlay muted loop className="w-100">
            <source src={Mich} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="shanelle-creator-details michelle animate__animated animate__fadeIn animate__delay-1-5s">
        <AnimatedHeading
          className="text-center mt-3"
          Heading="h2"
          text="Mich"
        />
        <p className="text-center mb-0">Michelle Deniesse</p>
        <p className="text-center">
          {siteLanguage === "en" ? "Co-Founder of " : "Co-fundadora de "}
          Shanelle Productions
        </p>
        <p className="text-center">
          <a
            href="https://www.imdb.com/name/nm10097059/?ref_=nv_sr_srsg_0"
            target="_blank"
            className="link transition"
            rel="noopener noreferrer"
          >
            {siteLanguage === "en" ? "Go to " : "Visita "}IMDb
            <Image fluid alt="Link Icon" src={LinkIcon} className="ms-2 mb-1" />
          </a>
        </p>
        {renderMemberImages()}
        <AboutCreatorReadMore text={translate(michelle)} />
      </div>
      <div
        className={`${
          isDesktop ? "shanelle-container" : ""
        } position-relative mb-${
          isPhone ? "2" : "5"
        } animate__animated animate__fadeIn animate__delay-2s`}
      >
        <div
          className={`${
            isDesktop ? "shanelle-inner-container p-5" : "p-0"
          } shanelle-creator-container shana-creator-container`}
        >
          <video playsInline autoPlay muted loop className="w-100">
            <source src={Shana} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="shanelle-creator-details shana animate__animated animate__fadeIn animate__delay-2-5s">
        <AnimatedHeading
          className="text-center mt-3"
          Heading="h2"
          text="Shana"
        />
        <p className="text-center mb-0">Shana Pilonieta</p>
        <p className="text-center">
          {siteLanguage === "en" ? "Co-Founder of " : "Co-fundadora de "}
          Shanelle Productions
        </p>
        <p className="text-center">
          <a
            href="https://www.imdb.com/name/nm10097059/?ref_=nv_sr_srsg_0"
            target="_blank"
            className="link transition"
            rel="noopener noreferrer"
          >
            {siteLanguage === "en" ? "Go to " : "Visita "}IMDb
            <Image fluid alt="Link Icon" src={LinkIcon} className="ms-2 mb-1" />
          </a>
        </p>
        {renderMemberImages()}
        <AboutCreatorReadMore text={translate(shana)} />
      </div>
    </div>
  );
};
