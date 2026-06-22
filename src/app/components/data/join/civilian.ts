export interface RequirementGroup {
  id: number;
  title: string;
  requirements: string[];
}

export const civilRequirements: RequirementGroup[] = [
  {
    id: 1,
    title: "Qualifications",
    requirements: [
      "Must be a natural born Filipino Citizen and of Good Moral Character",
      "At least 18 years of age at the time of application",
      "Has not been found guilty of a crime involving moral turpitude or of infamous, disgraceful or immoral conduct, dishonesty, drunkenness, or addiction to drugs",
      "Has not been previously found guilty of offenses relative to, or in connection with, the conduct of a civil service examination",
      "Has not been dismissed from the service for cause",
      "Physically and mentally fit for work"
    ]
  },
  {
    id: 2,
    title: "Initial Requirements",
    requirements: [
      "Original and Photocopy of PSA Birth Certificate",
      "Certified True Copy of Transcript of Records",
      "Certified True Copy of College Diploma",
      "2x2 Colored ID Picture with White Background",
      "Letter of Intent",
      "Personal Data Sheet",
      "Certificate of Eligibility",
      "Proof of Training (if any)",
      "Last Two Performance Ratings (if Government Employee)",
      "Certificate of Employment (for New Applicants, if Previously Employed)",
      "NBI Clearance",
      "Accomplished Application Form",
      "Marriage Contract (for Married Applicants)"
    ]
  },
  {
    id: 3,
    title: "For Promotion",
    requirements: [
      "Original and Photocopy of PSA Birth Certificate",
      "Certified True Copy of Transcript of Records",
      "Certified True Copy of College Diploma",
      "2x2 Colored ID Picture with White Background",
      "Letter of Intent",
      "Personal Data Sheet",
      "Certificate of Eligibility",
      "Latest Performance Rating",
      "Potential Assessment Form",
      "NBI Clearance",
      "Accomplished Application Form",
      "Marriage Contract (for Married Applicants)"
    ]
  }
];