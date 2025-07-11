import FooterSection from "../../shared/components/FooterSection/FooterSection";
import FooterInfo from "../../shared/components/FooterInfo/FooterInfo";
import Share from "../../../../../../../app/modules/icon/components/Share";
import User from "../../../../../../../app/modules/icon/components/User";
import City from "../../../../../../../app/modules/icon/components/City";
import { APP_ROUTES } from "../../../../../../../app/domain/constants/app-routes";
import { APP_INFO } from "../../../../../../../app/domain/constants/app-info";

export default function Sections() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
      <FooterSection title="Corporativo" icon={City}>
        <FooterInfo
          text="Política de cookies"
          link={APP_ROUTES.INFORMATION.COOKIES}
        />
        <FooterInfo
          text="Términos y condiciones"
          link={APP_ROUTES.INFORMATION.TERMS_AND_CONDITIONS}
        />
        <FooterInfo
          text="Política de privacidad"
          link={APP_ROUTES.INFORMATION.PRIVACITY}
        />
      </FooterSection>

      <FooterSection title="Soporte" icon={User}>
        <FooterInfo text="Contáctanos" link={APP_ROUTES.ABOUT_US} />
        <FooterInfo text="Preguntas frecuentes" link={APP_ROUTES.HOME_FAQ} />
      </FooterSection>

      <FooterSection title="Social" icon={Share}>
        <FooterInfo text="Facebook" link={APP_INFO.FACEBOOK} />
        <FooterInfo text="Instagram" link={APP_INFO.INSTAGRAM} />
        <FooterInfo text="Twitter" link={APP_INFO.TWITTER} />
      </FooterSection>
    </div>
  );
}
