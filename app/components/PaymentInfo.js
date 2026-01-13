import { TEXT_STYLES } from "../styles/typography";

export default function PaymentInfo({ payment }) {
    return (
      <div className="bg-white p-4 md:px-6 pb-2 pt-0">
          <h3 className={`${TEXT_STYLES.sectionTitle} mb-4`}>Paid via {payment.method}</h3>
          
          <div className="space-y-3">
              <div className="flex gap-2">
                  <span className={TEXT_STYLES.bodyMedium}>From :</span>
                  <span className={TEXT_STYLES.bodyMedium}>{payment.source}</span>
              </div>
              <div className="flex gap-2">
                  <span className={TEXT_STYLES.bodyRelaxed}>Txn ID :</span>
                  <span className={TEXT_STYLES.bodyRelaxed}>{payment.txnId}</span>
              </div>
              <div className="flex gap-2">
                  <span className={TEXT_STYLES.bodyRelaxed}>Date :</span>
                  <span className={TEXT_STYLES.bodyRelaxed}>{payment.date}</span>
              </div>
          </div>
      </div>
    );
  }


