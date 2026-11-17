/* All invitation copy, English + Tamil. Tamil lines marked (review) were written by the design assistant and await a native reader. */
export const COPY = {
  en: {
    title: "Nikkah Invitation",
    host: "Savvas S.M. Musthaq Ali & Family",
    invite: "With the blessings of Allah and the prayers of our loved ones, we invite you to share in the joy of our Nikkah.",
    scratch: "Scratch to Reveal", forever: "Our forever begins", invited: "You're Invited",
    dateLong: "December 30, 2026", weekday: "Wednesday", time: "Around 11:30 AM", hijri: "Rajab 20, 1448 AH",
    save: "Save the date", maps: "View on maps", venue: "Venue", countdown: "Counting Down to Forever",
    vName: "Pulavar Habeebullah Old Mahal", vAddr: "Pallapatti", vTime: "Nikkah: Around 11:30 AM",
    presence: "Presence Expecting", credit: "Designed by Absze Technology", scrollDown: "Scroll down",
  },
  ta: {
    title: "நிக்காஹ் (எ) திருமண அழைப்பிதழ்",
    host: "சவ்வாஸ் S.M. முஸ்தாக் அலி & குடும்பத்தினர்",
    invite: "அல்லாஹ்வின் அருளாலும் எங்கள் அன்புக்குரியவர்களின் துஆவினாலும், எங்கள் நிக்காஹ்வின் மகிழ்ச்சியில் பங்கேற்க உங்களை அன்புடன் அழைக்கிறோம்.",
    scratch: "தேதியை அறிய தேய்க்கவும்", forever: "எங்கள் இனிய பயணம் தொடங்குகிறது", invited: "அன்புடன் அழைக்கிறோம்",
    dateLong: "டிசம்பர் 30, 2026", weekday: "புதன்கிழமை", time: "காலை 11:30 மணியளவில்", hijri: "ரஜப் 20, ஹிஜ்ரி 1448",
    save: "தேதியை சேமிக்கவும்", maps: "வரைபடத்தில் காண்க", venue: "இடம்", countdown: "நிக்காஹ்விற்கு இன்னும்",
    vName: "புலவர் ஹபீபுல்லாஹ் பழைய மஹால்", vAddr: "பள்ளப்பட்டி", vTime: "நிக்காஹ்: காலை 11:30 மணியளவில்",
    presence: "தங்கள் நல்வரவை நாடும்", credit: "வடிவமைப்பு: Absze Technology", scrollDown: "கீழே உருட்டவும்",
  },
};

export const NAMES = {
  en: { bride: "Silfiya Fathima", brideTitle: "Hifz.", brideParent: "Daughter of Savvas S.M. Musthaq Ali; granddaughter of Mohamed Ali and Abdul Rahman", groom: "Mohamed Suhail", groomTitle: "B.E. (Mech.)", groomParent: "Son of S.K.Y. Rafiq Ali @ Babu; grandson of S.K.Y. Mohamed Yakub and Haji K.S. Sowkath Ali" },
  ta: { bride: "சில்பியா பாத்திமா", brideTitle: "Hifz.", brideParent: "சவ்வாஸ் S.M. முஸ்தாக் அலி அவர்களின் மகள்; முகமது அலி மற்றும் அப்துல் ரஹ்மான் அவர்களின் பேத்தி", groom: "முகமது சுஹைல்", groomTitle: "B.E. (Mech.)", groomParent: "S.K.Y. ரஃபீக் அலி @ பாபு அவர்களின் மகன்; S.K.Y. முகமது யாகூப் மற்றும் K.S. சௌகத் அலி அவர்களின் பேரன்" },
};

export const PROGRAM = {
  en: { title: "Program Timeline", items: [["9 – 10 AM", "Morning Breakfast", "sun"], ["11:30 AM – 12 PM", "Nikkah", "heart"], ["1 – 3 PM", "Lunch", "clock"]] },
  ta: { title: "நிகழ்ச்சி நேர அட்டவணை", items: [["காலை 9 – 10", "காலை சிற்றுண்டி", "sun"], ["காலை 11:30 – 12", "நிக்காஹ்", "heart"], ["மதியம் 1 – 3", "மதிய விருந்து", "clock"]] },
};

export const UNITS = { en: ["Days", "Hours", "Minutes", "Seconds"], ta: ["நாட்கள்", "மணி", "நிமிடம்", "விநாடி"] };

export const PRESENCE = {
  en: ["Savvas S.M. Nowshath Ali & Brothers", "Pallapatti · Cell: 70928 78949", "99409 91230"],
  ta: ["சவ்வாஸ் S.M. நவ்ஷாத் அலி & பிரதர்ஸ்", "பள்ளப்பட்டி · செல்: 70928 78949", "99409 91230"],
};

export const EVENT_START = "2026-12-30T11:30:00+05:30";
const VENUE_Q = "Pulavar Habeebullah Old Mahal, Pallapatti";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(VENUE_Q);
export const MAPS_EMBED = "https://maps.google.com/maps?q=" + encodeURIComponent(VENUE_Q) + "&z=15&output=embed";

const CAL = {
  title: "Nikkah of S.M. Silfiya Fathima & S.R. Mohamed Suhail",
  start: "20261230T060000Z", end: "20261230T063000Z", // 11:30 AM – 12:00 PM IST
  location: "Pulavar Habeebullah Old Mahal, Pallapatti",
  details: "Nikkah around 11:30 AM. Breakfast and lunch at Pulavar Habeebullah Old Mahal, Pallapatti.",
};
const GOOGLE_CAL = "https://calendar.google.com/calendar/render?action=TEMPLATE"
  + "&text=" + encodeURIComponent(CAL.title) + "&dates=" + CAL.start + "/" + CAL.end
  + "&location=" + encodeURIComponent(CAL.location) + "&details=" + encodeURIComponent(CAL.details) + "&ctz=Asia/Kolkata";

/**
 * Open the guest's calendar with the Nikkah already filled in — they confirm with one tap.
 * (Browsers never allow a website to write to a calendar silently.)
 *  - iPhone / iPad: opens public/nikkah.ics → iOS shows its "Add to Calendar" sheet (with 1-day and 2-hour reminders).
 *  - Android: opens Google Calendar's prefilled "Save event" screen (the app, if installed).
 *  - Computers: downloads the .ics, which opens in Outlook / Apple Calendar / etc.
 * Must be called from a tap so the browser allows it.
 */
export function saveTheDate() {
  const ua = navigator.userAgent || "";
  const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const ics = new URL(import.meta.env.BASE_URL + "nikkah.ics", window.location.href).href;
  if (ios) { window.location.href = ics; return; }
  if (/Android/i.test(ua)) { const w = window.open(GOOGLE_CAL, "_blank"); if (w) w.opener = null; else window.location.href = GOOGLE_CAL; return; }
  const a = document.createElement("a"); a.href = ics; a.download = "silfiya-suhail-nikkah.ics";
  document.body.appendChild(a); a.click(); a.remove();
}
