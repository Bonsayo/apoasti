export type FacilityType = "public" | "private";

export interface Doctor {
  id: string;
  name: string;
  nameAm: string;
  specialty: string;
  specialtyAm: string;
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
  category: string;
  features: string;
  location: string;
  locationAm: string;
  phone: string;
  available: boolean;
  departments: Department[];
}

export const hospitals: Hospital[] = [
  {
    id: "tikur-anbessa-black-lion",
    name: "Tikur Anbessa (Black Lion)",
    nameAm: "ጥቁር አንበሳ ሆስፒታል",
    type: "public",
    category: "General Hospitals",
    features: "The country's largest referral and teaching hospital.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-tikur-anbessa-black-lion-1", name: "Dr. Zeki Abdurahman", nameAm: "ዶ/ር Zeki Abdurahman", specialty: "Hepatobiliary Surgeon", specialtyAm: "የጉበት እና የሃሞት ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-black-lion-2", name: "Dr. Alula Abebe", nameAm: "ዶ/ር Alula Abebe", specialty: "Cardiologist", specialtyAm: "የልብ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-black-lion-3", name: "Dr. Yewondwossen Tadesse", nameAm: "ዶ/ር Yewondwossen Tadesse", specialty: "Nephrologist", specialtyAm: "የኩላሊት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-black-lion-4", name: "Dr. Dereje Melka", nameAm: "ዶ/ር Dereje Melka", specialty: "Neurologist", specialtyAm: "የነርቭ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-black-lion-5", name: "Dr. Abraham Adamu", nameAm: "ዶ/ር Abraham Adamu", specialty: "Oncologist", specialtyAm: "የካንሰር ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "st-paul-s-millennium-medical-college",
    name: "St. Paul's Millennium Medical College",
    nameAm: "ቅዱስ ጳውሎስ ሚሊኒየም ሆስፒታል",
    type: "public",
    category: "General Hospitals",
    features: "Leading center for specialized surgery and medical education.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-st-paul-s-millennium-medical-college-1", name: "Dr. Sisay Sirgu", nameAm: "ዶ/ር Sisay Sirgu", specialty: "Internist", specialtyAm: "የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-millennium-medical-college-2", name: "Dr. Rahel Mezemir", nameAm: "ዶ/ር Rahel Mezemir", specialty: "Pediatrician", specialtyAm: "የህፃናት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-millennium-medical-college-3", name: "Dr. Yonas Abebe", nameAm: "ዶ/ር Yonas Abebe", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-millennium-medical-college-4", name: "Dr. Dereje Bayisa", nameAm: "ዶ/ር Dereje Bayisa", specialty: "Associate Professor", specialtyAm: "ተባባሪ ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-millennium-medical-college-5", name: "Dr. Teshome Gishu", nameAm: "ዶ/ር Teshome Gishu", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "yekatit-12-medical-college",
    name: "Yekatit 12 Medical College",
    nameAm: "የካቲት 12 ሜዲካል ኮሌጅ",
    type: "public",
    category: "General Hospitals",
    features: "Renowned for its burn center and plastic surgery departments.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-yekatit-12-medical-college-1", name: "Dr. Ephrem Gebrehana", nameAm: "ዶ/ር Ephrem Gebrehana", specialty: "Plastic Surgeon", specialtyAm: "የፕላስቲክ ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-yekatit-12-medical-college-2", name: "Dr. Solomon G/Mariam", nameAm: "ዶ/ር Solomon G/Mariam", specialty: "Cardiologist", specialtyAm: "የልብ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-yekatit-12-medical-college-3", name: "Dr. Getachew Belete", nameAm: "ዶ/ር Getachew Belete", specialty: "Surgeon", specialtyAm: "ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-yekatit-12-medical-college-4", name: "Dr. Martha Solomon", nameAm: "ዶ/ር Martha Solomon", specialty: "Resident", specialtyAm: "ሬዚደንት", nextAvailable: "Today" },
          { id: "dr-yekatit-12-medical-college-5", name: "Dr. Daniel Gebre", nameAm: "ዶ/ር Daniel Gebre", specialty: "Specialist", specialtyAm: "ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "menelik-ii-referral-hospital",
    name: "Menelik II Referral Hospital",
    nameAm: "ዳግማዊ ምኒልክ ሪፈራል ሆስፒታል",
    type: "public",
    category: "General Hospitals",
    features: "One of Ethiopia's oldest and most versatile public hospitals.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-menelik-ii-referral-hospital-1", name: "Dr. Dawit G/Egziabher", nameAm: "ዶ/ር Dawit G/Egziabher", specialty: "Surgeon", specialtyAm: "ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-menelik-ii-referral-hospital-2", name: "Dr. Tilahun Kiros", nameAm: "ዶ/ር Tilahun Kiros", specialty: "Ophthalmologist", specialtyAm: "የዓይን ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-menelik-ii-referral-hospital-3", name: "Dr. Yoseph Mulugeta", nameAm: "ዶ/ር Yoseph Mulugeta", specialty: "Dentist", specialtyAm: "የጥርስ ሃኪም", nextAvailable: "Today" },
          { id: "dr-menelik-ii-referral-hospital-4", name: "Dr. Fitsum Abiye", nameAm: "ዶ/ር Fitsum Abiye", specialty: "General", specialtyAm: "ጠቅላላ ሃኪም", nextAvailable: "Today" },
          { id: "dr-menelik-ii-referral-hospital-5", name: "Dr. Mesfin Lule", nameAm: "ዶ/ር Mesfin Lule", specialty: "Specialist", specialtyAm: "ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "zewditu-memorial-hospital",
    name: "Zewditu Memorial Hospital",
    nameAm: "ዘውዲቱ መታሰቢያ ሆስፒታል",
    type: "public",
    category: "General Hospitals",
    features: "A major center for maternal health and general internal medicine.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-zewditu-memorial-hospital-1", name: "Dr. Tedla Belihu", nameAm: "ዶ/ር Tedla Belihu", specialty: "Senior Internist", specialtyAm: "ከፍተኛ የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-zewditu-memorial-hospital-2", name: "Dr. Nuru Mohammed", nameAm: "ዶ/ር Nuru Mohammed", specialty: "OB/GYN", specialtyAm: "የማህፀን እና ፅንስ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-zewditu-memorial-hospital-3", name: "Dr. Edomias Adyamseged", nameAm: "ዶ/ር Edomias Adyamseged", specialty: "Internist", specialtyAm: "የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-zewditu-memorial-hospital-4", name: "Dr. Samson Bassa", nameAm: "ዶ/ር Samson Bassa", specialty: "Internist", specialtyAm: "የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-zewditu-memorial-hospital-5", name: "Dr. Selamawit Tariku", nameAm: "ዶ/ር Selamawit Tariku", specialty: "Radiologist", specialtyAm: "ራዲዮሎጂስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "nordic-medical-centre-nmc",
    name: "Nordic Medical Centre (NMC)",
    nameAm: "ኖርዲክ ሜዲካል ሴንተር",
    type: "private",
    category: "General Hospitals",
    features: "High international standards with a focus on emergency care.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-nordic-medical-centre-nmc-1", name: "Dr. Anteneh Eshetu", nameAm: "ዶ/ር Anteneh Eshetu", specialty: "Infectious Diseases", specialtyAm: "የተላላፊ በሽታዎች ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-nordic-medical-centre-nmc-2", name: "Dr. Birhanu Mengistie", nameAm: "ዶ/ር Birhanu Mengistie", specialty: "General Practitioner", specialtyAm: "ጠቅላላ ሃኪም", nextAvailable: "Today" },
          { id: "dr-nordic-medical-centre-nmc-3", name: "Dr. Tsigereda Gadisa", nameAm: "ዶ/ር Tsigereda Gadisa", specialty: "Specialist", specialtyAm: "ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-nordic-medical-centre-nmc-4", name: "Dr. Henok Gebrewold", nameAm: "ዶ/ር Henok Gebrewold", specialty: "Generalist", specialtyAm: "Generalist", nextAvailable: "Today" },
          { id: "dr-nordic-medical-centre-nmc-5", name: "Dr. Fitsum Zegeye", nameAm: "ዶ/ር Fitsum Zegeye", specialty: "Specialist", specialtyAm: "ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "landmark-general-hospital",
    name: "Landmark General Hospital",
    nameAm: "ላንድማርክ ጠቅላላ ሆስፒታል",
    type: "private",
    category: "General Hospitals",
    features: "Well-regarded for surgical precision and advanced diagnostics.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-landmark-general-hospital-1", name: "Prof. Kebede Oli", nameAm: "ፕሮፌሰር Kebede Oli", specialty: "Cardiologist", specialtyAm: "የልብ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-landmark-general-hospital-2", name: "Dr. Dufera", nameAm: "ዶ/ር Dufera", specialty: "Cardiologist", specialtyAm: "የልብ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-landmark-general-hospital-3", name: "Dr. Feleke", nameAm: "ዶ/ር Feleke", specialty: "Neurosurgeon", specialtyAm: "የጭንቅላት እና የነርቭ ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-landmark-general-hospital-4", name: "Dr. Mesfin", nameAm: "ዶ/ር Mesfin", specialty: "Orthopedic", specialtyAm: "የአጥንት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-landmark-general-hospital-5", name: "Prof. Yeweynhareg", nameAm: "ፕሮፌሰር Yeweynhareg", specialty: "Endocrinologist", specialtyAm: "የሆርሞን ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-landmark-general-hospital-6", name: "Dr. Thomas", nameAm: "ዶ/ር Thomas", specialty: "Surgeon", specialtyAm: "ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "kadisco-general-hospital",
    name: "Kadisco General Hospital",
    nameAm: "ካዲስኮ ጠቅላላ ሆስፒታል",
    type: "private",
    category: "General Hospitals",
    features: "Provides a wide range of specialized care with modern equipment.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-kadisco-general-hospital-1", name: "Dr. Abraham Admasu", nameAm: "ዶ/ር Abraham Admasu", specialty: "Neurosurgeon", specialtyAm: "የጭንቅላት እና የነርቭ ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-kadisco-general-hospital-2", name: "Dr. Adib Yusuf", nameAm: "ዶ/ር Adib Yusuf", specialty: "Pediatrician", specialtyAm: "የህፃናት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-kadisco-general-hospital-3", name: "Dr. Samia Ibrahim", nameAm: "ዶ/ር Samia Ibrahim", specialty: "OB/GYN", specialtyAm: "የማህፀን እና ፅንስ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-kadisco-general-hospital-4", name: "Dr. Mohammed Issa", nameAm: "ዶ/ር Mohammed Issa", specialty: "Orthopedics", specialtyAm: "የአጥንት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-kadisco-general-hospital-5", name: "Dr. Hamza Adus", nameAm: "ዶ/ር Hamza Adus", specialty: "Internist", specialtyAm: "የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "bethzatha-general-hospital",
    name: "Bethzatha General Hospital",
    nameAm: "ቤተዛታ ጠቅላላ ሆስፒታል",
    type: "private",
    category: "General Hospitals",
    features: "A long-standing private facility known for diverse specialty wings.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-bethzatha-general-hospital-1", name: "Dr. Solomon Gebre-Silassie", nameAm: "ዶ/ር Solomon Gebre-Silassie", specialty: "Pathologist", specialtyAm: "ፓቶሎጂስት", nextAvailable: "Today" },
          { id: "dr-bethzatha-general-hospital-2", name: "Dr. Fitsum Dagmawi", nameAm: "ዶ/ር Fitsum Dagmawi", specialty: "Pediatrician", specialtyAm: "የህፃናት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-bethzatha-general-hospital-3", name: "Dr. Nebiyou Asnake", nameAm: "ዶ/ር Nebiyou Asnake", specialty: "Gastroenterologist", specialtyAm: "የጨጓራ እና አንጀት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-bethzatha-general-hospital-4", name: "Dr. Kalkidan Alachew", nameAm: "ዶ/ር Kalkidan Alachew", specialty: "Endocrinologist", specialtyAm: "የሆርሞን ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-bethzatha-general-hospital-5", name: "Dr. Dawit Solomon", nameAm: "ዶ/ር Dawit Solomon", specialty: "Pathologist", specialtyAm: "ፓቶሎጂስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "hayat-hospital",
    name: "Hayat Hospital",
    nameAm: "ሃያት ሆስፒታል",
    type: "private",
    category: "General Hospitals",
    features: "Offers comprehensive 24/7 emergency and inpatient services.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-hayat-hospital-1", name: "Dr. Dawit Desalegn", nameAm: "ዶ/ር Dawit Desalegn", specialty: "Senior Specialist", specialtyAm: "ከፍተኛ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-hayat-hospital-2", name: "Dr. Mulat", nameAm: "ዶ/ር Mulat", specialty: "Urologist", specialtyAm: "የሽንት ቧንቧ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-hayat-hospital-3", name: "Dr. Guda", nameAm: "ዶ/ር Guda", specialty: "Gastroenterology", specialtyAm: "የጨጓራ እና አንጀት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-hayat-hospital-4", name: "Dr. Amsalu", nameAm: "ዶ/ር Amsalu", specialty: "Respiratory", specialtyAm: "የመተንፈሻ አካላት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-hayat-hospital-5", name: "Dr. Asaye", nameAm: "ዶ/ር Asaye", specialty: "ENT Specialist", specialtyAm: "የጆሮ፣ አፍንጫ እና ጉሮሮ ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "alert-hospital-dental-unit",
    name: "ALERT Hospital Dental Unit",
    nameAm: "አለርት ሆስፒታል",
    type: "public",
    category: "Dental Clinics",
    features: "Specialized oral and maxillofacial surgical services.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-alert-hospital-dental-unit-1", name: "Dr. Fitsum Zegeye", nameAm: "ዶ/ር Fitsum Zegeye", specialty: "Maxillofacial", specialtyAm: "የመንጋጋ እና የፊት ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-alert-hospital-dental-unit-2", name: "Dr. Tesfaye Tadesse", nameAm: "ዶ/ር Tesfaye Tadesse", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-hospital-dental-unit-3", name: "Dr. Biniam Tilahun", nameAm: "ዶ/ር Biniam Tilahun", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-hospital-dental-unit-4", name: "Dr. Meron Abebe", nameAm: "ዶ/ር Meron Abebe", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-hospital-dental-unit-5", name: "Dr. Gelana", nameAm: "ዶ/ር Gelana", specialty: "Maxillofacial", specialtyAm: "የመንጋጋ እና የፊት ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "st-paul-s-dental-department",
    name: "St. Paul's Dental Department",
    nameAm: "ቅዱስ ጳውሎስ የጥርስ ህክምና",
    type: "public",
    category: "Dental Clinics",
    features: "Comprehensive public dental care and training facility.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-st-paul-s-dental-department-1", name: "Dr. Sisay Sirgu", nameAm: "ዶ/ር Sisay Sirgu", specialty: "Internist", specialtyAm: "የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dental-department-2", name: "Dr. Rahel Mezemir", nameAm: "ዶ/ር Rahel Mezemir", specialty: "Pediatrician", specialtyAm: "የህፃናት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dental-department-3", name: "Dr. Yonas Abebe", nameAm: "ዶ/ር Yonas Abebe", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dental-department-4", name: "Dr. Dereje Bayisa", nameAm: "ዶ/ር Dereje Bayisa", specialty: "Associate Professor", specialtyAm: "ተባባሪ ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dental-department-5", name: "Dr. Teshome Gishu", nameAm: "ዶ/ር Teshome Gishu", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "tikur-anbessa-dental-unit",
    name: "Tikur Anbessa Dental Unit",
    nameAm: "ጥቁር አንበሳ የጥርስ ህክምና",
    type: "public",
    category: "Dental Clinics",
    features: "Tertiary-level dental care for complex cases.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-tikur-anbessa-dental-unit-1", name: "Dr. Meron Abebe", nameAm: "ዶ/ር Meron Abebe", specialty: "Senior Surgeon", specialtyAm: "Senior Surgeon", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dental-unit-2", name: "Dr. Abel Gizaw", nameAm: "ዶ/ር Abel Gizaw", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dental-unit-3", name: "Dr. Bethlehem Yesehak", nameAm: "ዶ/ር Bethlehem Yesehak", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dental-unit-4", name: "Dr. Alula Abebe", nameAm: "ዶ/ር Alula Abebe", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dental-unit-5", name: "Dr. Mensur Osman", nameAm: "ዶ/ር Mensur Osman", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "menelik-ii-dental-clinic",
    name: "Menelik II Dental Clinic",
    nameAm: "ምኒልክ የጥርስ ህክምና",
    type: "public",
    category: "Dental Clinics",
    features: "General public dental services (extractions, fillings, cleaning).",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-menelik-ii-dental-clinic-1", name: "Dr. Dawit G/Egziabher", nameAm: "ዶ/ር Dawit G/Egziabher", specialty: "Surgeon", specialtyAm: "ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-menelik-ii-dental-clinic-2", name: "Dr. Tilahun Kiros", nameAm: "ዶ/ር Tilahun Kiros", specialty: "Ophthalmologist", specialtyAm: "የዓይን ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-menelik-ii-dental-clinic-3", name: "Dr. Yoseph Mulugeta", nameAm: "ዶ/ር Yoseph Mulugeta", specialty: "Dentist", specialtyAm: "የጥርስ ሃኪም", nextAvailable: "Today" },
          { id: "dr-menelik-ii-dental-clinic-4", name: "Dr. Fitsum Abiye", nameAm: "ዶ/ር Fitsum Abiye", specialty: "General", specialtyAm: "ጠቅላላ ሃኪም", nextAvailable: "Today" },
          { id: "dr-menelik-ii-dental-clinic-5", name: "Dr. Mesfin Lule", nameAm: "ዶ/ር Mesfin Lule", specialty: "Specialist", specialtyAm: "ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "tirunesh-beijing-dental-unit",
    name: "Tirunesh Beijing Dental Unit",
    nameAm: "ጥሩነሽ ቤጂንግ ሆስፒታል",
    type: "public",
    category: "Dental Clinics",
    features: "Provides essential dental services in the Akaki Kality area.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-tirunesh-beijing-dental-unit-1", name: "Dr. Martha Solomon", nameAm: "ዶ/ር Martha Solomon", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-tirunesh-beijing-dental-unit-2", name: "Dr. Ephrem Gebrehana", nameAm: "ዶ/ር Ephrem Gebrehana", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-tirunesh-beijing-dental-unit-3", name: "Dr. Solomon G/Mariam", nameAm: "ዶ/ር Solomon G/Mariam", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-tirunesh-beijing-dental-unit-4", name: "Dr. Getachew Belete", nameAm: "ዶ/ር Getachew Belete", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-tirunesh-beijing-dental-unit-5", name: "Dr. Daniel Gebre", nameAm: "ዶ/ር Daniel Gebre", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "smile-specialty-dental-center",
    name: "Smile Specialty Dental Center",
    nameAm: "ስማይል የጥርስ ህክምና",
    type: "private",
    category: "Dental Clinics",
    features: "Premier digital dentistry, implants, and orthodontics.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-smile-specialty-dental-center-1", name: "Dr. Selamawit Moges", nameAm: "ዶ/ር Selamawit Moges", specialty: "Director", specialtyAm: "Director", nextAvailable: "Today" },
          { id: "dr-smile-specialty-dental-center-2", name: "Dr. Aschalew Tesfaye", nameAm: "ዶ/ር Aschalew Tesfaye", specialty: "Orthodontist", specialtyAm: "የጥርስ ማስተካከያ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-smile-specialty-dental-center-3", name: "Dr. Tsion Wossenu", nameAm: "ዶ/ር Tsion Wossenu", specialty: "Dental Surgeon", specialtyAm: "የጥርስ ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-smile-specialty-dental-center-4", name: "Dr. Nebiyu Bekele", nameAm: "ዶ/ር Nebiyu Bekele", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-smile-specialty-dental-center-5", name: "Dr. Henok Gebrewold", nameAm: "ዶ/ር Henok Gebrewold", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "ye-almaz-dental-clinic",
    name: "Ye-Almaz Dental Clinic",
    nameAm: "የአልማዝ የጥርስ ህክምና",
    type: "private",
    category: "Dental Clinics",
    features: "Popular for pediatric dentistry and cosmetic procedures.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-ye-almaz-dental-clinic-1", name: "Dr. Almaz Kebede", nameAm: "ዶ/ር Almaz Kebede", specialty: "Founder", specialtyAm: "Founder", nextAvailable: "Today" },
          { id: "dr-ye-almaz-dental-clinic-2", name: "Dr. Rohit Singh", nameAm: "ዶ/ር Rohit Singh", specialty: "Implant Specialist", specialtyAm: "የጥርስ ተከላ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-ye-almaz-dental-clinic-3", name: "Dr. Omega Garuma", nameAm: "ዶ/ር Omega Garuma", specialty: "Surgeon", specialtyAm: "ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-ye-almaz-dental-clinic-4", name: "Dr. Amredin Kemal", nameAm: "ዶ/ር Amredin Kemal", specialty: "Senior Surgeon", specialtyAm: "Senior Surgeon", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "legacy-dental-clinic",
    name: "Legacy Dental Clinic",
    nameAm: "ሌጋሲ የጥርስ ህክምና",
    type: "private",
    category: "Dental Clinics",
    features: "Specialized in restorative surgery and aesthetic dental care.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-legacy-dental-clinic-1", name: "Dr. Biniam Tilahun", nameAm: "ዶ/ር Biniam Tilahun", specialty: "Expert Surgeon", specialtyAm: "Expert Surgeon", nextAvailable: "Today" },
          { id: "dr-legacy-dental-clinic-2", name: "Dr. Habtamu Gizaw", nameAm: "ዶ/ር Habtamu Gizaw", specialty: "General Dentist", specialtyAm: "General Dentist", nextAvailable: "Today" },
          { id: "dr-legacy-dental-clinic-3", name: "Dr. Melat Kebede", nameAm: "ዶ/ር Melat Kebede", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-legacy-dental-clinic-4", name: "Dr. Helen Gizaw", nameAm: "ዶ/ር Helen Gizaw", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-legacy-dental-clinic-5", name: "Dr. Nahusenay Nigussie", nameAm: "ዶ/ር Nahusenay Nigussie", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "novocare-dental-clinic",
    name: "NovoCare Dental Clinic",
    nameAm: "ኖቮኬር የጥርስ ህክምና",
    type: "private",
    category: "Dental Clinics",
    features: "Known for emergency dental care and same-day treatments.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-novocare-dental-clinic-1", name: "Dr. Henok Gebrewold", nameAm: "ዶ/ር Henok Gebrewold", specialty: "Cosmetic", specialtyAm: "የኮስሞቲክ ጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-novocare-dental-clinic-2", name: "Dr. Yehya Seid Ibrahim", nameAm: "ዶ/ር Yehya Seid Ibrahim", specialty: "Specialist", specialtyAm: "ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-novocare-dental-clinic-3", name: "Dr. Aschalew Tesfaye", nameAm: "ዶ/ር Aschalew Tesfaye", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-novocare-dental-clinic-4", name: "Dr. Tsion Wossenu", nameAm: "ዶ/ር Tsion Wossenu", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-novocare-dental-clinic-5", name: "Dr. Selamawit Moges", nameAm: "ዶ/ር Selamawit Moges", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "bethel-dental-clinic",
    name: "Bethel Dental Clinic",
    nameAm: "ቤቴል የጥርስ ህክምና",
    type: "private",
    category: "Dental Clinics",
    features: "Focused on professional orthodontics and root canal therapy.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-bethel-dental-clinic-1", name: "Dr. Melaku Belay", nameAm: "ዶ/ር Melaku Belay", specialty: "Orthodontist", specialtyAm: "የጥርስ ማስተካከያ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-bethel-dental-clinic-2", name: "Dr. Abraham Admasu", nameAm: "ዶ/ር Abraham Admasu", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-bethel-dental-clinic-3", name: "Dr. Adib Yusuf", nameAm: "ዶ/ር Adib Yusuf", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-bethel-dental-clinic-4", name: "Dr. Nardos Teferi", nameAm: "ዶ/ር Nardos Teferi", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" },
          { id: "dr-bethel-dental-clinic-5", name: "Dr. Samia Ibrahim", nameAm: "ዶ/ር Samia Ibrahim", specialty: "Dentistry", specialtyAm: "የጥርስ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "menelik-ii-eye-hospital",
    name: "Menelik II Eye Hospital",
    nameAm: "ምኒልክ የዓይን ህክምና",
    type: "public",
    category: "Eye Clinics (Ophthalmology)",
    features: "The primary public specialized center for eye surgery.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-menelik-ii-eye-hospital-1", name: "Dr. Dawit G/Egziabher", nameAm: "ዶ/ር Dawit G/Egziabher", specialty: "Surgeon", specialtyAm: "ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-menelik-ii-eye-hospital-2", name: "Dr. Tilahun Kiros", nameAm: "ዶ/ር Tilahun Kiros", specialty: "Ophthalmologist", specialtyAm: "የዓይን ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-menelik-ii-eye-hospital-3", name: "Dr. Yoseph Mulugeta", nameAm: "ዶ/ር Yoseph Mulugeta", specialty: "Dentist", specialtyAm: "የጥርስ ሃኪም", nextAvailable: "Today" },
          { id: "dr-menelik-ii-eye-hospital-4", name: "Dr. Fitsum Abiye", nameAm: "ዶ/ር Fitsum Abiye", specialty: "General", specialtyAm: "ጠቅላላ ሃኪም", nextAvailable: "Today" },
          { id: "dr-menelik-ii-eye-hospital-5", name: "Dr. Mesfin Lule", nameAm: "ዶ/ር Mesfin Lule", specialty: "Specialist", specialtyAm: "ስፔሻሊስት", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "tikur-anbessa-eye-unit",
    name: "Tikur Anbessa Eye Unit",
    nameAm: "ጥቁር አንበሳ የዓይን ህክምና",
    type: "public",
    category: "Eye Clinics (Ophthalmology)",
    features: "Advanced tertiary eye care, including retina and cornea services.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-tikur-anbessa-eye-unit-1", name: "Dr. Dereje Gulilat", nameAm: "ዶ/ር Dereje Gulilat", specialty: "Retina", specialtyAm: "ሬቲና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-eye-unit-2", name: "Dr. Zeki Abdurahman", nameAm: "ዶ/ር Zeki Abdurahman", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-eye-unit-3", name: "Dr. Abinet Mengesha", nameAm: "ዶ/ር Abinet Mengesha", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-eye-unit-4", name: "Dr. Abiye Hailu", nameAm: "ዶ/ር Abiye Hailu", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-eye-unit-5", name: "Dr. Alula Abebe", nameAm: "ዶ/ር Alula Abebe", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "alert-hospital-eye-clinic",
    name: "ALERT Hospital Eye Clinic",
    nameAm: "አለርት ሆስፒታል",
    type: "public",
    category: "Eye Clinics (Ophthalmology)",
    features: "Comprehensive preventative and surgical eye services.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-alert-hospital-eye-clinic-1", name: "Dr. Solomon G. Tsadik", nameAm: "ዶ/ር Solomon G. Tsadik", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-hospital-eye-clinic-2", name: "Dr. Shimelis Doni", nameAm: "ዶ/ር Shimelis Doni", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-hospital-eye-clinic-3", name: "Dr. Fitsum Zegeye", nameAm: "ዶ/ር Fitsum Zegeye", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-hospital-eye-clinic-4", name: "Dr. Meron Abebe", nameAm: "ዶ/ር Meron Abebe", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-hospital-eye-clinic-5", name: "Dr. Biniam Tilahun", nameAm: "ዶ/ር Biniam Tilahun", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "st-paul-s-ophthalmology-dept",
    name: "St. Paul's Ophthalmology Dept",
    nameAm: "St. Paul's Ophthalmology Dept",
    type: "public",
    category: "Eye Clinics (Ophthalmology)",
    features: "Modern department offering specialized eye surgeries.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-st-paul-s-ophthalmology-dept-1", name: "Dr. Sisay Sirgu", nameAm: "ዶ/ር Sisay Sirgu", specialty: "Internist", specialtyAm: "የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-ophthalmology-dept-2", name: "Dr. Rahel Mezemir", nameAm: "ዶ/ር Rahel Mezemir", specialty: "Pediatrician", specialtyAm: "የህፃናት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-ophthalmology-dept-3", name: "Dr. Yonas Abebe", nameAm: "ዶ/ር Yonas Abebe", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-ophthalmology-dept-4", name: "Dr. Dereje Bayisa", nameAm: "ዶ/ር Dereje Bayisa", specialty: "Associate Professor", specialtyAm: "ተባባሪ ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-ophthalmology-dept-5", name: "Dr. Teshome Gishu", nameAm: "ዶ/ር Teshome Gishu", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "ras-desta-damtew-eye-unit",
    name: "Ras Desta Damtew Eye Unit",
    nameAm: "ራስ ደስታ ዳምጠው ሆስፒታል",
    type: "public",
    category: "Eye Clinics (Ophthalmology)",
    features: "Reliable public center for cataract surgery and exams.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-ras-desta-damtew-eye-unit-1", name: "Dr. Fitsum Abiye", nameAm: "ዶ/ር Fitsum Abiye", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-eye-unit-2", name: "Dr. Birhanu Mengistie", nameAm: "ዶ/ር Birhanu Mengistie", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-eye-unit-3", name: "Dr. Tsigereda Gadisa", nameAm: "ዶ/ር Tsigereda Gadisa", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-eye-unit-4", name: "Dr. Henok Gebrewold", nameAm: "ዶ/ር Henok Gebrewold", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-eye-unit-5", name: "Dr. Solomon G/Mariam", nameAm: "ዶ/ር Solomon G/Mariam", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "wgga-eye-center",
    name: "WGGA Eye Center",
    nameAm: "WGGA የዓይን ማእከል",
    type: "private",
    category: "Eye Clinics (Ophthalmology)",
    features: "One of the most advanced private laser eye centers.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-wgga-eye-center-1", name: "Dr. Teshager Wondale", nameAm: "ዶ/ር Teshager Wondale", specialty: "Pediatric", specialtyAm: "የህፃናት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-wgga-eye-center-2", name: "Dr. Alemayehu Woldeyes", nameAm: "ዶ/ር Alemayehu Woldeyes", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-wgga-eye-center-3", name: "Dr. Dereje Negussie", nameAm: "ዶ/ር Dereje Negussie", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-wgga-eye-center-4", name: "Dr. Daniel Gebre", nameAm: "ዶ/ር Daniel Gebre", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-wgga-eye-center-5", name: "Dr. Mesfin Lule", nameAm: "ዶ/ር Mesfin Lule", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "addis-ababa-eye-clinic",
    name: "Addis Ababa Eye Clinic",
    nameAm: "አዲስ አበባ የዓይን ክሊኒክ",
    type: "private",
    category: "Eye Clinics (Ophthalmology)",
    features: "Expert care for myopia and pediatric ophthalmology.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-addis-ababa-eye-clinic-1", name: "Dr. Dereje Negussie", nameAm: "ዶ/ር Dereje Negussie", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-addis-ababa-eye-clinic-2", name: "Dr. Alemayehu Teferra", nameAm: "ዶ/ር Alemayehu Teferra", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-addis-ababa-eye-clinic-3", name: "Dr. Teshager Wondale", nameAm: "ዶ/ር Teshager Wondale", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-addis-ababa-eye-clinic-4", name: "Dr. Daniel Gebre", nameAm: "ዶ/ር Daniel Gebre", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-addis-ababa-eye-clinic-5", name: "Dr. Mesfin Lule", nameAm: "ዶ/ር Mesfin Lule", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "berhanena-selam-eye-clinic",
    name: "Berhanena Selam Eye Clinic",
    nameAm: "ብርሃንና ሰላም የዓይን ክሊኒክ",
    type: "private",
    category: "Eye Clinics (Ophthalmology)",
    features: "Long-standing reputation for diagnostic and surgical quality.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-berhanena-selam-eye-clinic-1", name: "Dr. Alemayehu Teferra", nameAm: "ዶ/ር Alemayehu Teferra", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-berhanena-selam-eye-clinic-2", name: "Dr. Wondu Alemayehu", nameAm: "ዶ/ር Wondu Alemayehu", specialty: "Technical Advisor", specialtyAm: "Technical Advisor", nextAvailable: "Today" },
          { id: "dr-berhanena-selam-eye-clinic-3", name: "Dr. Tilahun Kiros", nameAm: "ዶ/ር Tilahun Kiros", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-berhanena-selam-eye-clinic-4", name: "Dr. Dereje Negussie", nameAm: "ዶ/ር Dereje Negussie", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "glassland-eye-clinic",
    name: "Glassland Eye Clinic",
    nameAm: "ግላስላንድ የዓይን ክሊኒክ",
    type: "private",
    category: "Eye Clinics (Ophthalmology)",
    features: "Focuses on refractive errors and specialized contact lenses.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-glassland-eye-clinic-1", name: "Dr. Daniel Gebre", nameAm: "ዶ/ር Daniel Gebre", specialty: "Refractive", specialtyAm: "የሪፍራክቲቭ ቀዶ ጥገና ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-glassland-eye-clinic-2", name: "Dr. Mesfin Lule", nameAm: "ዶ/ር Mesfin Lule", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-glassland-eye-clinic-3", name: "Dr. Teshager Wondale", nameAm: "ዶ/ር Teshager Wondale", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-glassland-eye-clinic-4", name: "Dr. Alemayehu Woldeyes", nameAm: "ዶ/ር Alemayehu Woldeyes", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-glassland-eye-clinic-5", name: "Dr. Dereje Negussie", nameAm: "ዶ/ር Dereje Negussie", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "zemen-eye-clinic",
    name: "Zemen Eye Clinic",
    nameAm: "ዘመን የዓይን ክሊኒክ",
    type: "private",
    category: "Eye Clinics (Ophthalmology)",
    features: "Offers modern diagnostic tools and specialized outpatient care.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-zemen-eye-clinic-1", name: "Dr. Mesfin Lule", nameAm: "ዶ/ር Mesfin Lule", specialty: "Cornea", specialtyAm: "የኮርኒያ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-zemen-eye-clinic-2", name: "Dr. Daniel Gebre", nameAm: "ዶ/ር Daniel Gebre", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-zemen-eye-clinic-3", name: "Dr. Teshager Wondale", nameAm: "ዶ/ር Teshager Wondale", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-zemen-eye-clinic-4", name: "Dr. Alemayehu Woldeyes", nameAm: "ዶ/ር Alemayehu Woldeyes", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" },
          { id: "dr-zemen-eye-clinic-5", name: "Dr. Dereje Negussie", nameAm: "ዶ/ር Dereje Negussie", specialty: "Ophthalmology", specialtyAm: "የዓይን ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "alert-national-dermatology-center",
    name: "ALERT National Dermatology Center",
    nameAm: "አለርት የቆዳ ህክምና",
    type: "public",
    category: "Dermatological Clinics (Skin Care)",
    features: "The national center of excellence for skin diseases.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-alert-national-dermatology-center-1", name: "Dr. Shimelis Doni", nameAm: "ዶ/ር Shimelis Doni", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-national-dermatology-center-2", name: "Dr. Solomon G. Tsadik", nameAm: "ዶ/ር Solomon G. Tsadik", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-national-dermatology-center-3", name: "Dr. Fitsum Zegeye", nameAm: "ዶ/ር Fitsum Zegeye", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-national-dermatology-center-4", name: "Dr. Meron Abebe", nameAm: "ዶ/ር Meron Abebe", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-alert-national-dermatology-center-5", name: "Dr. Biniam Tilahun", nameAm: "ዶ/ር Biniam Tilahun", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "st-paul-s-dermatology-dept",
    name: "St. Paul's Dermatology Dept",
    nameAm: "ቅዱስ ጳውሎስ የቆዳ ህክምና",
    type: "public",
    category: "Dermatological Clinics (Skin Care)",
    features: "Specialized care for chronic and infectious skin conditions.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-st-paul-s-dermatology-dept-1", name: "Dr. Sisay Sirgu", nameAm: "ዶ/ር Sisay Sirgu", specialty: "Internist", specialtyAm: "የውስጥ ደዌ ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dermatology-dept-2", name: "Dr. Rahel Mezemir", nameAm: "ዶ/ር Rahel Mezemir", specialty: "Pediatrician", specialtyAm: "የህፃናት ስፔሻሊስት", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dermatology-dept-3", name: "Dr. Yonas Abebe", nameAm: "ዶ/ር Yonas Abebe", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dermatology-dept-4", name: "Dr. Dereje Bayisa", nameAm: "ዶ/ር Dereje Bayisa", specialty: "Associate Professor", specialtyAm: "ተባባሪ ፕሮፌሰር", nextAvailable: "Today" },
          { id: "dr-st-paul-s-dermatology-dept-5", name: "Dr. Teshome Gishu", nameAm: "ዶ/ር Teshome Gishu", specialty: "Assistant Professor", specialtyAm: "ረዳት ፕሮፌሰር", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "tikur-anbessa-dermatology-unit",
    name: "Tikur Anbessa Dermatology Unit",
    nameAm: "ጥቁር አንበሳ የቆዳ ህክምና",
    type: "public",
    category: "Dermatological Clinics (Skin Care)",
    features: "Focuses on complex dermatological diagnosis and research.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-tikur-anbessa-dermatology-unit-1", name: "Dr. Senait Tadesse", nameAm: "ዶ/ር Senait Tadesse", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dermatology-unit-2", name: "Dr. Zeki Abdurahman", nameAm: "ዶ/ር Zeki Abdurahman", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dermatology-unit-3", name: "Dr. Abinet Mengesha", nameAm: "ዶ/ር Abinet Mengesha", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dermatology-unit-4", name: "Dr. Abiye Hailu", nameAm: "ዶ/ር Abiye Hailu", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-tikur-anbessa-dermatology-unit-5", name: "Dr. Alula Abebe", nameAm: "ዶ/ር Alula Abebe", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "yekatit-12-dermatology-clinic",
    name: "Yekatit 12 Dermatology Clinic",
    nameAm: "የካቲት 12 የቆዳ ህክምና",
    type: "public",
    category: "Dermatological Clinics (Skin Care)",
    features: "General skin treatments provided by resident specialists.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-yekatit-12-dermatology-clinic-1", name: "Dr. Firehiwot Desta", nameAm: "ዶ/ር Firehiwot Desta", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-yekatit-12-dermatology-clinic-2", name: "Dr. Ephrem Gebrehana", nameAm: "ዶ/ር Ephrem Gebrehana", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-yekatit-12-dermatology-clinic-3", name: "Dr. Solomon G/Mariam", nameAm: "ዶ/ር Solomon G/Mariam", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-yekatit-12-dermatology-clinic-4", name: "Dr. Getachew Belete", nameAm: "ዶ/ር Getachew Belete", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-yekatit-12-dermatology-clinic-5", name: "Dr. Daniel Gebre", nameAm: "ዶ/ር Daniel Gebre", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "ras-desta-damtew-derma-unit",
    name: "Ras Desta Damtew Derma Unit",
    nameAm: "ራስ ደስታ ዳምጠው ሆስፒታል",
    type: "public",
    category: "Dermatological Clinics (Skin Care)",
    features: "Publicly funded clinic for dermato-venereology services.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-ras-desta-damtew-derma-unit-1", name: "Dr. Fitsum Abiye", nameAm: "ዶ/ር Fitsum Abiye", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-derma-unit-2", name: "Dr. Birhanu Mengistie", nameAm: "ዶ/ር Birhanu Mengistie", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-derma-unit-3", name: "Dr. Tsigereda Gadisa", nameAm: "ዶ/ር Tsigereda Gadisa", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-derma-unit-4", name: "Dr. Henok Gebrewold", nameAm: "ዶ/ር Henok Gebrewold", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-ras-desta-damtew-derma-unit-5", name: "Dr. Solomon G/Mariam", nameAm: "ዶ/ር Solomon G/Mariam", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "allure-dermatology-laser-centre",
    name: "Allure Dermatology & Laser Centre",
    nameAm: "Allure Dermatology & Laser Centre",
    type: "private",
    category: "Dermatological Clinics (Skin Care)",
    features: "Premier center for cosmetic dermatology and laser therapy.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-allure-dermatology-laser-centre-1", name: "Dr. Mahteme Haile", nameAm: "ዶ/ር Mahteme Haile", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-allure-dermatology-laser-centre-2", name: "Dr. Ruth Leekassa", nameAm: "ዶ/ር Ruth Leekassa", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-allure-dermatology-laser-centre-3", name: "Dr. Niguse", nameAm: "ዶ/ር Niguse", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-allure-dermatology-laser-centre-4", name: "Dr. Fuad Temam", nameAm: "ዶ/ር Fuad Temam", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-allure-dermatology-laser-centre-5", name: "Dr. Bezawit Sinishaw", nameAm: "ዶ/ር Bezawit Sinishaw", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "amren-specialized-dermatology",
    name: "Amren Specialized Dermatology",
    nameAm: "Amren Specialized Dermatology",
    type: "private",
    category: "Dermatological Clinics (Skin Care)",
    features: "Focused on personalized acne and eczema treatments.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [

        ],
      }
    ]
  },
  {
    id: "dr-ruth-leekassa-derma-clinic",
    name: "Dr. Ruth Leekassa Derma Clinic",
    nameAm: "ዶ/ር ሩት ሊካሳ የቆዳ ክሊኒክ",
    type: "private",
    category: "Dermatological Clinics (Skin Care)",
    features: "High-rated clinic for both clinical and aesthetic skin care.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-dr-ruth-leekassa-derma-clinic-1", name: "Dr. Ruth Leekassa", nameAm: "ዶ/ር Ruth Leekassa", specialty: "Founder", specialtyAm: "Founder", nextAvailable: "Today" },
          { id: "dr-dr-ruth-leekassa-derma-clinic-2", name: "Dr. Niguse", nameAm: "ዶ/ር Niguse", specialty: "from Landmark", specialtyAm: "from Landmark", nextAvailable: "Today" },
          { id: "dr-dr-ruth-leekassa-derma-clinic-3", name: "Dr. Fuad Temam", nameAm: "ዶ/ር Fuad Temam", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-dr-ruth-leekassa-derma-clinic-4", name: "Dr. Bezawit Sinishaw", nameAm: "ዶ/ር Bezawit Sinishaw", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-dr-ruth-leekassa-derma-clinic-5", name: "Dr. Hawi Kewi", nameAm: "ዶ/ር Hawi Kewi", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "dr-belaynew-taye-derma-clinic",
    name: "Dr. Belaynew Taye Derma Clinic",
    nameAm: "Dr. Belaynew Taye Derma Clinic",
    type: "private",
    category: "Dermatological Clinics (Skin Care)",
    features: "Renowned for treating chronic and complex skin conditions.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-dr-belaynew-taye-derma-clinic-1", name: "Dr. Ruth Leekassa", nameAm: "ዶ/ር Ruth Leekassa", specialty: "Founder", specialtyAm: "Founder", nextAvailable: "Today" },
          { id: "dr-dr-belaynew-taye-derma-clinic-2", name: "Dr. Niguse", nameAm: "ዶ/ር Niguse", specialty: "from Landmark", specialtyAm: "from Landmark", nextAvailable: "Today" },
          { id: "dr-dr-belaynew-taye-derma-clinic-3", name: "Dr. Fuad Temam", nameAm: "ዶ/ር Fuad Temam", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-dr-belaynew-taye-derma-clinic-4", name: "Dr. Bezawit Sinishaw", nameAm: "ዶ/ር Bezawit Sinishaw", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-dr-belaynew-taye-derma-clinic-5", name: "Dr. Hawi Kewi", nameAm: "ዶ/ር Hawi Kewi", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
  {
    id: "girum-hospital-derma-wing",
    name: "Girum Hospital (Derma Wing)",
    nameAm: "Girum Hospital (Derma Wing)",
    type: "private",
    category: "Dermatological Clinics (Skin Care)",
    features: "Integrated hospital-based dermatology with modern equipment.",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
      {
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
          { id: "dr-girum-hospital-derma-wing-1", name: "Dr. Bezawit Sinishaw", nameAm: "ዶ/ር Bezawit Sinishaw", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-girum-hospital-derma-wing-2", name: "Dr. Hawi Kewi", nameAm: "ዶ/ር Hawi Kewi", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-girum-hospital-derma-wing-3", name: "Dr. Fuad Temam", nameAm: "ዶ/ር Fuad Temam", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-girum-hospital-derma-wing-4", name: "Dr. Abraham Admasu", nameAm: "ዶ/ር Abraham Admasu", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" },
          { id: "dr-girum-hospital-derma-wing-5", name: "Dr. Adib Yusuf", nameAm: "ዶ/ር Adib Yusuf", specialty: "Dermatology", specialtyAm: "የቆዳ ህክምና", nextAvailable: "Today" }
        ],
      }
    ]
  },
];

export function getHospitalById(id: string): Hospital | undefined {
  return hospitals.find((h) => h.id === id);
}
