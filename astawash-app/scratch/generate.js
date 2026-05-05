const fs = require('fs');

const rawData = `
GENERAL HOSPITALS
Tikur Anbessa (Black Lion) | Public | The country's largest referral and teaching hospital
St. Paul’s Millennium Medical College | Public | Leading center for specialized surgery and medical education
Yekatit 12 Medical College | Public | Renowned for its burn center and plastic surgery departments
Menelik II Referral Hospital | Public | One of Ethiopia's oldest and most versatile public hospitals
Zewditu Memorial Hospital | Public | A major center for maternal health and general internal medicine
Nordic Medical Centre (NMC) | Private | High international standards with a focus on emergency care
Landmark General Hospital | Private | Well-regarded for surgical precision and advanced diagnostics
Kadisco General Hospital | Private | Provides a wide range of specialized care with modern equipment
Bethzatha General Hospital | Private | A long-standing private facility known for diverse specialty wings
Hayat Hospital | Private | Offers comprehensive 24/7 emergency and inpatient services

DENTAL CLINICS
ALERT Hospital Dental Unit | Public | Specialized oral and maxillofacial surgical services
St. Paul’s Dental Department | Public | Comprehensive public dental care and training facility
Tikur Anbessa Dental Unit | Public | Tertiary-level dental care for complex cases
Menelik II Dental Clinic | Public | General public dental services (extractions, fillings, cleaning)
Tirunesh Beijing Dental Unit | Public | Provides essential dental services in the Akaki Kality area
Smile Specialty Dental Center | Private | Premier digital dentistry, implants, and orthodontics
Ye-Almaz Dental Clinic | Private | Popular for pediatric dentistry and cosmetic procedures
Legacy Dental Clinic | Private | Specialized in restorative surgery and aesthetic dental care
NovoCare Dental Clinic | Private | Known for emergency dental care and same-day treatments
Bethel Dental Clinic | Private | Focused on professional orthodontics and root canal therapy

EYE CLINICS (OPHTHALMOLOGY)
Menelik II Eye Hospital | Public | The primary public specialized center for eye surgery
Tikur Anbessa Eye Unit | Public | Advanced tertiary eye care, including retina and cornea services
ALERT Hospital Eye Clinic | Public | Comprehensive preventative and surgical eye services
St. Paul’s Ophthalmology Dept | Public | Modern department offering specialized eye surgeries
Ras Desta Damtew Eye Unit | Public | Reliable public center for cataract surgery and exams
WGGA Eye Center | Private | One of the most advanced private laser eye centers
Addis Ababa Eye Clinic | Private | Expert care for myopia and pediatric ophthalmology
Berhanena Selam Eye Clinic | Private | Long-standing reputation for diagnostic and surgical quality
Glassland Eye Clinic | Private | Focuses on refractive errors and specialized contact lenses
Zemen Eye Clinic | Private | Offers modern diagnostic tools and specialized outpatient care

DERMATOLOGICAL CLINICS (SKIN CARE)
ALERT National Dermatology Center | Public | The national center of excellence for skin diseases
St. Paul’s Dermatology Dept | Public | Specialized care for chronic and infectious skin conditions
Tikur Anbessa Dermatology Unit | Public | Focuses on complex dermatological diagnosis and research
Yekatit 12 Dermatology Clinic | Public | General skin treatments provided by resident specialists
Ras Desta Damtew Derma Unit | Public | Publicly funded clinic for dermato-venereology services
Allure Dermatology & Laser Centre | Private | Premier center for cosmetic dermatology and laser therapy
Amren Specialized Dermatology | Private | Focused on personalized acne and eczema treatments
Dr. Ruth Leekassa Derma Clinic | Private | High-rated clinic for both clinical and aesthetic skin care
Dr. Belaynew Taye Derma Clinic | Private | Renowned for treating chronic and complex skin conditions
Girum Hospital (Derma Wing) | Private | Integrated hospital-based dermatology with modern equipment
`;

let out = `export type FacilityType = "public" | "private";

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
  category: string;
  features: string;
  location: string;
  locationAm: string;
  phone: string;
  available: boolean;
  departments: Department[];
}

export const hospitals: Hospital[] = [
`;

const lines = rawData.trim().split('\\n');
let currentCategory = "";

for (let line of lines) {
  line = line.trim();
  if (!line) continue;
  
  if (!line.includes('|')) {
    // This is a category header
    if (line.includes("GENERAL")) currentCategory = "General Hospitals";
    else if (line.includes("DENTAL")) currentCategory = "Dental Clinics";
    else if (line.includes("EYE")) currentCategory = "Eye Clinics (Ophthalmology)";
    else if (line.includes("DERMA")) currentCategory = "Dermatological Clinics (Skin Care)";
    continue;
  }
  
  const parts = line.split('|').map(s => s.trim());
  if (parts.length === 3) {
    const name = parts[0];
    const type = parts[1].toLowerCase();
    const features = parts[2].replace(/"/g, '\\\\"');
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    let departments = '';
    if (currentCategory.includes("Dental")) {
      departments = \`      {
        id: "dentistry",
        name: "Dentistry",
        nameAm: "የጥርስ ሕክምና",
        icon: "dentistry",
        doctors: [
          { id: "dr-mock-1", name: "Dr. Abebe Bekele", specialty: "Dentistry", nextAvailable: "Today" }
        ],
      }\`;
    } else if (currentCategory.includes("Eye")) {
      departments = \`      {
        id: "ophthalmology",
        name: "Ophthalmology",
        nameAm: "የዓይን ሕክምና",
        icon: "visibility",
        doctors: [
          { id: "dr-mock-2", name: "Dr. Almaz Tadesse", specialty: "Ophthalmology", nextAvailable: "Today" }
        ],
      }\`;
    } else if (currentCategory.includes("Dermatological")) {
      departments = \`      {
        id: "dermatology",
        name: "Dermatology",
        nameAm: "የቆዳ ሕክምና",
        icon: "healing",
        doctors: [
          { id: "dr-mock-3", name: "Dr. Fasil Girma", specialty: "Dermatology", nextAvailable: "Today" }
        ],
      }\`;
    } else {
      departments = \`      {
        id: "general",
        name: "General Medicine",
        nameAm: "የጠቅላላ ሕክምና",
        icon: "stethoscope",
        doctors: [
          { id: "dr-mock-4", name: "Dr. Tigist Hailu", specialty: "General Medicine", nextAvailable: "Today" }
        ],
      }\`;
    }
    
    out += `  {
    id: "${id}",
    name: "${name}",
    nameAm: "${name}",
    type: "${type}",
    category: "${currentCategory}",
    features: "${features}",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
${departments}
    ]
  },
`;
  }
}

out += `];

export function getHospitalById(id: string): Hospital | undefined {
  return hospitals.find((h) => h.id === id);
}
`;

fs.writeFileSync('src/data/hospitals.ts', out, 'utf-8');
console.log('Successfully generated src/data/hospitals.ts');
