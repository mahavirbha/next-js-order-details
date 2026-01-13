/**
 * Text style definitions for consistent typography across the application.
 * 
 * Contains Tailwind CSS class strings for various text elements including:
 * - Section headings and titles
 * - Body text with different line heights and weights
 * - Labels and subtitles
 * - Highlighted and colored text
 * - Pricing table components
 * - Item list styling
 * - Amount and payment displays
 * - Savings banners
 * - Disclaimer text (#666666 is typically gray-500 in Tailwind)
 * - Status section elements
 * 
 * @constant {Object} TEXT_STYLES
 * @property {string} sectionTitle - Bold section headings (16px, black)
 * @property {string} bodyTight - Tight body text with leading-6 (14px, gray-500)
 * @property {string} bodyRelaxed - Relaxed body text (14px, gray-500)
 * @property {string} bodyMedium - Medium weight body text (14px, gray-900)
 * @property {string} labelRegular - Regular labels (16px, black)
 * @property {string} highlightSemiBold - Semi-bold highlighted text (14px)
 * @property {string} pricingContainer - Container for pricing elements with spacing
 * @property {string} pricingRow - Flex row for pricing items
 * @property {string} pricingDiscountText - Brand-colored discount text
 * @property {string} pricingValue - Medium weight pricing values (gray-900)
 * @property {string} itemName - Bold item names (14px, gray-900)
 * @property {string} itemDescription - Item descriptions (12px, gray-500)
 * @property {string} itemsMoreCount - Additional items count (14px, gray-500)
 * @property {string} amountPaidLabel - Bold payment label (16px, gray-900)
 * @property {string} amountPaidValue - Bold payment value (18px, gray-900)
 * @property {string} savingsBanner - Styled savings banner with brand blue background
 * @property {string} disclaimerText - Small disclaimer text (12px, gray-400)
 * @property {string} statusHeading - Large status heading (20px, semi-bold)
 * @property {string} statusSubheading - Status subheading (16px)
 * @property {string} statusBody - Status body text (14px)
 * @property {string} statusCardText - Status card text (14px, black)
 */
export const TEXT_STYLES = {
  // Section Headings (e.g. "Delivering to", "Order Summary")
  sectionTitle: "font-bold text-base leading-6 text-black",
  
  // Body Text
  bodyTight: "text-gray-600 text-sm font-normal leading-6 align-middle",
  bodyRelaxed: "text-gray-600 text-sm font-normal align-middle",
  bodyMedium: "text-gray-900 text-sm font-medium align-middle",
  
// Subtitles / Labels (e.g. "Home", "Items")
labelRegular: "font-normal text-black text-base leading-6 align-middle",

  // Highlighed / Colored Text (e.g. Expected Date)
  highlightSemiBold: "font-semibold text-sm leading-6 align-middle",

  // Pricing Table
  pricingContainer: "space-y-4 text-sm font-normal text-gray-700 mb-6 px-1 leading-6",
  pricingRow: "flex justify-between items-center",
  pricingDiscountText: "text-brand-primary font-normal",
  pricingValue: "font-medium text-gray-900 align-middle",

  // Items List
  itemName: "font-bold text-gray-900 text-sm",
  itemDescription: "font-bold text-gray-900 text-sm",
  itemsMoreCount: "text-gray-600 text-sm mb-6 font-normal",

  // Total Amount Section
  amountPaidLabel: "font-bold text-gray-900 text-base",
  amountPaidValue: "font-bold text-gray-900 text-lg",

  // Savings Banner
  savingsBanner: "bg-brand-blue text-white rounded-b-lg p-3 pt-4 pb-6 text-center text-sm font-medium relative z-10",

  // Disclaimer
  disclaimerText: "text-xs text-gray-600 leading-tight",

  // Status Section (White text on Green bg mostly)
  statusHeading: "font-semibold text-[20px] leading-none tracking-normal text-center align-middle",
  statusSubheading: "font-normal text-base leading-none tracking-normal text-center align-middle",
  statusBody: "font-normal text-sm leading-none tracking-normal text-center align-middle",
  statusCardText: "font-normal text-sm leading-none tracking-normal text-center align-middle text-[#000000] px-4",
};
