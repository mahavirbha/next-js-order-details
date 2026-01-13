import { TEXT_STYLES } from "../styles/typography";

export default function DeliveryInfo({ delivery }) {
  return (
    <div className="bg-white p-4 md:p-6 pb-2">
        <h3 className={`${TEXT_STYLES.sectionTitle} mb-4`}>Delivering to</h3>
        
        <div className="mb-4">
            <div className={`${TEXT_STYLES.labelRegular} mb-1`}>{delivery.name}</div>
            <p className={TEXT_STYLES.bodyTight}>
                {delivery.address}
            </p>
        </div>

        <div className="text-sm">
            <span className={`${TEXT_STYLES.highlightSemiBold} text-orange-600`}>Expected delivery date : </span>
            <span className={`${TEXT_STYLES.highlightSemiBold} text-orange-600`}>{delivery.expectedDateRange}</span>
        </div>
        
        <div className="border-b border-gray-200 mt-6"></div>
    </div>
  );
}


