import type { ReactElement } from "react";
import { useLanguage, useScreenDimensions } from "../../hooks";
import {
  organizationsTopRow,
  organizationsBottomRow,
} from "../../data/services";
import { Image } from "react-bootstrap";

export const Organizations = (): ReactElement => {
  const { isPhone } = useScreenDimensions();
  const { siteLanguage } = useLanguage();
  const organizationsText =
    siteLanguage === "en"
      ? "Organizations that trust us:"
      : "Organizaciones que confían en nosotras:";

  const renderOrganizationImages = (organizationsArray: any[]) =>
    organizationsArray.map(({ logo, logoAlt, id }) => (
      <Image
        src={logo}
        alt={logoAlt}
        fluid
        key={id}
        className="transition scale"
      />
    ));

  return (
    <div className={`d-flex flex-column gap-3 mt-${isPhone ? "0 mb-4" : "5"}`}>
      <p className="mb-0">{organizationsText}</p>
      <div className="organizations-track-container d-flex flex-column gap-4">
        <div className="organizations-track organizations-track-left">
          {renderOrganizationImages([
            ...organizationsTopRow,
            ...organizationsTopRow,
          ])}
        </div>
        <div className="organizations-track organizations-track-right">
          {renderOrganizationImages([
            ...organizationsBottomRow,
            ...organizationsBottomRow,
          ])}
        </div>
      </div>
    </div>
  );
};
