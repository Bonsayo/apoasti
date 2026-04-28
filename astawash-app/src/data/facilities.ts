export const dentalClinics = [
  "Expert Dental Clinic",
  "Royal Dental Clinic",
  "Sunshine Dental Clinic",
  "Ethio-Dental Clinic",
  "Modern Dental Clinic",
  "Smile Specialty Dental Center",
  "Dr. Emebet Special Higher Dental Clinic",
  "Ye-Almaz Dental Clinic",
  "Lucy Dental Clinic",
  "Enat Dental Clinic",
  "Blue Dental Clinic",
  "Family Dental Clinic",
  "Bright Dental Clinic",
  "Pearl Dental Clinic",
  "Unity Dental Clinic",
  "Dagmawi Dental Clinic",
  "Abyssinia Dental Clinic",
  "St. Mary Dental Clinic",
  "Universal Dental Clinic",
  "Tena Dental Clinic",
  "Zan Dental Clinic",
  "Abeba Dental Clinic",
  "Beta Dental Clinic",
  "My Specialty Dental Clinic",
  "NovoCare Dental & Orthodontic Clinic",
  "Grace Specialty Dental & Orthodontics",
  "Noble Specialty Dental Clinic",
  "Prime Specialty Dental Clinic",
  "Brass Dental Clinic",
  "Wudassie Dental Clinic"

].map((name, index) => ({
  id: `dental-${index}`,
  name,
  status: index < 5 ? "Accepting" : "Coming Soon",
  statusColor: index < 5 ? "text-[#10B981]" : "text-slate-500",
  statusBg: index < 5 ? "bg-green-50" : "bg-slate-100",
  statusDot: index < 5 ? "bg-[#10B981]" : "bg-slate-400",
  distance: `${(Math.random() * 10).toFixed(1)} km away`,
  location: "Addis Ababa",
  image: `https://lh3.googleusercontent.com/aida-public/${[
    "AB6AXuDvCl4kgxyCTVqfmB2ORLiFhtNDYTcXH6fCqwGUTRyG1EnN4RhJHQ_oOIvh3t4AGjuOkBqRl7CQkbgaGWLLNUF0jsjn-cOfVIasr4Cxxo-HMd4aBAZMup4g138ukxyzCLwM-wnKRxEydnCwvHL2X4SIFk1a8o2RWFHd1MlohrxOguMD7IjbW9Zx7od-h87tkE-KSmCi-0918WICwTdFNq7Y6ZVRy6r7Kb0YvjKi8deq3sA5UVp8GVJ7OVLKfS8eJlwDUfslwiHVCVg",
    "AB6AXuAfY2Q2XdhlNYZHcJkyZwFr7gv1mneO5CR9cHsWCnQqgCtr_0_jk3JcnQLNYteAwFy0VN3gkoXJQWOLELIkrMkjwsEfntK2ej-dH3LUSqf4XMv93mXZ1QB7gGKNvd8VkFBnk9exFWALrqGB7He1V7n5y_bBbC1u-WMo8Iv8VGnTF2bl2cgOmxhrYjfBsnduO3i7EzRfFjxu4s0MHHqLWpA7m3NzIP2xi2faeZkzszNfvmq9RHkJDCDJm1TejoVb6pQ4y8eCg5V8W90",
    "AB6AXuDwk5fUQdafp5tnql5TY5VF_5GKuCOwWWcpcdxYOYBZ1Y-T0qmjdshHNW5Y9BfhvjEC78jPJtA2MjUmwiSESbGGv24Trg1ZwmKnRg_0mbg7VuDgGoXTegRDU1Bj9hykrqGdrn8RmK3RvbxSiJ5602GjmZxF3ESyCEwKuyvUED4_xD6qfcmbIbP0o6VkolRt3BMqbRwz7DTj0uQYj0TpS6F3s2iGK-_9CZSLK16WYtGR-uL-3VsH37zUvDs0sbynlUQTEJDkiG6ZJ38",
    "AB6AXuDMKSQrGxg-ViEaP5RfG2O7sfpn0hUgCS5YU17cPe9GIq_hyNIAgaN8MBiXx3DtUMRI0PkjNLIe7csM-a3BhyWMS5-ZIcgSJGSEn6an6mvPMunGxYd-hqKvXDdHciPbSk7QogCcCZhBcKNtnZbgFAUlQZF_eHvcNh4uHQTDoaCIn4eLmGi_OaeXMqnhzhkA_76BBIQUuOLa9k5TQqGKw6kQfT8nMpKODZPT9Krwf-r-CGcgBh1R5wkoYpDcq0LPZLxdiIm5hNqcClc"
  ][index % 4]}`,
  isPrimary: index === 0,
  available: index < 5
}));

export const generalHospitals = [
  "Tikur Anbessa (Black Lion) Specialized Hospital",
  "St. Paul’s Hospital Millennium Medical College",
  "Menelik II Referral Hospital",
  "Zewditu Memorial Hospital",
  "Yekatit 12 Hospital Medical College",
  "Ras Desta Damtew Hospital",
  "St. Peter’s Specialized Hospital",
  "Tirunesh Beijing General Hospital",
  "Gandhi Memorial Hospital",
  "Amanuel Mental Specialized Hospital",
  "Armed Forces Comprehensive Specialized Hospital",
  "Bella Military Referral Hospital",
  "St. Gabriel General Hospital",
  "Addis Hiwot General Hospital",
  "Korean Hospital (Myungsung Christian Medical Center)",
  "Nordic Medical Centre",
  "Hayat General Hospital",
  "Hallelujah General Hospital",
  "Landmark General Hospital",
  "Kadisco General Hospital",
  "Girum General Hospital",
  "Bethzatha General Hospital",
  "Teklehaimanot General Hospital",
  "St. Yared General Hospital",
  "Amin General Hospital",
  "Lancet General Hospital",
  "Ethio-Tebib General Hospital",
  "Betsegah Mother and Child Health Hospital",
  "Balcha Hospital (Russian General Hospital)",
  "Yerer Hospital"
].map((name, index) => ({
  id: `general-${index}`,
  name,
  status: index < 5 ? "Accepting" : "Coming Soon",
  statusColor: index < 5 ? "text-[#10B981]" : "text-slate-500",
  statusBg: index < 5 ? "bg-green-50" : "bg-slate-100",
  statusDot: index < 5 ? "bg-[#10B981]" : "bg-slate-400",
  distance: `${(Math.random() * 10).toFixed(1)} km away`,
  location: "Addis Ababa",
  image: `https://lh3.googleusercontent.com/aida-public/${[
    "AB6AXuDvCl4kgxyCTVqfmB2ORLiFhtNDYTcXH6fCqwGUTRyG1EnN4RhJHQ_oOIvh3t4AGjuOkBqRl7CQkbgaGWLLNUF0jsjn-cOfVIasr4Cxxo-HMd4aBAZMup4g138ukxyzCLwM-wnKRxEydnCwvHL2X4SIFk1a8o2RWFHd1MlohrxOguMD7IjbW9Zx7od-h87tkE-KSmCi-0918WICwTdFNq7Y6ZVRy6r7Kb0YvjKi8deq3sA5UVp8GVJ7OVLKfS8eJlwDUfslwiHVCVg",
    "AB6AXuAfY2Q2XdhlNYZHcJkyZwFr7gv1mneO5CR9cHsWCnQqgCtr_0_jk3JcnQLNYteAwFy0VN3gkoXJQWOLELIkrMkjwsEfntK2ej-dH3LUSqf4XMv93mXZ1QB7gGKNvd8VkFBnk9exFWALrqGB7He1V7n5y_bBbC1u-WMo8Iv8VGnTF2bl2cgOmxhrYjfBsnduO3i7EzRfFjxu4s0MHHqLWpA7m3NzIP2xi2faeZkzszNfvmq9RHkJDCDJm1TejoVb6pQ4y8eCg5V8W90",
    "AB6AXuDwk5fUQdafp5tnql5TY5VF_5GKuCOwWWcpcdxYOYBZ1Y-T0qmjdshHNW5Y9BfhvjEC78jPJtA2MjUmwiSESbGGv24Trg1ZwmKnRg_0mbg7VuDgGoXTegRDU1Bj9hykrqGdrn8RmK3RvbxSiJ5602GjmZxF3ESyCEwKuyvUED4_xD6qfcmbIbP0o6VkolRt3BMqbRwz7DTj0uQYj0TpS6F3s2iGK-_9CZSLK16WYtGR-uL-3VsH37zUvDs0sbynlUQTEJDkiG6ZJ38",
    "AB6AXuDMKSQrGxg-ViEaP5RfG2O7sfpn0hUgCS5YU17cPe9GIq_hyNIAgaN8MBiXx3DtUMRI0PkjNLIe7csM-a3BhyWMS5-ZIcgSJGSEn6an6mvPMunGxYd-hqKvXDdHciPbSk7QogCcCZhBcKNtnZbgFAUlQZF_eHvcNh4uHQTDoaCIn4eLmGi_OaeXMqnhzhkA_76BBIQUuOLa9k5TQqGKw6kQfT8nMpKODZPT9Krwf-r-CGcgBh1R5wkoYpDcq0LPZLxdiIm5hNqcClc"
  ][index % 4]}`,
  isPrimary: index === 0,
  available: index < 5
}));

export const eyeClinics = [
  "WGGA Eye Centre (Wagga Special Eye Clinic)",
  "Biruh Vision Specialized Eye Care Center",
  "Roha Specialized Eye Clinic",
  "SamVision Specialized Eye Clinic",
  "Dalia Specialized Eye Clinic",
  "GO-Far Vision Specialized Eye Clinic",
  "Vision Cure Eye Specialty Clinic",
  "El Amin Ophthalmic Center"
].map((name, index) => ({
  id: `eye-${index}`,
  name,
  status: index < 5 ? "Accepting" : "Coming Soon",
  statusColor: index < 5 ? "text-[#10B981]" : "text-slate-500",
  statusBg: index < 5 ? "bg-green-50" : "bg-slate-100",
  statusDot: index < 5 ? "bg-[#10B981]" : "bg-slate-400",
  distance: `${(Math.random() * 10).toFixed(1)} km away`,
  location: "Addis Ababa",
  image: `https://lh3.googleusercontent.com/aida-public/${[
    "AB6AXuDvCl4kgxyCTVqfmB2ORLiFhtNDYTcXH6fCqwGUTRyG1EnN4RhJHQ_oOIvh3t4AGjuOkBqRl7CQkbgaGWLLNUF0jsjn-cOfVIasr4Cxxo-HMd4aBAZMup4g138ukxyzCLwM-wnKRxEydnCwvHL2X4SIFk1a8o2RWFHd1MlohrxOguMD7IjbW9Zx7od-h87tkE-KSmCi-0918WICwTdFNq7Y6ZVRy6r7Kb0YvjKi8deq3sA5UVp8GVJ7OVLKfS8eJlwDUfslwiHVCVg",
    "AB6AXuAfY2Q2XdhlNYZHcJkyZwFr7gv1mneO5CR9cHsWCnQqgCtr_0_jk3JcnQLNYteAwFy0VN3gkoXJQWOLELIkrMkjwsEfntK2ej-dH3LUSqf4XMv93mXZ1QB7gGKNvd8VkFBnk9exFWALrqGB7He1V7n5y_bBbC1u-WMo8Iv8VGnTF2bl2cgOmxhrYjfBsnduO3i7EzRfFjxu4s0MHHqLWpA7m3NzIP2xi2faeZkzszNfvmq9RHkJDCDJm1TejoVb6pQ4y8eCg5V8W90",
    "AB6AXuDwk5fUQdafp5tnql5TY5VF_5GKuCOwWWcpcdxYOYBZ1Y-T0qmjdshHNW5Y9BfhvjEC78jPJtA2MjUmwiSESbGGv24Trg1ZwmKnRg_0mbg7VuDgGoXTegRDU1Bj9hykrqGdrn8RmK3RvbxSiJ5602GjmZxF3ESyCEwKuyvUED4_xD6qfcmbIbP0o6VkolRt3BMqbRwz7DTj0uQYj0TpS6F3s2iGK-_9CZSLK16WYtGR-uL-3VsH37zUvDs0sbynlUQTEJDkiG6ZJ38",
    "AB6AXuDMKSQrGxg-ViEaP5RfG2O7sfpn0hUgCS5YU17cPe9GIq_hyNIAgaN8MBiXx3DtUMRI0PkjNLIe7csM-a3BhyWMS5-ZIcgSJGSEn6an6mvPMunGxYd-hqKvXDdHciPbSk7QogCcCZhBcKNtnZbgFAUlQZF_eHvcNh4uHQTDoaCIn4eLmGi_OaeXMqnhzhkA_76BBIQUuOLa9k5TQqGKw6kQfT8nMpKODZPT9Krwf-r-CGcgBh1R5wkoYpDcq0LPZLxdiIm5hNqcClc"
  ][index % 4]}`,
  isPrimary: index === 0,
  available: index < 5
}));

export const skinClinics = [
  "Ethio-Skin Specialized Clinic",
  "Lideta Skin Clinic",
  "Bole Skin & Laser Center",
  "Atlas Skin Clinic",
  "Hana Dermatology Clinic",
  "Milo Dermatology & Aesthetics Center",
  "Amren Specialized Dermatology Clinic",
  "ALERT Center (Dermatology Wing)",
  "Zinnia Aesthetics & Anti-Aging Clinic",
  "Dr. Ruth Leekassa Dermatology Clinic",
  "Niat Special Dermatology & STD Clinic",
  "Derma-Luxe Skin & Laser Clinic",
  "Grace Skin & Laser Clinic",
  "Dr. Shimelis Dermatology Clinic",
  "Boston Day Spa (Medical Wing)"
].map((name, index) => ({
  id: `skin-${index}`,
  name,
  status: index < 5 ? "Accepting" : "Coming Soon",
  statusColor: index < 5 ? "text-[#10B981]" : "text-slate-500",
  statusBg: index < 5 ? "bg-green-50" : "bg-slate-100",
  statusDot: index < 5 ? "bg-[#10B981]" : "bg-slate-400",
  distance: `${(Math.random() * 10).toFixed(1)} km away`,
  location: "Addis Ababa",
  image: `https://lh3.googleusercontent.com/aida-public/${[
    "AB6AXuDvCl4kgxyCTVqfmB2ORLiFhtNDYTcXH6fCqwGUTRyG1EnN4RhJHQ_oOIvh3t4AGjuOkBqRl7CQkbgaGWLLNUF0jsjn-cOfVIasr4Cxxo-HMd4aBAZMup4g138ukxyzCLwM-wnKRxEydnCwvHL2X4SIFk1a8o2RWFHd1MlohrxOguMD7IjbW9Zx7od-h87tkE-KSmCi-0918WICwTdFNq7Y6ZVRy6r7Kb0YvjKi8deq3sA5UVp8GVJ7OVLKfS8eJlwDUfslwiHVCVg",
    "AB6AXuAfY2Q2XdhlNYZHcJkyZwFr7gv1mneO5CR9cHsWCnQqgCtr_0_jk3JcnQLNYteAwFy0VN3gkoXJQWOLELIkrMkjwsEfntK2ej-dH3LUSqf4XMv93mXZ1QB7gGKNvd8VkFBnk9exFWALrqGB7He1V7n5y_bBbC1u-WMo8Iv8VGnTF2bl2cgOmxhrYjfBsnduO3i7EzRfFjxu4s0MHHqLWpA7m3NzIP2xi2faeZkzszNfvmq9RHkJDCDJm1TejoVb6pQ4y8eCg5V8W90",
    "AB6AXuDwk5fUQdafp5tnql5TY5VF_5GKuCOwWWcpcdxYOYBZ1Y-T0qmjdshHNW5Y9BfhvjEC78jPJtA2MjUmwiSESbGGv24Trg1ZwmKnRg_0mbg7VuDgGoXTegRDU1Bj9hykrqGdrn8RmK3RvbxSiJ5602GjmZxF3ESyCEwKuyvUED4_xD6qfcmbIbP0o6VkolRt3BMqbRwz7DTj0uQYj0TpS6F3s2iGK-_9CZSLK16WYtGR-uL-3VsH37zUvDs0sbynlUQTEJDkiG6ZJ38",
    "AB6AXuDMKSQrGxg-ViEaP5RfG2O7sfpn0hUgCS5YU17cPe9GIq_hyNIAgaN8MBiXx3DtUMRI0PkjNLIe7csM-a3BhyWMS5-ZIcgSJGSEn6an6mvPMunGxYd-hqKvXDdHciPbSk7QogCcCZhBcKNtnZbgFAUlQZF_eHvcNh4uHQTDoaCIn4eLmGi_OaeXMqnhzhkA_76BBIQUuOLa9k5TQqGKw6kQfT8nMpKODZPT9Krwf-r-CGcgBh1R5wkoYpDcq0LPZLxdiIm5hNqcClc"
  ][index % 4]}`,
  isPrimary: index === 0,
  available: index < 5
}));

export const hospitals = generalHospitals;
