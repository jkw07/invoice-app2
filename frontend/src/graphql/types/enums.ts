export enum VatRateType {
  STANDARD = "STANDARD",
  EXEMPT = "EXEMPT",
  NOT_TAXED = "NOT_TAXED",
}

export enum Status {
  DRAFT = "DRAFT",
  PENDING = "PENDING",
  PAID = "PAID",
  OVERDUE = "OVERDUE",
  CANCELLED = "CANCELLED",
  PARTIALLY_PAID = "PARTIALLY_PAID",
}

export enum StatusTranslated {
  DRAFT = "szkic",
  PENDING = "wystawiona",
  PAID = "opłacona",
  OVERDUE = "po terminie",
  CANCELLED = "anulowana",
  PARTIALLY_PAID = "częściowo opłacona",
}
