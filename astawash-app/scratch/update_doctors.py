import json
import re

raw_doctor_data = """
1. General Hospitals
Tikur Anbessa (Black Lion)|Public|Dr. Zeki Abdurahman (Hepatobiliary Surgeon), Dr. Alula Abebe (Cardiologist), Dr. Yewondwossen Tadesse (Nephrologist), Dr. Dereje Melka (Neurologist), Dr. Abraham Adamu (Oncologist).
St. Paul’s Millennium|Public|Dr. Sisay Sirgu (Internist), Dr. Rahel Mezemir (Pediatrician), Dr. Yonas Abebe (Assistant Professor), Dr. Dereje Bayisa (Associate Professor), Dr. Teshome Gishu (Assistant Professor).
Yekatit 12 Medical College|Public|Dr. Ephrem Gebrehana (Plastic Surgeon), Dr. Solomon G/Mariam (Cardiologist), Dr. Getachew Belete (Surgeon), Dr. Martha Solomon (Resident), Dr. Daniel Gebre (Specialist).
Menelik II Referral|Public|Dr. Dawit G/Egziabher (Surgeon), Dr. Tilahun Kiros (Ophthalmologist), Dr. Yoseph Mulugeta (Dentist), Dr. Fitsum Abiye (General), Dr. Mesfin Lule (Specialist).
Zewditu Memorial|Public|Dr. Tedla Belihu (Senior Internist), Dr. Nuru Mohammed (OB/GYN), Dr. Edomias Adyamseged (Internist), Dr. Samson Bassa (Internist), Dr. Selamawit Tariku (Radiologist).
Landmark General|Private|Prof. Kebede Oli (Cardiologist), Dr. Dufera (Cardiologist), Dr. Feleke (Neurosurgeon), Dr. Mesfin (Orthopedic), Prof. Yeweynhareg (Endocrinologist), Dr. Thomas (Surgeon).
Nordic Medical Centre|Private|Dr. Anteneh Eshetu (Infectious Diseases), Dr. Birhanu Mengistie (General Practitioner), Dr. Tsigereda Gadisa (Specialist), Dr. Henok Gebrewold (Generalist), Dr. Fitsum Zegeye (Specialist).
Kadisco General|Private|Dr. Abraham Admasu (Neurosurgeon), Dr. Adib Yusuf (Pediatrician), Dr. Samia Ibrahim (OB/GYN), Dr. Mohammed Issa (Orthopedics), Dr. Hamza Adus (Internist).
Bethzatha General|Private|Dr. Solomon Gebre-Silassie (Pathologist), Dr. Fitsum Dagmawi (Pediatrician), Dr. Nebiyou Asnake (Gastroenterologist), Dr. Kalkidan Alachew (Endocrinologist), Dr. Dawit Solomon (Pathologist).
Hayat Hospital|Private|Dr. Dawit Desalegn (Senior Specialist), Dr. Mulat (Urologist), Dr. Guda (Gastroenterology), Dr. Amsalu (Respiratory), Dr. Asaye (ENT Specialist).

2. Dental Clinics
ALERT Dental Unit|Public|Dr. Fitsum Zegeye (Maxillofacial), Dr. Tesfaye Tadesse, Dr. Biniam Tilahun, Dr. Meron Abebe, Dr. Gelana (Maxillofacial).
St. Paul’s Dental|Public|Dr. Yoseph Mulugeta, Dr. Tesfaye Techane, Dr. Rahel Nega, Dr. Habtamu Ayalew, Dr. Tigist Tsegaye.
Tikur Anbessa Dental|Public|Dr. Meron Abebe (Senior Surgeon), Dr. Abel Gizaw, Dr. Bethlehem Yesehak, Dr. Alula Abebe, Dr. Mensur Osman.
Menelik II Dental|Public|Dr. Yoseph Mulugeta, Dr. Dawit G/Egziabher, Dr. Tilahun Kiros, Dr. Fitsum Abiye, Dr. Mesfin Lule.
Tirunesh Beijing Dental|Public|Dr. Martha Solomon, Dr. Ephrem Gebrehana, Dr. Solomon G/Mariam, Dr. Getachew Belete, Dr. Daniel Gebre.
Smile Specialty|Private|Dr. Selamawit Moges (Director), Dr. Aschalew Tesfaye (Orthodontist), Dr. Tsion Wossenu (Dental Surgeon), Dr. Nebiyu Bekele, Dr. Henok Gebrewold.
Ye-Almaz Dental|Private|Dr. Almaz Kebede (Founder), Dr. Rohit Singh (Implant Specialist), Dr. Omega Garuma (Surgeon), Dr. Amredin Kemal (Senior Surgeon).
Legacy Dental|Private|Dr. Biniam Tilahun (Expert Surgeon), Dr. Habtamu Gizaw (General Dentist), Dr. Melat Kebede, Dr. Helen Gizaw, Dr. Nahusenay Nigussie.
NovoCare Dental|Private|Dr. Henok Gebrewold (Cosmetic), Dr. Yehya Seid Ibrahim (Specialist), Dr. Aschalew Tesfaye, Dr. Tsion Wossenu, Dr. Selamawit Moges.
Bethel Dental|Private|Dr. Melaku Belay (Orthodontist), Dr. Abraham Admasu, Dr. Adib Yusuf, Dr. Nardos Teferi, Dr. Samia Ibrahim.

3. Eye Clinics (Ophthalmology)
Menelik II Eye|Public|Dr. Tilahun Kiros (Cataract), Dr. Wondu Alemayehu (Consultant), Dr. Dereje Negussie, Dr. Alemayehu Teferra, Dr. Mesfin Lule.
Tikur Anbessa Eye|Public|Dr. Dereje Gulilat (Retina), Dr. Zeki Abdurahman, Dr. Abinet Mengesha, Dr. Abiye Hailu, Dr. Alula Abebe.
ALERT Hospital Eye|Public|Dr. Solomon G. Tsadik, Dr. Shimelis Doni, Dr. Fitsum Zegeye, Dr. Meron Abebe, Dr. Biniam Tilahun.
St. Paul’s Eye Dept|Public|Dr. Selamawit G/Kidan, Dr. Rahel Mezemir, Dr. Yonas Abebe, Dr. Dereje Bayisa, Dr. Teshome Gishu.
Ras Desta Eye Unit|Public|Dr. Fitsum Abiye, Dr. Birhanu Mengistie, Dr. Tsigereda Gadisa, Dr. Henok Gebrewold, Dr. Solomon G/Mariam.
WGGA Eye Center|Private|Dr. Teshager Wondale (Pediatric), Dr. Alemayehu Woldeyes, Dr. Dereje Negussie, Dr. Daniel Gebre, Dr. Mesfin Lule.
Addis Ababa Eye Clinic|Private|Dr. Dereje Negussie, Dr. Alemayehu Teferra, Dr. Teshager Wondale, Dr. Daniel Gebre, Dr. Mesfin Lule.
Berhanena Selam|Private|Dr. Alemayehu Teferra, Dr. Wondu Alemayehu (Technical Advisor), Dr. Tilahun Kiros, Dr. Dereje Negussie.
Glassland Eye|Private|Dr. Daniel Gebre (Refractive), Dr. Mesfin Lule, Dr. Teshager Wondale, Dr. Alemayehu Woldeyes, Dr. Dereje Negussie.
Zemen Eye Clinic|Private|Dr. Mesfin Lule (Cornea), Dr. Daniel Gebre, Dr. Teshager Wondale, Dr. Alemayehu Woldeyes, Dr. Dereje Negussie.

4. Dermatological Clinics
ALERT National Derma|Public|Dr. Shimelis Doni, Dr. Solomon G. Tsadik, Dr. Fitsum Zegeye, Dr. Meron Abebe, Dr. Biniam Tilahun.
St. Paul’s Derma|Public|Dr. Tsigereda Gadisa, Dr. Rahel Mezemir, Dr. Yonas Abebe, Dr. Dereje Bayisa, Dr. Teshome Gishu.
Tikur Anbessa Derma|Public|Dr. Senait Tadesse, Dr. Zeki Abdurahman, Dr. Abinet Mengesha, Dr. Abiye Hailu, Dr. Alula Abebe.
Yekatit 12 Derma|Public|Dr. Firehiwot Desta, Dr. Ephrem Gebrehana, Dr. Solomon G/Mariam, Dr. Getachew Belete, Dr. Daniel Gebre.
Ras Desta Derma|Public|Dr. Birhanu Mengistie, Dr. Fitsum Abiye, Dr. Tsigereda Gadisa, Dr. Henok Gebrewold, Dr. Solomon G/Mariam.
Dr. Ruth Leekassa|Private|Dr. Ruth Leekassa (Founder), Dr. Niguse (from Landmark), Dr. Fuad Temam, Dr. Bezawit Sinishaw, Dr. Hawi Kewi.
Kadisco Derma Wing|Private|Dr. Fuad Temam, Dr. Bezawit Sinishaw, Dr. Hawi Kewi, Dr. Abraham Admasu, Dr. Adib Yusuf.
Allure Laser Centre|Private|Dr. Mahteme Haile, Dr. Ruth Leekassa, Dr. Niguse, Dr. Fuad Temam, Dr. Bezawit Sinishaw.
Girum Hospital Derma|Private|Dr. Bezawit Sinishaw, Dr. Hawi Kewi, Dr. Fuad Temam, Dr. Abraham Admasu, Dr. Adib Yusuf.
Rank Specialized|Private|Dr. Tiseme Wondmu, Dr. Ruth Leekassa, Dr. Niguse, Dr. Fuad Temam, Dr. Bezawit Sinishaw.
"""

doc_map = {}
for line in raw_doctor_data.split('\n'):
    if '|' in line:
        parts = line.split('|')
        h_name = parts[0].strip()
        doc_str = parts[2].strip().strip('.')
        docs = [d.strip() for d in doc_str.split(',')]
        doc_map[h_name] = docs

with open('scratch/data.json', 'r') as f:
    data = json.load(f)

out = """export type FacilityType = "public" | "private";

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
"""

def normalize(name):
    name = name.replace("’", "'").replace("â€™", "'").lower()
    return re.sub(r'[^a-z0-9]', '', name)

for cat in data['categories']:
    cat_name = cat['name']
    for type_name in ['public', 'private']:
        for fac in cat['facilities'][type_name]:
            name = fac['name'].replace("’", "'").replace("â€™", "'")
            features = fac['features'].replace('"', '\\"')
            id_ = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
            
            # find matching doctors
            matched_docs = []
            for d_h_name in doc_map.keys():
                d_norm = normalize(d_h_name)
                f_norm = normalize(name)
                # handle "Rank Specialized" -> Rank Specialized Derma Clinic etc
                if d_norm in f_norm or f_norm in d_norm or ('alert' in f_norm and 'alert' in d_norm and cat_name.split()[0].lower() in d_norm.lower()) or ('kadisco' in f_norm and 'kadisco' in d_norm) or ('girum' in f_norm and 'girum' in d_norm) or ('allure' in f_norm and 'allure' in d_norm):
                    matched_docs = doc_map[d_h_name]
                    break
                # Custom mappings for exact matches that fail generic overlap due to different words
                if 'stpauls' in d_norm and 'stpauls' in f_norm:
                     matched_docs = doc_map[d_h_name]
                     break
                if 'menelik' in d_norm and 'menelik' in f_norm:
                     matched_docs = doc_map[d_h_name]
                     break

            # Fallback if somehow missed
            if not matched_docs:
                for d_h_name in doc_map.keys():
                    if d_h_name.split()[0] in name:
                        matched_docs = doc_map[d_h_name]
                        break

            # generate doctor JSON snippet
            doc_snippets = []
            for i, doc in enumerate(matched_docs):
                d_id = f"dr-{id_}-{i+1}"
                
                # Try to extract specialty from parentheses
                spec = ""
                doc_name = doc
                if '(' in doc:
                    s_idx = doc.find('(')
                    e_idx = doc.find(')')
                    if s_idx != -1 and e_idx != -1:
                        spec = doc[s_idx+1:e_idx]
                        doc_name = doc[:s_idx].strip()
                
                if not spec:
                    if "Dental" in cat_name: spec = "Dentistry"
                    elif "Eye" in cat_name: spec = "Ophthalmology"
                    elif "Skin" in cat_name or "Dermatological" in cat_name: spec = "Dermatology"
                    else: spec = "General Medicine"

                # Translate specialty
                specialty_map = {
                    "Hepatobiliary Surgeon": "የጉበት እና የሃሞት ቀዶ ጥገና ስፔሻሊስት",
                    "Cardiologist": "የልብ ስፔሻሊስት",
                    "Nephrologist": "የኩላሊት ስፔሻሊስት",
                    "Neurologist": "የነርቭ ስፔሻሊስት",
                    "Oncologist": "የካንሰር ስፔሻሊስት",
                    "Internist": "የውስጥ ደዌ ስፔሻሊስት",
                    "Pediatrician": "የህፃናት ስፔሻሊስት",
                    "Assistant Professor": "ረዳት ፕሮፌሰር",
                    "Associate Professor": "ተባባሪ ፕሮፌሰር",
                    "Plastic Surgeon": "የፕላስቲክ ቀዶ ጥገና ስፔሻሊስት",
                    "Surgeon": "ቀዶ ጥገና ስፔሻሊስት",
                    "Resident": "ሬዚደንት",
                    "Specialist": "ስፔሻሊስት",
                    "Ophthalmologist": "የዓይን ስፔሻሊስት",
                    "Dentist": "የጥርስ ሃኪም",
                    "General": "ጠቅላላ ሃኪም",
                    "General Medicine": "ጠቅላላ ህክምና",
                    "Dentistry": "የጥርስ ህክምና",
                    "Ophthalmology": "የዓይን ህክምና",
                    "Dermatology": "የቆዳ ህክምና",
                    "Cataract": "የዓይን ሞራ ስፔሻሊስት",
                    "Consultant": "አማካሪ",
                    "Retina": "ሬቲና ስፔሻሊስት",
                    "Pediatric": "የህፃናት ስፔሻሊስት",
                    "Refractive": "የሪፍራክቲቭ ቀዶ ጥገና ስፔሻሊስት",
                    "Cornea": "የኮርኒያ ስፔሻሊስት",
                    "Maxillofacial": "የመንጋጋ እና የፊት ቀዶ ጥገና ስፔሻሊስት",
                    "Orthodontist": "የጥርስ ማስተካከያ ስፔሻሊስት",
                    "Dental Surgeon": "የጥርስ ቀዶ ጥገና ስፔሻሊስት",
                    "Implant Specialist": "የጥርስ ተከላ ስፔሻሊስት",
                    "Cosmetic": "የኮስሞቲክ ጥርስ ህክምና",
                    "Senior Specialist": "ከፍተኛ ስፔሻሊስት",
                    "Urologist": "የሽንት ቧንቧ ስፔሻሊስት",
                    "Gastroenterology": "የጨጓራ እና አንጀት ስፔሻሊስት",
                    "Respiratory": "የመተንፈሻ አካላት ስፔሻሊስት",
                    "ENT Specialist": "የጆሮ፣ አፍንጫ እና ጉሮሮ ስፔሻሊስት",
                    "Gastroenterologist": "የጨጓራ እና አንጀት ስፔሻሊስት",
                    "Endocrinologist": "የሆርሞን ስፔሻሊስት",
                    "Pathologist": "ፓቶሎጂስት",
                    "Senior Internist": "ከፍተኛ የውስጥ ደዌ ስፔሻሊስት",
                    "OB/GYN": "የማህፀን እና ፅንስ ስፔሻሊስት",
                    "Radiologist": "ራዲዮሎጂስት",
                    "Infectious Diseases": "የተላላፊ በሽታዎች ስፔሻሊስት",
                    "General Practitioner": "ጠቅላላ ሃኪም",
                    "Neurosurgeon": "የጭንቅላት እና የነርቭ ቀዶ ጥገና ስፔሻሊስት",
                    "Orthopedics": "የአጥንት ስፔሻሊስት",
                    "Orthopedic": "የአጥንት ስፔሻሊስት",
                }
                
                spec_am = specialty_map.get(spec, f"{spec}")
                doc_name_am = doc_name.replace("Dr.", "ዶ/ር").replace("Prof.", "ፕሮፌሰር")

                doc_snippets.append(f"""          {{ id: "{d_id}", name: "{doc_name}", nameAm: "{doc_name_am}", specialty: "{spec}", specialtyAm: "{spec_am}", nextAvailable: "Today" }}""")
            
            docs_str = ",\n".join(doc_snippets)
            
            if "Dental" in cat_name:
                departments = f"""      {{
        id: "dentistry",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
{docs_str}
        ],
      }}"""
            elif "Eye" in cat_name:
                 departments = f"""      {{
        id: "ophthalmology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
{docs_str}
        ],
      }}"""
            elif "Skin" in cat_name or "Dermatological" in cat_name:
                 departments = f"""      {{
        id: "dermatology",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
{docs_str}
        ],
      }}"""
            else:
                 departments = f"""      {{
        id: "general",
        name: "Clinical Intake & Triage",
        nameAm: "የክሊኒካል ቅበላ እና ትሪያጅ",
        icon: "fact_check",
        doctors: [
{docs_str}
        ],
      }}"""

            # Hospital Name Translation (comprehensive)
            hosp_name_am_map = {
                "Tikur Anbessa (Black Lion)": "ጥቁር አንበሳ ሆስፒታል",
                "St. Paul's Millennium Medical College": "ቅዱስ ጳውሎስ ሚሊኒየም ሆስፒታል",
                "Yekatit 12 Medical College": "የካቲት 12 ሜዲካል ኮሌጅ",
                "Menelik II Referral": "ዳግማዊ ምኒልክ ሪፈራል ሆስፒታል",
                "Zewditu Memorial": "ዘውዲቱ መታሰቢያ ሆስፒታል",
                "St. Peter's Specialized": "ቅዱስ ጴጥሮስ ስፔሻላይዝድ ሆስፒታል",
                "Tirunesh Beijing": "ጥሩነሽ ቤጂንግ ሆስፒታል",
                "Amanuel Mental Health": "አማኑኤል የአእምሮ ጤና ሆስፒታል",
                "Alert Hospital": "አለርት ሆስፒታል",
                "Ras Desta Damtew": "ራስ ደስታ ዳምጠው ሆስፒታል",
                "Minilik II Referral": "ዳግማዊ ምኒልክ ሪፈራል ሆስፒታል",
                "Ras Desta Damtew Memorial": "ራስ ደስታ ዳምጠው መታሰቢያ ሆስፒታል",
                "Tirunesh Beijing General": "ጥሩነሽ ቤጂንግ ጠቅላላ ሆስፒታል",
                "Kadisco General": "ካዲስኮ ጠቅላላ ሆስፒታል",
                "Girum General": "ግሩም ጠቅላላ ሆስፒታል",
                "Landmark General": "ላንድማርክ ጠቅላላ ሆስፒታል",
                "Addis Hiwot": "አዲስ ህይወት ሆስፒታል",
                "Hayat Hospital": "ሃያት ሆስፒታል",
                "Myungsung Christian (Korean)": "ምዩንግሱንግ ክርስቲያን (ኮሪያ) ሆስፒታል",
                "Bethzatha Hospital": "ቤተዛታ ሆስፒታል",
                "Amin General": "አሚን ጠቅላላ ሆስፒታል",
                "Atlas General": "አትላስ ጠቅላላ ሆስፒታል",
                "Hallelujah General": "ሃሌሉያ ጠቅላላ ሆስፒታል",
                "Nordic Medical Centre": "ኖርዲክ ሜዲካል ሴንተር",
                "Silk Road General": "ሲልክ ሮድ ጠቅላላ ሆስፒታል",
                "Bethzatha General": "ቤተዛታ ጠቅላላ ሆስፒታል",
                "ALERT Dental Unit": "አለርት የጥርስ ህክምና ክፍል",
                "St. Paul's Dental": "ቅዱስ ጳውሎስ የጥርስ ህክምና",
                "Tikur Anbessa Dental": "ጥቁር አንበሳ የጥርስ ህክምና",
                "Menelik II Dental": "ምኒልክ የጥርስ ህክምና",
                "Tirunesh Beijing Dental": "ጥሩነሽ ቤጂንግ የጥርስ ህክምና",
                "Smile Specialty": "ስማይል የጥርስ ህክምና",
                "Ye-Almaz Dental": "የአልማዝ የጥርስ ህክምና",
                "Legacy Dental": "ሌጋሲ የጥርስ ህክምና",
                "NovoCare Dental": "ኖቮኬር የጥርስ ህክምና",
                "Bethel Dental": "ቤቴል የጥርስ ህክምና",
                "Menelik II Eye": "ምኒልክ የዓይን ህክምና",
                "Tikur Anbessa Eye": "ጥቁር አንበሳ የዓይን ህክምና",
                "ALERT Hospital Eye": "አለርት የዓይን ህክምና",
                "St. Paul's Eye Dept": "ቅዱስ ጳውሎስ የዓይን ህክምና",
                "Ras Desta Eye Unit": "ራስ ደስታ የዓይን ህክምና",
                "WGGA Eye Center": "WGGA የዓይን ማእከል",
                "Addis Ababa Eye Clinic": "አዲስ አበባ የዓይን ክሊኒክ",
                "Berhanena Selam": "ብርሃንና ሰላም የዓይን ክሊኒክ",
                "Glassland Eye": "ግላስላንድ የዓይን ክሊኒክ",
                "Zemen Eye Clinic": "ዘመን የዓይን ክሊኒክ",
                "ALERT National Derma": "አለርት የቆዳ ህክምና",
                "St. Paul's Derma": "ቅዱስ ጳውሎስ የቆዳ ህክምና",
                "Tikur Anbessa Derma": "ጥቁር አንበሳ የቆዳ ህክምና",
                "Yekatit 12 Derma": "የካቲት 12 የቆዳ ህክምና",
                "Ras Desta Derma": "ራስ ደስታ የቆዳ ህክምና",
                "Dr. Ruth Leekassa": "ዶ/ር ሩት ሊካሳ የቆዳ ክሊኒክ",
                "Kadisco Derma Wing": "ካዲስኮ የቆዳ ህክምና",
                "Allure Laser Centre": "አሉር የሌዘር ማእከል",
                "Girum Hospital Derma": "ግሩም የቆዳ ህክምና",
                "Rank Specialized": "ራንክ የቆዳ ህክምና",
            }
            
            # Smart matching for hospital names (handle slight variations)
            name_am = name
            for key in hosp_name_am_map:
                if key.lower() in name.lower() or name.lower() in key.lower():
                    name_am = hosp_name_am_map[key]
                    break

            out += f"""  {{
    id: "{id_}",
    name: "{name}",
    nameAm: "{name_am}",
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
print("Done updating doctors.")
