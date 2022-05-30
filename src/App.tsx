import React, { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { IFormValues } from "./interfaces/form.interface";
import { defaultFormValues } from "./constants/constants";
import { PolkadotService } from "./services/polkadotService";
import { LoadingBar } from "./components/LoadingBar";
import { IResultData } from "./interfaces/result.interface";
import { ResultTable } from "./components/ResultTable";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState<IFormValues>(defaultFormValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IResultData[]>([]);
  const [latestBlock, setLatestBlock] = useState<string>("0");
  const polkadotService = new PolkadotService();

  useEffect(() => {
    const initPolkadotService = async () => {
      await polkadotService.init(defaultFormValues.endpoint);
      const latestBlockNumber = await polkadotService.getLatestBlockNumber();
      setLatestBlock(latestBlockNumber);
    };

    if (polkadotService) {
      initPolkadotService();
    }
  }, []);

  const handleSubmit = async (values: IFormValues) => {
    setFormValues(values);
    setIsLoading(true);
    try {
      const scanResult = await polkadotService.scan(
        values.startBlock,
        values.endBlock,
        values.endpoint
      );
      setResult(scanResult);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h2>Polkadot Scanner</h2>
      <Form onSubmit={handleSubmit} latestBlock={latestBlock} />
      <div className="result-container">
        {isLoading && <LoadingBar />}
        <ResultTable result={result} />
      </div>
    </div>
  );
}

export default App;
