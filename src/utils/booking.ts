/**
 * The Azuki Room — Booking & Restaurant Status Pure Logic Utilities
 */

export interface ReservationParams {
  name: string;
  email: string;
  phone: string;
  covers: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  experience?: 'dining' | 'sushi-club' | 'lounge-hire';
  notes?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export const OPENTABLE_RID = "541284";
export const OPENTABLE_URL = "https://www.opentable.co.uk/restaurant/profile/541284";
export const RESTAURANT_PHONE = "0207 078 0135";
export const RESTAURANT_PHONE_INTL = "+442070780135";
export const RESTAURANT_EMAIL = "info@theazukiroom.com";
export const RESTAURANT_ADDRESS = "Rolls Passage, off 36 Chancery Lane, London EC4A 1HL";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/p3UmPCVoQV4oh3VK9?g_st=ic";

/**
 * Builds direct OpenTable reservation link with parameters
 */
export function generateOpenTableUrl(params?: { date?: string; time?: string; covers?: number }): string {
  const baseUrl = OPENTABLE_URL;
  if (!params) return baseUrl;
  
  const queryParts: string[] = [];
  if (params.covers) {
    queryParts.push(`covers=${encodeURIComponent(params.covers)}`);
  }
  if (params.date && params.time) {
    queryParts.push(`dateTime=${encodeURIComponent(`${params.date}T${params.time}`)}`);
  } else if (params.date) {
    queryParts.push(`startDate=${encodeURIComponent(params.date)}`);
  }
  
  if (queryParts.length === 0) return baseUrl;
  return `${baseUrl}?${queryParts.join("&")}`;
}

/**
 * Calculates Saturday Sushi Club cost
 * Standard: £49 per person
 * With Sake / Drink Pairing: £75 per person
 */
export function calculateSushiClubTotal(guests: number, withPairing: boolean): number {
  if (guests <= 0) return 0;
  const pricePerPerson = withPairing ? 75 : 49;
  return guests * pricePerPerson;
}

/**
 * Checks if a specific day is valid for Saturday Sushi Club
 * (Only available on Saturdays)
 */
export function isSushiClubDay(dateString: string): boolean {
  if (!dateString) return false;
  const date = new Date(dateString);
  // 6 is Saturday in JS Date
  return date.getDay() === 6;
}

/**
 * Restaurant Opening Hours:
 * Mon-Fri: 12:00-15:00, 17:00-22:30
 * Sat: 12:00-22:30 (Saturday Sushi Club starts from 12:00)
 * Sun: Closed
 */
export function getOpeningStatus(date: Date = new Date()): {
  isOpen: boolean;
  statusText: string;
  nextServiceText: string;
} {
  const day = date.getDay(); // 0 is Sun, 1 is Mon... 6 is Sat
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTimeVal = hours * 60 + minutes;

  if (day === 0) {
    return {
      isOpen: false,
      statusText: "Closed Today (Sunday)",
      nextServiceText: "Reopening Monday at 12:00 PM",
    };
  }

  if (day >= 1 && day <= 5) {
    // Lunch: 12:00 (720 min) - 15:00 (900 min)
    // Dinner: 17:00 (1020 min) - 22:30 (1350 min)
    const isLunch = currentTimeVal >= 720 && currentTimeVal < 900;
    const isDinner = currentTimeVal >= 1020 && currentTimeVal < 1350;

    if (isLunch) {
      return {
        isOpen: true,
        statusText: "Open Now · Lunch Service",
        nextServiceText: "Lunch ends at 3:00 PM · Dinner starts 5:00 PM",
      };
    }
    if (isDinner) {
      return {
        isOpen: true,
        statusText: "Open Now · Dinner Service",
        nextServiceText: "Open until 10:30 PM",
      };
    }
    if (currentTimeVal < 720) {
      return {
        isOpen: false,
        statusText: "Opening at 12:00 PM",
        nextServiceText: "Lunch service 12:00 PM – 3:00 PM",
      };
    }
    if (currentTimeVal >= 900 && currentTimeVal < 1020) {
      return {
        isOpen: false,
        statusText: "Kitchen Prep (Midday Break)",
        nextServiceText: "Dinner service commences at 5:00 PM",
      };
    }
    return {
      isOpen: false,
      statusText: "Closed for the Night",
      nextServiceText: "Reopening tomorrow at 12:00 PM",
    };
  }

  // Saturday: 12:00 - 22:30 all day
  if (day === 6) {
    const isSatOpen = currentTimeVal >= 720 && currentTimeVal < 1350;
    if (isSatOpen) {
      return {
        isOpen: true,
        statusText: "Open Now · Saturday Service",
        nextServiceText: "Open continuously until 10:30 PM",
      };
    }
    if (currentTimeVal < 720) {
      return {
        isOpen: false,
        statusText: "Opening at 12:00 PM",
        nextServiceText: "Saturday Sushi Club starts at 12:00 PM",
      };
    }
    return {
      isOpen: false,
      statusText: "Closed for the Night",
      nextServiceText: "Reopening Monday at 12:00 PM",
    };
  }

  return {
    isOpen: false,
    statusText: "Closed",
    nextServiceText: "Visit during regular dining hours",
  };
}

/**
 * Validates booking reservation inputs
 */
export function validateReservation(data: Partial<ReservationParams>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please provide your full name";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Please provide a valid email address";
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = "Please provide a contact telephone number";
  }

  if (!data.covers || data.covers < 1) {
    errors.covers = "Party size must be at least 1 guest";
  } else if (data.covers > 20) {
    errors.covers = "For parties over 20, please submit a Private Dining enquiry";
  }

  if (!data.date) {
    errors.date = "Please select a date";
  } else {
    const selectedDate = new Date(data.date);
    if (selectedDate.getDay() === 0) {
      errors.date = "The restaurant is closed on Sundays";
    }
  }

  if (!data.time) {
    errors.time = "Please choose a dining time slot";
  }

  if (data.experience === 'sushi-club' && data.date) {
    const selectedDate = new Date(data.date);
    if (selectedDate.getDay() !== 6) {
      errors.date = "Saturday Sushi Club is exclusively hosted on Saturdays";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
