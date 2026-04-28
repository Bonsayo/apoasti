export type FacilityType = "public" | "private";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  nextAvailable: string;
}

export interface Department {
  id: string;
  name: string;
  nameAm: string;
  icon: string;
  doctors: Doctor[];
}

export interface Hospital {
  id: string;
  name: string;
  nameAm: string;
  type: FacilityType;
  location: string;
  locationAm: string;
  phone: string;
  available: boolean;
  departments: Department[];
}

export const hospitals: Hospital[] = [
  {
    id: "tikur-anbessa",
    name: "Tikur Anbessa Specialized Hospital",
    nameAm: "ጥቁር አንበሳ ሆስፒታል",
    type: "public",
    location: "Zambia St, Addis Ababa",
    locationAm: "ዛምቢያ ጎዳና፣ አዲስ አበባ",
    phone: "+251 11 551 7211",
    available: true,
    departments: [
      {
        id: "internal-medicine",
        name: "Internal Medicine",
        nameAm: "የውስጥ ሕክምና",
        icon: "stethoscope",
        doctors: [
          { id: "dr-bekele-1", name: "Dr. Bekele Haile", specialty: "Internal Medicine", nextAvailable: "Today" },
          { id: "dr-almaz-1", name: "Dr. Almaz Girma", specialty: "Internal Medicine", nextAvailable: "Tomorrow" },
        ],
      },
      {
        id: "cardiology",
        name: "Cardiology",
        nameAm: "የልብ ሕክምና",
        icon: "cardiology",
        doctors: [
          { id: "dr-solomon-1", name: "Dr. Solomon Tesfaye", specialty: "Cardiology", nextAvailable: "Today" },
        ],
      },
      {
        id: "pediatrics",
        name: "Pediatrics",
        nameAm: "የሕፃናት ሕክምና",
        icon: "child_care",
        doctors: [
          { id: "dr-tigist-1", name: "Dr. Tigist Kebede", specialty: "Pediatrics", nextAvailable: "Today" },
          { id: "dr-meron-1", name: "Dr. Meron Tadesse", specialty: "Pediatrics", nextAvailable: "Tomorrow" },
        ],
      },
      {
        id: "orthopedics",
        name: "Orthopedics",
        nameAm: "የአጥንት ሕክምና",
        icon: "orthopedics",
        doctors: [
          { id: "dr-dawit-1", name: "Dr. Dawit Alemu", specialty: "Orthopedics", nextAvailable: "Today" },
        ],
      },
    ],
  },
  {
    id: "st-pauls",
    name: "St. Paul's Hospital Millennium Medical College",
    nameAm: "ቅዱስ ጳውሎስ ሆስፒታል",
    type: "public",
    location: "Swaziland St, Addis Ababa",
    locationAm: "ስዋዚላንድ ጎዳና፣ አዲስ አበባ",
    phone: "+251 11 278 0031",
    available: true,
    departments: [
      {
        id: "general",
        name: "General Medicine",
        nameAm: "የጠቅላላ ሕክምና",
        icon: "stethoscope",
        doctors: [
          { id: "dr-hana-1", name: "Dr. Hana Tesfaye", specialty: "General Medicine", nextAvailable: "Today" },
        ],
      },
      {
        id: "surgery",
        name: "Surgery",
        nameAm: "የቀዶ ሕክምና",
        icon: "surgical",
        doctors: [
          { id: "dr-yonas-1", name: "Dr. Yonas Mekonnen", specialty: "Surgery", nextAvailable: "Tomorrow" },
        ],
      },
      {
        id: "gynecology",
        name: "Gynecology & Obstetrics",
        nameAm: "የሴቶች ሕክምና",
        icon: "pregnant_woman",
        doctors: [
          { id: "dr-selamawit-1", name: "Dr. Selamawit Bekele", specialty: "Gynecology", nextAvailable: "Today" },
        ],
      },
    ],
  },
  {
    id: "menelik",
    name: "Menelik II Referral Hospital",
    nameAm: "ምኒልክ ሁለተኛ ሆስፒታል",
    type: "public",
    location: "Entoto Ave, Addis Ababa",
    locationAm: "እንጦጦ አቬኑ፣ አዲስ አበባ",
    phone: "+251 11 111 5100",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Dermatology",
        nameAm: "የቆዳ ሕክምና",
        icon: "healing",
        doctors: [
          { id: "dr-fasil-1", name: "Dr. Fasil Ayele", specialty: "Dermatology", nextAvailable: "Today" },
        ],
      },
      {
        id: "ophthalmology",
        name: "Ophthalmology",
        nameAm: "የዓይን ሕክምና",
        icon: "visibility",
        doctors: [
          { id: "dr-wubet-1", name: "Dr. Wubet Girma", specialty: "Ophthalmology", nextAvailable: "Today" },
        ],
      },
    ],
  },
  {
    id: "korean",
    name: "Korean Hospital (Myungsung Christian Medical Center)",
    nameAm: "ኮሪያ ሆስፒታል",
    type: "private",
    location: "Jemo, Addis Ababa",
    locationAm: "ጀሞ፣ አዲስ አበባ",
    phone: "+251 11 667 0033",
    available: true,
    departments: [
      {
        id: "internal-medicine",
        name: "Internal Medicine",
        nameAm: "የውስጥ ሕክምና",
        icon: "stethoscope",
        doctors: [
          { id: "dr-tsegaye-1", name: "Dr. Tsegaye Hailu", specialty: "Internal Medicine", nextAvailable: "Today" },
        ],
      },
      {
        id: "cardiology",
        name: "Cardiology",
        nameAm: "የልብ ሕክምና",
        icon: "cardiology",
        doctors: [
          { id: "dr-eleni-1", name: "Dr. Eleni Zewde", specialty: "Cardiology", nextAvailable: "Tomorrow" },
        ],
      },
    ],
  },
  {
    id: "hayat",
    name: "Hayat General Hospital",
    nameAm: "ሃያት ጠቅላላ ሆስፒታል",
    type: "private",
    location: "Bole, Addis Ababa",
    locationAm: "ቦሌ፣ አዲስ አበባ",
    phone: "+251 11 661 3777",
    available: true,
    departments: [
      {
        id: "pediatrics",
        name: "Pediatrics",
        nameAm: "የሕፃናት ሕክምና",
        icon: "child_care",
        doctors: [
          { id: "dr-beza-1", name: "Dr. Beza Lemma", specialty: "Pediatrics", nextAvailable: "Today" },
        ],
      },
      {
        id: "orthopedics",
        name: "Orthopedics",
        nameAm: "የአጥንት ሕክምና",
        icon: "orthopedics",
        doctors: [
          { id: "dr-kirubel-1", name: "Dr. Kirubel Tesfaye", specialty: "Orthopedics", nextAvailable: "Today" },
        ],
      },
    ],
  },
  {
    id: "landmark",
    name: "Landmark General Hospital",
    nameAm: "ላንድማርክ ጠቅላላ ሆስፒታል",
    type: "private",
    location: "CMC, Addis Ababa",
    locationAm: "ሲ.ኤም.ሲ፣ አዲስ አበባ",
    phone: "+251 11 662 0202",
    available: true,
    departments: [
      {
        id: "gynecology",
        name: "Gynecology & Obstetrics",
        nameAm: "የሴቶች ሕክምና",
        icon: "pregnant_woman",
        doctors: [
          { id: "dr-hiwot-1", name: "Dr. Hiwot Tesfamariam", specialty: "Gynecology", nextAvailable: "Today" },
        ],
      },
      {
        id: "internal-medicine",
        name: "Internal Medicine",
        nameAm: "የውስጥ ሕክምና",
        icon: "stethoscope",
        doctors: [
          { id: "dr-amanuel-1", name: "Dr. Amanuel Bekele", specialty: "Internal Medicine", nextAvailable: "Today" },
        ],
      },
    ],
  },
];

export function getHospitalById(id: string): Hospital | undefined {
  return hospitals.find((h) => h.id === id);
}
