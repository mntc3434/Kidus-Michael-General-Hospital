/* Meridian Ethiopia — ERPNext Healthcare Desk Logic */

// ==========================================
// 1. MOCK DATASETS (Localized for Ethiopia)
// ==========================================

const MOCK_PATIENTS = [
  {
    id: "ETH-2026-0841",
    name: "Bethlehem Alemu",
    age: 34,
    gender: "Female",
    phone: "+251 911 234 567",
    address: "Bole Sub-city, Woreda 03, Addis Ababa",
    payerType: "cbhi",
    payerId: "CBHI-ADD-88412",
    primaryDoc: "Dr. Abel Mengistu",
    bloodGroup: "A+",
    allergies: ["Penicillin", "Sulfa Drugs"],
    chronicConditions: ["Hypertension (Stage 1)"],
    timeline: [
      {
        date: "28 Aug 2026",
        title: "Routine Hypertension Follow-up",
        doctor: "Dr. Abel Mengistu",
        note: "BP measured at 135/85 mmHg. Patient reporting good adherence to low-sodium diet. Prescribed refill of Hydrochlorothiazide."
      },
      {
        date: "14 May 2026",
        title: "Laboratory Diagnostic Panel",
        doctor: "Dr. Bethlehem Desta",
        note: "Lipid panel and HbA1c normal. Renal function markers within safe ranges."
      },
      {
        date: "10 Feb 2026",
        title: "Initial Clinical Assessment",
        doctor: "Dr. Abel Mengistu",
        note: "Mild headache & fatigue. Diagnosed with primary hypertension. Initiated lifestyle counseling."
      }
    ]
  },
  {
    id: "ETH-2026-0912",
    name: "Dawit Tesfaye",
    age: 48,
    gender: "Male",
    phone: "+251 922 456 789",
    address: "Yeka Sub-city, Woreda 07, Addis Ababa",
    payerType: "nyala",
    payerId: "NYL-INS-90812",
    primaryDoc: "Dr. Bethlehem Desta",
    bloodGroup: "O+",
    allergies: ["Aspirin"],
    chronicConditions: ["Type 2 Diabetes Mellitus"],
    timeline: [
      {
        date: "01 Sep 2026",
        title: "Endocrinology Review & HbA1c Check",
        doctor: "Dr. Bethlehem Desta",
        note: "Fasting blood sugar 128 mg/dL. Adjusted Metformin dosage to 850mg twice daily with meals."
      },
      {
        date: "12 Jun 2026",
        title: "Ophthalmology Screening",
        doctor: "Dr. Yared Tadesse",
        note: "Diabetic retinopathy screening clean. No vascular abnormal alterations noted."
      }
    ]
  },
  {
    id: "ETH-2026-1045",
    name: "Selamawit Girma",
    age: 29,
    gender: "Female",
    phone: "+251 930 112 233",
    address: "Kirkos Sub-city, Woreda 02, Addis Ababa",
    payerType: "cbhi",
    payerId: "CBHI-ADD-55619",
    primaryDoc: "Dr. Abel Mengistu",
    bloodGroup: "B+",
    allergies: ["No Known Drug Allergies (NKDA)"],
    chronicConditions: ["Antenatal Care (Trimester 3)"],
    timeline: [
      {
        date: "20 Aug 2026",
        title: "Antenatal Care Visit (ANC-3)",
        doctor: "Dr. Abel Mengistu",
        note: "Fetal heart rate 144 bpm. Maternal vitals stable. Ultrasound confirms normal fetal growth."
      },
      {
        date: "18 Jun 2026",
        title: "Obstetric Ultrasound",
        doctor: "Dr. Bethlehem Desta",
        note: "Anatomy scan unremarkable. Single viable intrauterine pregnancy."
      }
    ]
  },
  {
    id: "ETH-2026-1120",
    name: "Yonas Bekele",
    age: 56,
    gender: "Male",
    phone: "+251 915 889 900",
    address: "Arada Sub-city, Woreda 05, Addis Ababa",
    payerType: "nyala",
    payerId: "NYL-INS-99421",
    primaryDoc: "Dr. Yared Tadesse",
    bloodGroup: "AB+",
    allergies: ["Codeine"],
    chronicConditions: ["Ischemic Heart Disease", "Hyperlipidemia"],
    timeline: [
      {
        date: "15 Aug 2026",
        title: "Cardiology ECG & Stress Test",
        doctor: "Dr. Yared Tadesse",
        note: "ECG shows sinus rhythm with non-specific ST changes. Continued on Atorvastatin and Beta-blocker therapy."
      }
    ]
  },
  {
    id: "ETH-2026-1204",
    name: "Tigist Wolde",
    age: 41,
    gender: "Female",
    phone: "+251 944 556 677",
    address: "Nifas Silk-Lafto, Woreda 09, Addis Ababa",
    payerType: "cbhi",
    payerId: "CBHI-ADD-77103",
    primaryDoc: "Dr. Bethlehem Desta",
    bloodGroup: "O-",
    allergies: ["Latex"],
    chronicConditions: ["Asthma"],
    timeline: [
      {
        date: "05 Jul 2026",
        title: "Pulmonology Consultation",
        doctor: "Dr. Bethlehem Desta",
        note: "Asthma well controlled with Salbutamol inhaler PRN. Spirometry within normal parameters."
      }
    ]
  },
  {
    id: "ETH-2026-1388",
    name: "Kaleb Haile",
    age: 22,
    gender: "Male",
    phone: "+251 912 334 455",
    address: "Gullele Sub-city, Woreda 01, Addis Ababa",
    payerType: "self",
    payerId: "Private Cash",
    primaryDoc: "Dr. Abel Mengistu",
    bloodGroup: "A-",
    allergies: ["No Known Drug Allergies (NKDA)"],
    chronicConditions: ["None"],
    timeline: [
      {
        date: "01 Sep 2026",
        title: "Acute Febrile Illness Consultation",
        doctor: "Dr. Abel Mengistu",
        note: "Patient presented with fever and chills. Lab ordered for Malaria RDT & CBC."
      }
    ]
  }
];

const MOCK_DRUGS = [
  {
    id: "DRG-AMX-500",
    name: "Amoxicillin Trihydrate",
    category: "Antibiotics",
    form: "500mg Capsule",
    batch: "BCH-2026-904",
    qty: 450,
    reorderLevel: 100,
    priceETB: 85.00,
    expiryDate: "2027-08-15",
    status: "ok"
  },
  {
    id: "DRG-PCT-500",
    name: "Paracetamol (Acetaminophen)",
    category: "Analgesics",
    form: "500mg Tablet",
    batch: "BCH-2026-412",
    qty: 1200,
    reorderLevel: 300,
    priceETB: 25.00,
    expiryDate: "2028-01-20",
    status: "ok"
  },
  {
    id: "DRG-MET-850",
    name: "Metformin Hydrochloride",
    category: "Chronic Care",
    form: "850mg Tablet",
    batch: "BCH-2025-780",
    qty: 85,
    reorderLevel: 150,
    priceETB: 140.00,
    expiryDate: "2026-10-10",
    status: "warning"
  },
  {
    id: "DRG-CIP-500",
    name: "Ciprofloxacin HCl",
    category: "Antibiotics",
    form: "500mg Tablet",
    batch: "BCH-2026-109",
    qty: 320,
    reorderLevel: 80,
    priceETB: 110.00,
    expiryDate: "2027-04-30",
    status: "ok"
  },
  {
    id: "DRG-OMP-020",
    name: "Omeprazole Gastro-resistant",
    category: "Gastroenterology",
    form: "20mg Capsule",
    batch: "BCH-2025-331",
    qty: 40,
    reorderLevel: 100,
    priceETB: 195.00,
    expiryDate: "2026-09-25",
    status: "warning"
  },
  {
    id: "DRG-ALU-080",
    name: "Artemether + Lumefantrine (Coartem)",
    category: "Antimalarial",
    form: "20/120mg Tablet",
    batch: "BCH-2026-662",
    qty: 600,
    reorderLevel: 200,
    priceETB: 230.00,
    expiryDate: "2027-11-12",
    status: "ok"
  },
  {
    id: "DRG-IBU-400",
    name: "Ibuprofen BP",
    category: "NSAID / Analgesic",
    form: "400mg Tablet",
    batch: "BCH-2024-009",
    qty: 15,
    reorderLevel: 100,
    priceETB: 45.00,
    expiryDate: "2026-04-10",
    status: "expired"
  },
  {
    id: "DRG-AZI-500",
    name: "Azithromycin Dihydrate",
    category: "Antibiotics",
    form: "500mg Tablet",
    batch: "BCH-2026-551",
    qty: 190,
    reorderLevel: 50,
    priceETB: 280.00,
    expiryDate: "2027-06-18",
    status: "ok"
  }
];

const MOCK_APPOINTMENTS = [
  {
    time: "08:30 AM",
    patientId: "ETH-2026-0841",
    patientName: "Bethlehem Alemu",
    doctor: "Dr. Abel Mengistu",
    dept: "Internal Medicine",
    type: "Hypertension Review",
    status: "Confirmed"
  },
  {
    time: "09:15 AM",
    patientId: "ETH-2026-0912",
    patientName: "Dawit Tesfaye",
    doctor: "Dr. Bethlehem Desta",
    dept: "Endocrinology",
    type: "Diabetes Follow-up",
    status: "In Progress"
  },
  {
    time: "10:00 AM",
    patientId: "ETH-2026-1045",
    patientName: "Selamawit Girma",
    doctor: "Dr. Abel Mengistu",
    dept: "Obstetrics (ANC)",
    type: "Antenatal Checkup (ANC-3)",
    status: "Pending"
  },
  {
    time: "11:30 AM",
    patientId: "ETH-2026-1120",
    patientName: "Yonas Bekele",
    doctor: "Dr. Yared Tadesse",
    dept: "Cardiology",
    type: "ECG & Consultation",
    status: "Confirmed"
  },
  {
    time: "02:00 PM",
    patientId: "ETH-2026-1204",
    patientName: "Tigist Wolde",
    doctor: "Dr. Bethlehem Desta",
    dept: "Pulmonology",
    type: "Routine Checkup",
    status: "Pending"
  },
  {
    time: "03:30 PM",
    patientId: "ETH-2026-1388",
    patientName: "Kaleb Haile",
    doctor: "Dr. Abel Mengistu",
    dept: "General Medicine",
    type: "Acute Fever / Lab Test",
    status: "Confirmed"
  }
];

const MOCK_LAB_ORDERS = [
  {
    id: "LAB-2026-501",
    patientId: "ETH-2026-1388",
    patientName: "Kaleb Haile",
    testName: "Malaria Rapid Diagnostic Test (RDT) & Blood Smear",
    doctor: "Dr. Abel Mengistu",
    result: "Plasmodium Falciparum Ring Forms Identified (2+)",
    status: "Completed"
  },
  {
    id: "LAB-2026-502",
    patientId: "ETH-2026-0912",
    patientName: "Dawit Tesfaye",
    testName: "HbA1c Glycated Hemoglobin Panel",
    doctor: "Dr. Bethlehem Desta",
    result: "HbA1c: 6.8% (Target: < 7.0%)",
    status: "Completed"
  },
  {
    id: "LAB-2026-503",
    patientId: "ETH-2026-0841",
    patientName: "Bethlehem Alemu",
    testName: "Serum Electrolytes & Renal Function (Cr/BUN)",
    doctor: "Dr. Abel Mengistu",
    result: "Pending Laboratory Processing",
    status: "Pending"
  },
  {
    id: "LAB-2026-504",
    patientId: "ETH-2026-1045",
    patientName: "Selamawit Girma",
    testName: "Complete Blood Count (CBC) & Hemoglobin",
    doctor: "Dr. Abel Mengistu",
    result: "Hb: 12.4 g/dL, Platelets normal",
    status: "Completed"
  }
];

const MOCK_PRESCRIPTIONS = [
  {
    rxId: "RX-2026-801",
    patientId: "ETH-2026-0841",
    patientName: "Bethlehem Alemu",
    drugName: "Amoxicillin Trihydrate 500mg",
    dosage: "1 Capsule TID for 7 Days",
    doctor: "Dr. Abel Mengistu",
    status: "Dispensed"
  },
  {
    rxId: "RX-2026-802",
    patientId: "ETH-2026-0912",
    patientName: "Dawit Tesfaye",
    drugName: "Metformin HCl 850mg",
    dosage: "1 Tablet BID with Meals",
    doctor: "Dr. Bethlehem Desta",
    status: "Sent to POS"
  },
  {
    rxId: "RX-2026-803",
    patientId: "ETH-2026-1388",
    patientName: "Kaleb Haile",
    drugName: "Artemether + Lumefantrine (Coartem)",
    dosage: "4 Tablets BD for 3 Days",
    doctor: "Dr. Abel Mengistu",
    status: "Sent to POS"
  }
];

const MOCK_BILLING_ITEMS = {
  "ETH-2026-0841": [
    { name: "Specialist Consultation Fee", category: "Consultation", dept: "Internal Medicine", amount: 450.00 },
    { name: "Complete Blood Count (CBC) + Lipid Panel", category: "Laboratory", dept: "Pathology Lab", amount: 620.00 },
    { name: "Amoxicillin 500mg + Paracetamol", category: "Pharmacy", dept: "Outpatient Pharmacy", amount: 110.00 }
  ],
  "ETH-2026-0912": [
    { name: "Endocrinology Consultation", category: "Consultation", dept: "Endocrinology", amount: 500.00 },
    { name: "Fasting Blood Glucose & HbA1c Test", category: "Laboratory", dept: "Pathology Lab", amount: 480.00 },
    { name: "Metformin 850mg (60 Tabs)", category: "Pharmacy", dept: "Outpatient Pharmacy", amount: 280.00 }
  ],
  "ETH-2026-1045": [
    { name: "Antenatal Consultation (ANC-3)", category: "Consultation", dept: "Obstetrics", amount: 350.00 },
    { name: "Obstetric Ultrasound Scan", category: "Imaging", dept: "Radiology", amount: 850.00 }
  ],
  "ETH-2026-1120": [
    { name: "Cardiology Specialist Visit", category: "Consultation", dept: "Cardiology", amount: 600.00 },
    { name: "12-Lead Electrocardiogram (ECG)", category: "Diagnostics", dept: "Cardiology Lab", amount: 750.00 }
  ],
  "ETH-2026-1204": [
    { name: "Pulmonology Consultation", category: "Consultation", dept: "Pulmonology", amount: 450.00 },
    { name: "Salbutamol Inhaler 100mcg", category: "Pharmacy", dept: "Outpatient Pharmacy", amount: 320.00 }
  ],
  "ETH-2026-1388": [
    { name: "Emergency Outpatient Visit", category: "Consultation", dept: "General Medicine", amount: 300.00 },
    { name: "Malaria Rapid Diagnostic Test (RDT)", category: "Laboratory", dept: "Pathology Lab", amount: 250.00 }
  ]
};

// ==========================================
// 2. STATE MANAGEMENT & I18N DICTIONARY
// ==========================================

let appState = {
  currentLang: "en", // 'en' | 'am'
  activeScreen: "dashboard",
  selectedPatientId: "ETH-2026-0841",
  cart: [
    { drugId: "DRG-AMX-500", qty: 2 },
    { drugId: "DRG-PCT-500", qty: 1 }
  ],
  selectedPayer: "cbhi", // 'cbhi' | 'nyala' | 'self'
  appointmentFilter: "all",
  labFilter: "all"
};

const I18N_DICTIONARY = {
  en: {
    brandTitle: "Meridian Healthcare",
    brandSub: "ERPNext Desk • Ethiopia",
    navMain: "Workspaces",
    navReceptionGroup: "Front Desk & Reception",
    navClinicalGroup: "Clinical & Diagnostics",
    navPharmacyGroup: "Pharmacy & Stock",
    navAccountingGroup: "Accounting & Revenue",

    navDashboard: "Dashboard",
    navReception: "Patient Registration",
    navPatients: "Patient Records",
    navAppointments: "Appointments",
    navConsultation: "Doctor Consultation",
    navLaboratory: "Laboratory Diagnostics",
    navPrescriptions: "E-Prescriptions",
    navPos: "Pharmacy POS",
    navInventory: "Stock Inventory",
    navBilling: "Billing & Insurance",

    hospitalName: "Kidus Michael General Hospital",
    userRole: "Chief Medical Officer",
    
    // Stats
    statAppts: "Today's Appointments",
    statSales: "MTD Pharmacy Sales",
    statReorder: "Items Below Reorder",
    statOutstanding: "Outstanding Invoices",
    
    // Titles
    titleSchedule: "Today's Schedule",
    titleAlerts: "Stock & Expiry Alerts",
    titleReception: "Patient Registration & Walk-in Triage",
    titleAppointments: "Appointment Management & Clinical Agenda",
    titleConsultation: "Doctor Encounter & Clinical Examination",
    titleLaboratory: "Laboratory Diagnostics & Test Orders",
    titlePrescriptions: "Issued E-Prescriptions Log",
    titleDispensing: "Dispensing Cart",
    titleInventory: "Medicine & Stock Inventory",
    titleBilling: "Consolidated Patient Invoice",
    titlePayerSelect: "Select Payer / Insurance",

    // Buttons & Labels
    linkPatient: "Link Patient Record:",
    subtotal: "Subtotal:",
    vat: "EFDA Standard Sales Tax (0%):",
    total: "Total Amount:",
    btnCheckout: "Checkout & Dispense Medicine",
    lblSelectPatientInv: "Select Patient:",
    lblBreakdownTitle: "Services & Medical Supplies Breakdown",
    lblPatientResp: "Patient Responsibility (Copay):",
    lblPayerDesc: "Select primary insurance provider to adjust copay coverage:",
    btnProcessPayment: "Process ETB Payment & Issue Receipt"
  },
  am: {
    brandTitle: "ሜሪዲያን ጤና ኤስ.አር.ፒ.",
    brandSub: "ኢ.አር.ፒ. ዴስክ • ኢትዮጵያ",
    navMain: "የሥራ ቦታዎች",
    navReceptionGroup: "መቀበያ እና አስተናጋጅ",
    navClinicalGroup: "ሕክምና እና ምርመራ",
    navPharmacyGroup: "ፋርማሲ እና እቃ መዝገብ",
    navAccountingGroup: "ሒሳብ እና ደረሰኝ",

    navDashboard: "ዳሽቦርድ",
    navReception: "የታካሚ ምዝገባ",
    navPatients: "የታካሚዎች መዝገብ",
    navAppointments: "ቀጠሮዎች",
    navConsultation: "የሕክምና ምርመራ",
    navLaboratory: "ላቦራቶሪ እና ምርመራ",
    navPrescriptions: "የመድኃኒት ማዘዣ",
    navPos: "የፋርማሲ ሽያጭ (POS)",
    navInventory: "የመድኃኒት እቃ መዝገብ",
    navBilling: "ክፍያ እና ኢንሹራንስ",

    hospitalName: "ቅዱስ ሚካኤል ጠቅላላ ሆስፒታል",
    userRole: "ዋና ሕክምና መኮንን",
    
    // Stats
    statAppts: "የዛሬ ቀጠሮዎች",
    statSales: "የወሩ የፋርማሲ ሽያጭ",
    statReorder: "ማዘዣ ደረጃ በታች ያሉ እቃዎች",
    statOutstanding: "ያልተከፈሉ ደረሰኞች",

    // Titles
    titleSchedule: "የዛሬ ቀጠሮዎች ፕሮግራም",
    titleAlerts: "የእቃና የጊዜ ማለቂያ ማስጠንቀቂያ",
    titleReception: "የታካሚ ምዝገባ እና ቅበላ",
    titleAppointments: "የቀጠሮ አያያዝ እና የሕክምና መርሃ-ግብር",
    titleConsultation: "የሐኪም ምርመራ እና ግምገማ",
    titleLaboratory: "የላቦራቶሪ ምርመራዎች መዝገብ",
    titlePrescriptions: "የተጻፉ የመድኃኒት ማዘዣዎች",
    titleDispensing: "መድኃኒት መሸጫ ቅርጫት",
    titleInventory: "የመድኃኒቶች እና የሕክምና እቃዎች መዝገብ",
    titleBilling: "የሕክምና ደረሰኝ ማጠቃለያ",
    titlePayerSelect: "የክፍያ አማራጭ / ኢንሹራንስ ምረጥ",

    // Buttons & Labels
    linkPatient: "የታካሚ መዝገብ አያይዝ:",
    subtotal: "ድምር ውጤት:",
    vat: "የኢ.ም.ም.ቁ.ባ የሽያጭ ታክስ (0%):",
    total: "ጠቅላላ ክፍያ:",
    btnCheckout: "ክፍያ ፈጽም እና መድኃኒት ስጥ",
    lblSelectPatientInv: "ታካሚ ምረጥ:",
    lblBreakdownTitle: "የሕክምና አገልግሎቶች እና መድኃኒቶች ዝርዝር",
    lblPatientResp: "የታካሚው ቀጥታ ክፍያ (Copay):",
    lblPayerDesc: "የታካሚውን የኢንሹራንስ ሽፋን አይነት ይምረጡ:",
    btnProcessPayment: "ክፍያ ተቀበል እና ደረሰኝ ስጥ"
  }
};

// ==========================================
// 3. CORE HELPER FUNCTIONS
// ==========================================

function formatETB(amount) {
  return `ETB ${parseFloat(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getStatusPill(statusText) {
  const text = statusText.toLowerCase();
  if (text === 'ok' || text === 'confirmed' || text === 'completed' || text === 'dispensed') {
    return `<span class="status-pill status-ok"><span class="status-dot"></span> ${statusText.toUpperCase()}</span>`;
  } else if (text === 'warning' || text === 'pending' || text === 'in progress' || text === 'sent to pos') {
    return `<span class="status-pill status-warning"><span class="status-dot"></span> ${statusText.toUpperCase()}</span>`;
  } else if (text === 'expired' || text === 'critical' || text === 'blocked') {
    return `<span class="status-pill status-expired"><span class="status-dot"></span> ${statusText.toUpperCase()}</span>`;
  }
  return `<span class="status-pill status-info"><span class="status-dot"></span> ${statusText.toUpperCase()}</span>`;
}

function showModal(title, messageHtml) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerHTML = messageHtml;
  document.getElementById('modal-dialog').classList.add('show');
}

function closeModal() {
  document.getElementById('modal-dialog').classList.remove('show');
}

// ==========================================
// 4. RENDERING FUNCTIONS FOR ALL SCREENS
// ==========================================

function renderDashboard() {
  const scheduleBody = document.getElementById('dashboard-schedule-body');
  scheduleBody.innerHTML = MOCK_APPOINTMENTS.map(appt => `
    <tr>
      <td class="mono" style="font-weight:600;">${appt.time}</td>
      <td><strong>${appt.patientName}</strong><br><span class="mono" style="font-size:0.7rem; color:var(--text-muted);">${appt.patientId}</span></td>
      <td>${appt.doctor}</td>
      <td>${appt.type}</td>
      <td>${getStatusPill(appt.status)}</td>
    </tr>
  `).join('');

  const alertsBody = document.getElementById('dashboard-alerts-body');
  const alertDrugs = MOCK_DRUGS.filter(d => d.status === 'warning' || d.status === 'expired' || d.qty <= d.reorderLevel);
  
  alertsBody.innerHTML = alertDrugs.map(drug => `
    <tr>
      <td><strong>${drug.name}</strong><br><span style="font-size:0.72rem; color:var(--text-muted);">${drug.form}</span></td>
      <td class="mono" style="font-size:0.75rem;">${drug.batch}</td>
      <td class="mono" style="font-weight:600;">${drug.qty}</td>
      <td>${getStatusPill(drug.status)}</td>
    </tr>
  `).join('');
}

function renderReception() {
  const recentBody = document.getElementById('reception-recent-body');
  recentBody.innerHTML = MOCK_PATIENTS.slice(-5).reverse().map(p => `
    <tr>
      <td><strong>${p.name}</strong><br><span style="font-size:0.7rem; color:var(--text-muted);">${p.phone}</span></td>
      <td class="mono" style="font-size:0.75rem;">${p.id}</td>
      <td><span class="status-pill status-info">${p.payerType.toUpperCase()}</span></td>
    </tr>
  `).join('');
}

function renderPatients(filterQuery = "") {
  const container = document.getElementById('patients-list-container');
  const query = filterQuery.toLowerCase();
  
  const filtered = MOCK_PATIENTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.id.toLowerCase().includes(query) ||
    p.phone.includes(query)
  );

  container.innerHTML = filtered.map(p => `
    <div class="patient-card ${p.id === appState.selectedPatientId ? 'active' : ''}" data-id="${p.id}">
      <div class="patient-card-header">
        <span class="patient-name-title">${p.name}</span>
        <span class="patient-id-code">${p.id}</span>
      </div>
      <div class="patient-meta-sub">
        <span>${p.age} yrs • ${p.gender}</span>
        <span>${p.phone}</span>
      </div>
    </div>
  `).join('');

  const cards = container.querySelectorAll('.patient-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      appState.selectedPatientId = card.getAttribute('data-id');
      renderPatients(filterQuery);
      renderPatientDetail(appState.selectedPatientId);
    });
  });
}

function renderPatientDetail(patientId) {
  const patient = MOCK_PATIENTS.find(p => p.id === patientId) || MOCK_PATIENTS[0];
  const container = document.getElementById('patient-detail-container');

  const payerLabel = patient.payerType === 'cbhi' ? 'CBHI Scheme' : patient.payerType === 'nyala' ? 'Nyala Insurance' : 'Private Direct';

  container.innerHTML = `
    <div class="patient-detail-header">
      <div>
        <h2 class="patient-main-name">${patient.name}</h2>
        <div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">
          Patient ID: <span class="mono" style="font-weight:600; color:var(--text-main);">${patient.id}</span> • Registered Record
        </div>
        <div class="patient-badge-tags">
          <span class="status-pill status-ok"><span class="status-dot"></span> ACTIVE RECORD</span>
          <span class="status-pill status-info"><span class="status-dot"></span> ${payerLabel}</span>
        </div>
      </div>
      <button class="btn btn-secondary" onclick="switchScreen('consultation')">Start Consultation</button>
    </div>

    <div class="demographics-grid">
      <div>
        <div class="demo-field-label">Age & Gender</div>
        <div class="demo-field-val">${patient.age} Years / ${patient.gender}</div>
      </div>
      <div>
        <div class="demo-field-label">Phone Number</div>
        <div class="demo-field-val mono">${patient.phone}</div>
      </div>
      <div>
        <div class="demo-field-label">Blood Group</div>
        <div class="demo-field-val mono">${patient.bloodGroup}</div>
      </div>
      <div>
        <div class="demo-field-label">Payer / Insurance ID</div>
        <div class="demo-field-val mono">${patient.payerId}</div>
      </div>
      <div style="grid-column: span 2;">
        <div class="demo-field-label">Primary Address</div>
        <div class="demo-field-val">${patient.address}</div>
      </div>
      <div style="grid-column: span 2;">
        <div class="demo-field-label">Primary Attending Physician</div>
        <div class="demo-field-val">${patient.primaryDoc}</div>
      </div>
    </div>

    <div style="padding: 14px 18px; border-bottom: 1px solid var(--border); background:#F9FAFB;">
      <div class="demo-field-label">Known Allergies & Sensitivities</div>
      <div class="allergy-chips">
        ${patient.allergies.map(alg => `<span class="allergy-chip">${alg}</span>`).join('')}
      </div>
    </div>

    <div class="timeline-section">
      <h3 class="timeline-title">Clinical Encounters & Medical Timeline</h3>
      <div class="vertical-timeline">
        ${patient.timeline.map(item => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${item.date} • ${item.doctor}</div>
            <div class="timeline-heading">${item.title}</div>
            <div class="timeline-note">${item.note}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAppointments() {
  const container = document.getElementById('appointments-table-body');
  const filter = appState.appointmentFilter;

  const filtered = MOCK_APPOINTMENTS.filter(a => {
    if (filter === 'all') return true;
    return a.status === filter;
  });

  container.innerHTML = filtered.map(a => `
    <tr>
      <td class="mono" style="font-weight:700;">${a.time}</td>
      <td class="mono" style="font-size:0.75rem;">${a.patientId}</td>
      <td><strong>${a.patientName}</strong></td>
      <td>${a.doctor}<br><span style="font-size:0.72rem; color:var(--text-muted);">${a.dept}</span></td>
      <td>${a.type}</td>
      <td>${getStatusPill(a.status)}</td>
      <td>
        <button class="btn btn-secondary" style="padding:3px 8px; font-size:0.72rem;" onclick="openPatientRecord('${a.patientId}')">View Record</button>
      </td>
    </tr>
  `).join('');
}

function openPatientRecord(patientId) {
  appState.selectedPatientId = patientId;
  switchScreen('patients');
}

function renderConsultation() {
  const select = document.getElementById('consult-patient-select');
  select.innerHTML = MOCK_PATIENTS.map(p => `
    <option value="${p.id}" ${p.id === appState.selectedPatientId ? 'selected' : ''}>
      ${p.name} (${p.id}) — ${p.age}y / ${p.gender}
    </option>
  `).join('');

  select.onchange = (e) => {
    appState.selectedPatientId = e.target.value;
  };
}

function renderLaboratory() {
  const container = document.getElementById('laboratory-table-body');
  const filter = appState.labFilter;

  const filtered = MOCK_LAB_ORDERS.filter(l => {
    if (filter === 'all') return true;
    return l.status === filter;
  });

  container.innerHTML = filtered.map(lab => `
    <tr>
      <td class="mono" style="font-weight:600;">${lab.id}</td>
      <td><strong>${lab.patientName}</strong><br><span class="mono" style="font-size:0.7rem; color:var(--text-muted);">${lab.patientId}</span></td>
      <td><strong>${lab.testName}</strong></td>
      <td>${lab.doctor}</td>
      <td><span style="font-size:0.78rem;">${lab.result}</span></td>
      <td>${getStatusPill(lab.status)}</td>
      <td>
        ${lab.status === 'Pending' ? `
          <button class="btn btn-primary" style="padding:3px 8px; font-size:0.72rem;" onclick="completeLabOrder('${lab.id}')">Enter Result</button>
        ` : `<span style="font-size:0.7rem; color:var(--text-muted);">Verified</span>`}
      </td>
    </tr>
  `).join('');
}

function completeLabOrder(labId) {
  const order = MOCK_LAB_ORDERS.find(l => l.id === labId);
  if (order) {
    order.status = "Completed";
    order.result = "Normal Reference Interval (EFDA Verified)";
    renderLaboratory();
    showModal("Lab Result Verified", `Laboratory result for <strong>${order.testName}</strong> has been logged into <strong>${order.patientName}</strong>'s file.`);
  }
}

function renderPrescriptions() {
  const tableBody = document.getElementById('prescriptions-table-body');
  tableBody.innerHTML = MOCK_PRESCRIPTIONS.map(rx => `
    <tr>
      <td class="mono" style="font-weight:600;">${rx.rxId}</td>
      <td><strong>${rx.patientName}</strong><br><span class="mono" style="font-size:0.7rem; color:var(--text-muted);">${rx.patientId}</span></td>
      <td><strong>${rx.drugName}</strong><br><span style="font-size:0.72rem; color:var(--text-muted);">${rx.dosage}</span></td>
      <td>${rx.doctor}</td>
      <td>${getStatusPill(rx.status)}</td>
    </tr>
  `).join('');

  const patientSelect = document.getElementById('rx-patient-select');
  patientSelect.innerHTML = MOCK_PATIENTS.map(p => `
    <option value="${p.id}" ${p.id === appState.selectedPatientId ? 'selected' : ''}>
      ${p.name} (${p.id})
    </option>
  `).join('');

  const drugSelect = document.getElementById('rx-drug-select');
  drugSelect.innerHTML = MOCK_DRUGS.filter(d => d.status !== 'expired').map(d => `
    <option value="${d.id}">${d.name} (${d.form}) — ${formatETB(d.priceETB)}</option>
  `).join('');
}

function renderPOS(searchQuery = "") {
  const container = document.getElementById('drug-catalog-container');
  const query = searchQuery.toLowerCase();

  const filtered = MOCK_DRUGS.filter(d => 
    d.name.toLowerCase().includes(query) ||
    d.category.toLowerCase().includes(query) ||
    d.batch.toLowerCase().includes(query)
  );

  container.innerHTML = filtered.map(drug => {
    const isExpired = drug.status === 'expired';
    return `
      <div class="drug-card ${isExpired ? 'disabled' : ''}">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div class="drug-name">${drug.name}</div>
            ${getStatusPill(drug.status)}
          </div>
          <div class="drug-form">${drug.form} • ${drug.category}</div>
          <div class="drug-code-row">
            <span class="mono" style="font-size:0.72rem; color:var(--text-muted);">Batch: ${drug.batch}</span>
            <span class="mono" style="font-size:0.72rem; color:var(--text-muted);">Stock: ${drug.qty}</span>
          </div>
        </div>
        <div>
          <div class="drug-price-tag">${formatETB(drug.priceETB)}</div>
          <button class="btn ${isExpired ? 'btn-disabled' : 'btn-primary'}" 
                  style="width:100%;" 
                  ${isExpired ? 'disabled' : ''} 
                  onclick="addToCart('${drug.id}')">
            ${isExpired ? 'Blocked (Expired)' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  const patientSelect = document.getElementById('cart-patient-select');
  if (patientSelect) {
    patientSelect.innerHTML = MOCK_PATIENTS.map(p => `
      <option value="${p.id}" ${p.id === appState.selectedPatientId ? 'selected' : ''}>
        ${p.name} (${p.id})
      </option>
    `).join('');
  }

  renderCart();
}

function addToCart(drugId) {
  const existing = appState.cart.find(c => c.drugId === drugId);
  if (existing) {
    existing.qty += 1;
  } else {
    appState.cart.push({ drugId: drugId, qty: 1 });
  }
  renderCart();
}

function updateCartQty(drugId, delta) {
  const item = appState.cart.find(c => c.drugId === drugId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      appState.cart = appState.cart.filter(c => c.drugId !== drugId);
    }
  }
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  let subtotal = 0;

  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px 10px; color:var(--text-muted);">
        <p style="font-size:0.85rem; font-weight:600;">Cart is currently empty.</p>
        <p style="font-size:0.75rem;">Select medicines from catalog to dispense.</p>
      </div>
    `;
  } else {
    container.innerHTML = appState.cart.map(c => {
      const drug = MOCK_DRUGS.find(d => d.id === c.drugId);
      if (!drug) return '';
      const lineTotal = drug.priceETB * c.qty;
      subtotal += lineTotal;

      return `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <div class="cart-item-name">${drug.name}</div>
            <div class="cart-item-price">${formatETB(drug.priceETB)} x ${c.qty} = ${formatETB(lineTotal)}</div>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateCartQty('${c.drugId}', -1)">-</button>
            <span class="qty-val">${c.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${c.drugId}', 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('cart-subtotal-val').innerText = formatETB(subtotal);
  document.getElementById('cart-vat-val').innerText = formatETB(0.00);
  document.getElementById('cart-total-val').innerText = formatETB(subtotal);
}

function renderInventory(searchQuery = "") {
  const container = document.getElementById('inventory-table-body');
  const query = searchQuery.toLowerCase();

  const filtered = MOCK_DRUGS.filter(d => 
    d.name.toLowerCase().includes(query) ||
    d.category.toLowerCase().includes(query) ||
    d.batch.toLowerCase().includes(query)
  );

  document.getElementById('lbl-inventory-count').innerText = `Showing ${filtered.length} monitored items`;

  container.innerHTML = filtered.map(drug => {
    const isBelowReorder = drug.qty <= drug.reorderLevel;
    return `
      <tr class="${isBelowReorder ? 'row-flagged' : ''}">
        <td><strong>${drug.name}</strong><br><span style="font-size:0.72rem; color:var(--text-muted);">${drug.form}</span></td>
        <td>${drug.category}</td>
        <td class="mono" style="font-weight:600;">${drug.batch}</td>
        <td class="mono" style="font-weight:700; ${isBelowReorder ? 'color:var(--amber);' : ''}">${drug.qty}</td>
        <td class="mono" style="color:var(--text-muted);">${drug.reorderLevel}</td>
        <td class="mono" style="font-size:0.75rem;">${drug.expiryDate}</td>
        <td>${getStatusPill(drug.status)}</td>
        <td><span class="efda-badge">EFDA-${drug.id}</span></td>
      </tr>
    `;
  }).join('');
}

function renderBilling() {
  const patientSelect = document.getElementById('billing-patient-select');
  if (patientSelect) {
    patientSelect.innerHTML = MOCK_PATIENTS.map(p => `
      <option value="${p.id}" ${p.id === appState.selectedPatientId ? 'selected' : ''}>
        ${p.name} (${p.id})
      </option>
    `).join('');

    patientSelect.onchange = (e) => {
      appState.selectedPatientId = e.target.value;
      const patient = MOCK_PATIENTS.find(p => p.id === appState.selectedPatientId);
      if (patient) {
        appState.selectedPayer = patient.payerType;
        updatePayerSelectionUI();
      }
      renderBilling();
    };
  }

  const patientId = appState.selectedPatientId;
  const items = MOCK_BILLING_ITEMS[patientId] || MOCK_BILLING_ITEMS["ETH-2026-0841"];

  const itemsBody = document.getElementById('billing-items-body');
  let grossSubtotal = 0;

  itemsBody.innerHTML = items.map(item => {
    grossSubtotal += item.amount;
    return `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td>${item.category}</td>
        <td>${item.dept}</td>
        <td class="mono" style="text-align:right; font-weight:600;">${formatETB(item.amount)}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('bill-gross-subtotal').innerText = formatETB(grossSubtotal);

  let coveragePct = 0;
  let payerName = "Out-of-Pocket (Self)";

  if (appState.selectedPayer === 'cbhi') {
    coveragePct = 0.90;
    payerName = "CBHI Coverage (90%)";
  } else if (appState.selectedPayer === 'nyala') {
    coveragePct = 0.80;
    payerName = "Nyala Ins. Coverage (80%)";
  } else {
    coveragePct = 0.00;
    payerName = "Out-of-Pocket (0%)";
  }

  const coverageAmount = grossSubtotal * coveragePct;
  const patientCopay = grossSubtotal - coverageAmount;

  document.getElementById('bill-payer-coverage-label').innerText = `Insurance Coverage (${payerName}):`;
  document.getElementById('bill-payer-coverage-val').innerText = `- ${formatETB(coverageAmount)}`;
  document.getElementById('bill-patient-copay-val').innerText = formatETB(patientCopay);
}

function updatePayerSelectionUI() {
  const cards = document.querySelectorAll('.payer-option-card');
  cards.forEach(card => {
    if (card.getAttribute('data-payer') === appState.selectedPayer) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

// ==========================================
// 5. SCREEN SWITCHING & NAVIGATION LOGIC
// ==========================================

function switchScreen(screenId) {
  appState.activeScreen = screenId;

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-screen') === screenId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const screens = document.querySelectorAll('.view-screen');
  screens.forEach(screen => {
    if (screen.id === `screen-${screenId}`) {
      screen.classList.add('active');
    } else {
      screen.classList.remove('active');
    }
  });

  if (screenId === 'dashboard') renderDashboard();
  if (screenId === 'reception') renderReception();
  if (screenId === 'patients') {
    renderPatients();
    renderPatientDetail(appState.selectedPatientId);
  }
  if (screenId === 'appointments') renderAppointments();
  if (screenId === 'consultation') renderConsultation();
  if (screenId === 'laboratory') renderLaboratory();
  if (screenId === 'prescriptions') renderPrescriptions();
  if (screenId === 'pos') renderPOS();
  if (screenId === 'inventory') renderInventory();
  if (screenId === 'billing') {
    updatePayerSelectionUI();
    renderBilling();
  }

  document.getElementById('sidebar').classList.remove('mobile-open');
}

// ==========================================
// 6. LANGUAGE TOGGLE (EN / አማ I18N SYSTEM)
// ==========================================

function setLanguage(lang) {
  appState.currentLang = lang;
  const dict = I18N_DICTIONARY[lang];

  if (lang === 'am') {
    document.getElementById('lang-am').classList.add('active');
    document.getElementById('lang-en').classList.remove('active');
  } else {
    document.getElementById('lang-en').classList.add('active');
    document.getElementById('lang-am').classList.remove('active');
  }

  document.getElementById('brand-title').innerText = dict.brandTitle;
  document.getElementById('brand-sub').innerText = dict.brandSub;
  document.getElementById('nav-group-main').innerText = dict.navMain;
  document.getElementById('nav-group-reception').innerText = dict.navReceptionGroup;
  document.getElementById('nav-group-clinical').innerText = dict.navClinicalGroup;
  document.getElementById('nav-group-pharmacy').innerText = dict.navPharmacyGroup;
  document.getElementById('nav-group-accounting').innerText = dict.navAccountingGroup;
  document.getElementById('lbl-hospital-name').innerText = dict.hospitalName;
  document.getElementById('lbl-user-role').innerText = dict.userRole;

  document.querySelector('#nav-dashboard .nav-text').innerText = dict.navDashboard;
  document.querySelector('#nav-reception .nav-text').innerText = dict.navReception;
  document.querySelector('#nav-patients .nav-text').innerText = dict.navPatients;
  document.querySelector('#nav-appointments .nav-text').innerText = dict.navAppointments;
  document.querySelector('#nav-consultation .nav-text').innerText = dict.navConsultation;
  document.querySelector('#nav-laboratory .nav-text').innerText = dict.navLaboratory;
  document.querySelector('#nav-prescriptions .nav-text').innerText = dict.navPrescriptions;
  document.querySelector('#nav-pos .nav-text').innerText = dict.navPos;
  document.querySelector('#nav-inventory .nav-text').innerText = dict.navInventory;
  document.querySelector('#nav-billing .nav-text').innerText = dict.navBilling;

  document.getElementById('lbl-stat-appts').innerText = dict.statAppts;
  document.getElementById('lbl-stat-sales').innerText = dict.statSales;
  document.getElementById('lbl-stat-reorder').innerText = dict.statReorder;
  document.getElementById('lbl-stat-outstanding').innerText = dict.statOutstanding;

  document.getElementById('lbl-title-todays-schedule').innerText = dict.titleSchedule;
  document.getElementById('lbl-title-stock-alerts').innerText = dict.titleAlerts;
  document.getElementById('lbl-title-reception').innerText = dict.titleReception;
  document.getElementById('lbl-title-appointments').innerText = dict.titleAppointments;
  document.getElementById('lbl-title-consultation').innerText = dict.titleConsultation;
  document.getElementById('lbl-title-laboratory').innerText = dict.titleLaboratory;
  document.getElementById('lbl-title-prescriptions').innerText = dict.titlePrescriptions;
  document.getElementById('lbl-title-dispensing').innerText = dict.titleDispensing;
  document.getElementById('lbl-title-inventory').innerText = dict.titleInventory;
  document.getElementById('lbl-title-billing').innerText = dict.titleBilling;
  document.getElementById('lbl-title-payer-select').innerText = dict.titlePayerSelect;

  document.getElementById('lbl-link-patient').innerText = dict.linkPatient;
  document.getElementById('lbl-subtotal').innerText = dict.subtotal;
  document.getElementById('lbl-vat').innerText = dict.vat;
  document.getElementById('lbl-total').innerText = dict.total;
  document.getElementById('btn-checkout-pos').innerText = dict.btnCheckout;
  document.getElementById('lbl-select-patient-invoice').innerText = dict.lblSelectPatientInv;
  document.getElementById('lbl-breakdown-title').innerText = dict.lblBreakdownTitle;
  document.getElementById('lbl-patient-resp').innerText = dict.lblPatientResp;
  document.getElementById('lbl-payer-desc').innerText = dict.lblPayerDesc;
  document.getElementById('btn-process-payment').innerText = dict.btnProcessPayment;
}

// ==========================================
// 7. INITIALIZATION & EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const screenId = item.getAttribute('data-screen');
      switchScreen(screenId);
    });
  });

  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mobile-open');
  });

  document.getElementById('lang-toggle-btn').addEventListener('click', () => {
    const nextLang = appState.currentLang === 'en' ? 'am' : 'en';
    setLanguage(nextLang);
  });

  document.getElementById('modal-close-btn').addEventListener('click', closeModal);

  // Reception Registration Form Handler
  const regForm = document.getElementById('reception-register-form');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newId = `ETH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const name = document.getElementById('reg-name').value;
      const age = parseInt(document.getElementById('reg-age').value);
      const gender = document.getElementById('reg-gender').value;
      const phone = document.getElementById('reg-phone').value;
      const address = document.getElementById('reg-address').value || "Addis Ababa, Ethiopia";
      const payerType = document.getElementById('reg-payer').value;
      const allergies = document.getElementById('reg-allergies').value ? [document.getElementById('reg-allergies').value] : ["NKDA"];

      const newPatient = {
        id: newId,
        name: name,
        age: age,
        gender: gender,
        phone: phone,
        address: address,
        payerType: payerType,
        payerId: `${payerType.toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`,
        primaryDoc: "Dr. Abel Mengistu",
        bloodGroup: "O+",
        allergies: allergies,
        chronicConditions: ["None"],
        timeline: [
          {
            date: "01 Sep 2026",
            title: "Initial Walk-in Triage & Registration",
            doctor: "Dr. Abel Mengistu",
            note: "Patient registered at intake desk. Initial vital signs stable."
          }
        ]
      };

      MOCK_PATIENTS.push(newPatient);
      MOCK_BILLING_ITEMS[newId] = [
        { name: "Outpatient Registration & File Opening Fee", category: "Registration", dept: "Front Desk", amount: 150.00 },
        { name: "General Practitioner Consultation", category: "Consultation", dept: "General Medicine", amount: 300.00 }
      ];

      appState.selectedPatientId = newId;
      regForm.reset();
      renderReception();

      showModal(
        "Patient Registered Successfully",
        `<p style="margin-bottom:8px;">New patient file created for <strong>${name}</strong>.</p>
         <p style="font-weight:700; font-family:var(--font-mono);">Assigned Patient ID: ${newId}</p>
         <p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px;">Record synchronized with Patient Care & Billing modules.</p>`
      );
    });
  }

  // Doctor Consultation Encounter Handler
  const btnSaveEncounter = document.getElementById('btn-save-encounter');
  if (btnSaveEncounter) {
    btnSaveEncounter.addEventListener('click', () => {
      const patient = MOCK_PATIENTS.find(p => p.id === appState.selectedPatientId);
      const complaints = document.getElementById('consult-complaints').value || "Routine clinical review and vitals check.";
      const diagnosis = document.getElementById('consult-diagnosis').value;
      const bp = document.getElementById('vital-bp').value;

      patient.timeline.unshift({
        date: "01 Sep 2026",
        title: `Clinical Encounter: ${diagnosis}`,
        doctor: "Dr. Abel Mengistu",
        note: `Vitals: BP ${bp} mmHg. Complaints: ${complaints}`
      });

      showModal(
        "Encounter Saved",
        `<p style="margin-bottom:8px;">Clinical notes & diagnosis (<strong>${diagnosis}</strong>) saved to <strong>${patient.name}</strong>'s medical timeline.</p>`
      );
    });
  }

  // Lab Filter Event Listeners
  const labFilters = document.querySelectorAll('[data-labfilter]');
  labFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      labFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.labFilter = btn.getAttribute('data-labfilter');
      renderLaboratory();
    });
  });

  // Issue E-Prescription Handler
  const rxForm = document.getElementById('issue-rx-form');
  if (rxForm) {
    rxForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const patientId = document.getElementById('rx-patient-select').value;
      const drugId = document.getElementById('rx-drug-select').value;
      const dosage = document.getElementById('rx-dosage').value;
      const qty = parseInt(document.getElementById('rx-qty').value);

      const patient = MOCK_PATIENTS.find(p => p.id === patientId);
      const drug = MOCK_DRUGS.find(d => d.id === drugId);

      const newRxId = `RX-2026-${Math.floor(800 + Math.random() * 100)}`;
      MOCK_PRESCRIPTIONS.unshift({
        rxId: newRxId,
        patientId: patientId,
        patientName: patient ? patient.name : "Patient",
        drugName: drug ? drug.name : "Medication",
        dosage: dosage,
        doctor: "Dr. Abel Mengistu",
        status: "Sent to POS"
      });

      // Automatically add to Pharmacy POS cart if matching selected patient
      if (appState.selectedPatientId === patientId) {
        addToCart(drugId);
      }

      rxForm.reset();
      renderPrescriptions();

      showModal(
        "E-Prescription Issued",
        `<p style="margin-bottom:8px;">Prescription <strong>${newRxId}</strong> for <strong>${drug.name}</strong> issued to <strong>${patient.name}</strong>.</p>
         <p style="font-size:0.75rem; color:var(--text-muted);">Queue updated in Pharmacy POS for instant dispensing.</p>`
      );
    });
  }

  const pSearch = document.getElementById('patient-search-input');
  if (pSearch) {
    pSearch.addEventListener('input', (e) => {
      renderPatients(e.target.value);
    });
  }

  const dSearch = document.getElementById('drug-search-input');
  if (dSearch) {
    dSearch.addEventListener('input', (e) => {
      renderPOS(e.target.value);
    });
  }

  const iSearch = document.getElementById('inventory-search-input');
  if (iSearch) {
    iSearch.addEventListener('input', (e) => {
      renderInventory(e.target.value);
    });
  }

  const cartPatientSelect = document.getElementById('cart-patient-select');
  if (cartPatientSelect) {
    cartPatientSelect.addEventListener('change', (e) => {
      appState.selectedPatientId = e.target.value;
    });
  }

  document.getElementById('btn-checkout-pos').addEventListener('click', () => {
    if (appState.cart.length === 0) {
      showModal("Cart Empty", "Please add at least one medication to the cart before checkout.");
      return;
    }
    const patient = MOCK_PATIENTS.find(p => p.id === appState.selectedPatientId);
    const patientName = patient ? patient.name : "Walk-in Patient";
    
    let receiptLines = appState.cart.map(c => {
      const d = MOCK_DRUGS.find(item => item.id === c.drugId);
      return `<li><strong>${d.name}</strong> x ${c.qty} — ${formatETB(d.priceETB * c.qty)}</li>`;
    }).join('');

    const totalVal = document.getElementById('cart-total-val').innerText;

    showModal(
      "Dispensing Completed", 
      `<p style="margin-bottom:10px;">Prescription issued and linked to patient <strong>${patientName}</strong> (${appState.selectedPatientId}):</p>
       <ul style="padding-left:20px; font-size:0.85rem; margin-bottom:12px;">${receiptLines}</ul>
       <p style="font-weight:700; color:var(--text-main);">Total Billed: ${totalVal}</p>
       <p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px;">EFDA Lot & Batch ledger updated automatically.</p>`
    );

    appState.cart = [];
    renderCart();
  });

  const filterBtns = document.querySelectorAll('.agenda-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.appointmentFilter = btn.getAttribute('data-filter');
      renderAppointments();
    });
  });

  const payerCards = document.querySelectorAll('.payer-option-card');
  payerCards.forEach(card => {
    card.addEventListener('click', () => {
      appState.selectedPayer = card.getAttribute('data-payer');
      updatePayerSelectionUI();
      renderBilling();
    });
  });

  document.getElementById('btn-process-payment').addEventListener('click', () => {
    const patient = MOCK_PATIENTS.find(p => p.id === appState.selectedPatientId);
    const copayVal = document.getElementById('bill-patient-copay-val').innerText;
    
    showModal(
      "Invoice Processed",
      `<p style="margin-bottom:10px;">Payment settled for <strong>${patient ? patient.name : 'Patient'}</strong> (${appState.selectedPatientId}).</p>
       <p style="font-weight:700; color:var(--text-main); font-size:1.05rem;">Patient Copay Received: ${copayVal}</p>
       <p style="font-size:0.75rem; color:var(--text-muted); margin-top:10px;">Insurance claim queued for ${appState.selectedPayer.toUpperCase()} audit log.</p>`
    );
  });

  switchScreen('dashboard');
});
