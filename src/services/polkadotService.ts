import { ApiPromise, WsProvider } from "@polkadot/api";
import { IResultData, IEventData } from "../interfaces/result.interface";

export class PolkadotService {
  providerEndpoint: string;
  api: ApiPromise | null;
  latestBlockNumber: string;

  constructor() {
    this.providerEndpoint = "";
    this.latestBlockNumber = "0";
    this.api = null;
  }

  async init(endpoint: string) {
    const wsProvider = new WsProvider(endpoint);
    this.api = await ApiPromise.create({ provider: wsProvider });
    this.providerEndpoint = endpoint;
  }

  async scan(
    startBlock: string,
    endBlock: string,
    endpoint?: string
  ): Promise<IResultData[]> {
    // If new provider endpoint is given, should get new ApiPromise with new provider.
    if (endpoint && this.providerEndpoint !== endpoint) {
      await this.init(endpoint);
    }

    if (this.api === null) {
      throw new Error("PolkadotService: ApiPromise is not initiated!");
    }

    if (startBlock > endBlock) {
      throw new Error(
        "PolkadotService: Start Block is greater than End Block!"
      );
    }

    const results: IResultData[] = [];

    let blockNumber: number = parseInt(startBlock);
    const endBlockNumber: number = parseInt(endBlock);
    while (blockNumber <= endBlockNumber) {
      const blockInfo = await this.getBlockInfo(blockNumber);
      results.push(blockInfo);
      blockNumber += 1;
    }

    return results;
  }

  async getBlockInfo(blockNumber: number): Promise<IResultData> {
    if (this.api === null) {
      throw new Error("PolkadotService: ApiPromise is not initiated!");
    }

    const blockHash = await this.api.rpc.chain.getBlockHash(blockNumber);
    const signedBlock = await this.api.rpc.chain.getBlock(blockHash);
    const apiAt = await this.api.at(signedBlock.block.header.hash);
    const allEvents = await apiAt.query.system.events();
    const readableEvents: any = allEvents.toHuman();
    const events: IEventData[] = readableEvents.map((e: any) => e.event);

    return {
      blockNumber,
      blockHash: blockHash.toString(),
      events: events,
    };
  }

  async getLatestBlockNumber(): Promise<string> {
    if (this.api === null) {
      throw new Error("PolkadotService: ApiPromise is not initiated!");
    }

    const signedBlock = await this.api.rpc.chain.getBlock();
    return signedBlock.block.header.number.toString();
  }
}
