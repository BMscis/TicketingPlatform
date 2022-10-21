import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EVENTSMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EVENTS {
  readonly id: string;
  readonly AWSUSER?: string | null;
  readonly WALLETADDRESS?: string | null;
  readonly CONTRACTADDRESS?: string | null;
  readonly TOKENID?: string | null;
  readonly EVENTNAME?: string | null;
  readonly EVENTLOCATION?: string | null;
  readonly PRICE?: number | null;
  readonly TICKETNUMBER?: number | null;
  readonly TICKETSOLD?: number | null;
  readonly EVENTIMAGE?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EVENTS, EVENTSMetaData>);
  static copyOf(source: EVENTS, mutator: (draft: MutableModel<EVENTS, EVENTSMetaData>) => MutableModel<EVENTS, EVENTSMetaData> | void): EVENTS;
}