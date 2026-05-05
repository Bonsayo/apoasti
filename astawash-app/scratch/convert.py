import json

with open('scratch/data.json', 'r') as f:
    data = json.load(f)

out = """export type FacilityType = "public" | "private";

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
"""

for cat in data['categories']:
    cat_name = cat['name']
    for type_name in ['public', 'private']:
        for fac in cat['facilities'][type_name]:
            name = fac['name']
            features = fac['features'].replace('"', '\\"')
            import re
            id_ = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
            
            departments = ""
            if "Dental" in cat_name:
                departments = """      {
        id: "dentistry",
        name: "Dentistry",
        nameAm: "የጥርስ ሕክምና",
        icon: "dentistry",
        doctors: [
          { id: "dr-mock-1", name: "Dr. Abebe Bekele", specialty: "Dentistry", nextAvailable: "Today" }
        ],
      }"""
            elif "Eye" in cat_name:
                 departments = """      {
        id: "ophthalmology",
        name: "Ophthalmology",
        nameAm: "የዓይን ሕክምና",
        icon: "visibility",
        doctors: [
          { id: "dr-mock-2", name: "Dr. Almaz Tadesse", specialty: "Ophthalmology", nextAvailable: "Today" }
        ],
      }"""
            elif "Skin" in cat_name or "Dermatological" in cat_name:
                 departments = """      {
        id: "dermatology",
        name: "Dermatology",
        nameAm: "የቆዳ ሕክምና",
        icon: "healing",
        doctors: [
          { id: "dr-mock-3", name: "Dr. Fasil Girma", specialty: "Dermatology", nextAvailable: "Today" }
        ],
      }"""
            else:
                 departments = """      {
        id: "general",
        name: "General Medicine",
        nameAm: "የጠቅላላ ሕክምና",
        icon: "stethoscope",
        doctors: [
          { id: "dr-mock-4", name: "Dr. Tigist Hailu", specialty: "General Medicine", nextAvailable: "Today" }
        ],
      }"""

            out += f"""  {{
    id: "{id_}",
    name: "{name}",
    nameAm: "{name}",
    type: "{type_name}",
    category: "{cat_name}",
    features: "{features}",
    location: "Addis Ababa",
    locationAm: "አዲስ አበባ",
    phone: "+251 11 000 0000",
    available: true,
    departments: [
{departments}
    ]
  }},
"""
out += """];

export function getHospitalById(id: string): Hospital | undefined {
  return hospitals.find((h) => h.id === id);
}
"""

with open("src/data/hospitals.ts", "w", encoding="utf-8") as f:
    f.write(out)
