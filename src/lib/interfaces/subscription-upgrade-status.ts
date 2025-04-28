export enum SubscriptionUpgradeStatusFlag {
  PENDING = 0,
  FAILED = 1,
  FAILED_CLOSED = 2,
  SUSPENDED = 3,
}

export interface SubscriptionUpgradeStatus {
  from_term_name: string;
  to_term_name: string;
  from_term_id: string;
  to_term_id: string;
  change_date: string | null;
  create_date_from: string | null;
  create_date_to: string | null;
  billing_plan_to: string;
  billing_plan_from: string;
  status: SubscriptionUpgradeStatusFlag;
  error_message: string;
  prorate_amount: string;
  prorate_refund_amount: string;
}
