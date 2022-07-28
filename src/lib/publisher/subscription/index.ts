import { Piano } from '../../piano';
import {
  PublisherSubscriptionGetParams,
  PublisherSubscriptionListParams,
  PublisherSubscriptionUpdateParams,
} from '../../interfaces/api-params';
import { UserSubscriptionList as IUserSubscriptionList } from '../../interfaces/user-subscription-list';
import { httpRequest } from '../../utils/http-request';
import {
  PublisherSubscriptionGetResponse,
  PublisherSubscriptionListResponse,
  PublisherSubscriptionUpdateResponse,
} from '../../interfaces/api-response';
import { UserSubscription as IUserSubscription } from '../../interfaces/user-subscription';

const ENDPOINT_PATH_PREFIX = '/publisher/subscription';

export class Subscription {
  constructor(private readonly piano: Piano) {}

  /**
   * Gets a subscription.
   *
   * @see https://docs.piano.io/api/?endpoint=get~2F~2Fpublisher~2Fsubscription~2Fget
   */
  public async get(
    params: PublisherSubscriptionGetParams
  ): Promise<IUserSubscription> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/get`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherSubscriptionGetResponse;

    const { subscription } = apiResponse;

    return subscription;
  }

  /**
   * Lists subscriptions.
   *
   * @see https://docs.piano.io/api?endpoint=get~2F~2Fpublisher~2Fsubscription~2Flist
   */
  public async list(
    params: PublisherSubscriptionListParams
  ): Promise<IUserSubscriptionList> {
    const apiResponse = (await httpRequest(
      'get',
      `${ENDPOINT_PATH_PREFIX}/list`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherSubscriptionListResponse;

    const { limit, offset, total, count, subscriptions } = apiResponse;

    return {
      limit,
      offset,
      total,
      count,
      subscriptions,
    };
  }

  /**
   * Updates a subscription.
   *
   * @see https://docs.piano.io/api/?endpoint=post~2F~2Fpublisher~2Fsubscription~2Fupdate
   */
  public async update(
    params: PublisherSubscriptionUpdateParams
  ): Promise<boolean> {
    const apiResponse = (await httpRequest(
      'post',
      `${ENDPOINT_PATH_PREFIX}/update`,
      this.piano.mergeParams(params),
      this.piano.environment
    )) as PublisherSubscriptionUpdateResponse;

    const { data } = apiResponse;

    return data;
  }
}
