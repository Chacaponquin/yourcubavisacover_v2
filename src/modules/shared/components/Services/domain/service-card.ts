import Airplane from "../../../../../modules/app/modules/icon/components/Airplane";
import Safe from "../../../../../modules/app/modules/icon/components/Safe";
import type { IconProps } from "../../../../../modules/app/modules/icon/domain/props";
import type { UiColor } from "../../../../../modules/app/modules/ui/domain/color";
import type { TranslationConfig } from "../../../../app/modules/language/domain/translation";

export interface ServiceCard {
  includes: TranslationConfig<string>[];
  title: TranslationConfig<string>;
  description: TranslationConfig<string>;
  icon: (props: IconProps) => React.ReactNode;
  color: UiColor;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: {
      es: "Visas para Cuba",
      en: "Visas for Cuba",
      it: "Visti per Cuba",
    },
    description: {
      es: "Tramitamos tu visa de turista para Cuba de manera rápida y segura. Nos encargamos de toda la documentación necesaria.",
      en: "We process your Cuban tourist visa quickly and securely. We take care of all the necessary paperwork.",
      it: "Elaboriamo le tue richieste di visto turistico per Cuba in modo rapido e sicuro. Ci occupiamo di tutta la documentazione necessaria.",
    },
    includes: [
      {
        es: "Proceso 100% online",
        en: "100% online process",
        it: "Processo 100% online",
      },
      {
        es: "Entrega en 24-48 horas",
        en: "Delivery in 24-48 hours",
        it: "Consegna in 24-48 ore",
      },
      {
        es: "Soporte personalizado",
        en: "Personalized support",
        it: "Supporto personalizzato",
      },
    ],
    icon: Airplane,
    color: "primary",
  },
  {
    icon: Safe,
    title: {
      es: "Seguros de Viaje",
      en: "Travel Insurance",
      it: "Assicurazione di viaggio",
    },
    description: {
      es: "Protege tu viaje con nuestros seguros especializados para Cuba. Cobertura médica y de equipaje incluida en el servicio.",
      en: "Protect your trip with our specialized insurance for Cuba. Medical and luggage coverage included in the service.",
      it: "Proteggi il tuo viaggio con la nostra assicurazione specializzata per Cuba. Copertura medica e bagaglio inclusa nel servizio.",
    },
    includes: [
      {
        es: "Cobertura médica completa",
        it: "Copertura medica completa",
        en: "Comprehensive medical coverage",
      },
      {
        es: "Protección de equipaje",
        en: "Luggage protection",
        it: "Protezione dei bagagli",
      },
      {
        es: "Asistencia 24/7",
        en: "24/7 Assistance",
        it: "Assistenza 24 ore su 24, 7 giorni su 7",
      },
    ],
    color: "secondary",
  },
];
