interface ReservistDataItems {
  header: string;
  sections?: SectionsItems[];
}

type SectionsItems = {
  title?: string;
  content: string[];
};

export const reservistData: ReservistDataItems[] = [
  {
    header: "Benefits",
    sections: [
      {
        content: [
          "Participation in Various Trainings",
          "Integration with the regular force during military exercises",
          "Nation Building and Socio-Economic Development",
          "Disaster Response and Rehabilitation Program",
          "Opportunity to Travel Abroad during Cultural Exchange",
          "Change to receive uniforms for selected reservists training",
          "Limited access on Military Facilities",
        ],
      },
    ],
  },
  {
    header: "Reserve Force",
    sections: [
      {
        title: "Qualifications",
        content: [
          "At least 18–64 years old",
          "Natural Born Filipino Citizen",
          "Must pass medical and physical examination",
          "Must be at least a high school graduate for enlistment and a bachelor's degree holder for commission",
          "Must pass AFPSAT for commission",
          "Must be cleared by N2",
        ],
      },
      {
        title: "Initial Requirements",
        content: [
          "Reservist Information Datasheet",
          "Basic/Advance ROTC Certificate",
          "College Diploma & Transcript of Records",
          "PRC License / Professional Civil Service Eligibility",
          "NBI Clearance",
          "PSA Birth Certificate",
          "Drug Test",
        ],
      },
    ],
  },
];
